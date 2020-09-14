'use strict'

module.exports = () => {

let blockSortBy = document.getElementById('sortByClick');

  function getTable(){
blockSortBy.insertAdjacentHTML('afterbegin', `
  		<table id = 'tblSortByClick' class = 'middle table table-bordered'>
		<tr class = 'trSort'><th class = 'thSort'>Name</th><th class = 'thSort'>dateOfSomething</th><th class = 'thSort'>Plants</th><th class = 'thSort'>num</th></tr>
		<tr class = 'trSort'><td class = 'tdSort'>Mila</td><td class = 'tdSort'>10/18/2002</td><td class = 'tdSort'>mango</td><td class = 'tdSort'>23</td></tr>
		<tr class = 'trSort'><td class = 'tdSort'>Ruslan</td><td class = 'tdSort'>09/25/1999</td><td class = 'tdSort'>orange</td><td class = 'tdSort'>15</td></tr>
		<tr class = 'trSort'><td class = 'tdSort'>James</td><td class = 'tdSort'>12/19/1998</td><td class = 'tdSort'>apple</td><td class = 'tdSort'>55</td></tr>
		<tr class = 'trSort'><td class = 'tdSort'>Karina</td><td class = 'tdSort'>04/17/1999</td><td class = 'tdSort'>carrot</td><td class = 'tdSort'>88</td></tr>
		<tr class = 'trSort'><td class = 'tdSort'>Tanya</td><td class = 'tdSort'>11/15/1996</td><td class = 'tdSort'>peach</td><td class = 'tdSort'>13</td></tr>
    <tr class = 'trSort'><td class = 'tdSort'>Sofia</td><td class = 'tdSort'>05/15/2001</td><td class = 'tdSort'>yukka</td><td class = 'tdSort'>25</td></tr>
			</table>
`)

}




function startSortByClick(){
  let tds = document.querySelectorAll('.tdSort');
  let trs = document.querySelectorAll('.trSort');
  let ths = trs[0].querySelectorAll('.thSort');

	ths[0].addEventListener('click', function(){
	putActionsTogether(sortByName);			
		});

	ths[2].addEventListener('click', function(){
	putActionsTogether(simpleSort);			
		});
	
	ths[3].addEventListener('click', function(){
	putActionsTogether(compareNumbers);	
	});

	ths[1].addEventListener('click', function(){
	putActionsTogether(compareDates);	
	});
	
                function putActionsTogether(func){
                    let comlpArr = createObjFromInners();
                    let newComplArr = func(comlpArr);
                    let changedNewComplArr = getSimpleArr(newComplArr);
                    putArrInTbl(changedNewComplArr);
                }	

                function createObjFromInners(){
                  let infFromTbl = [];
                  for(let i = 1; i < trs.length; i++){
                    let tds = trs[i].querySelectorAll('td');
                    let oneLine = {};
                    for(let j = 0; j < ths.length; j++){
                    oneLine[ths[j].innerHTML] = tds[j].innerHTML;
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
                    

                function putArrInTbl(arr){
                  for(let i = 0; i < tds.length; i++){
                    tds[i].innerHTML = arr[i];
                  }}



                function sortByName(arr){
                  arr.sort(function(a, b){
                  let nameA = a.Name.toLowerCase();
                  let nameB = b.Name.toLowerCase();
                  if(nameA < nameB)
                    return -1;
                  
                  if(nameA > nameB)
                    return 1;
                      
                    return 0; 
                });
                    return arr;
                }


                function compareDates(arr){
                  arr.sort(function(a,b){
                  let dateA = new Date (a.dateOfSomething);
                  let dateB = new Date(b.dateOfSomething);
                  return dateA - dateB; 
                  });
                    return arr;
                }
                  
                function compareNumbers(arr){
                  arr.sort(function(a,b){
                  return a.num - b.num;
                  });
                    return arr;
                }
                  
                function simpleSort(arr){
                  arr.sort(function(a, b){
                  let nameA = a.Plants.toLowerCase();
                  let nameB = b.Plants.toLowerCase();
                  if(nameA < nameB)
                    return -1;
                  
                  if(nameA > nameB)
                    return 1;
                      
                    return 0; 
                });
                    return arr;
                }



}


if(blockSortBy != null){
      getTable();
      startSortByClick();
}

}
