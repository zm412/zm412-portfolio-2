
require('dotenv').config();
let fs = require('fs');
let express = require('express');
let bodyParser = require('body-parser');
let config = require('./config');
let database = require('./database');

let db = database.db;
let Adress = database.adressModel;
let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/public', express.static('public'));

app.post('/about', urlencodedParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  let adressIs;
  
  
  Adress.find({email: req.body.email}, (err, doc) => {
    if(err) console.log(err);
    if(doc.length == 0){
      adressIs = 'Ваш адрес только что внесен в базу данных MongoDb для ежегодной новостной рассылки. Поздравляем!!!'; 
      Adress.create({email: req.body.email, check: req.body.check, moreInfo: req.body.moreInfo}, (err, doc) => {});
    }else{
      adressIs = "Ваш электронный адрес (" + req.body.email + ") уже есть в списке на ежегодную рассылку! Подписка произведена " + doc[0].date; 
    }

          res.render('about-success', {
            title: 'about-success',
            data: req.body,
            adressIs: adressIs
          });
  })
});
app.get(/\/|\/index/, function (req, res){
  let name = req.url.slice(1);
  name == '' ? name = 'index' : name = name;
      res.render(name, { title:'HOME' });
});


app.get('/about', function (req, res){
  let name = req.url.slice(1);
      res.render(name, { title: name });
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
  req.sendFile(__dirname + 'test.html')
});




app.get('/test/:id', function(req, res){
  console.log(req.params);
  req.render('test')
})

module.exports = app;
