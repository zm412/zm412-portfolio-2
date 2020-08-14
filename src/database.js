
let config = require('./config');
let mongoose = require('mongoose');

var db = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);

    mongoose.connection
    .on('error', error => reject(error))
    .on('close', () => console.log('Db connection closed'))
    .on('open', () => resolve(mongoose.connections[0]));

    mongoose.connect(config.MONGO_URI, { 
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true 
            });
  });
}


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

module.exports = {
  adressModel : Adress,
  db : db
}
