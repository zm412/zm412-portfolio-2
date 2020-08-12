
require('dotenv').config();
let fs = require('fs');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let mongoose = require('mongoose');

async function start(){
  try{
    await mongoose.connect(process.env.MONGO_URI,{ 
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true 
            })

    app.listen(8888, function(){
        console.log("Сервер ожидает подключения...");
    });

  } catch (e) {
    console.log(e);
  }
}


start();

let Schema = mongoose.Schema;
const aboutSchema = new Schema({
  email: {
    type: String,
    //match: /^.+@.+\..+$/igm,
    require: true
  },
  check:{
    type: String,
    default: 'off'
  } ,
  moreInfo: {
    type: String,
    default: 'off'
  },
  date: {
    type: Date,
    default: Date.now 
  }
}, { versionKey: false });

const Adress = mongoose.model('Adress', aboutSchema);

app.set('view engine', 'ejs');

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

app.get(/\/*/, function (req, res){
 let pages = ['index', 'about', 'tasks', 'gallery'] ;
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







