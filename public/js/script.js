'use strict'

let links = document.querySelectorAll('.icon a');
console.log(links);
for(let link of links){
  console.log(link);
  if(link.href == window.location.href){
    link.classList.add('active');
  }
}
