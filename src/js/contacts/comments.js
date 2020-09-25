'use strict'
const funcFetch = require('../myFetches');
const News = require('../../components/Contacts');

const React = require('react');
const ReactDOM = require('react-dom');

module.exports = () => {
  let formComment = document.querySelector('#blockComments');
    getFormForComm(formComment);

}


  function getFormForComm(elem){
    elem.insertAdjacentHTML('afterbegin', `
              <form method='post' action='contacts' class="formSpam">
          <div class="form-group">
            <label for="exampleFormControlInput1">Name/Username</label>
            <input type="text" class="form-control" placeholder="name/username" id='inpNameForComm' name='nameForComment'>
          </div>
          <div class="form-group">
            <label for="texarForComm"> Textarea</label>
            <textarea class="form-control"  rows="5" id='texarForComm' name='texarForComment'></textarea>
             <div class=""> Please enter a message in the textarea.  </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary"  id='buttForComment'>Post comment</button>
          </div>
        </form>
      `);
    startAction();
    chooseFetch();
  }


  function startAction(){
    let buttSendComm = document.querySelector('#buttForComment');
    chooseFetch('/api/contacts/comments');

    buttSendComm.addEventListener('click', (e) => {
      let username = document.querySelector('#inpNameForComm');
      let text = document.querySelector('#texarForComm');
      e.preventDefault(); 
      let data = {
        nameForComment: username.value,
        texarForComment: text.value
      }
      username.value = '';
      text.value = '';

    chooseFetch(data);

  })

}


function chooseFetch(data){
    funcFetch('/api/contacts/comments', data)
        .then(result => {
          console.log(result.posts)
    ReactDOM.render(<News data={result.posts} />, document.getElementById('blockListComments'));
        })
}
