
module.exports = () => {

  let formGetLetters = document.querySelector('.formGetLetters');
  let aboutSuccess = document.querySelector('.about-success');
  let answ;

//html for main page about (page with form for spam)

  function getAbout(){
    formGetLetters.insertAdjacentHTML('afterbegin', `

      <h3>Подпишитесь на ежегодную рассылку!</h3>
        <form method='post' action='./about-success.hbs'>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
            </div>
             
              <div class="form-check">
                <input type="checkbox" class="form-check-input" name='check' id="classForCheck">
                <label class="form-check-label" for="classForCheck">Agreement for sending media-files (free pictures of funny animals)</label>
              </div>
 
              <div class="form-check">
                <input type="checkbox" class="form-check-input" name='moreInfo' id="classForMoreInfo">
                <label class="form-check-label" for="classForMoreInfo">Show more information about this site</label>
              </div>
 
              <button type="submit" id='buttAbout' class="btn btn-primary">Submit</button>
            </form>
 
    `
    );
    startAction();
  }

//html for render (without actually rendering) after send form

  function getAboutSuccess(){

    aboutSuccess.insertAdjacentHTML('afterbegin', `
 
          <div class="row">
            <div class="col-8"  justify-content-start>
              <div class="massegeFormDb">
                 <h4> ${answ.addressIs}  </h4>
              </div>
            </div>
          <div class="row">
            <div class="col-8" justify-content-start>
              <div class="sandingInfo">
                    <h2>Вы подписанны на ежегодную новостную рассылку
                            ${ answ.data.check ? ', а также, на рассылку картинок забавных животных' : ''}
                   !</h2>
              </div>
            </div>
          </div>

      `) ;

  }

// function wich is collects all functional of page (forming request by function SendForm and turn on second html)

  function startAction(){
    let butt = document.querySelector('#buttAbout');
    butt.onclick = sendForm;


  function sendForm(e){
    e.preventDefault();
    let url = '/api/page_about/getlett';
    let req = new XMLHttpRequest();
    let check = document.querySelector('#classForCheck').checked;
    let moreInfo = document.querySelector('#classForMoreInfo').checked;
    let hideMoreInfo = document.querySelector('.hideMoreInfo');

//collect information for forming request.body
    let dataInp = {
      email: document.querySelector('#exampleInputEmail1').value,
      check: check ? 'on' : false,
      moreInfo: moreInfo ? 'on' : false 
    }

//check, if user want to read more information

    !moreInfo ? hideMoreInfo.style.display='none' : hideMoreInfo.style.display='inline';
   
//forming request to /routers/getLetters.js
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = () => {
      answ = JSON.parse(req.response);
      formGetLetters.innerHTML = '';
        getAboutSuccess();
    }
    
    req.send(JSON.stringify(dataInp));
  }

}



  if(formGetLetters != null){
      getAbout();
  }

}


