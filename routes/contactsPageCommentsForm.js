
const express = require('express');
const models = require('../models');
const router = express.Router();

router.post('/contacts', (req, res) => {

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

                          models.Comm.find({}).lean().then(posts => {
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
            )();

    }else{
      isComment = 'Your post already exist in system. Sorry, you can not to add the same comment second time..';
      
          models.Comm.find({}).lean().then(posts => {
              res.render('contacts', { 
                title: 'contacts',
                posts: posts,
                isComment: isComment
              });
            })
    }   

  });
  });



module.exports = router;
