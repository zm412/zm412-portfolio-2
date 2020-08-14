const app = require('./app');
const database = require('./database');
const config = require('./config');
const db = database.db;


database.db().

  then(info => {
  console.log((`Connected to ${info.host}:${info.port}/${info.name}`))
  app.listen(config.PORT, function(){
        console.log("Сервер ожидает подключения..."+ config.PORT);
    });
  
}).catch( () => { 
  console.error('Unable to connect to database');
  process.exit(1)
});


