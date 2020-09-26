'use strict'

module.exports = () => {

let links = document.querySelectorAll('.headactive');
for(let link of links){
  if(link.href == window.location.href){
    link.classList.add('active');
  }
}
}
