'use strict'

module.exports = () => {
  let simpleCalc = document.getElementById('simpleCalc');
	let collector = '';
  getCalc('#simpleCalc');
  getHigthFromTop(collector);
}



function getCalc(parentSelector){

  let parentOfModule = document.querySelector(parentSelector);
  parentOfModule.insertAdjacentHTML('afterbegin', `
    <table id = 'tblCalc'>
      <tr>
        <th>C</th>
        <th id='double' colspan='3'><input type='text' id='inpCalc'></th>
      </tr>
		</table>
		<p id='infoCalc'></p>
`);

  }


function getHigthFromTop(collectorVar){
	let inp = document.getElementById('inpCalc');			
	let p = document.getElementById('infoCalc');			
	let tbl = document.getElementById('tblCalc');
  let tdsCalc = document.querySelectorAll('.tdCalc');				

	let symbols = [7,8,9,'/',4,5,6,'*', 1,2,3,'-', 0, '.', '=', '+', 'Restart', 'BS', 'Insert',''];			
		
	getTbl(tbl, symbols);
	getTargetClick(inp, p, collectorVar);
}




function deleteOfLastElem(elem){
    let arr = elem.innerHTML.split('');
    arr.pop();
    elem.innerHTML = arr.join('');
}

function createEl(tag, par){		
  let el = document.createElement(tag);	
    par.appendChild(el);
    return el;
}		


function getTbl(elem, arr){				
  let k = 0;			
    for(let i = 1; i <= 5; i++){		
      let tr = createEl('tr', elem);	
      for(let j = 1; j <= 4; j++){	
        let td = createEl('td', tr);
        td.innerHTML = arr[k];		
        td.className = 'tdCalc';
        k++;		
      }			
    }				
}						

function getTargetClick(elInp, elP, collectorVar){						
  let allSymbols = [ { expr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
                      func: (exp) => { elInp.value += exp;		
                                       elP.innerHTML += exp; } },
                    { expr: ['/', '*', '+', '-'],
                      func: (exp) => { elInp.value += exp;		
                                        elP.innerHTML += exp;
                                        elInp.value = ''; } },
                    { expr: ['='],
                      func: (exp) => { collectorVar = eval(elP.innerHTML);
                                        elInp.value = eval(elP.innerHTML);
                                        elP.innerHTML += ' = ' + elInp.value; } },
                    { expr: ['BS'],
                      func: (exp) => { afterBS(elInp, elP); } },
                    { expr: ['Insert'],
                      func: (exp) => { elInp.value += collectorVar; } },
                    { expr: ['Restart'],
                      func: (exp) => { elP.innerHTML = ''; elInp.value = ''; } } ];
                   let elems = document.querySelectorAll('.tdCalc');
              getExprOnCalc(allSymbols, elems);
   } 

function getExprOnCalc(arrs1, arr2){
                  for(let arr of arrs1){
                     for(let i = 0;  i < arr2.length; i++){
                        arr2[i].addEventListener('click', function (){
                        let inInp = arr2[i].innerHTML;
                            if(arr.expr.includes(inInp)) arr.func(inInp);
                        }); 
                     } 
                  }
}


function afterBS(elInp, elP){
    let tempa = elInp.value.split('');
      tempa.pop();
      elInp.value = tempa.join('');
      let anotherTempa = elP.innerHTML.split('');
      anotherTempa.pop();
      elP.innerHTML = anotherTempa.join('');
}


