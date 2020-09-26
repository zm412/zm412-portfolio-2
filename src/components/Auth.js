let React = require('react');
const ReactDOM = require('react-dom');
let {useState} = require('react');
let InpText = require('./parts/inpText');

const Auth = () => {

  return (
  <div className='blockAuth'>
    <form action="" method='post'> <h2>Sign In</h2>
      <InpText nameOfEl='Login' />
      <InpText nameOfEl='Password' />
    </form>
    
    <form action="" method='post'> <h2>Register</h2>
      <InpText nameOfEl='Login' />
      <InpText nameOfEl='Password' />
      <InpText nameOfEl='Password-confirm' />
    </form>
  </div>

  )
}


module.exports = Auth;
