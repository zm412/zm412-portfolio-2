
//const funcFetch = require('../myFetches');
//console.log(funcFetch)

module.exports = () => {
  let formComment = document.querySelector('#blockComments');
    getFormForComm(formComment);
  console.log('lkjlj');
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
    // funcFetch('/api/contacts/comments', data )
    //    .then(docs => {
    //      console.log(docs);
    //    })

      let url = '/api/conctacts/comments';
      async function postData(urlArg = '', dataArg = {}){
        let response = await fetch(url) ;
        let answ = await response.json();
        console.log(answ)
        return answ
      }
      postData(url, data)
    });
  }
  
