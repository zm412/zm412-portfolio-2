
let React = require('react');
let {useState} = require('react');

//class InpText extends React.Component{
//  constructor(props){
//    super(props);
//  }
//  
//  render(){
//    return (
//        <div className="form-group">
//          <label htmlFor={nameOfEl}>{nameOfEl}</label>
//          <input id={nameOfEl} type="text" className="form-control" value={value}  onChange={(e) => setValue(e.target.value)} /> 
//        </div>
//    )
//  }
//}
//
const ImpText = (nameOfEl) => {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  return (
        <div className="form-group">
          <label htmlFor={nameOfEl}>{nameOfEl}</label>
          <input id={nameOfEl} type="text" className="form-control" value={value}  onChange={(e) => setValue(e.target.value)} /> 
        </div>
  )
}


//console.log(InpText)





module.exports = InpText;
