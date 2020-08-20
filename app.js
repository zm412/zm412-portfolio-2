
require('dotenv').config();
const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const database = require('./database');
const CommPost = require('./models/comment');
const Address = require('./models/addresses');
const expressHbs = require("express-handlebars");
const hbs = require("hbs");

let app = express();
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(path.join(__dirname, 'public')))


app.use(bodyParser.urlencoded({extended: true}));

app.post('/about', (req, res) => {
  if(!req.body) return res.sendStatus(400);
  let addressIs;
  
  
  Address.find({email: req.body.email}, (err, doc) => {
    if(err) console.log(err);
    if(doc.length == 0){
      addressIs = 'Ваш адрес только что внесен в базу данных MongoDb для ежегодной новостной рассылки. Поздравляем!!!'; 
      Address.create({email: req.body.email, check: req.body.check, moreInfo: req.body.moreInfo}, (err, doc) => {});
    }else{
      addressIs = "Ваш электронный адрес (" + req.body.email + ") уже есть в списке на ежегодную рассылку! Подписка произведена " + doc[0].date; 
    }

          res.render('about-success', {
            title: 'about-success',
            data: req.body,
            addressIs: addressIs
          });
  })
});

app.get('/contacts', function (req, res){
  let isComment = '';

  CommPost.find({}).then(posts => {
    let name = req.url.slice(1);
      res.render(name, { 
        title: name,
        posts: posts,
        isComment: isComment
      });

  })
});


app.post('/contacts', (req, res) => {
  if(!req.body) return res.sendStatus(400);
          
                          async function getOrder(){
                           try{ await CommPost.create({
                                    name: req.body.nameForComment,
                                    body: req.body.texarForComment
                                  });

                          CommPost.find({}).then(posts => {
                              res.render('contacts', { 
                                title: 'contacts',
                                posts: posts,
                                isComment: isComment
                              });
                          })

                           } catch(e) {
                             console.log(e)
                           }
                          }

   let isComment;
  
  CommPost.find({name: req.body.nameForComment, body: req.body.texarForComment}, (err, doc) => {
    if(doc.length == 0){
      isComment = 'Thank you, your post added on system';
        getOrder();
    }else{
      isComment = 'Your post already exist in system. Sorry, you can not to add the same comment second time..';
      
          CommPost.find({}).then(posts => {
              res.render('contacts', { 
                title: 'contacts',
                posts: posts,
                isComment: isComment
              });
            })
    }   

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


app.get('/test', function (req, res){
  req.sendFile(__dirname + 'test.ejs')
});


app.get('/test/:id', function(req, res){
  req.render('test')
})

module.exports = app;
