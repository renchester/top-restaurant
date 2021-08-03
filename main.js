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
          <div class="nav-link link-home">Home</div>
          <div class="nav-link link-menu">Menu</div>
          <div class="nav-link link-about">About</div>
        </div>
      </div>
    </div>

    <div class="about-info-container">
      <p class="about-info main">
        We will provide our curry rice,a dish loved by the Japanese for so long,
        beyond the border.
      </p>
      <p class="about-info history">
        The "CURRY HOUSE CoCo ICHIBANYA" started from 3 shops surrounded by rice
        fields in the suburb area of Nagoya, in 1978. With our customer first
        spirit, we have been supported by many customers for 40 years until now,
        and in 2004, we were able to increase our shops up to 1,000. Today,
        CoCoICHI has expanded overseas to such as Hawaii, Shanghai, Bangkok,
        Hong Kong, and Los Angeles, and is continuing to be loved by the local
        customers.
      </p>
      <div class="about-info overlay"></div>
    </div>

    <div class="content-wrapper">
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
    </div>
    </div>

    <footer>
      <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
      <p class="footer-cp">
        CURRY HOUSE CoCo ICHIBANYA (Japanese) Copyright ©ICHIBANYA CO., LTD. All
        rights reserved
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
          <div class="nav-link link-home">Home</div>
          <div class="nav-link link-menu">Menu</div>
          <div class="nav-link link-about">About</div>
        </div>
      </div>

      <div class="content-wrapper">
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
          <div class="nav-link link-home">Home</div>
          <div class="nav-link link-menu">Menu</div>
          <div class="nav-link link-about">About</div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <main class="menu">
        <div class="menu-label-wrapper">
          <p class="head-label menu-label">About the menu</p>
          <p class="sublabel menu-sublabel">
            We offer various toppings such as meat, seafood, and vegetables at
            CURRY HOUSE CoCo ICHIBANAYA.
          </p>
        </div>
        <div class="menu-container">
          <div class="menu-item meat">
            <img src="../img/coco-curry-meat.png" alt="Meat Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Meat Menu
            </div>
          </div>
          <div class="menu-item seafood">
            <img src="../img/coco-curry-seafood.png" alt="Seafood Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Seafood Menu
            </div>
          </div>
          <div class="menu-item vegetable">
            <img src="../img/coco-curry-vegetable.png" alt="Vegetable Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Vegetable Menu
            </div>
          </div>
          <div class="menu-item other">
            <img src="../img/coco-curry-other.png" alt="Other Dishes" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Other Dishes
            </div>
          </div>
          <div class="menu-item kids">
            <img src="../img/coco-curry-kids.png" alt="Kid's Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Kid's Menu
            </div>
          </div>
          <div class="menu-item sides">
            <img src="../img/coco-curry-sides.png" alt="Sides Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Sides Menu
            </div>
          </div>
        </div>
      </main>

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
    </div>

    <footer>
      <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
      <p class="footer-cp">
        CURRY HOUSE CoCo ICHIBANYA (Japanese) Copyright ©ICHIBANYA CO., LTD. All
        rights reserved
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhOztBQUVFO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RhOztBQUVFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVhOztBQUVFO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViOztBQUVxQztBQUNFO0FBQ0Y7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLDhDQUFXO0FBQzVDLGlDQUFpQywrQ0FBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0cGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFib3V0KGUpIHtcbiAgaWYgKGUudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmsuYWJvdXQnKSkgcmV0dXJuO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvY28tbG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tbG9nby5wbmdcIiBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvXCIgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvY28tbG9nby1uYW1lXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1tZW51XCI+TWVudTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWFib3V0XCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgPHAgY2xhc3M9XCJhYm91dC1pbmZvIG1haW5cIj5cbiAgICAgICAgV2Ugd2lsbCBwcm92aWRlIG91ciBjdXJyeSByaWNlLGEgZGlzaCBsb3ZlZCBieSB0aGUgSmFwYW5lc2UgZm9yIHNvIGxvbmcsXG4gICAgICAgIGJleW9uZCB0aGUgYm9yZGVyLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJhYm91dC1pbmZvIGhpc3RvcnlcIj5cbiAgICAgICAgVGhlIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiBzdGFydGVkIGZyb20gMyBzaG9wcyBzdXJyb3VuZGVkIGJ5IHJpY2VcbiAgICAgICAgZmllbGRzIGluIHRoZSBzdWJ1cmIgYXJlYSBvZiBOYWdveWEsIGluIDE5NzguIFdpdGggb3VyIGN1c3RvbWVyIGZpcnN0XG4gICAgICAgIHNwaXJpdCwgd2UgaGF2ZSBiZWVuIHN1cHBvcnRlZCBieSBtYW55IGN1c3RvbWVycyBmb3IgNDAgeWVhcnMgdW50aWwgbm93LFxuICAgICAgICBhbmQgaW4gMjAwNCwgd2Ugd2VyZSBhYmxlIHRvIGluY3JlYXNlIG91ciBzaG9wcyB1cCB0byAxLDAwMC4gVG9kYXksXG4gICAgICAgIENvQ29JQ0hJIGhhcyBleHBhbmRlZCBvdmVyc2VhcyB0byBzdWNoIGFzIEhhd2FpaSwgU2hhbmdoYWksIEJhbmdrb2ssXG4gICAgICAgIEhvbmcgS29uZywgYW5kIExvcyBBbmdlbGVzLCBhbmQgaXMgY29udGludWluZyB0byBiZSBsb3ZlZCBieSB0aGUgbG9jYWxcbiAgICAgICAgY3VzdG9tZXJzLlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWluZm8gb3ZlcmxheVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICA8ZGl2IGNsYXNzPVwic2hvcHNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkLWxhYmVsIHNob3BzLWxhYmVsXCI+QWJvdXQgdGhlIHNob3BzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGlua3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBsZWFkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9jb2NvLXNob3Atc21hbGwucG5nXCIgYWx0PVwiQ29DbyBJY2hpYmFueWEgU3RvcmVcIiAvPlxuICAgICAgICAgICAgQ29DbyBJQ0hJQkFOWUEsIGEgc3BlY2lhbHR5IHNob3AgZm9yIGN1cnJ5IHJpY2UgaW4gSmFwYW4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgb3RoZXJzXCI+U2VlIG92ZXJzZWFzIHNob3BzIGhlcmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBjb21wYW55LWluZm9cIj5cbiAgICAgICAgICAgIElDSElCQU5ZQSBDTy4sIExURC4gQ29tcGFueSBJbmZvcm1hdGlvblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLW1haW5cIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpPC9wPlxuICAgICAgPHAgY2xhc3M9XCJmb290ZXItY3BcIj5cbiAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKSBDb3B5cmlnaHQgwqlJQ0hJQkFOWUEgQ08uLCBMVEQuIEFsbFxuICAgICAgICByaWdodHMgcmVzZXJ2ZWRcbiAgICAgIDwvcD5cbiAgICA8L2Zvb3Rlcj5cbiAgICBcbiAgICBgO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZShlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2NvLWxvZ29cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9jb2NvLWxvZ28ucG5nXCIgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nb1wiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb2NvLWxvZ28tbmFtZVwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1hYm91dFwiPkFib3V0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxtYWluIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9jb2NvLWxvZ28tY2lyY2xlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvIC0gQ2lyY2xlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItaW5mbyBlc3RhYmxpc2hlZFwiPlxuICAgICAgICAgICAgRXN0YWJsaXNoZWQgaW4gPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVzdGFibGlzaGVkLXllYXJcIj4xOTc4PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1pbmZvIGhpc3RvcnlcIj5cbiAgICAgICAgICAgIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiwga25vd24gYXMgXCJDb0NvSUNISVwiLCBpcyBhIGNoYWluXG4gICAgICAgICAgICByZXN0YXVyYW50IHNwZWNpYWxpemluZyBpbiBKYXBhbmVzZS1zdHlsZSBjdXJyeSByaWNlLiBNYW55IHBlb3BsZVxuICAgICAgICAgICAgZW5qb3kgbWFraW5nIHRoZWlyIHZlcnkgb3duIENvQ29JQ0hJIGN1cnJ5IGJ5IGN1c3RvbWl6aW5nIHRoZSByaWNlXG4gICAgICAgICAgICBwb3J0aW9uLCBzcGljZSBsZXZlbCwgYW5kIG9wdGlvbmFsIHRvcHBpbmdzIGNvbWluZyBpbiBuZWFybHkgNDBcbiAgICAgICAgICAgIHZhcmlldGllcy4gUGxlYXNlIGVuam95IG91ciBjdXJyeSwgd2hpY2ggaXMgdmVyeSBwb3B1bGFyIHdpdGggdGhlXG4gICAgICAgICAgICBKYXBhbmVzZSBwZW9wbGUhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1iZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28taGVhZGVyLWJnLnBuZ1wiIGFsdD1cIkNvQ28gQ3VycnlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNob3BzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZC1sYWJlbCBzaG9wcy1sYWJlbFwiPkFib3V0IHRoZSBzaG9wczwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgbGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1zaG9wLXNtYWxsLnBuZ1wiIGFsdD1cIkNvQ28gSWNoaWJhbnlhIFN0b3JlXCIgLz5cbiAgICAgICAgICAgIENvQ28gSUNISUJBTllBLCBhIHNwZWNpYWx0eSBzaG9wIGZvciBjdXJyeSByaWNlIGluIEphcGFuLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIG90aGVyc1wiPlNlZSBvdmVyc2VhcyBzaG9wcyBoZXJlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICBJQ0hJQkFOWUEgQ08uLCBMVEQuIENvbXBhbnkgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItbWFpblwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSk8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWNwXCI+XG4gICAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKSBDb3B5cmlnaHQgwqlJQ0hJQkFOWUEgQ08uLCBMVEQuXG4gICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICAgICAgICA8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiBcbiAgICBcbiAgICBcbiAgICBgO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudShlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLm1lbnUnKSkgcmV0dXJuO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvY28tbG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tbG9nby5wbmdcIiBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvXCIgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvY28tbG9nby1uYW1lXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1tZW51XCI+TWVudTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWFib3V0XCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxtYWluIGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkLWxhYmVsIG1lbnUtbGFiZWxcIj5BYm91dCB0aGUgbWVudTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInN1YmxhYmVsIG1lbnUtc3VibGFiZWxcIj5cbiAgICAgICAgICAgIFdlIG9mZmVyIHZhcmlvdXMgdG9wcGluZ3Mgc3VjaCBhcyBtZWF0LCBzZWFmb29kLCBhbmQgdmVnZXRhYmxlcyBhdFxuICAgICAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOQVlBLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gbWVhdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1jdXJyeS1tZWF0LnBuZ1wiIGFsdD1cIk1lYXQgTWVudVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBNZWF0IE1lbnVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gc2VhZm9vZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1jdXJyeS1zZWFmb29kLnBuZ1wiIGFsdD1cIlNlYWZvb2QgTWVudVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBTZWFmb29kIE1lbnVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gdmVnZXRhYmxlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9jb2NvLWN1cnJ5LXZlZ2V0YWJsZS5wbmdcIiBhbHQ9XCJWZWdldGFibGUgTWVudVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBWZWdldGFibGUgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBvdGhlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY29jby1jdXJyeS1vdGhlci5wbmdcIiBhbHQ9XCJPdGhlciBEaXNoZXNcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcGx1cy1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgT3RoZXIgRGlzaGVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtIGtpZHNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tY3Vycnkta2lkcy5wbmdcIiBhbHQ9XCJLaWQncyBNZW51XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIEtpZCdzIE1lbnVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gc2lkZXNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tY3Vycnktc2lkZXMucG5nXCIgYWx0PVwiU2lkZXMgTWVudVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBTaWRlcyBNZW51XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaG9wc1wiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWQtbGFiZWwgc2hvcHMtbGFiZWxcIj5BYm91dCB0aGUgc2hvcHM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIGxlYWRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NvY28tc2hvcC1zbWFsbC5wbmdcIiBhbHQ9XCJDb0NvIEljaGliYW55YSBTdG9yZVwiIC8+XG4gICAgICAgICAgICBDb0NvIElDSElCQU5ZQSwgYSBzcGVjaWFsdHkgc2hvcCBmb3IgY3VycnkgcmljZSBpbiBKYXBhbi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBvdGhlcnNcIj5TZWUgb3ZlcnNlYXMgc2hvcHMgaGVyZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIGNvbXBhbnktaW5mb1wiPlxuICAgICAgICAgICAgSUNISUJBTllBIENPLiwgTFRELiBDb21wYW55IEluZm9ybWF0aW9uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPHAgY2xhc3M9XCJmb290ZXItbWFpblwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSk8L3A+XG4gICAgICA8cCBjbGFzcz1cImZvb3Rlci1jcFwiPlxuICAgICAgICBDVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpIENvcHlyaWdodCDCqUlDSElCQU5ZQSBDTy4sIExURC4gQWxsXG4gICAgICAgIHJpZ2h0cyByZXNlcnZlZFxuICAgICAgPC9wPlxuICAgIDwvZm9vdGVyPlxuIFxuICAgIFxuICAgIFxuICAgIGA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLy8gSW1wb3J0c1xuXG5pbXBvcnQgZGlzcGxheUhvbWUgZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgZGlzcGxheUFib3V0IGZyb20gJy4vYWJvdXRwYWdlJztcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnVwYWdlJztcblxuLy8gRE9NIFNlbGVjdG9yc1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy8gY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGluay5ob21lJyk7XG4vLyBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLm1lbnUnKTtcbi8vIGNvbnN0IG5hdkFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLmFib3V0Jyk7XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRpc3BsYXlIb21lKTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUhvbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFib3V0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==