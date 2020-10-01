let React = require('react');
let axios = require('axios');
const ReactDOM = require('react-dom');
let InpText = require('./parts/inpText');
let ButtSubmit = require('./parts/buttSubmit');
let FormBlock = require('./parts/formBlock');

class Auth extends React.Component{
  constructor(){
    super();
    this.state = {
      regimLogin: true,
      loginValue:'',
      passwValue: '',
      passwConfValue: '',
      collectionOfValues:'' ,
     },

    this.sayHi = this.sayHi.bind(this);
    this.changeRegim = this.changeRegim.bind(this);
    this.functionForLogin = this.functionForLogin.bind(this);
    this.functionForRegister = this.functionForRegister.bind(this);
    this.funcForOnChangeLogin = this.funcForOnChangeLogin.bind(this);
    this.funcForOnChangePassword = this.funcForOnChangePassword.bind(this);
    this.funcForOnChangeConfirm = this.funcForOnChangeConfirm.bind(this);
  }
  
  funcForOnChangeLogin(e){
    e.preventDefault();
    this.setState({loginValue: e.target.value});
    console.log(this.state.loginValue);
  }

  funcForOnChangePassword(e){
    e.preventDefault();
    this.setState({passwValue: e.target.value});
    console.log(this.state.passwValue);
  }

  funcForOnChangeConfirm(e){
    e.preventDefault();
    this.setState({passwConfValue: e.target.value});
    console.log(this.state.passwConfValue);
  }

  sayHi(e){
    e.preventDefault();
    console.log('sayHi')
  }

  functionForLogin(e){
    e.preventDefault();
    let loginState = {
      login: this.state.loginValue,
      password: this.state.passwValue
    }
    console.log(loginState)
    axios.post('/api/auth/login', loginState)
      .then(res => {
        console.log(res);
      })
  }
 
  functionForRegister(e){
    e.preventDefault();
    let loginState = {
      login: this.state.loginValue,
      password: this.state.passwValue,
      passwordConfirm: this.state.passwConfValue
    }
    console.log(loginState)
    axios.post('/api/auth/register', loginState)
      .then(res => {
        console.log(res);
      })
  }

  changeRegim(e){
    e.preventDefault();
    this.setState({regimLogin: !this.state.regimLogin});
  }

  render(){

        if(this.state.regimLogin){

          nameForm = 'Login';
          funcLoginButt = this.functionForLogin;
          funcRegisterButt = this.changeRegim;
          namesOfEl = [['Login', this.funcForOnChangeLogin, 'loginId', this.state.loginValue], ['Password',this.funcForOnChangePassword, 'passwordId', this.state.passwValue]];

        }else{
          nameForm = 'Register';
          funcLoginButt = this.changeRegim;
          funcRegisterButt = this.functionForRegister;
          namesOfEl = [['Login', this.funcForOnChangeLogin, 'loginId' , this.state.loginValue], ['Password',this.funcForOnChangePassword, 'passwordId', this.state.passwValue], ['Password-confirm',this.funcForOnChangeConfirm, 'passwordConfirmId', this.state.passwConfValue]];
        }
    
    let arrayOfArgs = [nameForm, funcLoginButt, funcRegisterButt,this.state.regimLogin, namesOfEl];

     
          return(
            <div>
          <FormBlock  formInformation={arrayOfArgs} />
            </div>
)
          
        }
}


module.exports = Auth;
