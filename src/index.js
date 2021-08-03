'use strict';

// Imports

import initPage from './initpage';
import displayHome from './homepage';
import displayAbout from './aboutpage';
import displayMenu from './menupage';

// DOM Selectors

const container = document.getElementById('content');

// Event Listeners

window.addEventListener('load', initPage);
window.addEventListener('click', displayHome);
window.addEventListener('click', displayMenu);
window.addEventListener('click', displayAbout);
