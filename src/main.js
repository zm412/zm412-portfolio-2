
const activeHeaderLinks = require('./js/activeHeader')
const accord = require('@js/tasks/accord')
const gallery = require('@js/gallery/gallery');
const counterPrice = require('@js/gallery/counterPrice');
const gameX0 = require('@js/tasks/gameX0')
const simpleCalc = require('@js/tasks/simpleCalc');
const sortByClick= require('@js/tasks/sortByClick');
const tableSpiral= require('@js/tasks/tableSpiral');
const tableTranspose = require('@js/tasks/tableTranspose');
const auth = require('@js/contacts/auth');
const zapretSosedyam = require('@js/tasks/zapretSosedyam');

const logo = require('@img/logo.png');
const whiteLogo = require('@img/whiteLogo.png');
const bgPic = require('@img/bgBody.jpg');

//import logo from '@img/logo.png';
//

import '@/main.scss';
activeHeaderLinks();
accord();
gallery();
gameX0();
counterPrice();
simpleCalc();
sortByClick();
tableSpiral();
zapretSosedyam()
tableTranspose();
auth();

