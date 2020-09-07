const gallery = require('@js/gallery/gallery');
const activeHeaderLinks = require('./js/activeHeader')
const auth = require('@js/contacts/auth');
const tasks = require('@js/tasks/tasks');
const about = require('@js/about/about');
const sendPicture = require('@img/sendPicture');

import '@/main.scss';

activeHeaderLinks();
gallery();
tasks();
about();
auth();
sendPicture();

