
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const schemaUser = new Schema({
  login: {
    type: String,
    require: true,
  },
  password:{
    type: String,
    require: true
 } }, 
  { timestamps: true, });

schemaUser.set('toJSON', { virtuals: true });


module.exports = mongoose.model('User', schemaUser);
