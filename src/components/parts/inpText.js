
let React = require('react');
let {useState} = require('react');

class InpText extends React.Component{

  constructor(props){
    super(props);
    }
//    
//  bordersColor(e){
//    if(this.props.nameOfEl[4] == '') return;
//    if(this.props.nameOfEl[4].ok === false  && this.props.nameOfEl[4].fiels.includes(e.target.id)){
//      this.state.styles += ' border-danger';
//      this.setState({styles: this.state.styles});
//    }else if( this.props.nameOfEl[4].ok === true ){
//      this.state.styles += ' border-success';
//      this.setState({styles: this.state.styles});
//    }
//  } 
//

  render(){
    const [nameEl, idEl, valueEl, typeEl, classInp] = this.props.nameOfEl;
    
     
    return (
      <div className="form-group">
        <label htmlFor={idEl}>{nameEl}</label>
          <input id={idEl} type={typeEl} className={classInp} onChange={this.props.func} value={valueEl} /> 
            <p>{valueEl}</p>
      </div>
    );
  }
}





module.exports = InpText;
