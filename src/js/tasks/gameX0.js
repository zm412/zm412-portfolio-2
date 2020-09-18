'use strict'


module.exports = () =>{
    let result = [];
      getGame('#gameX0');
      startGame(result);
}

function getGame(parentSelector){
  let parentOfModule = document.querySelector(parentSelector);
    //if(parentOfModule == null) return new Error();
  parentOfModule.insertAdjacentHTML('afterbegin', `
  <table id = 'tblGameX0' class="middle"></table>
    </div>
    <div>	<p> Winner in this Game: <span id = 'who'></span></p>
    <button id = 'buttGameX0'>Start again</button>
    </div>
    <div class = 'secBlock'>
      <p> Won X:<span id = 'winX'></span></p>
      <p> Won 0:<span id = 'win0'></span></p>
      <p> Draw:<span id = 'noWins'></span></p>
    </div>	
        `);
}

  
function startGame(res){
  let domId = ['tblGameX0', 'who', 'winX', 'win0', 'noWins', 'buttGameX0'];
  let {tblGameX0, who, winX, win0, noWins, buttGameX0} = difiningDOM(domId);
    createTblForGameX0(tblGameX0);
  let tds = tblGameX0.querySelectorAll('.tdGameX0');
	let clicks = 0, gamer = 'X';
	who.innerHTML = '';
  createListener(tds, thisFunc, 'addEventListener');
      function thisFunc(){
       let winInfo = getWinner(tds, this, gamer, clicks) ;
        if(winInfo.winner != undefined){
          who.innerHTML = winInfo.winner;
          createListener(tds, thisFunc, 'removeEventListener')
        }else{
          clicks = winInfo.clicks;
          gamer = winInfo.gamer;
          this.removeEventListener('click',thisFunc);
      } }
			document.querySelector('#buttGameX0').addEventListener('click', function(){
			res.push(who.innerHTML);	
      tblGameX0.innerHTML = '';
			startGame(res);
        collectResults(res, winX, win0, noWins);
		});
}

function difiningDOM(arr){
  let obj = {};
  for(let domId of arr){
   obj[domId] = document.querySelector('#' + domId); 
  }
  return obj;
}



function collectResults(resVar, elem1, elem2, elem3){
  let individualCounter = (el, expr) => {
  el.innerHTML = resVar.reduce((sum, curr) => curr === expr ? ++sum  : sum, 0);
  }
    individualCounter(elem1, 'X');
    individualCounter(elem2, '0');
    individualCounter(elem3, 'Drow');
}

function nextG(gamePlayer){
 return gamePlayer == 'X' ? '0' : 'X';
}



function getWinner(elems,elemThisHod, gamerVar, click){
  let arr = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6]];
    elemThisHod.innerHTML = gamerVar;
    gamerVar = nextG(gamerVar);
    click++;
    let combsArr,  win;
    for(let i = 0; i < arr.length; i++){
      let comb = arr[i];
      combsArr = [elems[comb[0]].innerHTML, elems[comb[1]].innerHTML, elems[comb[2]].innerHTML]; 
      if(combsArr.every(elem => elem === 'X')){
        win = 'X'; 
      }else if(combsArr.every(elem => elem === '0')){	
        win = '0'; 
      } else if(click > 8 && win == undefined){
       win = 'Drow'; 
      }
}
      return {
        gamer: gamerVar,
        clicks: click,
        winner: win
      };
}



function createListener(elems, func, method){
  for(let i = 0; i < elems.length; i++){
  elems[i][method]('click', func);
  }
}


 
function createTblForGameX0(par){
  for(let i = 0; i < 3; i++){
    let tr = createEl('tr', par);
      for(let j = 0; j < 3; j++){
        let td = createEl('td', tr);
          td.className = 'tdGameX0';
      }
  }
}

  function createEl(tag, par ){		
    let el = document.createElement(tag);	
      par.appendChild(el);
      return el;
  }		


