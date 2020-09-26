const Test = require('./components/test');
const Auth = require('./components/Auth');
const React = require('react');
const ReactDOM = require('react-dom');
let InpText = require('./components/parts/inpText');
console.log(Auth)

module.exports = () => {
  //ReactDOM.render(<Test />, document.getElementById('contentIndex'))
  ReactDOM.render(<Auth />, document.getElementById('authTest'))

}
