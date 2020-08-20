'use strict'

module.exports = () => {



let zapretSos = function(parentId, idTable, classTh, classTr, classTd){


let zapretSosedyam = document.getElementById(parentId);
zapretSosedyam.insertAdjacentHTML('afterbegin', `
              <table id = 'tblZapretSosedyam'  class = 'middle table table-bordered'>
              <tr class = 'trZapret'><th class = 'thZapret'>Name</th><th class = 'thZapret'>date</th><th class = 'thZapret'>Plants</th><th class = 'thZapret'>num</th><th class = 'thZapret'>num</th></tr>
              <tr class = 'trZapret'><td class = 'tdZapret'>Mila</td><td class = 'tdZapret'>10/18/2002</td><td class = 'tdZapret'>mango</td><td class = 'tdZapret'>23</td><td class = 'tdZapret'>23</td></tr>
              <tr class = 'trZapret'><td class = 'tdZapret'>Ruslan</td><td class = 'tdZapret'>09/25/1999</td><td class = 'tdZapret'>orange</td><td class = 'tdZapret'>15</td><td class = 'tdZapret'>23</td></tr>
              <tr class = 'trZapret'><td class = 'tdZapret'>James</td><td class = 'tdZapret'>12/19/1998</td><td class = 'tdZapret'>apple</td><td class = 'tdZapret'>55</td><td class = 'tdZapret'>23</td></tr>
              <tr class = 'trZapret'><td class = 'tdZapret'>Karina</td><td class = 'tdZapret'>04/17/1999</td><td class = 'tdZapret'>carrot</td><td class = 'tdZapret'>88</td><td class = 'tdZapret'>23</td></tr>
              <tr class = 'trZapret'><td class = 'tdZapret'>Tanya</td><td class = 'tdZapret'>11/15/1996</td><td class = 'tdZapret'>peach</td><td class = 'tdZapret'>13</td><td class = 'tdZapret'>23</td></tr>
              <tr class = 'trZapret'><td class = 'tdZapret'>Sofia</td><td class = 'tdZapret'>05/15/2001</td><td class = 'tdZapret'>yukka</td><td class = 'tdZapret'>25</td><td class = 'tdZapret'>23</td></tr>
			</table>
`);


        let tbl = document.getElementById(idTable);
        tbl.onclick = funcZapretSosedyam;
        putColsNumbers();

        function funcZapretSosedyam(event){	
          let tds = tbl.querySelectorAll(classTd);
          let ths = tbl.querySelectorAll(classTh);
          let trs = tbl.querySelectorAll(classTr);
          if(event.target.tagName != 'TD') return;
            event.target.style.color = 'red';
          let numberNum = event.target.dataset.num;
          let arrTD = extractNums(numberNum);
            for(let i = 0; i < tds.length; i++){
              for(let elem of arrTD){
                if(tds[i].dataset.num == elem){
                    tds[i].style.backgroundColor = 'blue';
                    tds[i].classList = 'none';
                }
              }
            }

                      function extractNums(num){
                          let arr = [];
                          let n = num;
                          let a = num;
                          let b = Number(num);
                          arr.push(n-=11, ++n, ++n, --a, a+=2, b+=9, ++b, ++b); 
                        return arr;	
                      }

        }	
          
          
        function putColsNumbers(){
          let trs = tbl.querySelectorAll(classTr);

          for(let i = 1; i < trs.length; i++){
            let tds2 = trs[i].querySelectorAll('td');
            for(let j = 0; j < tds2.length; j++){
              tds2[j].dataset.col = j + 1;
              tds2[j].dataset.num = String(i) + (j+1);
            }
          }
        }


}

zapretSos('zapretSosedyam','tblZapretSosedyam', '.thZapret', '.trZapret', '.tdZapret')

}
