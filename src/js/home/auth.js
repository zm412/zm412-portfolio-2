
module.exports = () => {

  let groupAuth = document.querySelector('.getAuth');

  function getAuthForms(){
    groupAuth.insertAdjacentHTML('afterbegin', `

      <form action="" method='post' class='login'>
      <h2>Enter</h2>
      <div class='blockAuth'>
        <div class="form-group">
          <label for="login-login">Login</label>
          <input id="login-login" type="text" class="form-control"  name="login" />
        </div>
        <div class="form-group">
          <label for="login-password">Password</label>
          <input id="login-password" type="text" class="form-control"  name="password" />
        </div>

        <div class="buttons">
          <button class="switch-button btn btn-primary bg-warning " type="submit">Registration</button>
          <button class="btn btn-primary btn login-button" type="submit">Sign in</button>
        </div>
      </div>
          
      </form>
 
      <form action="" method='post' class='register'>
      <h2>Registration</h2>
      <div class='blockAuth'>
        <div class="form-group">

    <label for="register-login">Login</label>
    <input id="register-login" type="text" class="form-control"  name="login" />

        </div>
        <div class="form-group">

    <label for="register-password">Password</label>
    <input id="register-password" type="text" class="form-control"  name="password" />

        </div>

        <div class="form-group">

    <label for="register-password-confirm">Confirm password</label>
    <input id="register-password-confirm" type="text" class="form-control"  name="passwordConfirm" />

        </div>
        <div class="buttons">
          <button class="btn btn-primary switch-button bg-warning" type="submit">Sing in</button>
          <button class="btn btn-primary register-button " type="submit">Registration</button>
        </div>
      </div>
          
      </form>
   
      `);
  }

  function startAction(){
    let switchButton = document.querySelector('.switch-button');
    let loginForm = document.querySelector('.login');
    let registerForm = document.querySelector('.register');
    let flag = true;

    switchButton.addEventListener('click', function(event){
      event.preventDefault();

      let inps = document.querySelectorAll('.register input');
      inps.forEach(item => item.value = '');


      if(flag){
        flag = false;
        registerForm.style.display = 'inline';
        loginForm.style.display = 'none';
        
        
      }else{
        flag = true;
        registerForm.style.display = 'none';
        loginForm.style.display = 'inline';
      }

        
    })

  }

  
    function actionForRegisterButt(){
      
      document.querySelector('.register-button').onclick = (e) => {
          e.preventDefault();
          let data = {
              login: document.querySelector('#register-login').value,
              password: document.querySelector('#register-password').value,
              passwordConfirm: document.querySelector('#register-password-confirm').value
            }
        getActionForButt('register', data);
      }
  }

    function actionForLoginButt(){
      document.querySelector('.login-button').onclick = (e) => {
        e.preventDefault();
        
        let data = {
          login: document.querySelector('#login-login').value,
          password: document.querySelector('#login-password').value,
        }

        getActionForButt('login', data);
     };
    }



  function clearFocus(selectorClear){
    let inps = document.querySelectorAll(selectorClear+' input');
    inps.forEach(current => {
          current.addEventListener('focus', () => { inps.forEach(item => item.classList.remove('border-danger'));
          let errParagraph = document.querySelector('#errorParagraph');

            if(errParagraph != null){
              errParagraph.parentNode.removeChild(errParagraph);
            }
    });
  });
  }



  function getActionForButt(routingKey, obj){
      let url = '/api/auth/' + routingKey;
      let targetSelector = '.' + routingKey;

        let req = new XMLHttpRequest();

        req.open('POST', url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload =  () => {
            let answ = JSON.parse(req.response);
            if(!answ.ok){
              document.querySelector(targetSelector).insertAdjacentHTML('afterbegin', `<p class='border-danger bg-warning' id='errorParagraph'>${answ.error}</p>`);
              if(answ.fields){
              answ.fields.forEach(item => document.querySelector(`${targetSelector} input[name=${item}]`).classList.add('border-danger'));
              }
            clearFocus(targetSelector);
            }else{
              document.querySelector(targetSelector).insertAdjacentHTML('afterbegin', `<p class='border-success bg-success' id='errorParagraph'>Very Well!</p>`);
            }
        };
        req.send(JSON.stringify(obj));
  }
  



    

  if(groupAuth){
    getAuthForms();
    startAction();
    actionForRegisterButt();
    actionForLoginButt();
  }

}
