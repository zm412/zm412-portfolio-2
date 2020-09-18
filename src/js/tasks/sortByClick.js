'use strict'

module.exports = () => {
      getTableSortByClick('#sortByClick');
      startSortByClick();
}



  function getTableSortByClick(parentSelector){
  let parentOfModule = document.querySelector(parentSelector);
    if(parentOfModule == null) return new Error;
parentOfModule.insertAdjacentHTML('afterbegin', `
  		<table id='tblSortByClick' class='middle table table-bordered'>
		<tr class='trSort'><th class='thSort'>SortByName</th><th class='thSort'>SortByDate</th><th class='thSort'>BackSort</th><th class='thSort'>SortNumbers</th></tr>
		<tr class='trSort'><td class='tdSort'>Mila</td><td class='tdSort'>10/18/2002</td><td class='tdSort'>mango</td><td class='tdSort'>23</td></tr>
		<tr class='trSort'><td class='tdSort'>Ruslan</td><td class='tdSort'>09/25/1999</td><td class='tdSort'>orange</td><td class='tdSort'>15</td></tr>
		<tr class='trSort'><td class='tdSort'>James</td><td class='tdSort'>12/19/1998</td><td class='tdSort'>apple</td><td class='tdSort'>55</td></tr>
		<tr class='trSort'><td class='tdSort'>Karina</td><td class='tdSort'>04/17/1999</td><td class='tdSort'>carrot</td><td class='tdSort'>88</td></tr>
		<tr class='trSort'><td class='tdSort'>Tanya</td><td class='tdSort'>11/15/1996</td><td class='tdSort'>peach</td><td class='tdSort'>13</td></tr>
    <tr class='trSort'><td class='tdSort'>Sofia</td><td class='tdSort'>05/15/2001</td><td class='tdSort'>yukka</td><td class='tdSort'>25</td></tr>
			</table>
`)

}




function startSortByClick(){
  let trs = document.querySelectorAll('.trSort');
  let ths = trs[0].querySelectorAll('.thSort');

	ths[0].addEventListener('click', function(){
	putActionsTogether(sortByName, ths[0].innerHTML);			
		});

	ths[2].addEventListener('click', function(){
	putActionsTogether(backSort, ths[2].innerHTML);			
		});
	
	ths[3].addEventListener('click', function(){
	putActionsTogether(compareNumbers, ths[3].innerHTML);	
	});

	ths[1].addEventListener('click', function(){
	putActionsTogether(compareDates, ths[1].innerHTML);	
	});
	


}


                function putActionsTogether(func, key){
                  let tds = document.querySelectorAll('.tdSort');
                  let trs = document.querySelectorAll('.trSort');
                  let ths = trs[0].querySelectorAll('.thSort');
                    let comlpArr = createObjFromInners(trs, ths);
                    let newComplArr = func(comlpArr, key);
                    let changedNewComplArr = getSimpleArr(newComplArr);
                    putArrInTbl(changedNewComplArr, tds);
                }	

                function createObjFromInners(trsElem, thsElem){
                  let infFromTbl = [];
                  for(let i = 1; i < trsElem.length; i++){
                    let tdsElem = trsElem[i].querySelectorAll('td');
                    let oneLine = {};
                    for(let j = 0; j < thsElem.length; j++){
                    oneLine[thsElem[j].innerHTML] = tdsElem[j].innerHTML;
                  }
                    infFromTbl.push(oneLine);
                }
                return infFromTbl;
                }
                    

                function getSimpleArr(arrs){
                  let tempArr = [];
                  for(let elem of arrs){
                    for(let key in elem){
                      tempArr.push(elem[key]);
                    }
                  }
                    return tempArr;
                }
                    

                function putArrInTbl(arr, tdsElem){
                  for(let i = 0; i < tdsElem.length; i++){
                    tdsElem[i].innerHTML = arr[i];
                  }}



                function sortByName(arr, key){
                  arr.sort(function(a, b){
                      let nameA = a[key].toLowerCase();
                      let nameB = b[key].toLowerCase();
                      if(nameA < nameB) return -1;
                      if(nameA > nameB) return 1;
                      return 0; 
                });
                    return arr;
                }
 

                function backSort(arr, key){
                  return sortByName(arr, key).reverse();
               }



                function compareDates(arr, key){
                  arr.sort(function(a,b){
                  let dateA = new Date (a[key]);
                  let dateB = new Date(b[key]);
                  return dateA - dateB; 
                  });
                    return arr;
                }
                  
                function compareNumbers(arr, key){
                  arr.sort(function(a,b){
                    return a[key] - b[key];
                  });
                    return arr;
                }
                 


