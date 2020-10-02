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
      login:'',
      passw: '',
      passwConf: '',
      cleanFields: false
     },

    this.changeRegim = this.changeRegim.bind(this);
    this.funcOnChange = this.funcOnChange.bind(this);
    this.functionForLogin = this.functionForLogin.bind(this);
    this.functionForRegister = this.functionForRegister.bind(this);
  }

  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id; 
    let value = e.target.value;
    this.setState((state) => {
      return {[key] : value}
    })
    console.log(this.state[key]);
  }



  cleanFields(){
    this.setState({ login: '', passw: '', passwConf: ''})
  }

  functionForLogin(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.passw
    }
    console.log(loginState)
    axios.post('/api/auth/login', loginState)
      .then(res => {
        console.log(res);
      })
    this.cleanFields();
  }
 
  functionForRegister(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.passw,
      passwordConfirm: this.state.passwConf
    }
    console.log(loginState)
    axios.post('/api/auth/register', loginState)
      .then(res => {
        console.log(res);
      })

    this.cleanFields();
  }

  changeRegim(e){
    e.preventDefault();
    this.setState({regimLogin: !this.state.regimLogin});
    this.cleanFields();
  }

  render(){

    let nameForm, funcLoginButt, funcRegisterButt, namesOfEl;

        if(this.state.regimLogin){

          nameForm = 'Login';
          funcLoginButt = this.functionForLogin;
          funcRegisterButt = this.changeRegim;
          namesOfEl = [
            ['Login', 'login', this.state.login, 'text'], 
            ['Password', 'passw', this.state.passw, 'password']
          ];

        }else{
          nameForm = 'Register';
          funcLoginButt = this.changeRegim;
          funcRegisterButt = this.functionForRegister;
          namesOfEl = [
            ['Login', 'login' , this.state.login, 'text'], 
            ['Password', 'passw', this.state.passw, 'password'],
            ['Password-confirm', 'passwConf', this.state.passwConf, 'password']
          ];
        }
    
    let arrayOfArgs = [nameForm, funcLoginButt, funcRegisterButt,this.state.regimLogin, namesOfEl, this.funcOnChange];

     
          return(
            <div>
          <FormBlock  formInformation={arrayOfArgs} />
            </div>
)
          
        }
}


module.exports = Auth;
