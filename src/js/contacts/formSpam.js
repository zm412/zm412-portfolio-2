
module.exports = () => {
  let formSpam = document.querySelector('.formSpam');
  
  function getFormForSpam(){
    formSpam.insertAdjacentHTML('afterbegin', `
      
              <form method='post' action='contacts' class="was-validated formSpam">
          <div class="form-group">
            <label for="exampleFormControlInput1">Name/Username</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name/username" id='inpNameForComm' name='nameForComment'>
          </div>
          
          <div class="form-group">
            <label for="texarForComm"> Textarea</label>
            <textarea class="form-control is-invalid"  rows="5" id='texarForComm' name='texarForComment'></textarea>
             <div class="invalid-feedback"> Please enter a message in the textarea.  </div>
          </div>

         
          <div class="form-group">
            <button type="submit" class="btn btn-primary"  id='buttForComment'>Post comment</button>
          </div>
        </form>

      `)
  }


  function startAction(){
    let buttSpam = document.querySelector('#buttForComment');
    buttSpam.addEventListener('click', (e) => {
      e.preventDefault(); })

  }
}
