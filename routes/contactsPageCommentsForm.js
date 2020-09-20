
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
                           try{ await models.Comm.create({
                                    name: req.body.nameForComment,
                                    body: req.body.texarForComment
                                  });
                              sendComments(posts, isComment);

                           } catch(e) {
                             console.log(e)
                             }
                          }
            )();

    }else{
      isComment = 'Your post already exist in system. Sorry, you can not to add the same comment second time..';
      sendComments(posts, isComment);
   }   

  });
  });

function sendComments(arr, textMessage){
    
          models.Comm.find({}).lean().then(posts => {
              res.render('contacts', { 
                title: 'contacts',
                posts: arr,
                isComment:textMessage 
              });
            })
   
}

module.exports = router;
