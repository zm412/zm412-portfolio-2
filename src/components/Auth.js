let React = require('react');
const ReactDOM = require('react-dom');
let InpText = require('./parts/inpText');
let ButtSubmit = require('./parts/buttSubmit');
let FormBlock = require('./parts/formBlock');

class Auth extends React.Component{
  constructor(){
    super();
    this.state = {
      regimLogin: true,
      blockFormLogin: {idForm: 'login',
                      namesOfEl: ['Login', 'Password']
                      },
      blockFormRegister: {idForm: 'register',
                      namesOfEl: ['Login', 'Password', 'Password-comfirm']},
    }
  }

  generateForm(){
   
  }

  sayHi(){
    console.log('sayHi')
  }
 
  changeRegim(e){
    e.preventDefault();
    this.setState({regimLogin: !this.state.regimLogin});
  }

  render(){
    let login = this.state.blockFormLogin;
    let register = this.state.blockFormRegister;

        if(this.state.regimLogin){
          return(
          <FormBlock  idForm={login.idForm} listNames={login.namesOfEl} funcLogin={this.sayHi.bind(this)} funcRegister={this.changeRegim.bind(this)} />
)
        }else{
          return(
          <FormBlock  idForm={register.idForm} listNames={register.namesOfEl} funcLogin={this.changeRegim.bind(this)} funcRegister={this.sayHi.bind(this)} />
            )
        }
  }
}


module.exports = Auth;
