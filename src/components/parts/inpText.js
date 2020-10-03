
let React = require('react');
let {useState} = require('react');

class InpText extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
      styles:  'form-control' }

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
    const [nameEl, idEl, valueEl, typeEl, dataStyle, classInp] = this.props.nameOfEl;
    
     
    return (
      <div className="form-group">
        <label htmlFor={idEl}>{nameEl}</label>
          <input id={idEl} type={typeEl} className={classInp} data-style={dataStyle} onChange={this.props.func} value={valueEl} /> 
            <p>{valueEl}</p>
      </div>
    );
  }
}





module.exports = InpText;
