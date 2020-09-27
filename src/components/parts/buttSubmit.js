
let React = require('react');
let {useState} = require('react');

class ButtSubmit extends React.Component{

  constructor(){
    super();
    this.state = {
      classNameCollection: "btn btn-primary bg-warning "
    }
    
  }

  ifSwitchOn(){
    this.props.switchOn ? this.state.classNameCollection += this.props.switchOn : this.state.classNameCollection += '';
    console.log(this.state.classNameCollection)
    return this.state.classNameCollection;
  }

  render(){
    return(
      <button className={this.ifSwitchOn()} id={this.props.idForButt} onClick={this.props.func.bind(this)} type="submit">{this.props.nameOfButton}</button>
    )
  }
}








module.exports = ButtSubmit;



