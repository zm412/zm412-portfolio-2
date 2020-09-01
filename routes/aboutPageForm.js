const express = require('express');
const models = require('../models');
const router = express.Router();

router.post('/about', (req, res) => {
  if(!req.body) return res.sendStatus(400);
  let addressIs;
  
  
  models.Address.find({email: req.body.email}, (err, doc) => {
    console.log(doc)
    if(err) console.log(err);
    if(doc.length == 0){
      addressIs = 'Ваш адрес только что внесен в базу данных MongoDb для ежегодной новостной рассылки. Поздравляем!!!'; 
      models.Address.create({email: req.body.email, check: req.body.check, moreInfo: req.body.moreInfo}, (err, doc) => {});
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





module.exports = router;
