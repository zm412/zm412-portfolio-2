
module.exports = () => {

  let groupAuth = document.querySelector('.getAuth');

  function getAuthForms(){
    groupAuth.insertAdjacentHTML('afterbegin', `

      <form action="" method='post' class='login'>
      <h2>Enter</h2>
      <div class='blockAuth'>
        <div class="form-group">
          <label for="login-login">Login</label>
          <input id="login-login" type="text" class="form-control"  name="login">
        </div>
        <div class="form-group">
          <label for="login-password">Password</label>
          <input id="login-password" type="text" class="form-control"  name="password">
        </div>

        <div class="buttons">
          <button class="btn btn-primary bg-secondary " type="submit">Sing in</button>
          <button class="btn btn-primary switch-button " type="submit">Registration</button>
        </div>
      </div>
          
      </form>
 
      <form action="" method='post' class='register'>
      <h2>Registration</h2>
      <div class='blockAuth'>
        <div class="form-group">
          <label for="register-login">Login</label>
          <input id="register-login" type="text" class="form-control"  name="login">
        </div>
        <div class="form-group">
          <label for="register-password">Password</label>
          <input id="register-password" type="text" class="form-control"  name="password">
        </div>

        <div class="form-group">
          <label for="register-password-confirm">Confirm password</label>
          <input id="register-password-confirm" type="text" class="form-control"  name="passwordConfirm">
        </div>
        <div class="buttons">
          <button class="btn btn-primary switch-button" type="submit">Sing in</button>
          <button class="btn btn-primary  bg-secondary" type="submit">Registration</button>
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

  if(groupAuth){
    getAuthForms();
    startAction();
  }

}
