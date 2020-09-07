
module.exports = () => {
  let formGetLetters = document.querySelector('.formGetLetters');
  let aboutSuccess = document.querySelector('.about-success');

  function getAbout(){
    formGetLetters.insertAdjacentHTML('afterbegin', `

      <h3>Подпишитесь на ежегодную рассылку!</h3>
        <form method='post' action=''>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
            </div>
             
              <div class="form-check">
                <input type="checkbox" class="form-check-input" name='check' id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Agreement for sending media-files (free pictures of funny animals)</label>
              </div>
 
              <div class="form-check">
                <input type="checkbox" class="form-check-input" name='moreInfo' id="exampleCheck2">
                <label class="form-check-label" for="exampleCheck2">Show more information about this site</label>
              </div>
 
              <button type="submit" id='buttAbout' class="btn btn-primary">Submit</button>
            </form>
 
    `
    );
    startAction();
  }


  function getAboutSuccess(){
    
    aboutSucces.insertAdjacentHTML('afterbegin', `
 
          <div class="row">
            <div class="col-8"  justify-content-start>
              <div class="massegeFormDb">
                 <h4> {{answ.addressIs}}  </h4>
              </div>
            </div>
          <div class="row">
            <div class="col-8" justify-content-start>
              <div class="sandingInfo">
                    <h2>Вы подписанны на ежегодную новостную рассылку
                            {{#if answ.data.check}}
                              , а также, на рассылку картинок забавных животных
                            {{/if}}
                   !</h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-8"  justify-content-start >
              <div class="moreInfo">
                            {{#if answ.data.moreInfo}}
                                {{>moreInfo}}
                            {{/if}}
                
              </div>
            </div>
          </div>


      `) ;

  }


  function startAction(){
    let butt = document.querySelector('#buttAbout');
    butt.onclick = sendForm;


  function sendForm(e){
    e.preventDefault();
    let url = '/api/page_about/getlett';
    let req = new XMLHttpRequest();
    let dataInp = {
      email: document.querySelector('#exampleInputEmail1'),
      check: document.querySelector('#exampleCheck1'),
      moreInfo: document.querySelector('#exampleCheck2')
    }
    
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = () => {
      var answ = JSON.parse(req.response);
      console.log(answ)
//      console.log(answ.data)
        //getAboutSuccess();
    }
    
    req.send(JSON.stringify(dataInp));
  }


  }



  if(formGetLetters != null){
      getAbout();
  }

}


