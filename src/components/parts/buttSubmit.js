
let React = require('react');
let {useState} = require('react');

class ButtSubmit extends React.Component{

  constructor(){
    super();
    }
    

  render(){
    return(
      <button className="btn btn-primary bg-warning" onClick={this.props.func} type="submit">{this.props.nameOfButton}</button>
    )
  }
}








module.exports = ButtSubmit;



