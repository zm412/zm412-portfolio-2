const app = require('./app');
const database = require('./database');
const config = require('./config');
const hbs = require("hbs");
const expressHbs = require("express-handlebars");



app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");



database().

  then(info => {
  console.log((`Connected to ${info.host}:${info.port}/${info.name}`))
  app.listen(config.PORT, function(){
        console.log("Сервер ожидает подключения..."+ config.PORT);
    });
  
}).catch( () => { 
  console.error('Unable to connect to database');
  process.exit(1)
});


