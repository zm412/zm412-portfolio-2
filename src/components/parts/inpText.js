
let React = require('react');
let {useState} = require('react');

const InpText = ({nameOfEl, idForInp}) => {
  const [value, setValue] = useState('');


  return (
        <div className="form-group">
          <label htmlFor={nameOfEl}>{nameOfEl}</label>
          <input id={nameOfEl} type="text" id={idForInp} className="form-control" value={value}  onChange={(e) => setValue(e.target.value)} /> 
    <p>{value}</p>
        </div>
  )
  
}







module.exports = InpText;
