

module.exports = () => {
  countPrice('#countPrice')
  collectActionForCounterPrice(); 
};

function collectActionForCounterPrice(){
  let priceForBigRoom = {
      '0' : [0, 11],
      '10': [10, 21],
      '20': [20, 31],
      '28': [30, 41],
      '35': [40, 51]
  };

  let saunaTypesAndPrices = {
      rus : ['Русская баня', 100],
      fin : ['Финская баня', 150],
      jap : ['Японская баня', 200],
      infr : ['Инфракрасная сауна', 250],
      scan: ['Скандинавская баня', 300],
      rom : ['Римская сауна', 350],
      turk : ['Турецкая сауна', 400],
  };

  let radioSet = document.getElementById('radioSet');
  generateRadioSet(radioSet, saunaTypesAndPrices);

  startActionCounterPrice(priceForBigRoom);
}

function countPrice(parentSelector){
  let parentOfModule = document.querySelector(parentSelector);
  console.log(parentOfModule)
    if(parentOfModule == null) return new Error;
    parentOfModule.insertAdjacentHTML('afterbegin', `
           <div id = 'rightBl'>
            <form id = 'form'>
              <fieldset>
                <legend>Калькулятор услуг</legend>
                <div id='size'>Вместимость</div>
                  <div class="range">
            <input type="range" id="priceR" min="0" max="50" step="1" >
            <input id="showRange" type="text" ><br>
            <span id = 'plusPersent'>Плюс <i id = 'numPers'></i> % к стоимости аренды бани: </span>
                  </div>
          <div id = 'radioSet'></div>
          <div id = 'oil'>
              <p> <input type = 'checkbox' id = 'massOil' value = 'oil' data-price='150'>Aroma-therapy </p>
          </div>
              <div id='size'>Ароматические добавки для пара:</div>
              <p>
              <select id = 'aroma'>
                <option value = '0' data-price = '0'>---</option>
                <option value = '1' data-price = '200'>orage (200 ед.)</option>
                <option value = '2' data-price = '210'>amla (210 ед.)</option>
                <option value = '3' data-price = '220'>mint (220 ед.)</option>
                <option value = '4' data-price = '230'>tea tree (230 ед.)</option>
                <option value = '5' data-price = '240'>flowers (240 ед.)</option>
              </select>
              </p>
    </fieldset>
            </form>
          </div>
  `);
}


function startActionCounterPrice(objPriceBig){
	let priceR = document.getElementById('priceR');
	let showRange = document.getElementById('showRange');
	let form = document.getElementById('form');
	let p = document.getElementById('cost');
	let i = document.getElementById('numPers');
	let therapy = document.getElementById('massOil');
  let radio = document.querySelectorAll('.typeSauna');
    let options = document.getElementById('aroma').options;
    getChecked(radio);

    showRange.value = priceR.value;
    getPersent(objPriceBig, i, priceR.value);

    showRange.onchange = () => (priceR.value = showRange.value, getPersent(objPriceBig, i, showRange.value));
    
    priceR.oninput = () => (showRange.value = priceR.value, getPersent(objPriceBig, i, showRange.value));
	form.addEventListener('change', function(){
		let rangePlus = priceOfRange(showRange.value, radio, objPriceBig);
        p.innerHTML = '';
        getFullPrice(rangePlus, p, options, radio, therapy);
        	});
}


function getFullPrice(resultObj, elem, elems1, elems2, elem3){
    let price = resultObj.price;
    let persent = resultObj.persent;
    let persentNum = resultObj.persentNum;
    let aromaT = elem3.checked ? elem3.dataset.price: 0;
    let smell = elems1[getSelected(elems1)].dataset.price;
    let sum = Number(price) + Number(persent) + Number(aromaT) + Number(smell); 
    let allPrices = {
        ['+' + price]: ` Цена за выбранный тип бани:  ${price} ед.;`,
        ['+' + persent]: ` Надбавка, за количество людей - ${resultObj.persentNum}%: ${resultObj.persent} ед.;`,
        ['+' + aromaT]: `Aroma-therapy: ${aromaT} ед.;`,
        ['+' + smell]: `Отдушка для пара:  ${smell} ед.;`,
    }
        let ol = createEl(elem, 'ol');
        let total = elem.insertAdjacentHTML('afterBegin',`<p>Всего: ${sum}  ед. В том числe:</p>`);
    
    for(let key in allPrices){
        if(key > 0){
            let li = createEl(ol, 'li');
            li.innerHTML = allPrices[key]; 
        }
    }   
   }

function generateRadioSet(par, obj){
    for(let key in obj){
        let p = createEl(par, 'p');
        let inp = createEl(p, 'input');
        let span = createEl(p, 'span');
        inp.type = 'radio';
        inp.dataset.price = obj[key][1];
        inp.name = 'sauna';
        inp.className = 'typeSauna';
        span.innerHTML = obj[key][0] + ` (цена - ${obj[key][1]} ед./час)`;
    }
}

function createEl(par, tag){
    let el = document.createElement(tag);
    par.appendChild(el);
    return el;
}

function getPersent(obj, elem, num){
	for(let key in obj){
		if(num > obj[key][0] && num < obj[key][1]){
			elem.innerHTML = key;
		}
	}
}



function priceOfRange(valueRange, elemsOfRadio, obj){
    //counts the sum of price of sauna and dependence quantity of people
	let elem = getChecked(elemsOfRadio);
	let price = elem.dataset.price;
	for(let key in obj){
		if(valueRange > obj[key][0] && valueRange < obj[key][1]){
			let a = Number(price) + Number(price)/100*key;
            return {
                price: price,
                persent: price / 100 * key,
                persentNum: key,
                };
            }
	}
}


function getSelected(elems){
    //shows index of selected option
	for(let i = 0; i < elems.length; i++){
			if(elems[i].selected){
				return i;	
			}
	}
}


function getChecked(elems){
    //shows index of checked elems (radio or checkbox);
	for(let i = 0; i < elems.length; i++){
			if(elems[i].checked){
				return elems[i];	
			}
	}
}


