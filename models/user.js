
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const schema = new Schema({
  login: {
    type: String,
    require: true,
  },
  password:{
    type: String,
    require: true
 } }, 
  { timestamps: true, });

schema.set('toJSON', { virtuals: true });


module.exports = mongoose.model('User', schema);
