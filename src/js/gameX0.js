'use strict'

module.exports = () =>{
let game = document.getElementById('gameX0');
  if(game != null)
game.insertAdjacentHTML('afterbegin', `
  <style>
   #gameX0#tblGameX0{
		position: absolute; 
			top: 30%; 
			left: 35%; 
			width: 25%; 
			height: 25%; 
	}
  
	.tdGameX0 {
		width: 30px;
		height: 25px;
  }
 
  table {
		border: 1px solid black;
		border-collapse: collapse;
  }

  td, th{
		text-align: center;
		border: 1px solid black;
  }


	
  </style>
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
`)



startGame();

let result = [];

function startGame(){

  let tbl = document.getElementById('tblGameX0');
  createTbl(tbl);
  let who = document.getElementById('who');
  let butt = document.getElementById('buttGameX0');
  let tds = tbl.querySelectorAll('.tdGameX0');
  let winX = document.getElementById('winX');
  let win0 = document.getElementById('win0');
  let noWins = document.getElementById('noWins');
	let clicks = 0;
	who.innerHTML = '';
	let gamer = 'X';
	let nextG = (gamer) => (gamer == 'X') ? '0' : 'X';
	addListener(tds, prepareCell);
		
		function prepareCell(){
			this.innerHTML = gamer;
			gamer = nextG(gamer);
			this.removeEventListener('click',prepareCell);
			clicks++;

				let winner = getWinner(tds);
				if(winner === 'X'){
					who.innerHTML = 'X';	
				removeList(tds,prepareCell);
				}
				else if(winner === '0'){
					who.innerHTML = '0'; 
				removeList(tds, prepareCell);
				}
				else if(clicks > 8 && winner === undefined){
					who.innerHTML = 'Drow';
				}

}


		butt.addEventListener('click', function(){
			result.push(who.innerHTML);	
      tbl.innerHTML = '';
			startGame();
        winX.innerHTML = result.reduce((sum, curr) => curr === 'X' ? ++sum  : sum, 0);
				win0.innerHTML = result.reduce((sum, curr) => curr === '0' ? ++sum  : sum, 0);
				noWins.innerHTML = result.reduce((sum, curr) => curr === 'Drow' ? ++sum  : sum, 0);
		});


                    function getWinner(elems){
                      let arr = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6]];
                      let combsArr;
                      let win;
                        for(let i = 0; i < arr.length; i++){
                          let comb = arr[i];
                          combsArr = [elems[comb[0]].innerHTML, elems[comb[1]].innerHTML, elems[comb[2]].innerHTML]; 
                          if(combsArr.every(elem => elem === 'X')){	win = 'X';}
                          else if(combsArr.every(elem => elem === '0')){	win = '0'; }
                    }
                      return win;
                    }



                    function addListener(elems, func){
                      for(let i = 0; i < elems.length; i++){
                      elems[i].addEventListener('click', func);
                      }
                    }


                    function removeList(elems, func){
                      for(let i = 0; i < elems.length; i++){
                      elems[i].removeEventListener('click', func);
                      }
                    }
                     
                    function createTbl(par){
                      for(let i = 0; i < 3; i++){
                        let tr = createEl('tr', par);
                          for(let j = 0; j < 3; j++){
                            let td = createEl('td', tr);
                              td.className = 'tdGameX0';
                          }
                      }
                    }



                    }

function createEl(tag, par ){		
	let el = document.createElement(tag);	
		par.appendChild(el);
		return el;
}		



}
