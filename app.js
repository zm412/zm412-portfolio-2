
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
app.use('', routes.aboutPageForm);
app.use('', routes.contactsPageCommentsForm);

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

app.get(/\/|\/index/, function (req, res){
  let name = req.url.slice(1);
  name == '' ? name = 'index' : name = name;
      res.render(name, { title:'HOME',});
});

app.get('/favicon.ico', function (req, res){
  res.status(404)
  console.log('/favicon.ico')
});



app.get('/about', function (req, res){
  let name = req.url.slice(1);
      res.render(name, { title: name} );
});


app.get('/tasks', function (req, res){
  let name = req.url.slice(1);
      res.render(name, { title: name });
});


app.get('/gallery', function (req, res){
  let name = req.url.slice(1);
      res.render(name, { title: name });
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
