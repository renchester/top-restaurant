/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutpage.js":
/*!**************************!*\
  !*** ./src/aboutpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAbout)
/* harmony export */ });


function displayAbout(e) {
  if (e.target !== document.querySelector('.nav-link.about')) return;

  document.querySelector('#content').innerHTML = `
  
      <div class="nav-bar">
        <div class="coco-logo">
          <img src="../img/coco-logo.png" alt="Coco Ichibanya Logo" />
          <p class="coco-logo-name">CURRY HOUSE CoCo ICHIBANYA</p>
        </div>
        <div class="nav-links">
          <div class="nav-link home">Home</div>
          <div class="nav-link menu">Menu</div>
          <div class="nav-link about">About</div>
        </div>
      </div>
      <main class="header">
        <div class="header-logo">
          <img
            src="../img/coco-logo-circle.png"
            alt="Coco Ichibanya Logo - Circle"
          />
        </div>
        <div class="header-info">
          <p class="header-info established">
            Established in <br />
            <span class="established-year">1978</span>
          </p>
          <p class="header-info history">
           HAHAHAHA! ABOUT PAGE
          </p>
        </div>
        <div class="header-bg">
          <img src="../img/coco-header-bg.png" alt="CoCo Curry" />
        </div>
      </main>
      <div class="about-info-container">
        <p class="about-info main">
          We will provide our curry rice,a dish loved by the Japanese for so
          long, beyond the border.
        </p>
        <p class="about-info history">
          The "CURRY HOUSE CoCo ICHIBANYA" started from 3 shops surrounded by
          rice fields in the suburb area of Nagoya, in 1978. With our customer
          first spirit, we have been supported by many customers for 40 years
          until now, and in 2004, we were able to increase our shops up to
          1,000. Today, CoCoICHI has expanded overseas to such as Hawaii,
          Shanghai, Bangkok, Hong Kong, and Los Angeles, and is continuing to be
          loved by the local customers.
        </p>
        <div class="about-info overlay"></div>
      </div>
      <div class="shops">
        <p class="shops-label">About the shops</p>
        <div class="shops-links">
          <div class="shops-link lead">
            <img src="../img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
            CoCo ICHIBANYA, a specialty shop for curry rice in Japan.
          </div>
          <div class="shops-link others">See overseas shops here</div>
          <div class="shops-link company-info">
            ICHIBANYA CO., LTD. Company Information
          </div>
        </div>
      </div>
      <footer>
        <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
        <p class="footer-cp">
          CURRY HOUSE CoCo ICHIBANYA (Japanese) Copyright ©ICHIBANYA CO., LTD.
          All rights reserved
        </p>
      </footer>
 
    
    
    `;
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHome)
/* harmony export */ });


function displayHome(e) {
  document.querySelector('#content').innerHTML = `
  
      <div class="nav-bar">
        <div class="coco-logo">
          <img src="../img/coco-logo.png" alt="Coco Ichibanya Logo" />
          <p class="coco-logo-name">CURRY HOUSE CoCo ICHIBANYA</p>
        </div>
        <div class="nav-links">
          <div class="nav-link home">Home</div>
          <div class="nav-link menu">Menu</div>
          <div class="nav-link about">About</div>
        </div>
      </div>
      <main class="header">
        <div class="header-logo">
          <img
            src="../img/coco-logo-circle.png"
            alt="Coco Ichibanya Logo - Circle"
          />
        </div>
        <div class="header-info">
          <p class="header-info established">
            Established in <br />
            <span class="established-year">1978</span>
          </p>
          <p class="header-info history">
            "CURRY HOUSE CoCo ICHIBANYA", known as "CoCoICHI", is a chain
            restaurant specializing in Japanese-style curry rice. Many people
            enjoy making their very own CoCoICHI curry by customizing the rice
            portion, spice level, and optional toppings coming in nearly 40
            varieties. Please enjoy our curry, which is very popular with the
            Japanese people!
          </p>
        </div>
        <div class="header-bg">
          <img src="../img/coco-header-bg.png" alt="CoCo Curry" />
        </div>
      </main>
      <div class="about-info-container">
        <p class="about-info main">
          We will provide our curry rice,a dish loved by the Japanese for so
          long, beyond the border.
        </p>
        <p class="about-info history">
          The "CURRY HOUSE CoCo ICHIBANYA" started from 3 shops surrounded by
          rice fields in the suburb area of Nagoya, in 1978. With our customer
          first spirit, we have been supported by many customers for 40 years
          until now, and in 2004, we were able to increase our shops up to
          1,000. Today, CoCoICHI has expanded overseas to such as Hawaii,
          Shanghai, Bangkok, Hong Kong, and Los Angeles, and is continuing to be
          loved by the local customers.
        </p>
        <div class="about-info overlay"></div>
      </div>
      <div class="shops">
        <p class="head-label shops-label">About the shops</p>
        <div class="shops-links">
          <div class="shops-link lead">
            <img src="../img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
            CoCo ICHIBANYA, a specialty shop for curry rice in Japan.
          </div>
          <div class="shops-link others">See overseas shops here</div>
          <div class="shops-link company-info">
            ICHIBANYA CO., LTD. Company Information
          </div>
        </div>
      </div>
      <footer>
        <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
        <p class="footer-cp">
          CURRY HOUSE CoCo ICHIBANYA (Japanese) Copyright ©ICHIBANYA CO., LTD.
          All rights reserved
        </p>
      </footer>
 
    
    
    `;
}


/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenu)
/* harmony export */ });


function displayMenu(e) {
  if (e.target !== document.querySelector('.nav-link.menu')) return;

  document.querySelector('#content').innerHTML = `
  
      <div class="nav-bar">
        <div class="coco-logo">
          <img src="../img/coco-logo.png" alt="Coco Ichibanya Logo" />
          <p class="coco-logo-name">CURRY HOUSE CoCo ICHIBANYA</p>
        </div>
        <div class="nav-links">
          <div class="nav-link home">Home</div>
          <div class="nav-link menu">Menu</div>
          <div class="nav-link about">About</div>
        </div>
      </div>
      <main class="header">
        <div class="header-logo">
          <img
            src="../img/coco-logo-circle.png"
            alt="Coco Ichibanya Logo - Circle"
          />
        </div>
        <div class="header-info">
          <p class="header-info established">
            Established in <br />
            <span class="established-year">MENU</span>
          </p>
          <p class="header-info history">
           MENU PAGE
          </p>
        </div>
        <div class="header-bg">
          <img src="../img/coco-header-bg.png" alt="CoCo Curry" />
        </div>
      </main>
      <div class="about-info-container">
        <p class="about-info main">
          We will provide our curry rice,a dish loved by the Japanese for so
          long, beyond the border.
        </p>
        <p class="about-info history">
          The "CURRY HOUSE CoCo ICHIBANYA" started from 3 shops surrounded by
          rice fields in the suburb area of Nagoya, in 1978. With our customer
          first spirit, we have been supported by many customers for 40 years
          until now, and in 2004, we were able to increase our shops up to
          1,000. Today, CoCoICHI has expanded overseas to such as Hawaii,
          Shanghai, Bangkok, Hong Kong, and Los Angeles, and is continuing to be
          loved by the local customers.
        </p>
        <div class="about-info overlay"></div>
      </div>
      <div class="shops">
        <p class="shops-label">About the shops</p>
        <div class="shops-links">
          <div class="shops-link lead">
            <img src="../img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
            CoCo ICHIBANYA, a specialty shop for curry rice in Japan.
          </div>
          <div class="shops-link others">See overseas shops here</div>
          <div class="shops-link company-info">
            ICHIBANYA CO., LTD. Company Information
          </div>
        </div>
      </div>
      <footer>
        <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
        <p class="footer-cp">
          CURRY HOUSE CoCo ICHIBANYA (Japanese) Copyright ©ICHIBANYA CO., LTD.
          All rights reserved
        </p>
      </footer>
 
    
    
    `;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _aboutpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutpage */ "./src/aboutpage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ "./src/menupage.js");


// Imports





// DOM Selectors

const container = document.getElementById('content');
// const navHome = document.querySelector('.nav-link.home');
// const navMenu = document.querySelector('.nav-link.menu');
// const navAbout = document.querySelector('.nav-link.about');

// Event Listeners

// window.addEventListener('load', displayHome);

// window.addEventListener('click', displayHome);
window.addEventListener('click', _menupage__WEBPACK_IMPORTED_MODULE_2__.default);
window.addEventListener('click', _aboutpage__WEBPACK_IMPORTED_MODULE_1__.default);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhOztBQUVFO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUVhOztBQUVFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGYTs7QUFFRTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViOztBQUVxQztBQUNFO0FBQ0Y7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLDhDQUFXO0FBQzVDLGlDQUFpQywrQ0FBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0cGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFib3V0KGUpIHtcbiAgaWYgKGUudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmsuYWJvdXQnKSkgcmV0dXJuO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2NvLWxvZ29cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9jb2NvLWxvZ28ucG5nXCIgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nb1wiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb2NvLWxvZ28tbmFtZVwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBob21lXCI+SG9tZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBtZW51XCI+TWVudTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBhYm91dFwiPkFib3V0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxvZ29cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIuLi9pbWcvY29jby1sb2dvLWNpcmNsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nbyAtIENpcmNsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLWluZm8gZXN0YWJsaXNoZWRcIj5cbiAgICAgICAgICAgIEVzdGFibGlzaGVkIGluIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlc3RhYmxpc2hlZC15ZWFyXCI+MTk3ODwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItaW5mbyBoaXN0b3J5XCI+XG4gICAgICAgICAgIEhBSEFIQUhBISBBQk9VVCBQQUdFXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1iZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28taGVhZGVyLWJnLnBuZ1wiIGFsdD1cIkNvQ28gQ3VycnlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzcz1cImFib3V0LWluZm8gbWFpblwiPlxuICAgICAgICAgIFdlIHdpbGwgcHJvdmlkZSBvdXIgY3VycnkgcmljZSxhIGRpc2ggbG92ZWQgYnkgdGhlIEphcGFuZXNlIGZvciBzb1xuICAgICAgICAgIGxvbmcsIGJleW9uZCB0aGUgYm9yZGVyLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiYWJvdXQtaW5mbyBoaXN0b3J5XCI+XG4gICAgICAgICAgVGhlIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiBzdGFydGVkIGZyb20gMyBzaG9wcyBzdXJyb3VuZGVkIGJ5XG4gICAgICAgICAgcmljZSBmaWVsZHMgaW4gdGhlIHN1YnVyYiBhcmVhIG9mIE5hZ295YSwgaW4gMTk3OC4gV2l0aCBvdXIgY3VzdG9tZXJcbiAgICAgICAgICBmaXJzdCBzcGlyaXQsIHdlIGhhdmUgYmVlbiBzdXBwb3J0ZWQgYnkgbWFueSBjdXN0b21lcnMgZm9yIDQwIHllYXJzXG4gICAgICAgICAgdW50aWwgbm93LCBhbmQgaW4gMjAwNCwgd2Ugd2VyZSBhYmxlIHRvIGluY3JlYXNlIG91ciBzaG9wcyB1cCB0b1xuICAgICAgICAgIDEsMDAwLiBUb2RheSwgQ29Db0lDSEkgaGFzIGV4cGFuZGVkIG92ZXJzZWFzIHRvIHN1Y2ggYXMgSGF3YWlpLFxuICAgICAgICAgIFNoYW5naGFpLCBCYW5na29rLCBIb25nIEtvbmcsIGFuZCBMb3MgQW5nZWxlcywgYW5kIGlzIGNvbnRpbnVpbmcgdG8gYmVcbiAgICAgICAgICBsb3ZlZCBieSB0aGUgbG9jYWwgY3VzdG9tZXJzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvIG92ZXJsYXlcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNob3BzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwic2hvcHMtbGFiZWxcIj5BYm91dCB0aGUgc2hvcHM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIGxlYWRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tc2hvcC1zbWFsbC5wbmdcIiBhbHQ9XCJDb0NvIEljaGliYW55YSBTdG9yZVwiIC8+XG4gICAgICAgICAgICBDb0NvIElDSElCQU5ZQSwgYSBzcGVjaWFsdHkgc2hvcCBmb3IgY3VycnkgcmljZSBpbiBKYXBhbi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBvdGhlcnNcIj5TZWUgb3ZlcnNlYXMgc2hvcHMgaGVyZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIGNvbXBhbnktaW5mb1wiPlxuICAgICAgICAgICAgSUNISUJBTllBIENPLiwgTFRELiBDb21wYW55IEluZm9ybWF0aW9uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1tYWluXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItY3BcIj5cbiAgICAgICAgICBDVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpIENvcHlyaWdodCDCqUlDSElCQU5ZQSBDTy4sIExURC5cbiAgICAgICAgICBBbGwgcmlnaHRzIHJlc2VydmVkXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuIFxuICAgIFxuICAgIFxuICAgIGA7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlIb21lKGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gIFxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvY28tbG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tbG9nby5wbmdcIiBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvXCIgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvY28tbG9nby1uYW1lXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIG1lbnVcIj5NZW51PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGFib3V0XCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9jb2NvLWxvZ28tY2lyY2xlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvIC0gQ2lyY2xlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItaW5mbyBlc3RhYmxpc2hlZFwiPlxuICAgICAgICAgICAgRXN0YWJsaXNoZWQgaW4gPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVzdGFibGlzaGVkLXllYXJcIj4xOTc4PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1pbmZvIGhpc3RvcnlcIj5cbiAgICAgICAgICAgIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiwga25vd24gYXMgXCJDb0NvSUNISVwiLCBpcyBhIGNoYWluXG4gICAgICAgICAgICByZXN0YXVyYW50IHNwZWNpYWxpemluZyBpbiBKYXBhbmVzZS1zdHlsZSBjdXJyeSByaWNlLiBNYW55IHBlb3BsZVxuICAgICAgICAgICAgZW5qb3kgbWFraW5nIHRoZWlyIHZlcnkgb3duIENvQ29JQ0hJIGN1cnJ5IGJ5IGN1c3RvbWl6aW5nIHRoZSByaWNlXG4gICAgICAgICAgICBwb3J0aW9uLCBzcGljZSBsZXZlbCwgYW5kIG9wdGlvbmFsIHRvcHBpbmdzIGNvbWluZyBpbiBuZWFybHkgNDBcbiAgICAgICAgICAgIHZhcmlldGllcy4gUGxlYXNlIGVuam95IG91ciBjdXJyeSwgd2hpY2ggaXMgdmVyeSBwb3B1bGFyIHdpdGggdGhlXG4gICAgICAgICAgICBKYXBhbmVzZSBwZW9wbGUhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1iZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28taGVhZGVyLWJnLnBuZ1wiIGFsdD1cIkNvQ28gQ3VycnlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzcz1cImFib3V0LWluZm8gbWFpblwiPlxuICAgICAgICAgIFdlIHdpbGwgcHJvdmlkZSBvdXIgY3VycnkgcmljZSxhIGRpc2ggbG92ZWQgYnkgdGhlIEphcGFuZXNlIGZvciBzb1xuICAgICAgICAgIGxvbmcsIGJleW9uZCB0aGUgYm9yZGVyLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiYWJvdXQtaW5mbyBoaXN0b3J5XCI+XG4gICAgICAgICAgVGhlIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiBzdGFydGVkIGZyb20gMyBzaG9wcyBzdXJyb3VuZGVkIGJ5XG4gICAgICAgICAgcmljZSBmaWVsZHMgaW4gdGhlIHN1YnVyYiBhcmVhIG9mIE5hZ295YSwgaW4gMTk3OC4gV2l0aCBvdXIgY3VzdG9tZXJcbiAgICAgICAgICBmaXJzdCBzcGlyaXQsIHdlIGhhdmUgYmVlbiBzdXBwb3J0ZWQgYnkgbWFueSBjdXN0b21lcnMgZm9yIDQwIHllYXJzXG4gICAgICAgICAgdW50aWwgbm93LCBhbmQgaW4gMjAwNCwgd2Ugd2VyZSBhYmxlIHRvIGluY3JlYXNlIG91ciBzaG9wcyB1cCB0b1xuICAgICAgICAgIDEsMDAwLiBUb2RheSwgQ29Db0lDSEkgaGFzIGV4cGFuZGVkIG92ZXJzZWFzIHRvIHN1Y2ggYXMgSGF3YWlpLFxuICAgICAgICAgIFNoYW5naGFpLCBCYW5na29rLCBIb25nIEtvbmcsIGFuZCBMb3MgQW5nZWxlcywgYW5kIGlzIGNvbnRpbnVpbmcgdG8gYmVcbiAgICAgICAgICBsb3ZlZCBieSB0aGUgbG9jYWwgY3VzdG9tZXJzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvIG92ZXJsYXlcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNob3BzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZC1sYWJlbCBzaG9wcy1sYWJlbFwiPkFib3V0IHRoZSBzaG9wczwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgbGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1zaG9wLXNtYWxsLnBuZ1wiIGFsdD1cIkNvQ28gSWNoaWJhbnlhIFN0b3JlXCIgLz5cbiAgICAgICAgICAgIENvQ28gSUNISUJBTllBLCBhIHNwZWNpYWx0eSBzaG9wIGZvciBjdXJyeSByaWNlIGluIEphcGFuLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIG90aGVyc1wiPlNlZSBvdmVyc2VhcyBzaG9wcyBoZXJlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICBJQ0hJQkFOWUEgQ08uLCBMVEQuIENvbXBhbnkgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLW1haW5cIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1jcFwiPlxuICAgICAgICAgIENVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSkgQ29weXJpZ2h0IMKpSUNISUJBTllBIENPLiwgTFRELlxuICAgICAgICAgIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAgICAgICAgPC9wPlxuICAgICAgPC9mb290ZXI+XG4gXG4gICAgXG4gICAgXG4gICAgYDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1lbnUoZSkge1xuICBpZiAoZS50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGluay5tZW51JykpIHJldHVybjtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IGBcbiAgXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29jby1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1sb2dvLnBuZ1wiIGFsdD1cIkNvY28gSWNoaWJhbnlhIExvZ29cIiAvPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY29jby1sb2dvLW5hbWVcIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgYWJvdXRcIj5BYm91dDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4gY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1sb2dvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiLi4vaW1nL2NvY28tbG9nby1jaXJjbGUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkNvY28gSWNoaWJhbnlhIExvZ28gLSBDaXJjbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1pbmZvIGVzdGFibGlzaGVkXCI+XG4gICAgICAgICAgICBFc3RhYmxpc2hlZCBpbiA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXN0YWJsaXNoZWQteWVhclwiPk1FTlU8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLWluZm8gaGlzdG9yeVwiPlxuICAgICAgICAgICBNRU5VIFBBR0VcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWJnXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1oZWFkZXItYmcucG5nXCIgYWx0PVwiQ29DbyBDdXJyeVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWluZm8tY29udGFpbmVyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiYWJvdXQtaW5mbyBtYWluXCI+XG4gICAgICAgICAgV2Ugd2lsbCBwcm92aWRlIG91ciBjdXJyeSByaWNlLGEgZGlzaCBsb3ZlZCBieSB0aGUgSmFwYW5lc2UgZm9yIHNvXG4gICAgICAgICAgbG9uZywgYmV5b25kIHRoZSBib3JkZXIuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJhYm91dC1pbmZvIGhpc3RvcnlcIj5cbiAgICAgICAgICBUaGUgXCJDVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQVwiIHN0YXJ0ZWQgZnJvbSAzIHNob3BzIHN1cnJvdW5kZWQgYnlcbiAgICAgICAgICByaWNlIGZpZWxkcyBpbiB0aGUgc3VidXJiIGFyZWEgb2YgTmFnb3lhLCBpbiAxOTc4LiBXaXRoIG91ciBjdXN0b21lclxuICAgICAgICAgIGZpcnN0IHNwaXJpdCwgd2UgaGF2ZSBiZWVuIHN1cHBvcnRlZCBieSBtYW55IGN1c3RvbWVycyBmb3IgNDAgeWVhcnNcbiAgICAgICAgICB1bnRpbCBub3csIGFuZCBpbiAyMDA0LCB3ZSB3ZXJlIGFibGUgdG8gaW5jcmVhc2Ugb3VyIHNob3BzIHVwIHRvXG4gICAgICAgICAgMSwwMDAuIFRvZGF5LCBDb0NvSUNISSBoYXMgZXhwYW5kZWQgb3ZlcnNlYXMgdG8gc3VjaCBhcyBIYXdhaWksXG4gICAgICAgICAgU2hhbmdoYWksIEJhbmdrb2ssIEhvbmcgS29uZywgYW5kIExvcyBBbmdlbGVzLCBhbmQgaXMgY29udGludWluZyB0byBiZVxuICAgICAgICAgIGxvdmVkIGJ5IHRoZSBsb2NhbCBjdXN0b21lcnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWluZm8gb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2hvcHNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJzaG9wcy1sYWJlbFwiPkFib3V0IHRoZSBzaG9wczwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgbGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1zaG9wLXNtYWxsLnBuZ1wiIGFsdD1cIkNvQ28gSWNoaWJhbnlhIFN0b3JlXCIgLz5cbiAgICAgICAgICAgIENvQ28gSUNISUJBTllBLCBhIHNwZWNpYWx0eSBzaG9wIGZvciBjdXJyeSByaWNlIGluIEphcGFuLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIG90aGVyc1wiPlNlZSBvdmVyc2VhcyBzaG9wcyBoZXJlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICBJQ0hJQkFOWUEgQ08uLCBMVEQuIENvbXBhbnkgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLW1haW5cIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1jcFwiPlxuICAgICAgICAgIENVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSkgQ29weXJpZ2h0IMKpSUNISUJBTllBIENPLiwgTFRELlxuICAgICAgICAgIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAgICAgICAgPC9wPlxuICAgICAgPC9mb290ZXI+XG4gXG4gICAgXG4gICAgXG4gICAgYDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbXBvcnRzXG5cbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBkaXNwbGF5QWJvdXQgZnJvbSAnLi9hYm91dHBhZ2UnO1xuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gJy4vbWVudXBhZ2UnO1xuXG4vLyBET00gU2VsZWN0b3JzXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4vLyBjb25zdCBuYXZIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLmhvbWUnKTtcbi8vIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmsubWVudScpO1xuLy8gY29uc3QgbmF2QWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmsuYWJvdXQnKTtcblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZGlzcGxheUhvbWUpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SG9tZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TWVudSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWJvdXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9