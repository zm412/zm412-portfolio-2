
const express = require('express');
const models = require('../models');
const bcrypt = require('bcrypt-nodejs');
const router = express.Router();



router.post('/register', (req, res) => {
  console.log(req.body)
 // res.json({
 //   ok:true
 // })
  let login = req.body.login;
  let password = req.body.password;
  let passwordConfirm = req.body.passwordConfirm;

  if(!login || !password || !passwordConfirm){
    res.json({
      ok: false,
      error: 'Empty fields!!!',
      fields: ['login', 'password', 'passwordConfirm']
    });

  } else if(login.length < 3 || login.length > 16){
    res.json({
      ok: false,
      error: 'Length of field login has to be longer then 3 and shorter then 16 symbols',
      fields: ['login']
    });
  } else if(password !== passwordConfirm){
    res.json({
      ok: false,
      error: 'Passwords are not equal!',
      fields: ['password', 'passwordConfirm']
    });
    
  }else{

    models.User.findOne({ 
      login

    }).then(user => {
        if(!user){
          bcrypt.hash(password, null, null, (err, hash) => {
          models.User.create({
            login,
            password: hash

          }).then(user => {
                res.json({
                ok: true
                });
          }).catch(err => {
              console.log(err);
              res.json({
                ok: false,
                error: "Error, try again later!"
              });
            });
          });

        }else{
          res.json({
            ok: false,
            error: 'Error, this login is already used',
            fields: ['login']
          });
        }
        });

  }
});


module.exports = router;

