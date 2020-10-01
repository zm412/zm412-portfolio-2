
let React = require('react');
let {useState} = require('react');

class InpText extends React.Component{

  constructor(){
    super();
      this.state = {
        value:''
      }
    }
    

  render(){
    return (
      <div className="form-group">
        <label htmlFor={this.props.elemId}>{this.props.nameOfEl}</label>
          <input id={this.props.elemId} type="text" className="form-control" onChange={this.props.func} value={this.props.valueEl} /> 
            <p>{console.log('something')}</p>
            <p>{console.log(this.props.nameOfEl)}</p>
      </div>
    );
  }
}





module.exports = InpText;
