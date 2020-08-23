
const activeHeaderLinks = require('./js/activeHeader')
const accord = require('@js/accord')
const gallery = require('@js/gallery');
const counterPrice = require('@js/counterPrice');
const gameX0 = require('@js/gameX0')
const simpleCalc = require('@js/simpleCalc');
const sortByClick= require('@js/sortByClick');
const tableSpiral= require('@js/tableSpiral');
const tableTranspose = require('@js/tableTranspose');
const zapretSosedyam = require('@js/zapretSosedyam');

const logo = require('@img/logo.png')

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

