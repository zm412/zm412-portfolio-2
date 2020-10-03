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
      password: '',
      passwordConfirm: '',
      loginStyle: 'form-control',
      passwordStyle: 'form-control',
      passwordConfirmStyle: 'form-control',
      messageOnTheWall:'',
      styleForMessageOnTheWall:''
     },

    this.changeRegim = this.changeRegim.bind(this);
    this.funcOnChange = this.funcOnChange.bind(this);
    this.functionForLogin = this.functionForLogin.bind(this);
    this.functionForRegister = this.functionForRegister.bind(this);
    this.clearFocus = this.clearFocus.bind(this);
  }

  chooseStyle(obj){
    let target = obj.data;
    let keysOfStates = ['login', 'password', 'passwordConfirm'];
    if(target === '') return;
      if(target.ok === true){
        keysOfStates.map(item => this.setState({[item+'Style']:'form-control border-success' }));
        this.setState({messageOnTheWall: 'You are in!!!'})
        this.setState({styleForMessageOnTheWall: 'border-success bg-success'})
        this.cleanFields();
      }else if(target.ok === false){
        keysOfStates.map(item => target.fields.includes(item) ? this.setState({[item+'Style']:'form-control border-danger' }) : this.setState({[item + 'Style']: 'form-control'}));
        this.setState({messageOnTheWall: target.error})
        this.setState({styleForMessageOnTheWall: 'border-danger bg-warning'})
      }
  }

  addingErrorP(obj){
    
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
    this.setState({ login: '', password: '', passwordConfirm: '', messageOnTheWall:''})
  }

  clearFocus(){
    let baseStyle = 'form-control';
    this.setState({ loginStyle: baseStyle, passwordStyle: baseStyle, passwordConfirmStyle: baseStyle});
  }

  functionForLogin(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.password
    }
    console.log(loginState)
    axios.post('/api/auth/login', loginState)
      .then(res => {
        this.chooseStyle(res);
      })
  }
 
  functionForRegister(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    }
    console.log(loginState)
    axios.post('/api/auth/register', loginState)
      .then(res => {
        this.chooseStyle(res);
      })

  }

  changeRegim(e){
    e.preventDefault();
    this.clearFocus();
    this.setState({regimLogin: !this.state.regimLogin});
    this.cleanFields();
    console.log(this.state.loginStyle)
    console.log(this.state.passwordStyle)
    console.log(this.state.passwordConfirmStyle)
  }



  render(){

    let nameForm, funcLoginButt, funcRegisterButt, namesOfEl;
    

        if(this.state.regimLogin){

          nameForm = 'Login';
          funcLoginButt = this.functionForLogin;
          funcRegisterButt = this.changeRegim;
          namesOfEl = [
            ['Login', 'login', this.state.login, 'text',  this.state.loginStyle], 
            ['Password', 'password', this.state.password, 'password', this.state.passwordStyle]
          ];

        }else{
          nameForm = 'Register';
          funcLoginButt = this.changeRegim;
          funcRegisterButt = this.functionForRegister;
          namesOfEl = [
            ['Login', 'login' , this.state.login, 'text',  this.state.loginStyle ], 
            ['Password', 'password', this.state.password, 'password', this.state.passwordStyle],
            ['Password-confirm', 'passwordConfirm', this.state.passwordConfirm, 'password', this.state.passwordConfirmStyle]
          ];
        }
    
    let arrayOfArgs = [nameForm, funcLoginButt, funcRegisterButt,this.state.regimLogin, namesOfEl, this.funcOnChange];

     
          return(
            <div>
              <p className={this.state.styleForMessageOnTheWall}>{this.state.messageOnTheWall}</p>
                <FormBlock  formInformation={arrayOfArgs} />
            <p>{console.log(this.state.messageOnTheWall)}</p>
            </div>
)
          
        }
}


module.exports = Auth;
