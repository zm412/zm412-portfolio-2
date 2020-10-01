
let React = require('react');

class ButtSubmit extends React.Component{

  constructor(){
    super();
    this.state = {
      classNormal: 'btn btn-primary',
      classInviting: 'btn bg-warning'
    }
    }
    

  render(){
    let classInviting = this.props.inviting ? this.state.classInviting : this.state.classNormal;
    return(
      <button className={classInviting} onClick={this.props.func} type="submit">{this.props.nameOfButton}</button>
    )
  }
}








module.exports = ButtSubmit;



