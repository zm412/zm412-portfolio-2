(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})({"./img/bgBody.jpg":function(a,b,c){'use strict';c.r(b),b['default']=c.p+'img/bgBody.jpg'},"./img/logo.png":function(a,b,c){'use strict';c.r(b),b['default']=c.p+'img/logo.png'},"./img/sendPicture.js":function(a,b,c){var d=c('./img/logo.png'),e=c('./img/bgBody.jpg');a.exports=function(){d,e}},"./js/ActiveLink.js":function(a){function b(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function c(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function d(a,b,d){return b&&c(a.prototype,b),d&&c(a,d),a}var e=function(){function a(c,d,e){b(this,a),this.selector=c,this.eventElemSelector=d,this.parentSelector=e,this.eventElem=document.querySelector(this.eventElemSelector)}return d(a,[{key:'proc',value:function(){var a=this;null!=this.eventElem&&this.eventElem.addEventListener('click',function(b){if('A'==b.target.tagName)for(var c=document.querySelectorAll(a.selector),d=0;d<c.length;d++)c[d].innerHTML==b.target.innerHTML?c[d].closest(a.parentSelector).classList.add('active'):c[d].closest(a.parentSelector).classList.remove('active')})}}]),a}();a.exports=e},"./js/about/about.js":function(a,b,c){var d=c('./js/about/aboutForm.js');a.exports=function(){d()}},"./js/about/aboutForm.js":function(a){a.exports=function(){function a(){var a=document.querySelector('#buttAbout');a.onclick=function(a){a.preventDefault();var b=new XMLHttpRequest,c={email:document.querySelector('#exampleInputEmail1'),check:document.querySelector('#exampleCheck1'),moreInfo:document.querySelector('#exampleCheck2')};b.open('POST','/api/page_about/getlett',!0),b.setRequestHeader('Content-Type','application/json'),b.onload=function(){var a=JSON.parse(b.response);console.log(a)},b.send(JSON.stringify(c))}}var b=document.querySelector('.formGetLetters'),c=document.querySelector('.about-success');null!=b&&function(){b.insertAdjacentHTML('afterbegin','\n\n      <h3>\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0435\u0436\u0435\u0433\u043E\u0434\u043D\u0443\u044E \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443!</h3>\n        <form method=\'post\' action=\'\'>\n          <div class="form-group">\n            <label for="exampleInputEmail1">Email address</label>\n              <input type="email" class="form-control" name=\'email\' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n              <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>\n            </div>\n             \n              <div class="form-check">\n                <input type="checkbox" class="form-check-input" name=\'check\' id="exampleCheck1">\n                <label class="form-check-label" for="exampleCheck1">Agreement for sending media-files (free pictures of funny animals)</label>\n              </div>\n \n              <div class="form-check">\n                <input type="checkbox" class="form-check-input" name=\'moreInfo\' id="exampleCheck2">\n                <label class="form-check-label" for="exampleCheck2">Show more information about this site</label>\n              </div>\n \n              <button type="submit" id=\'buttAbout\' class="btn btn-primary">Submit</button>\n            </form>\n \n    '),a()}()}},"./js/activeHeader.js":function(a){'use strict';function b(a,b){var d;if('undefined'==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(d=c(a))||b&&a&&'number'==typeof a.length){d&&(a=d);var e=0,f=function(){};return{s:f,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(a){throw a},f:f}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var g,h=!0,i=!1;return{s:function(){d=a[Symbol.iterator]()},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d.return||d.return()}finally{if(i)throw g}}}}function c(a,b){if(a){if('string'==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return'Object'===c&&a.constructor&&(c=a.constructor.name),'Map'===c||'Set'===c?Array.from(a):'Arguments'===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?d(a,b):void 0}}function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}a.exports=function(){var a,c=document.querySelectorAll('.headactive'),d=b(c);try{for(d.s();!(a=d.n()).done;){var e=a.value;e.href==window.location.href&&e.classList.add('active')}}catch(a){d.e(a)}finally{d.f()}}},"./js/contacts/auth.js":function(a){a.exports=function(){function a(a){var b=document.querySelectorAll(a+' input');b.forEach(function(a){a.addEventListener('focus',function(){b.forEach(function(a){return a.classList.remove('border-danger')});var a=document.querySelector('#errorParagraph');null!=a&&a.parentNode.removeChild(a)})})}function b(b,c){var d='.'+b,e=new XMLHttpRequest;e.open('POST','/api/auth/'+b,!0),e.setRequestHeader('Content-Type','application/json'),e.onload=function(){var b=JSON.parse(e.response);b.ok?document.querySelector(d).insertAdjacentHTML('afterbegin','<p class=\'border-success bg-success\' id=\'errorParagraph\'>Very Well!</p>'):(document.querySelector(d).insertAdjacentHTML('afterbegin','<p class=\'border-danger bg-warning\' id=\'errorParagraph\'>'.concat(b.error,'</p>')),b.fields&&b.fields.forEach(function(a){return document.querySelector(''.concat(d,' input[name=').concat(a,']')).classList.add('border-danger')}),a(d))},e.send(JSON.stringify(c))}var c=document.querySelector('.getAuth');c&&(function(){c.insertAdjacentHTML('afterbegin','\n\n      <form action="" method=\'post\' class=\'login\'>\n      <h2>Enter</h2>\n      <div class=\'blockAuth\'>\n        <div class="form-group">\n          <label for="login-login">Login</label>\n          <input id="login-login" type="text" class="form-control"  name="login" />\n        </div>\n        <div class="form-group">\n          <label for="login-password">Password</label>\n          <input id="login-password" type="text" class="form-control"  name="password" />\n        </div>\n\n        <div class="buttons">\n          <button class="switch-button btn btn-primary bg-warning " type="submit">Registration</button>\n          <button class="btn btn-primary btn login-button" type="submit">Sign in</button>\n        </div>\n      </div>\n          \n      </form>\n \n      <form action="" method=\'post\' class=\'register\'>\n      <h2>Registration</h2>\n      <div class=\'blockAuth\'>\n        <div class="form-group">\n\n    <label for="register-login">Login</label>\n    <input id="register-login" type="text" class="form-control"  name="login" />\n\n        </div>\n        <div class="form-group">\n\n    <label for="register-password">Password</label>\n    <input id="register-password" type="text" class="form-control"  name="password" />\n\n        </div>\n\n        <div class="form-group">\n\n    <label for="register-password-confirm">Confirm password</label>\n    <input id="register-password-confirm" type="text" class="form-control"  name="passwordConfirm" />\n\n        </div>\n        <div class="buttons">\n          <button class="btn btn-primary switch-button bg-warning" type="submit">Sing in</button>\n          <button class="btn btn-primary register-button " type="submit">Registration</button>\n        </div>\n      </div>\n          \n      </form>\n   \n      ')}(),function(){var a=document.querySelector('.switch-button'),b=document.querySelector('.login'),c=document.querySelector('.register'),d=!0;a.addEventListener('click',function(a){a.preventDefault();var e=document.querySelectorAll('.register input');e.forEach(function(a){return a.value=''}),d?(d=!1,c.style.display='inline',b.style.display='none'):(d=!0,c.style.display='none',b.style.display='inline')})}(),function(){document.querySelector('.register-button').onclick=function(a){a.preventDefault();var c={login:document.querySelector('#register-login').value,password:document.querySelector('#register-password').value,passwordConfirm:document.querySelector('#register-password-confirm').value};b('register',c)}}(),function(){document.querySelector('.login-button').onclick=function(a){a.preventDefault();var c={login:document.querySelector('#login-login').value,password:document.querySelector('#login-password').value};b('login',c)}}())}},"./js/gallery/counterPrice.js":function(a){function b(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a.exports=function(){(function(a){function c(a,c,e,f,h){var i,j=a.price,k=a.persent,l=a.persentNum,m=h.checked?h.dataset.price:0,n=e[g(e)].dataset.price,o=(i={},b(i,'+'+j,' \u0426\u0435\u043D\u0430 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0442\u0438\u043F \u0431\u0430\u043D\u0438:  '.concat(j,' \u0435\u0434.;')),b(i,'+'+k,' \u041D\u0430\u0434\u0431\u0430\u0432\u043A\u0430, \u0437\u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043B\u044E\u0434\u0435\u0439 - '.concat(a.persentNum,'%: ').concat(a.persent,' \u0435\u0434.;')),b(i,'+'+m,'Aroma-therapy: '.concat(m,' \u0435\u0434.;')),b(i,'+'+n,'\u041E\u0442\u0434\u0443\u0448\u043A\u0430 \u0434\u043B\u044F \u043F\u0430\u0440\u0430:  '.concat(n,' \u0435\u0434.;')),i),p=d(c,'ol'),q=c.insertAdjacentHTML('afterBegin','<p>\u0412\u0441\u0435\u0433\u043E: '.concat(+j+ +k+ +m+ +n,'  \u0435\u0434. \u0412 \u0442\u043E\u043C \u0447\u0438\u0441\u043Be:</p>'));for(var r in o)if(0<r){var s=d(p,'li');s.innerHTML=o[r]}}function d(a,b){var c=document.createElement(b);return a.appendChild(c),c}function e(a,b,c){for(var d in a)c>a[d][0]&&c<a[d][1]&&(b.innerHTML=d)}function f(a,b,c){var d=h(b),e=d.dataset.price;for(var f in c)if(a>c[f][0]&&a<c[f][1]){return{price:e,persent:e/100*f,persentNum:f}}}function g(a){for(var b=0;b<a.length;b++)if(a[b].selected)return b}function h(a){for(var b=0;b<a.length;b++)if(a[b].checked)return a[b]}var i=document.querySelector(a);if(null==i)return new Error;i.insertAdjacentHTML('afterbegin','\n\n           <div id = \'rightBl\'>\n            <form id = \'form\'>\n              <fieldset>\n                <legend>\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0443\u0441\u043B\u0443\u0433</legend>\n                      \n                <div id=\'size\'>\u0412\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C</div>\n                  <div class="range">\n            <input type="range" id="priceR" min="0" max="50" step="1" >\n            <input id="showRange" type="text" ><br>\n            <span id = \'plusPersent\'>\u041F\u043B\u044E\u0441 <i id = \'numPers\'></i> % \u043A \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0430\u0440\u0435\u043D\u0434\u044B \u0431\u0430\u043D\u0438: </span>\n                  </div>\n\n          <div id = \'radioSet\'></div>\n\n          <div id = \'oil\'>\n              <p>\n          <input type = \'checkbox\' id = \'massOil\' value = \'oil\' data-price=\'150\'>Aroma-therapy\n              </p>\n          </div>\n\n              <div id=\'size\'>\u0410\u0440\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043A\u0438 \u0434\u043B\u044F \u043F\u0430\u0440\u0430:</div>\n              <p>\n              <select id = \'aroma\'>\n                <option value = \'0\' data-price = \'0\'>---</option>\n                <option value = \'1\' data-price = \'200\'>orage (200 \u0435\u0434.)</option>\n                <option value = \'2\' data-price = \'210\'>amla (210 \u0435\u0434.)</option>\n                <option value = \'3\' data-price = \'220\'>mint (220 \u0435\u0434.)</option>\n                <option value = \'4\' data-price = \'230\'>tea tree (230 \u0435\u0434.)</option>\n                <option value = \'5\' data-price = \'240\'>flowers (240 \u0435\u0434.)</option>\n              </select>\n                  </p>\n    </fieldset>\n            </form>\n          </div>\n  ');var j={0:[0,11],10:[10,21],20:[20,31],28:[30,41],35:[40,51]},k=document.getElementById('radioSet');(function(a,b){for(var c in b){var e=d(a,'p'),f=d(e,'input'),g=d(e,'span');f.type='radio',f.dataset.price=b[c][1],f.name='sauna',f.className='typeSauna',g.innerHTML=b[c][0]+' (\u0446\u0435\u043D\u0430 - '.concat(b[c][1],' \u0435\u0434./\u0447\u0430\u0441)')}})(k,{rus:['\u0420\u0443\u0441\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F',100],fin:['\u0424\u0438\u043D\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F',150],jap:['\u042F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F',200],infr:['\u0418\u043D\u0444\u0440\u0430\u043A\u0440\u0430\u0441\u043D\u0430\u044F \u0441\u0430\u0443\u043D\u0430',250],scan:['\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F',300],rom:['\u0420\u0438\u043C\u0441\u043A\u0430\u044F \u0441\u0430\u0443\u043D\u0430',350],turk:['\u0422\u0443\u0440\u0435\u0446\u043A\u0430\u044F \u0441\u0430\u0443\u043D\u0430',400]});var l=document.querySelectorAll('.typeSauna');(function(){var a=document.getElementById('priceR'),b=document.getElementById('showRange'),d=document.getElementById('form'),g=document.getElementById('cost'),k=document.getElementById('numPers'),i=document.getElementById('massOil'),m=document.getElementById('aroma').options;h(l),b.value=a.value,e(j,k,a.value),b.onchange=function(){return a.value=b.value,e(j,k,b.value)},a.oninput=function(){return b.value=a.value,e(j,k,b.value)},d.addEventListener('change',function(){var a=f(b.value,l,j);g.innerHTML='',c(a,g,m,l,i)})})()})('#countPrice')}},"./js/gallery/gallery.js":function(a,b,c){var d=c('./js/gallery/karusel.js'),e=c('./js/gallery/counterPrice.js');a.exports=function(){d(),e()}},"./js/gallery/karusel.js":function(a){function b(a,b){var d;if('undefined'==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(d=c(a))||b&&a&&'number'==typeof a.length){d&&(a=d);var e=0,f=function(){};return{s:f,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(a){throw a},f:f}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var g,h=!0,i=!1;return{s:function(){d=a[Symbol.iterator]()},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d.return||d.return()}finally{if(i)throw g}}}}function c(a,b){if(a){if('string'==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return'Object'===c&&a.constructor&&(c=a.constructor.name),'Map'===c||'Set'===c?Array.from(a):'Arguments'===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?d(a,b):void 0}}function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}a.exports=function(){function a(){function a(a,b,d){for(var e=document.querySelectorAll('.view'),f=document.getElementById('pic'),g=d,h=0;g<d+4;g++,h++){if(void 0!=a[g]||(g=0),4<=h)return;e[h].innerHTML=a[g],g==d?(e[0].classList.add('active'),c(b,g,f)):e[h].classList.remove('active')}}function c(a,b,c){var d=document.querySelectorAll('.dot'),e=0,h=document.getElementById('prevTb'),i=document.getElementById('nextTb');f(b,e,d,c,a),h.addEventListener('click',function(){0<e?e--:e=a[b].length-1,f(b,e,d,c,a)}),i.addEventListener('click',function(){e>=a[b].length-1?e=0:e++,f(b,e,d,c,a)}),g(d,c,b,a)}function f(a,b,c,d,e){d.src=e[a][b],h(c,b)}function g(a,b,c,d){for(var e=function(e){a[e].addEventListener('click',function(){h(a,e),b.src=d[c][e]})},f=0;f<a.length;f++)e(f)}function h(a,c){var d,e=document.querySelector('.num'),f=b(a);try{for(f.s();!(d=f.n()).done;){var g=d.value;c==g.dataset.num-1?(g.classList.add('active'),e.innerHTML=g.dataset.num+' / 3'):g.classList.remove('active')}}catch(a){f.e(a)}finally{f.f()}}var i=document.querySelector('.menuGallery'),j=document.getElementById('prev'),k=document.getElementById('next'),l=0;i.onclick=function(a){if('A'==a.target.tagName)for(var b=document.querySelectorAll('a'),f=document.getElementById('pic'),g=0;g<b.length;g++)if(b[g].innerHTML==a.target.innerHTML){b[g].classList.add('active');var h=d.indexOf(b[g].innerHTML,0);c(e,h,f)}else b[g].classList.remove('active')},a(d,e,l),j.addEventListener('click',function(){0<l?l--:l=d.length-1,a(d,e,l)}),k.addEventListener('click',function(){l>=d.length-1?l=0:l++,a(d,e,l)})}var c=document.querySelector('#group'),d=['\u0420\u0443\u0441\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F','\u0420\u0438\u043C\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F','\u0424\u0438\u043D\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F','\u042F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u0431\u0430\u043D\u044F','\u0418\u043D\u0444\u0440\u0430\u043A\u0440\u0430\u0441\u043D\u0430\u044F','\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u043A\u0430\u044F','\u0422\u0443\u0440\u0435\u0446\u043A\u0430\u044F \u0441\u0430\u0443\u043D\u0430'],e=[['./images/rusSauna1.jpg','./images/rusSauna2.jpg','./images/rusSauna3.jpg'],['./images/rimSauna1.jpg','./images/rimSauna2.jpg','./images/rimSauna3.jpg'],['./images/finnSauna1.jpg','./images/finnSauna2.jpg','./images/finnSauna3.jpg'],['./images/japanSauna1.jpg','./images/japanSauna2.jpg','./images/japanSauna3.jpg'],['./images/infraSauna1.jpg','./images/infraSauna2.jpg','./images/infraSauna3.jpg'],['./images/scandinavianSauna1.jpg','./images/scandinavianSauna2.jpg','./images/scandinavianSauna3.jpg'],['./images/turkishSauna1.jpg','./images/turkishSauna2.jpg','./images/turkishSauna3.jpg']];null!=c&&function(){c.insertAdjacentHTML('afterbegin','\n        <div class="tabs">\n          <div id = \'unic\' class ="tabD">\n            <div class=\'num\'></div>\n            <img src = \'\' alt = \'\' id = \'pic\' width = \'100%\' height = \'100%\'>\n          </div>\n            <div class = \'sideTb\'>\n            <button id = \'prevTb\'>&#10094</button>\n            <button id = \'nextTb\'>&#10095</button>\n          </div>\n        </div>\n            <div id = \'dts\' style="text-align:center">\n              <span class="dot" data-num = "1"></span>\n              <span class="dot" data-num = "2"></span>\n              <span class="dot" data-num = "3"></span>\n            </div>\n        <div class="menuGallery">\n        <button id = \'prev\'>&#10094</button>\n          <a href="#" class=\'view\'></a>\n          <a href="#" class = \'view\'></a>\n          <a href="#" class = \'view\'></a>\n          <a href="#" class = \'view\'></a>\n        <button id = \'next\'>&#10095</button>\n        </div>\n    '),a()}('#group')}},"./js/tasks/accord.js":function(a,b,c){'use strict';a.exports=function(){var a=c('./js/ActiveLink.js'),b=new a('.linkTo a','#accord','.task');b.proc()}},"./js/tasks/gameX0.js":function(a){'use strict';a.exports=function(){function a(){function b(){this.innerHTML=o,o=p(o),this.removeEventListener('click',b),n++;var a=d(j);'X'===a?(h.innerHTML='X',e(j,b)):'0'===a?(h.innerHTML='0',e(j,b)):8<n&&void 0===a&&(h.innerHTML='Drow')}function d(a){for(var b,c,d,e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],f=0;f<e.length;f++)d=e[f],b=[a[d[0]].innerHTML,a[d[1]].innerHTML,a[d[2]].innerHTML],b.every(function(a){return'X'===a})?c='X':b.every(function(a){return'0'===a})&&(c='0');return c}function e(a,b){for(var c=0;c<a.length;c++)a[c].removeEventListener('click',b)}function f(a,b){var c=document.createElement(a);return b.appendChild(c),c}var g=document.getElementById('tblGameX0');(function(a){for(var b,c=0;3>c;c++){b=f('tr',a);for(var d,e=0;3>e;e++)d=f('td',b),d.className='tdGameX0'}})(g);var h=document.getElementById('who'),i=document.getElementById('buttGameX0'),j=g.querySelectorAll('.tdGameX0'),k=document.getElementById('winX'),l=document.getElementById('win0'),m=document.getElementById('noWins'),n=0;h.innerHTML='';var o='X',p=function(a){return'X'==a?'0':'X'};(function(a,b){for(var c=0;c<a.length;c++)a[c].addEventListener('click',b)})(j,b),i.addEventListener('click',function(){c.push(h.innerHTML),g.innerHTML='',a(),k.innerHTML=c.reduce(function(a,b){return'X'===b?++a:a},0),l.innerHTML=c.reduce(function(a,b){return'0'===b?++a:a},0),m.innerHTML=c.reduce(function(a,b){return'Drow'===b?++a:a},0)})}var b=document.getElementById('gameX0'),c=[];null!=b&&(function(){b.insertAdjacentHTML('afterbegin','\n        <style>\n         #gameX0#tblGameX0{\n          position: absolute; \n            top: 30%; \n            left: 35%; \n            width: 25%; \n            height: 25%; \n        }\n        \n        .tdGameX0 {\n          width: 30px;\n          height: 25px;\n        }\n       \n        table {\n          border: 1px solid black;\n          border-collapse: collapse;\n        }\n\n        td, th{\n          text-align: center;\n          border: 1px solid black;\n        }\n\n\n            \n            </style>\n            <table id = \'tblGameX0\' class="middle"></table>\n              </div>\n              <div>\t<p> Winner in this Game: <span id = \'who\'></span></p>\n                  <button id = \'buttGameX0\'>Start again</button>\n              </div>\n                  <div class = \'secBlock\'>\n                        <p> Won X:<span id = \'winX\'></span></p>\n                        <p> Won 0:<span id = \'win0\'></span></p>\n                        <p> Draw:<span id = \'noWins\'></span></p>\n                  </div>\t\n          ')}(),a())}},"./js/tasks/simpleCalc.js":function(module,exports,__webpack_require__){'use strict';module.exports=function(){function getCalc(){simpleCalc.insertAdjacentHTML('afterbegin','\n    <table id = \'tblCalc\'>\n      <tr>\n        <th>C</th>\n        <th id=\'double\' colspan=\'3\'><input type=\'text\' id=\'inpCalc\'></th>\n      </tr>\n\t\t</table>\n\t\t<p id=\'infoCalc\'></p>\n')}function getHigthFromTop(){function deleteOfLastElem(a){var b=a.innerHTML.split('');b.pop(),a.innerHTML=b.join('')}function createEl(a,b){var c=document.createElement(a);return b.appendChild(c),c}function getTbl(a,b){for(var c,d=0,e=1;5>=e;e++){c=createEl('tr',a);for(var f,g=1;4>=g;g++)f=createEl('td',c),f.innerHTML=b[d],f.className='tdCalc',d++}}function getTargetClick(tag,elInp,elP){for(var elems=document.querySelectorAll('.tdCalc'),i=0;i<elems.length;i++)elems[i].addEventListener('click',function(){var inInp=this.innerHTML;if(0<=inInp||'.'==inInp)elInp.value+=inInp,elP.innerHTML+=inInp;else if('/'==inInp||'*'==inInp||'+'==inInp||'-'==inInp)elInp.value+=inInp,elP.innerHTML+=inInp,elInp.value='';else if('='==inInp)collector=eval(elP.innerHTML),elInp.value=eval(elP.innerHTML),elP.innerHTML+=' = '+elInp.value;else if('BS'==inInp){var tempa=elInp.value.split('');tempa.pop(),elInp.value=tempa.join('');var anotherTempa=elP.innerHTML.split('');anotherTempa.pop(),elP.innerHTML=anotherTempa.join('')}else'Insert'==inInp?elInp.value+=collector:'Restart'==inInp&&(elP.innerHTML='',elInp.value='')})}var inp=document.getElementById('inpCalc'),p=document.getElementById('infoCalc'),tbl=document.getElementById('tblCalc'),symbols=[7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'.','=','+','Restart','BS','Insert',''];getTbl(tbl,symbols),getTargetClick('td',inp,p)}var collector,simpleCalc=document.getElementById('simpleCalc');if(null!=simpleCalc){var _collector='';getCalc(),getHigthFromTop()}}},"./js/tasks/sortByClick.js":function(a){'use strict';function b(a,b){var d;if('undefined'==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(d=c(a))||b&&a&&'number'==typeof a.length){d&&(a=d);var e=0,f=function(){};return{s:f,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(a){throw a},f:f}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var g,h=!0,i=!1;return{s:function(){d=a[Symbol.iterator]()},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d.return||d.return()}finally{if(i)throw g}}}}function c(a,b){if(a){if('string'==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return'Object'===c&&a.constructor&&(c=a.constructor.name),'Map'===c||'Set'===c?Array.from(a):'Arguments'===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?d(a,b):void 0}}function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}a.exports=function(){var a=document.getElementById('sortByClick');null!=a&&(function(){a.insertAdjacentHTML('afterbegin','\n  \t\t<table id = \'tblSortByClick\' class = \'middle table table-bordered\'>\n\t\t<tr class = \'trSort\'><th class = \'thSort\'>Name</th><th class = \'thSort\'>dateOfSomething</th><th class = \'thSort\'>Plants</th><th class = \'thSort\'>num</th></tr>\n\t\t<tr class = \'trSort\'><td class = \'tdSort\'>Mila</td><td class = \'tdSort\'>10/18/2002</td><td class = \'tdSort\'>mango</td><td class = \'tdSort\'>23</td></tr>\n\t\t<tr class = \'trSort\'><td class = \'tdSort\'>Ruslan</td><td class = \'tdSort\'>09/25/1999</td><td class = \'tdSort\'>orange</td><td class = \'tdSort\'>15</td></tr>\n\t\t<tr class = \'trSort\'><td class = \'tdSort\'>James</td><td class = \'tdSort\'>12/19/1998</td><td class = \'tdSort\'>apple</td><td class = \'tdSort\'>55</td></tr>\n\t\t<tr class = \'trSort\'><td class = \'tdSort\'>Karina</td><td class = \'tdSort\'>04/17/1999</td><td class = \'tdSort\'>carrot</td><td class = \'tdSort\'>88</td></tr>\n\t\t<tr class = \'trSort\'><td class = \'tdSort\'>Tanya</td><td class = \'tdSort\'>11/15/1996</td><td class = \'tdSort\'>peach</td><td class = \'tdSort\'>13</td></tr>\n    <tr class = \'trSort\'><td class = \'tdSort\'>Sofia</td><td class = \'tdSort\'>05/15/2001</td><td class = \'tdSort\'>yukka</td><td class = \'tdSort\'>25</td></tr>\n\t\t\t</table>\n')}(),function(){function a(a){var b=c(),f=a(b),g=d(f);e(g)}function c(){for(var a=[],b=1;b<k.length;b++){for(var c=k[b].querySelectorAll('td'),d={},e=0;e<l.length;e++)d[l[e].innerHTML]=c[e].innerHTML;a.push(d)}return a}function d(a){var c,d=[],e=b(a);try{for(e.s();!(c=e.n()).done;){var f=c.value;for(var g in f)d.push(f[g])}}catch(a){e.e(a)}finally{e.f()}return d}function e(a){for(var b=0;b<j.length;b++)j[b].innerHTML=a[b]}function f(a){return a.sort(function(c,a){var b=c.Name.toLowerCase(),d=a.Name.toLowerCase();return b<d?-1:b>d?1:0}),a}function g(a){return a.sort(function(c,a){var b=new Date(c.dateOfSomething),d=new Date(a.dateOfSomething);return b-d}),a}function h(a){return a.sort(function(c,a){return c.num-a.num}),a}function i(a){return a.sort(function(c,a){var b=c.Plants.toLowerCase(),d=a.Plants.toLowerCase();return b<d?-1:b>d?1:0}),a}var j=document.querySelectorAll('.tdSort'),k=document.querySelectorAll('.trSort'),l=k[0].querySelectorAll('.thSort');l[0].addEventListener('click',function(){a(f)}),l[2].addEventListener('click',function(){a(i)}),l[3].addEventListener('click',function(){a(h)}),l[1].addEventListener('click',function(){a(g)})}())}},"./js/tasks/tableSpiral.js":function(a){'use strict';function b(a,b){var c;if('undefined'==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=e(a))||b&&a&&'number'==typeof a.length){c&&(a=c);var d=0,f=function(){};return{s:f,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:f}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var g,h=!0,i=!1;return{s:function(){c=a[Symbol.iterator]()},n:function(){var a=c.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==c.return||c.return()}finally{if(i)throw g}}}}function c(a){return g(a)||f(a)||e(a)||d()}function d(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}function e(a,b){if(a){if('string'==typeof a)return h(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return'Object'===c&&a.constructor&&(c=a.constructor.name),'Map'===c||'Set'===c?Array.from(a):'Arguments'===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?h(a,b):void 0}}function f(a){if('undefined'!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function g(a){if(Array.isArray(a))return h(a)}function h(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}a.exports=function(){var a=document.getElementById('blockSpiral');null!=a&&(function(){a.insertAdjacentHTML('afterbegin','<input id=\'putCols\' placeholder=\'put int number < 16\' >\n            <input type=\'submit\' id=\'buttTableSpiral\'>\n                <div id=\'elemTableSpiral\'>\n                  <table id=\'tblSpiral\' class=\'middle\'></table>\n                </div>')}(),function(){function a(a){for(var b=0,c=0,d=g(a),e=[],f=d.length/4,h=0;h<f;h++)d[c]=j(b,d[c],1),e.push(d[c]),b=d[c][d[c].length-1],c++,d[c]=j(b,d[c],a),b=d[c][d[c].length-1],e.push(d[c]),c++,d[c]=l(b,d[c],1),b=d[c][d[c].length-1],e.push(d[c]),c++,d[c]=l(b,d[c],a),b=d[c][d[c].length-1],e.push(d[c]),c++;return e}function d(a,b,c){for(var d=0;d<a.length;d++)a[b[d]].innerHTML=c[d]}function e(a){for(var b=[],c=Math.pow(a,2),d=1;d<=c;d++)b.push(d);return b}function f(a,b){for(var c,d=0;d<b;d++){c=i('tr',a),c.className='class'+b;for(var e,f=0;f<b;f++)e=i('td',c),e.dataset.col=f+1,e.className='spiralTd'}}function g(a){for(var b=[a-1],c=1;c<a;c++)b.push(a-c),b.push(a-c);return b}function h(a){var c,d=[],e=b(a);try{for(e.s();!(c=e.n()).done;){var f=c.value;Array.isArray(f)?d=d.concat(h(f)):d.push(f)}}catch(a){e.e(a)}finally{e.f()}return d}function i(a,b){var c=document.createElement(a);return b.appendChild(c),c}function j(a,b,c){for(var d=[],e=a+c;e<=a+b*c;e+=c)d.push(e);return d}function l(a,b,c){for(var d=[],e=a-c;e>a-b*c-c;e-=c)d.push(e);return d}var k=document.getElementById('buttTableSpiral');k.addEventListener('click',function(){var b=document.getElementById('tblSpiral'),g=document.getElementById('putCols'),i=+g.value;if(!(15<g.value)){b.innerHTML='';var j=h(a(i)),k=[0].concat(c(j));f(b,i);var l=e(i),m=document.querySelectorAll('.spiralTd');d(m,k,l)}})}())}},"./js/tasks/tableTranspose.js":function(a){'use strict';a.exports=function(){var a=document.getElementById('transpose');null!=a&&(function(){a.insertAdjacentHTML('afterbegin','\n\t\t<input id = \'rowsTableTranspose\' placeholder = \'int <= 15\'><br>\n\t\t<input id = \'columnsTableTranspose\' placeholder = \'int <= 15\'><br>\n\t\t<div id = \'elemTableTranspose\'>\n      \n\t\t\t\t<table id = \'transposeTbl\' class = \'middle \'></table></div><br>\n\n    <p id = \'errTableTranspose\'></p>\n    <button id = \'buttCreateTbl\'>Create table </button>\n    <button id = \'flipTbl\'> Flip </button>\n    <button id = \'resetTableTranspose\'> Reset </button>\n')}(),function(){function a(a,b,d,e,g){if('standartWay'==a.className){a.className='diffWay';var h=+d.value,i=+b.value;c(h,i,a),f(e,g)}else{a.className='standartWay';var j=+b.value,k=+d.value;c(j,k,a),f(e)}}function b(a,b){for(var c=[],d=1;d<=a*b;d++)c.push(d);return c}function c(a,b,c){for(var d,f=0;f<a;f++){d=e('tr',c);for(var g,h=0;h<b;h++)g=e('td',d),g.className='cells'}}function d(a,b){for(var c=[],d=0;d<a;d++)for(var e=d;e<b*a;e+=a)c.push(e);return c}function e(a,b){var c=document.createElement(a);return b.appendChild(c),c}function f(a,b){for(var c=document.querySelectorAll('.cells'),d=0;d<c.length;d++)void 0===b?c[d].innerHTML=a[d]:c[b[d]].innerHTML=a[d]}var g,h,i,j,k=document.getElementById('transposeTbl'),l=document.getElementById('errTableTranspose'),m=document.getElementById('buttCreateTbl'),n=document.getElementById('flipTbl'),o=document.getElementById('resetTableTranspose'),p=document.getElementById('rowsTableTranspose'),q=document.getElementById('columnsTableTranspose');m.addEventListener('click',function(){return(g=+p.value,h=+q.value,15<g||15<h)?void(l.innerHTML='Error!: rows and columns have to be <=  15'):void(l.innerHTML='',i=b(g,h),j=d(+p.value,+q.value),c(g,h,k),f(i),m.disabled=!0,k.className='standartWay')}),n.addEventListener('click',function(){p.disabled=!0,q.disabled=!0,k.innerHTML='',a(k,p,q,i,j)}),o.addEventListener('click',function(){p.disabled=!1,q.disabled=!1,p.value='',q.value='',k.innerHTML='',m.disabled=!1})}())}},"./js/tasks/tasks.js":function(a,b,c){var d=c('./js/tasks/accord.js'),e=c('./js/tasks/gameX0.js'),f=c('./js/tasks/simpleCalc.js'),g=c('./js/tasks/tableSpiral.js'),h=c('./js/tasks/tableTranspose.js'),i=c('./js/tasks/zapretSosedyam.js'),j=c('./js/tasks/sortByClick.js');a.exports=function(){d(),e(),f(),g(),h(),i(),j()}},"./js/tasks/zapretSosedyam.js":function(a){'use strict';function b(a,b){var d;if('undefined'==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(d=c(a))||b&&a&&'number'==typeof a.length){d&&(a=d);var e=0,f=function(){};return{s:f,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(a){throw a},f:f}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var g,h=!0,i=!1;return{s:function(){d=a[Symbol.iterator]()},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d.return||d.return()}finally{if(i)throw g}}}}function c(a,b){if(a){if('string'==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return'Object'===c&&a.constructor&&(c=a.constructor.name),'Map'===c||'Set'===c?Array.from(a):'Arguments'===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?d(a,b):void 0}}function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}a.exports=function(){var a=document.getElementById('zapretSosedyam');null!=a&&(function(){a.insertAdjacentHTML('afterbegin','\n              <table id = \'tblZapretSosedyam\'  class = \'middle table table-bordered\'>\n              <tr class = \'trZapret\'><th class = \'thZapret\'>Name</th><th class = \'thZapret\'>date</th><th class = \'thZapret\'>Plants</th><th class = \'thZapret\'>num</th><th class = \'thZapret\'>num</th></tr>\n              <tr class = \'trZapret\'><td class = \'tdZapret\'>Mila</td><td class = \'tdZapret\'>10/18/2002</td><td class = \'tdZapret\'>mango</td><td class = \'tdZapret\'>23</td><td class = \'tdZapret\'>23</td></tr>\n              <tr class = \'trZapret\'><td class = \'tdZapret\'>Ruslan</td><td class = \'tdZapret\'>09/25/1999</td><td class = \'tdZapret\'>orange</td><td class = \'tdZapret\'>15</td><td class = \'tdZapret\'>23</td></tr>\n              <tr class = \'trZapret\'><td class = \'tdZapret\'>James</td><td class = \'tdZapret\'>12/19/1998</td><td class = \'tdZapret\'>apple</td><td class = \'tdZapret\'>55</td><td class = \'tdZapret\'>23</td></tr>\n              <tr class = \'trZapret\'><td class = \'tdZapret\'>Karina</td><td class = \'tdZapret\'>04/17/1999</td><td class = \'tdZapret\'>carrot</td><td class = \'tdZapret\'>88</td><td class = \'tdZapret\'>23</td></tr>\n              <tr class = \'trZapret\'><td class = \'tdZapret\'>Tanya</td><td class = \'tdZapret\'>11/15/1996</td><td class = \'tdZapret\'>peach</td><td class = \'tdZapret\'>13</td><td class = \'tdZapret\'>23</td></tr>\n              <tr class = \'trZapret\'><td class = \'tdZapret\'>Sofia</td><td class = \'tdZapret\'>05/15/2001</td><td class = \'tdZapret\'>yukka</td><td class = \'tdZapret\'>25</td><td class = \'tdZapret\'>23</td></tr>\n\t\t\t</table>\n')}(),function(){var a=document.getElementById('tblZapretSosedyam');a.onclick=function(a){function d(c){var d=[],e=c,f=c,a=+c;return d.push(e-=11,++e,++e,--f,f+=2,a+=9,++a,++a),d}if('TD'==a.target.tagName){a.target.style.color='red';for(var e=a.target.dataset.num,f=d(e),g=0;g<c.length;g++){var h,i=b(f);try{for(i.s();!(h=i.n()).done;){var j=h.value;c[g].dataset.num==j&&(c[g].style.backgroundColor='blue',c[g].classList='none')}}catch(a){i.e(a)}finally{i.f()}}}};var c=a.querySelectorAll('.tdZapret'),d=a.querySelectorAll('.thZapret'),e=a.querySelectorAll('.trZapret');(function(){for(var a,b=1;b<e.length;b++){a=e[b].querySelectorAll('td');for(var c=0;c<a.length;c++)a[c].dataset.col=c+1,a[c].dataset.num=b+''+(c+1)}})()}())}},"./main.js":function(a,b,c){'use strict';c.r(b);var d=c('./main.scss'),e=c.n(d),f=c('./js/gallery/gallery.js'),g=c('./js/activeHeader.js'),h=c('./js/contacts/auth.js'),i=c('./js/tasks/tasks.js'),j=c('./js/about/about.js'),k=c('./img/sendPicture.js');g(),f(),i(),j(),h(),k()},"./main.scss":function(){},0:function(a,b,c){c('./main.js'),a.exports=c('./main.scss')}});
//# sourceMappingURL=bundle.js.map