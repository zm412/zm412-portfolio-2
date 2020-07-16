
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get(/\/*/, function (req, res){
  let name = req.url.slice(1);
    res.render(name);
});




app.listen(8888);



