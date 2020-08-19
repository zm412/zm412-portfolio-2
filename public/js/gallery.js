let getGallery = function (par){
  
  let parentOfModule = document.querySelector(par);
  parentOfModule.insertAdjacentHTML('afterbegin', `

        <div class="tabs">
          <div id = 'unic' class ="tabD">
            <div class='num'></div>
            <img src = '' alt = '' id = 'pic' width = '100%' height = '100%'>
          </div>
            <div class = 'sideTb'>
            <button id = 'prevTb'>&#10094</button>
            <button id = 'nextTb'>&#10095</button>
          </div>
        </div>
            <div id = 'dts' style="text-align:center">
              <span class="dot" data-num = "1"></span>
              <span class="dot" data-num = "2"></span>
              <span class="dot" data-num = "3"></span>
            </div>
        <div class="menuGallery">
        <button id = 'prev'>&#10094</button>
          <a href="#" class='view'></a>
          <a href="#" class = 'view'></a>
          <a href="#" class = 'view'></a>
          <a href="#" class = 'view'></a>
        <button id = 'next'>&#10095</button>
        </div>

    `);
  




    document.body.onload = startAction;


let arr = ['Русская баня','Римская баня', 'Финская баня',  'Японская баня', 'Инфракрасная', 'Скандинавская', 'Турецкая сауна'];
let arrTb = [
		['/../public/images/rusSauna1.jpg','/../public/images/rusSauna2.jpg', '/../public/images/rusSauna3.jpg'],['/../public/images/rimSauna1.jpg','/../public/images/rimSauna2.jpg', '/../public/images/rimSauna3.jpg'], ['/../public/images/finnSauna1.jpg','/../public/images/finnSauna2.jpg', '/../public/images/finnSauna3.jpg'], ['/../public/images/japanSauna1.jpg','/../public/images/japanSauna2.jpg', '/../public/images/japanSauna3.jpg'],['/../public/images/infraSauna1.jpg','/../public/images/infraSauna2.jpg', '/../public/images/infraSauna3.jpg'], ['/../public/images/scandinavianSauna1.jpg','/../public/images/scandinavianSauna2.jpg', '/../public/images/scandinavianSauna3.jpg'],['/../public/images/turkishSauna1.jpg','/../public/images/turkishSauna2.jpg', '/../public/images/turkishSauna3.jpg']
	]; 

function startAction(){
	let menuGallery = document.querySelector('.menuGallery');
	let prev = document.getElementById('prev');
	let next = document.getElementById('next');
	let position = 0;

	menuGallery.onclick = changingTab;
	putMeaning(arr, arrTb, position);

    prev.addEventListener('click', function(){
      position > 0 ? position-- : position = arr.length - 1;
      putMeaning(arr,arrTb, position);
    });

    next.addEventListener('click', function(){
		position >= arr.length - 1  ? position = 0 : position++;
    putMeaning(arr,arrTb, position);
    });


              function changingTab(event){
                if(event.target.tagName != 'A') return;
                let aes = document.querySelectorAll('a');
                let pic = document.getElementById('pic');
                for(let i = 0;  i < aes.length; i++){
                  if(aes[i].innerHTML == event.target.innerHTML){
                    aes[i].classList.add('active');
                    let pos = arr.indexOf(aes[i].innerHTML, 0);
                    meaningForImg(arrTb, pos, pic);
                  }else{
                    aes[i].classList.remove('active');	
                  }
                }
              }

              function putMeaning(arr, arr1, startPosition){
                let views = document.querySelectorAll('.view');
                let pic = document.getElementById('pic');
                
                for(let i = startPosition, j = 0; i < startPosition + 4; i++, j++){
                  arr[i] == undefined ? i = 0 : false;
                  if(j >= 4) return;
                     views[j].innerHTML = arr[i];
                        if(i == startPosition){
                          views[0].classList.add('active');
                          meaningForImg(arr1, i, pic);
                        }else{
                          views[j].classList.remove('active');
                        }
                }
              }

              function meaningForImg(arr, pos, elem){
                let dotes = document.querySelectorAll('.dot');
                let localPositionActive = 0;
                let prevTb = document.getElementById('prevTb');
                let nextTb = document.getElementById('nextTb');
                  getResult(pos, localPositionActive, dotes, elem, arr);
                prevTb.addEventListener('click', function(){
                  localPositionActive > 0 ? localPositionActive--: localPositionActive = arr[pos].length - 1;
                  getResult(pos, localPositionActive, dotes, elem, arr);
                });
                
                nextTb.addEventListener('click', function(){
                  localPositionActive >= arr[pos].length - 1  ? localPositionActive = 0 : localPositionActive++;
                  getResult(pos, localPositionActive, dotes, elem, arr);
                });
                putMeaningForDotes(dotes,elem, pos, arr);
              }

              function getResult(pos1, pos2,elems, elemImg, arr){
                elemImg.src = arr[pos1][pos2];
                getActive(elems, pos2);
              }

              function putMeaningForDotes(elems,elemShow, positionDotes, arr){
                for(let i = 0; i < elems.length; i++){
                  elems[i].addEventListener('click', function(){
                    getActive(elems, i);
                    elemShow.src = arr[positionDotes][i];
                  });
                }
              } 

              function getActive(elems, posD){
                let numText = document.querySelector('.num');
                for(let eachD of elems){
                  posD == eachD.dataset.num - 1 ? (eachD.classList.add('active'),
                     numText.innerHTML = eachD.dataset.num + ' / 3')	: eachD.classList.remove('active');
                }
              }






	}	
  };

getGallery('#group')

