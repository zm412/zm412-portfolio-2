const gallery = require('@js/gallery/gallery');
const activeHeaderLinks = require('./js/activeHeader')
const contacts = require('@js/contacts/blockComments');
const home = require('@js/home/auth');
const tasks = require('@js/tasks/tasks');
const about = require('@js/about/about');
const sendPicture = require('@img/sendPicture');

import '@/main.scss';

activeHeaderLinks();
gallery();
tasks();
about();
home();
contacts();
sendPicture();

