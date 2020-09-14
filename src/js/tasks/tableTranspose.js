'use strict'

module.exports = () => {

  let transpose = document.getElementById('transpose');

  function getTable(){

  transpose.insertAdjacentHTML('afterbegin', `
		<input id = 'rowsTableTranspose' placeholder = 'int <= 15'><br>
		<input id = 'columnsTableTranspose' placeholder = 'int <= 15'><br>
		<div id = 'elemTableTranspose'>
      
				<table id = 'transposeTbl' class = 'middle '></table></div><br>

    <p id = 'errTableTranspose'></p>
    <button id = 'buttCreateTbl'>Create table </button>
    <button id = 'flipTbl'> Flip </button>
    <button id = 'resetTableTranspose'> Reset </button>
`);

  } 

		
	
function startActionTranspose(){
  let tbl = document.getElementById('transposeTbl');
  let pErr = document.getElementById('errTableTranspose');
  let buttCreateTable = document.getElementById('buttCreateTbl');
  let buttFlipTable = document.getElementById('flipTbl');
  let buttReset = document.getElementById('resetTableTranspose');
  let rows = document.getElementById('rowsTableTranspose');
  let cols = document.getElementById('columnsTableTranspose');
    let rowsChangeble;
    let colsChangeble;
    let inners;
    let newWay ;

		buttCreateTable.addEventListener('click', function(){
       rowsChangeble = Number(rows.value);
       colsChangeble = Number(cols.value);

          if(rowsChangeble > 15 || colsChangeble > 15){
            pErr.innerHTML = 'Error!: rows and columns have to be <=  15';
            return;
          }else{
            pErr.innerHTML = '';
          }
      
      inners = createStartArr(rowsChangeble, colsChangeble);
      newWay = createNewWay(Number(rows.value), Number(cols.value));
      createTbl(rowsChangeble, colsChangeble, tbl);
      putTogether(inners);
      buttCreateTable.disabled = true;
      tbl.className = 'standartWay';
    });

		buttFlipTable.addEventListener('click', function(){
      rows.disabled = true;
      cols.disabled = true;
      tbl.innerHTML = '';
      changeWay(tbl, rows, cols, inners, newWay);
		});

    buttReset.addEventListener('click', function(){
      rows.disabled = false;
      cols.disabled = false;
      rows.value = '';
      cols.value = ''
      tbl.innerHTML = '';
      buttCreateTable.disabled = false;
    });

                  function changeWay(elemTbl, inpRowsElem, inpColsElem, innersVar, newWayVar){
                    if(elemTbl.className == 'standartWay'){
                      elemTbl.className = 'diffWay';
                      let tempRows = Number(inpColsElem.value); 
                      let tempCols = Number(inpRowsElem.value);
                        createTbl(tempRows, tempCols, elemTbl);
                      putTogether(innersVar, newWayVar);

                    }else{
                      elemTbl.className = 'standartWay';
                      let tempRows = Number(inpRowsElem.value);
                      let tempCols = Number(inpColsElem.value);
                        createTbl(tempRows, tempCols, elemTbl);
                      putTogether(innersVar);
                    }
                  }

                  function createStartArr(rows, cols){
                    let arr = [];
                    let quantOfCells = rows * cols;
                    for(let i = 1; i <= quantOfCells; i++){
                      arr.push(i);
                      }
                      return arr;
                  }


                  function createTbl(rows,cols, par){
                    for(let i = 0; i < rows; i++){
                      let tr = createEl('tr', par);
                        for(let j = 0; j < cols;  j++){
                          let td = createEl('td', tr);
                          td.className = 'cells';
                        }
                    }
                  }

                  function createNewWay(rows, cols){
                    let tempArr = [];
                    for(let i = 0; i < rows; i++){
                      for(let j = i; j < cols * rows; j+=rows){
                        tempArr.push(j);
                      }
                    }
                    return tempArr;
                  }

                  function createEl(tag, par ){		
                    let el = document.createElement(tag);	
                      par.appendChild(el);
                      return el;
                  }		

                  function putTogether(arr1, arr2){
                    let elems = document.querySelectorAll('.cells')
                    for(let i = 0; i < elems.length; i++){
                      if(arr2 === undefined){
                      elems[i].innerHTML = arr1[i];
                      }else{
                      elems[arr2[i]].innerHTML = arr1[i];
                      }
                    }

                  }	

}



  if(transpose != null){
      getTable();
      startActionTranspose();
  }
}
