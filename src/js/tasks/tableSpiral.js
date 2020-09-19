'use strict'

module.exports = () => {

    getHTMLOfBlockSpiral('#blockSpiral');
    startProcessBlockSpiral();
}


function getHTMLOfBlockSpiral(parentSelector){
  let parentOfModule = document.querySelector(parentSelector);

    parentOfModule.insertAdjacentHTML('afterbegin', 
          `<input id='putCols' placeholder='put int number < 16' >
            <input type='submit' id='buttTableSpiral'>
                <div id='elemTableSpiral'>
                  <table id='tblSpiral' class='middle'></table>
                </div>`);

  }


function startProcessBlockSpiral(){
  let butt = document.getElementById('buttTableSpiral');

  butt.addEventListener('click', function(){
  let tblSpiral = document.getElementById('tblSpiral');
  let inp = document.getElementById('putCols');
  let cols = Number(inp.value);
    if (inp.value > 15) return;
    
    tblSpiral.innerHTML = '';
    let flat = getFlatArr(collectArrsForBlockSpiral(cols));
    let arr = [0,...flat];
    createTblSpiral(tblSpiral, cols);
    let inners = createInnersForBlockSpiral(cols);
    let tds1 = document.querySelectorAll('.spiralTd');
    putTogetherSpiral(tds1, arr, inners);
  });
  
}


        function collectArrsForBlockSpiral(rows){
          let n = 0;
          let k = 0;
          let arr = getInnersForEachStep(rows);
          let tempArrs = [];
          let loops = arr.length / 4;
            for(let i = 0; i < loops; i++){
          arr[k] = createPlus(n, arr[k], 1);
              tempArrs.push(arr[k]);
          n = arr[k][arr[k].length - 1];
              k++;	
          arr[k] = createPlus(n, arr[k], rows);
          n = arr[k][arr[k].length - 1];
              tempArrs.push(arr[k]);
              k++;	
          arr[k] = createMinus(n, arr[k], 1);
          n = arr[k][arr[k].length - 1];
              tempArrs.push(arr[k]);
              k++;	
          arr[k] = createMinus(n, arr[k], rows);
          n = arr[k][arr[k].length - 1];
              tempArrs.push(arr[k]);
              k++;	
            }
            return tempArrs;
        }

        function putTogetherSpiral(elems, arr1, arr2){
          for(let i = 0; i < elems.length; i++){
            elems[arr1[i]].innerHTML = arr2[i];
          }
        }	

        function createInnersForBlockSpiral(rows){
          let tempArr = [];
          let el = rows ** 2;
          for(let i = 1; i <= el; i++){
            tempArr.push(i);
          }
            return tempArr;
        }



        function createTblSpiral(par, rows){
          for(let i = 0; i < rows ; i++){
            let tr = createEl('tr', par);
            tr.className = 'class' + rows;
              for(let j = 0; j < rows;  j++){
                let td = createEl('td', tr);
                td.dataset.col = j + 1; 
                td.className = 'spiralTd';
              }
          }
        }

        function getInnersForEachStep(rows){
          let quantity = [rows - 1];
          for(let i = 1; i < rows; i++){
            quantity.push(rows - i);
            quantity.push(rows - i);
          }
            return quantity;
        }


        function getFlatArr(arrs){
          let tempArr = [];
          for(let elem of arrs){
            if(Array.isArray(elem)){
              tempArr = tempArr.concat(getFlatArr(elem));
            }else{
              tempArr.push(elem);
            }
          }
            return tempArr;
        }

        function createEl(tag, par ){		
          let el = document.createElement(tag);	
            par.appendChild(el);
            return el;
        }		

        function createPlus(start, rows, diff){
          let tempArr = [];
          let quant = rows * diff;
            for(let i = start+diff; i <= start + quant; i+=diff){
              tempArr.push(i);
            }
          return tempArr;
        }	

        function createMinus(start, rows, diff){
          let quant = rows * diff;
          let temparr = [];
            for(let i = start-diff; i > (start - quant) - diff; i-=diff){
            temparr.push(i);
            }
            return temparr;
        }




