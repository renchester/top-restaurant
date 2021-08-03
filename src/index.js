'use strict';

// Imports

import displayHome from './homepage';
import displayAbout from './aboutpage';
import displayMenu from './menupage';

// DOM Selectors

const container = document.getElementById('content');
// const navHome = document.querySelector('.nav-link.home');
// const navMenu = document.querySelector('.nav-link.menu');
// const navAbout = document.querySelector('.nav-link.about');

// Event Listeners

// window.addEventListener('load', displayHome);

// window.addEventListener('click', displayHome);
window.addEventListener('click', displayMenu);
window.addEventListener('click', displayAbout);
