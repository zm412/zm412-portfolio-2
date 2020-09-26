
const express = require('express');
const models = require('../models');
const router = express.Router();

router.post('/comments', (req, res) => {

  if(!req.body) return res.sendStatus(400);
     let isComment;
  
  models.Comm.find({name: req.body.nameForComment, body: req.body.texarForComment}, (err, doc) => {
    if(doc.length == 0){
      isComment = 'Thank you, your post added on system';
        (async () => {
           try{ await models.Comm.create({ name: req.body.nameForComment, body: req.body.texarForComment });
              sendComments(isComment, res);
           } catch(e) {
             console.log(e)
             }
          }
            )();

    }else{
      isComment = 'Your post already exist in system. Sorry, you can not to add the same comment second time..';
      sendComments(isComment, res);
   }   

  });
  });

router.get('/comments', (req, res) =>{
    models.Comm.find({}).lean().then(posts => {
      console.log(posts)
        res.json({posts: posts});
      })

})

function sendComments(textMessage, res){
  console.log(textMessage)
          models.Comm.find({}).lean().then(posts => {
              res.json({ title: 'contacts', posts: posts, isComment:textMessage });
            })
}

module.exports = router;
