

const postData = require('../myFetch/commonFetch');

module.exports = () => {
  let blockComments = document.querySelector('#blockComments');
  
  function sendCommentFunc(){
    blockComments.insertAdjacentHTML('afterbegin', `

    <form method='post' action='contacts' class="formSpam">
      <div class="form-group">
        <label for="exampleFormControlInput1">Name/Username</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name/username" id='inpNameForComm' name='nameForComment'>
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
<p class='wrongComm'></p>

      `);
    startAction();
  }

  
  if(blockComments != null){
    sendCommentFunc();

  }

      function startAction(){
        let sendComm = document.querySelector('#buttForComment');
        let texar = document.querySelector('#texarForComment');
        let username = document.querySelector('#inpNameForComm');

        sendComm.addEventListener('click', (e) => {
          e.preventDefault();

          let data = {
            nameForComment: username.value,
            texarForComment: texar.value
          }

          if(data.nameForComment.length < 3 || texarForComment.length < 5){
            
              <p color='red'>Please, use "username" longer then 2 symbols, and write comment longer then 5 symbols (or your comment wont be post).Thank you </p>
              `)
            
          }

                      


                    })
                  }
  

}
