
let fs = require('fs');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.post('/about', urlencodedParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  
  
  console.log(req.body);
  res.render('about-success', {
    title: 'about-success',
    data: req.body});
});

app.get(/\/*/, function (req, res){
 let pages = ['index', 'about', 'tasks', 'gallery'] ;
  let name = req.url.slice(1);
  name == '' ? name = 'index' : name = name;
    if(pages.includes(name)){
      res.render(name, {
        title: name
      });
    }else{
      res.render('404',{
        title: 'error'
      });
  }
});




app.listen(8888);



