
let React = require('react');
let {useState} = require('react');

class InpText extends React.Component{

  constructor(){
    super();
    }
    

  render(){
    return (
      <div className="form-group">
        <label htmlFor={this.props.elemId}>{this.props.nameOfEl}</label>
          <input id={this.props.elemId} type="text" className="form-control" onChange={this.props.func} value={this.props.valueEl} /> 
            <p>{this.props.valueEl}</p>
      </div>
    );
  }
}





module.exports = InpText;
