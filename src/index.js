
let fs = require('fs');
let express = require('express');
let app = express();

app.get(/\/*/, (req, res) => {
  console.log(getPage(req.url));
  console.log(req.url);
  getPage(req.url);
  res.sendFile(__dirname + '/temp.html');
})
app.listen(8888);

    
function getPage(name){
    if(name == '/'){
        name = '/index';
    }
    fs.readFile('pages' + name + '.html', 'utf8', (err, content) => {
        if(!err){
        fs.readFile('layouts/default.html', 'utf8', (err, layout) => {

            if(err) throw err;
            layout = layout.replace(/\{\{get content\}\}/g, content);
            let title = content.match(/\{\{set title \*(.*?)\*\}\}/);

                if(title){
                  layout = layout.replace(/\{\{get title\}\}/g, title[1]);
                  layout = layout.replace(/\{\{set title \*.*?\*\}\}/, '' ); 
                }
          console.log(layout)
          fs.writeFile('temp.html', layout, err => {
            if(err) throw err;
          })
         });

        }else{
           return false; 
        }
    });
}
                        

