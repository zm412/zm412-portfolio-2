'use strict'

/*

the first arg - is selector of main elem (usually - 'a'), 
second - selector of block - own of event (own.onclick = func;),
  we are using querySelector(second);
third - selector of elem, where we gonna add (or remove), class 'active'


 */


module.exports = () => {
  let Accord = require('./ActiveLink');
  let accord = new Accord('.linkTo a', '#accord','.task');
  accord.proc();
}


