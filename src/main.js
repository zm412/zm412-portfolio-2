const gallery = require('@js/gallery/gallery');
const activeHeaderLinks = require('./js/activeHeader')
const auth = require('@js/home/auth');
const tasks = require('@js/tasks/tasks');
const about = require('@js/about/about');
const contacts = require('@js/contacts/contacts');
const sendPicture = require('@img/sendPicture');

import '@/main.scss';

activeHeaderLinks();
contacts();
gallery();
tasks();
about();
auth();
sendPicture();

