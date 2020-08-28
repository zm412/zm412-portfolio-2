
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
    
        let fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');
        if(!passwordConfirm) fields.push('passwordConfirm');

    res.json({
      ok: false,
      error: 'Empty fields!!!',
      fields: fields 
    });
    
  } else if(!/^[a-zA-Z0-9]+$/.test(login)){
    
    res.json({
      ok: false,
      error: 'Please, use just english letters or numbers',
      fields: ['login']
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
   } else if(password.length < 5){
    res.json({
      ok: false,
      error: 'Length of password has not to be less, then 5 symbols',
      fields: ['password']
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


router.post('/login', (req, res) => {

  let login = req.body.login;
  let password = req.body.password;

  if(!login || !password){
    
        let fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');

    res.json({
      ok: false,
      error: 'Empty fields!!!',
      fields: fields 
    });
    
  }else{

    models.User.findOne({ login 
    }).then(user => {
        if(!user){
          res.json({
            ok: false,
            error: 'Login or password are wrong',
            fields:['login', 'password']
          });
        }else{
          bcrypt.compare(password, user.password, (err, result) => {
            if(result){
              res.json({
                ok: false,
                error: 'Login or password are wrong',
                fields: ['login', 'password']
              });
            }

          })
        }
    })
      .catch(err => {
        console.log(err);
        res.json({
          ok: false,
          error: "Error, try again later!"
        });
      });
  }

module.exports = router;

