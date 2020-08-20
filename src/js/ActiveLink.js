
class ActiveLink{

  constructor (selector, eventElemSelector, parentSelector){
    this.selector = selector;
    this.eventElemSelector = eventElemSelector;
    this.parentSelector = parentSelector;
    this.eventElem = document.querySelector(this.eventElemSelector);
  }

  proc(){
    if(this.eventEleme == null) return new Error;

    this.eventElem.addEventListener('click', event => {
      if(event.target.tagName != 'A') return;
      let aes = document.querySelectorAll(this.selector);
        for(let i = 0; i < aes.length; i++){

          if(aes[i].innerHTML == event.target.innerHTML){
            aes[i].closest(this.parentSelector).classList.add('active');

          }else{
            aes[i].closest(this.parentSelector).classList.remove('active')
          }
    }
  });
  }


}

module.exports = ActiveLink;
