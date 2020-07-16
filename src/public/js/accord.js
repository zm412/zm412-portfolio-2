'use strict'

startActionAccord();

function startActionAccord(){
	let accord = document.getElementById('accord');
	accord.onclick = changingTab;


        function changingTab(event){
          if(event.target.tagName != 'A') return;
          let aes = document.querySelectorAll('.linkTo a');
          for(let i = 0;  i < aes.length; i++){
            if(aes[i].innerHTML == event.target.innerHTML){
              aes[i].closest('.task').classList.add('active');	
            }else{
              aes[i].closest('.task').classList.remove('active');	
            }
          }
        }

}
