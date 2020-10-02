
let React = require('react');
let {useState} = require('react');

class InpText extends React.Component{

  constructor(){
    super();
    }
    

  render(){
    const [nameEl, idEl, valueEl, typeEl] = this.props.nameOfEl;
    
     
    return (
      <div className="form-group">
        <label htmlFor={idEl}>{nameEl}</label>
          <input id={idEl} type={typeEl} className="form-control" onChange={this.props.func} value={valueEl} /> 
            <p>{valueEl}</p>
      </div>
    );
  }
}





module.exports = InpText;
