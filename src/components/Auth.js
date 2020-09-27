let React = require('react');
const ReactDOM = require('react-dom');
let InpText = require('./parts/inpText');
let ButtSubmit = require('./parts/buttSubmit');

class Auth extends React.Component{
  constructor(){
    super();
    this.state = {
      flag: true,
    }

    this.funcForLogin = this.funcForLogin.bind(this);
    this.funcForRegister = this.funcForRegister.bind(this);
  }

  funcForSwitchButt(e){
    e.preventDefault();
    if(this.state.flag){
      document.forms[1].style.display = 'inlaine';
      document.forms[0].style.display = 'none';
     this.setState({flag: false});
    }else{
      document.forms[0].style.display = 'inlaine';
      document.forms[1].style.display = 'none';
     this.setState({flag: true});
    }
  }
 
  funcForLogin(e){
    //e.preventDefault();
    console.log('lkjljlj')
  }

  funcForRegister(e){
   // e.preventDefault();
    console.log('lkjljlj')
  }

  createForm(){

  }

  render(){
    let block1 = <form action="" method='post'> <h2>Sign In</h2>
            <InpText nameOfEl='Login' idForInp='id-login-log'/>
            <InpText nameOfEl='Password' idForInp='id-login-reg'/>
              <ButtSubmit switchOn={'switch-button'} idForButt={'login-login'} nameOfButton={'login'} func={this.funcForSwitchButt} />
              <ButtSubmit switchOn={false} idForButt={'login-register'} nameOfButton={'register'} func={this.funcForRegister} />
          
          </form>
        return (
        <div className='blockAuth'>
          
          
          <form action="" method='post'> <h2>Register</h2>
            <InpText nameOfEl='Login' idForInp='id-register-log'/>
            <InpText nameOfEl='Password' idForInp='id-regiister-pass'/>
            <InpText nameOfEl='Password-confirm' idForInp='id-register-confirm'/>
              <ButtSubmit switchOn={false} idForButt={'register-login'} nameOfButton={'login'} func={this.funcForLogin}/>
              <ButtSubmit switchOn={'switch-button'} idForButt={'register-register'} nameOfButton={'register'} func={this.funcForSwitchButt} />
          </form>
        </div>

        )
  }
}


module.exports = Auth;
