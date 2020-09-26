
const accord = require('./accord');
const gameX0 = require('./gameX0');
const simpleCalc = require('./simpleCalc');
const tableSpiral = require('./tableSpiral');
const tableTranspose= require('./tableTranspose');
const zapretSosedyam = require('./zapretSosedyam');
const sortByClick = require('./sortByClick');

module.exports = () => {
  accord();
  gameX0();
  simpleCalc();
  tableSpiral();
  tableTranspose();
  zapretSosedyam();
  sortByClick();
}

