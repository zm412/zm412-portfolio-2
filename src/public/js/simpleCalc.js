'use strict'

let simpleCalc = document.getElementById('simpleCalc');
simpleCalc.insertAdjacentHTML('afterbegin', `
		<table id = 'tblCalc'>
    <tr><th>C</th><th id = 'double' colspan = '3'><input type = 'text' id = 'inpCalc' ></th></tr>
		</table>
		<p id = 'infoCalc'></p>
`);


	let collector = '';
getHigthFromTop();

function getHigthFromTop(){
	let inp = document.getElementById('inpCalc');			
	let p = document.getElementById('infoCalc');			
	let tbl = document.getElementById('tblCalc');

	let symbols = [7,8,9,'/',4,5,6,'*', 1,2,3,'-', 0, '.', '=', '+', 'Restart', 'BS', 'Insert',''];			
		
	getTbl(tbl, symbols);
	getTargetClick('td', inp, p);

	
                function deleteOfLastElem(elem){
                    let arr = elem.innerHTML.split('');
                    arr.pop();
                    elem.innerHTML = arr.join('');
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

                function getTargetClick(tag, elInp, elP){						
                  let elems = document.querySelectorAll('.tdCalc');				

                  for(let i = 0;  i < elems.length; i++){				
                    elems[i].addEventListener('click', function getExc(){		
                      let inInp = this.innerHTML;

                    if(inInp >= 0 || inInp == '.'){	
                      elInp.value += inInp;		
                      elP.innerHTML += inInp;
                    }

                    else if(inInp == '/' || inInp == '*' || inInp == '+' || inInp == '-'){
                      elInp.value += inInp;		
                      elP.innerHTML += inInp;
                      elInp.value = '';

                    }else if(inInp == '='){	
                      collector = eval(elP.innerHTML);
                      elInp.value = eval(elP.innerHTML);
                      elP.innerHTML += ' = ' + elInp.value;
                      
                    }else if(inInp == 'BS'){
                      let tempa = elInp.value.split('');
                      tempa.pop();
                      elInp.value = tempa.join('');
                      let anotherTempa = elP.innerHTML.split('');
                      anotherTempa.pop();
                      elP.innerHTML = anotherTempa.join('');

                    }else if(inInp == 'Insert'){
                      elInp.value += collector;

                    }else if(inInp == 'Restart'){
                      elP.innerHTML = '';
                      elInp.value = '';
                    };
                          
                      });
                    }	
                }			


}


