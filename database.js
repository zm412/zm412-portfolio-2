
let config = require('./config');
let mongoose = require('mongoose');

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', config.IS_PRODUCTION);

    mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Db connection closed'))
    .on('open', () => resolve(mongoose.connections[0]));

    mongoose.connect(config.MONGO_URI, { 
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true 
            });
  });
}


