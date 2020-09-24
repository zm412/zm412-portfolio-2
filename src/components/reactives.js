const Test = require('./test.jsx');
const React = require('react');
const ReactDOM = require('react-dom');

module.exports = () => {
  ReactDOM.render(<Test />, document.getElementById('contentIndex'))
}
