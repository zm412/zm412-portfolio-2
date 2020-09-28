
let React = require('react');
let InpText = require('./inpText');
let ButtSubmit = require('./buttSubmit');

class FormBlock extends React.Component{

  constructor(){
    super();

    }
    

  render(){
    let listInps = this.props.listNames.map((item, index) => <InpText key={index} nameOfEl={item} />) 
    let listButts = <div>
            <ButtSubmit nameOfButton={'login'}  func={this.props.funcLogin}/>
            <ButtSubmit nameOfButton={'register'} func={this.props.funcRegister} />
                    </div>
    
    return(
      <form id={this.props.idForm} action="" method='post'>
        {listInps}
        {listButts}
      </form>
    )
  }
}




module.exports = FormBlock;






