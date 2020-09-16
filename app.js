
const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');
const database = require('./database');
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const models = require('./models');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

//POSTS (api and pages)
app.use('/api/auth', routes.auth);
app.use('/api/page_about', routes.getLetters);
app.use('/api/contacts', routes.contactsPageCommentsForm);

//
//
//GETS
app.get('/contacts', function (req, res){
  let isComment = '';

  models.Comm.find({}).lean().then(posts => {
    let name = req.url.slice(1);
      res.render(name, { 
        title: name,
        posts: posts,
        isComment: isComment
      });
  });
});


app.get(/\/*/, function (req, res){
 let pages = ['index', 'about', 'tasks', 'gallery', 'contacts'] ;
  let name = req.url.slice(1);
  name == '' ? name = 'index' : name = name;
    if(pages.includes(name)){
      res.render(name, {
        title: name
      });
    }else{
      res.render('404',{
        title: 'error'
      });
  }
});

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = '404';
  next(err);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render('404', {
    message:error.message,
    error: !config.IS_PRUDUCTION ? error : {},
    title: 'Error...'
  })
});


module.exports = app;
