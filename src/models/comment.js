
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  }
},{
  timestamps: true
})


module.exports = mongoose.model('Comment', commentSchema);
