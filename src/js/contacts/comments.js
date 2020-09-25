
const News = require('../../components/Contacts');

const React = require('react');
const ReactDOM = require('react-dom');
let posts = [{name : 'lkjlj', body: '1111'}];

module.exports = () => {
  let formComment = document.querySelector('#blockComments');
    getFormForComm(formComment);
    ReactDOM.render(<News data={posts} />, document.getElementById('blockListComments'));
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
  }


  function startAction(){
    let buttSendComm = document.querySelector('#buttForComment');
    buttSendComm.addEventListener('click', (e) => {
      let username = document.querySelector('#inpNameForComm');
      let text = document.querySelector('#texarForComm');
      e.preventDefault(); 
      let data = {
        nameForComment: username.value,
        texarForComment: text.value
      }
      //console.log(data)
     fetch('/api/contacts/comments', {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
})
        .then(response => response.json())
  .then(result => {
        posts = result.posts;
        console.log(posts)
    ReactDOM.render(<News data={result.posts} />, document.getElementById('blockListComments'));
  })
    });

  }
 
