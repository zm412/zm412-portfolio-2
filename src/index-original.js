'use strict'

let fs = require('fs');
let http = require('http');

http.createServer(function(request, response){
    if(request.url != '/favicon.ico'){
        if(request.url.startsWith('/public/')){
            let filePath = request.url.slice(1);
            fs.readFile(filePath, (err, data) => {
                if(err){
                    response.statusCode = 404;
                    response.end('Not found');
                }else{
                    let type;
                    
                if(type = filePath.match(/\.(css|js)$/)){
                    response.setHeader('content-type', 'text/' + type[1]);
                }
                
                else if(type = filePath.match(/\.(png|jpg)$/)){
                    response.setHeader('content-type', 'image/' + type[1]);
                }
                    response.end(data);
                }
            });
    }else{
        getPage(request.url, response);
    }
  }
}).listen(8888);
    
function getPage(name, response, statusCode = 200){
  console.log(name);
    if(name == '/'){
        name = '/index';
    }
    fs.readFile('pages' + name + '.html', 'utf8', (err, content) => {
        if(!err){
        fs.readFile('layouts/default.html', 'utf8', (err, layout) => {

            if(err) throw err;
            layout = layout.replace(/\{\{get content\}\}/g, content);
            let title = content.match(/\{\{set title \*(.*?)\*\}\}/);
            console.log(title);
                if(title){
                  layout = layout.replace(/\{\{get title\}\}/g, title[1]);
                  layout = layout.replace(/\{\{set title \*.*?\*\}\}/, '' ); 
                }

            fs.readFile('elems/header.html', 'utf8', (err, header) => {


                if(err) throw err;
                layout = layout.replace(/\{\{get header\}\}/g, header);
                fs.readFile('elems/footer.html', 'utf8', (err, footer) => {

                    if(err) throw err;
                    layout = layout.replace(/\{\{get footer\}\}/g, footer);

                    response.statusCode = statusCode;
                    response.setHeader('content-type', 'text/html');
                    response.write(layout);
                    response.end();
                });
            });
        });
}else{
    if(statusCode != 404){
    getPage('/404', response, 404);
    }else{
        throw err;
    }
}
    });
}
                        

