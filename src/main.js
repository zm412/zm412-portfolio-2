const gallery = require('@js/gallery/gallery');
const activeHeaderLinks = require('./js/activeHeader')
const home = require('@js/home/home');
const tasks = require('@js/tasks/tasks');
const about = require('@js/about/about');
const contacts = require('@js/contacts/contacts');
const sendPicture = require('@img/sendPicture');
const components = require('./components/reactives');

import '@/main.scss';
let pagesDep= {
'home': () => { home(); },
'gallery': () => { gallery(); },
'contacts': () => { contacts(); },
'about': () => { about(); }, 
'tasks': () => { tasks(); },
'contentIndex' : () =>{ components(); }

}


for(let key in pagesDep){
 let tempDOM = document.querySelector('#'+key);
  if(tempDOM != null){
    pagesDep[key]();
  }
}

//activeHeaderLinks();
//contacts();
//gallery();
//tasks();
//about();
//home();
//sendPicture();

