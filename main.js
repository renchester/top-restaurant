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
  if (e.target !== document.querySelector('.nav-link.link-about')) return;

  document.querySelector('#content').innerHTML = `
  
     <div class="nav-bar">
        <div class="coco-logo">
          <img src="img/coco-logo.png" alt="Coco Ichibanya Logo" />
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
            <img src="img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
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
/* harmony import */ var _initpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpage */ "./src/initpage.js");




function displayHome(e) {
  if (e.target !== document.querySelector('.nav-link.link-home')) return;

  (0,_initpage__WEBPACK_IMPORTED_MODULE_0__.default)();
}


/***/ }),

/***/ "./src/initpage.js":
/*!*************************!*\
  !*** ./src/initpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });


function initPage(e) {
  document.querySelector('#content').innerHTML = `
  
      <div class="nav-bar">
        <div class="coco-logo">
          <img src="img/coco-logo.png" alt="Coco Ichibanya Logo" />
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
            src="img/coco-logo-circle.png"
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
          <img src="img/coco-header-bg.png" alt="CoCo Curry" />
        </div>
      </main>

      <div class="shops">
        <p class="head-label shops-label">About the shops</p>
        <div class="shops-links">
          <div class="shops-link lead">
            <img src="img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
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
  if (e.target !== document.querySelector('.nav-link.link-menu')) return;

  document.querySelector('#content').innerHTML = `
  
     <div class="nav-bar">
        <div class="coco-logo">
          <img src="img/coco-logo.png" alt="Coco Ichibanya Logo" />
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
            <img src="img/coco-curry-meat.png" alt="Meat Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Meat Menu
            </div>
          </div>
          <div class="menu-item seafood">
            <img src="img/coco-curry-seafood.png" alt="Seafood Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Seafood Menu
            </div>
          </div>
          <div class="menu-item vegetable">
            <img src="img/coco-curry-vegetable.png" alt="Vegetable Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Vegetable Menu
            </div>
          </div>
          <div class="menu-item other">
            <img src="img/coco-curry-other.png" alt="Other Dishes" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Other Dishes
            </div>
          </div>
          <div class="menu-item kids">
            <img src="img/coco-curry-kids.png" alt="Kid's Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Kid's Menu
            </div>
          </div>
          <div class="menu-item sides">
            <img src="img/coco-curry-sides.png" alt="Sides Menu" />
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
            <img src="img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
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
/* harmony import */ var _initpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpage */ "./src/initpage.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _aboutpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage */ "./src/aboutpage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menupage */ "./src/menupage.js");


// Imports






// DOM Selectors

const container = document.getElementById('content');

// Event Listeners

window.addEventListener('load', _initpage__WEBPACK_IMPORTED_MODULE_0__.default);
window.addEventListener('click', _homepage__WEBPACK_IMPORTED_MODULE_1__.default);
window.addEventListener('click', _menupage__WEBPACK_IMPORTED_MODULE_3__.default);
window.addEventListener('click', _aboutpage__WEBPACK_IMPORTED_MODULE_2__.default);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhOztBQUVFO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EYTs7QUFFcUI7O0FBRW5CO0FBQ2Y7O0FBRUEsRUFBRSxrREFBUTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7QUNSYTs7QUFFRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFYTs7QUFFRTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7O0FBRWtDO0FBQ0c7QUFDRTtBQUNGOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsOENBQVE7QUFDeEMsaUNBQWlDLDhDQUFXO0FBQzVDLGlDQUFpQyw4Q0FBVztBQUM1QyxpQ0FBaUMsK0NBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9hYm91dHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvaW5pdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlBYm91dChlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLmxpbmstYWJvdXQnKSkgcmV0dXJuO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvY28tbG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NvY28tbG9nby5wbmdcIiBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvXCIgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvY28tbG9nby1uYW1lXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1tZW51XCI+TWVudTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWFib3V0XCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgPHAgY2xhc3M9XCJhYm91dC1pbmZvIG1haW5cIj5cbiAgICAgICAgV2Ugd2lsbCBwcm92aWRlIG91ciBjdXJyeSByaWNlLGEgZGlzaCBsb3ZlZCBieSB0aGUgSmFwYW5lc2UgZm9yIHNvIGxvbmcsXG4gICAgICAgIGJleW9uZCB0aGUgYm9yZGVyLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJhYm91dC1pbmZvIGhpc3RvcnlcIj5cbiAgICAgICAgVGhlIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiBzdGFydGVkIGZyb20gMyBzaG9wcyBzdXJyb3VuZGVkIGJ5IHJpY2VcbiAgICAgICAgZmllbGRzIGluIHRoZSBzdWJ1cmIgYXJlYSBvZiBOYWdveWEsIGluIDE5NzguIFdpdGggb3VyIGN1c3RvbWVyIGZpcnN0XG4gICAgICAgIHNwaXJpdCwgd2UgaGF2ZSBiZWVuIHN1cHBvcnRlZCBieSBtYW55IGN1c3RvbWVycyBmb3IgNDAgeWVhcnMgdW50aWwgbm93LFxuICAgICAgICBhbmQgaW4gMjAwNCwgd2Ugd2VyZSBhYmxlIHRvIGluY3JlYXNlIG91ciBzaG9wcyB1cCB0byAxLDAwMC4gVG9kYXksXG4gICAgICAgIENvQ29JQ0hJIGhhcyBleHBhbmRlZCBvdmVyc2VhcyB0byBzdWNoIGFzIEhhd2FpaSwgU2hhbmdoYWksIEJhbmdrb2ssXG4gICAgICAgIEhvbmcgS29uZywgYW5kIExvcyBBbmdlbGVzLCBhbmQgaXMgY29udGludWluZyB0byBiZSBsb3ZlZCBieSB0aGUgbG9jYWxcbiAgICAgICAgY3VzdG9tZXJzLlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWluZm8gb3ZlcmxheVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICA8ZGl2IGNsYXNzPVwic2hvcHNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkLWxhYmVsIHNob3BzLWxhYmVsXCI+QWJvdXQgdGhlIHNob3BzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGlua3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBsZWFkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jb2NvLXNob3Atc21hbGwucG5nXCIgYWx0PVwiQ29DbyBJY2hpYmFueWEgU3RvcmVcIiAvPlxuICAgICAgICAgICAgQ29DbyBJQ0hJQkFOWUEsIGEgc3BlY2lhbHR5IHNob3AgZm9yIGN1cnJ5IHJpY2UgaW4gSmFwYW4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgb3RoZXJzXCI+U2VlIG92ZXJzZWFzIHNob3BzIGhlcmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBjb21wYW55LWluZm9cIj5cbiAgICAgICAgICAgIElDSElCQU5ZQSBDTy4sIExURC4gQ29tcGFueSBJbmZvcm1hdGlvblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLW1haW5cIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpPC9wPlxuICAgICAgPHAgY2xhc3M9XCJmb290ZXItY3BcIj5cbiAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKSBDb3B5cmlnaHQgwqlJQ0hJQkFOWUEgQ08uLCBMVEQuIEFsbFxuICAgICAgICByaWdodHMgcmVzZXJ2ZWRcbiAgICAgIDwvcD5cbiAgICA8L2Zvb3Rlcj5cbiAgICBcbiAgICBgO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaW5pdFBhZ2UgZnJvbSAnLi9pbml0cGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlIb21lKGUpIHtcbiAgaWYgKGUudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmsubGluay1ob21lJykpIHJldHVybjtcblxuICBpbml0UGFnZSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UGFnZShlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2NvLWxvZ29cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9jb2NvLWxvZ28ucG5nXCIgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nb1wiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb2NvLWxvZ28tbmFtZVwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1hYm91dFwiPkFib3V0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxtYWluIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImltZy9jb2NvLWxvZ28tY2lyY2xlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvIC0gQ2lyY2xlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItaW5mbyBlc3RhYmxpc2hlZFwiPlxuICAgICAgICAgICAgRXN0YWJsaXNoZWQgaW4gPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVzdGFibGlzaGVkLXllYXJcIj4xOTc4PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1pbmZvIGhpc3RvcnlcIj5cbiAgICAgICAgICAgIFwiQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUFcIiwga25vd24gYXMgXCJDb0NvSUNISVwiLCBpcyBhIGNoYWluXG4gICAgICAgICAgICByZXN0YXVyYW50IHNwZWNpYWxpemluZyBpbiBKYXBhbmVzZS1zdHlsZSBjdXJyeSByaWNlLiBNYW55IHBlb3BsZVxuICAgICAgICAgICAgZW5qb3kgbWFraW5nIHRoZWlyIHZlcnkgb3duIENvQ29JQ0hJIGN1cnJ5IGJ5IGN1c3RvbWl6aW5nIHRoZSByaWNlXG4gICAgICAgICAgICBwb3J0aW9uLCBzcGljZSBsZXZlbCwgYW5kIG9wdGlvbmFsIHRvcHBpbmdzIGNvbWluZyBpbiBuZWFybHkgNDBcbiAgICAgICAgICAgIHZhcmlldGllcy4gUGxlYXNlIGVuam95IG91ciBjdXJyeSwgd2hpY2ggaXMgdmVyeSBwb3B1bGFyIHdpdGggdGhlXG4gICAgICAgICAgICBKYXBhbmVzZSBwZW9wbGUhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1iZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NvY28taGVhZGVyLWJnLnBuZ1wiIGFsdD1cIkNvQ28gQ3VycnlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNob3BzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZC1sYWJlbCBzaG9wcy1sYWJlbFwiPkFib3V0IHRoZSBzaG9wczwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgbGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY29jby1zaG9wLXNtYWxsLnBuZ1wiIGFsdD1cIkNvQ28gSWNoaWJhbnlhIFN0b3JlXCIgLz5cbiAgICAgICAgICAgIENvQ28gSUNISUJBTllBLCBhIHNwZWNpYWx0eSBzaG9wIGZvciBjdXJyeSByaWNlIGluIEphcGFuLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIG90aGVyc1wiPlNlZSBvdmVyc2VhcyBzaG9wcyBoZXJlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICBJQ0hJQkFOWUEgQ08uLCBMVEQuIENvbXBhbnkgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItbWFpblwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSk8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWNwXCI+XG4gICAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKSBDb3B5cmlnaHQgwqlJQ0hJQkFOWUEgQ08uLCBMVEQuXG4gICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICAgICAgICA8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiBcbiAgICBcbiAgICBcbiAgICBgO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudShlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLmxpbmstbWVudScpKSByZXR1cm47XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gIFxuICAgICA8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29jby1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvY29jby1sb2dvLnBuZ1wiIGFsdD1cIkNvY28gSWNoaWJhbnlhIExvZ29cIiAvPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY29jby1sb2dvLW5hbWVcIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1ob21lXCI+SG9tZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLW1lbnVcIj5NZW51PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstYWJvdXRcIj5BYm91dDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgPG1haW4gY2xhc3M9XCJtZW51XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsLXdyYXBwZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImhlYWQtbGFiZWwgbWVudS1sYWJlbFwiPkFib3V0IHRoZSBtZW51PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwic3VibGFiZWwgbWVudS1zdWJsYWJlbFwiPlxuICAgICAgICAgICAgV2Ugb2ZmZXIgdmFyaW91cyB0b3BwaW5ncyBzdWNoIGFzIG1lYXQsIHNlYWZvb2QsIGFuZCB2ZWdldGFibGVzIGF0XG4gICAgICAgICAgICBDVVJSWSBIT1VTRSBDb0NvIElDSElCQU5BWUEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBtZWF0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jb2NvLWN1cnJ5LW1lYXQucG5nXCIgYWx0PVwiTWVhdCBNZW51XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIE1lYXQgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBzZWFmb29kXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jb2NvLWN1cnJ5LXNlYWZvb2QucG5nXCIgYWx0PVwiU2VhZm9vZCBNZW51XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIFNlYWZvb2QgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSB2ZWdldGFibGVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NvY28tY3VycnktdmVnZXRhYmxlLnBuZ1wiIGFsdD1cIlZlZ2V0YWJsZSBNZW51XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIFZlZ2V0YWJsZSBNZW51XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtIG90aGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jb2NvLWN1cnJ5LW90aGVyLnBuZ1wiIGFsdD1cIk90aGVyIERpc2hlc1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBPdGhlciBEaXNoZXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0ga2lkc1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY29jby1jdXJyeS1raWRzLnBuZ1wiIGFsdD1cIktpZCdzIE1lbnVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcGx1cy1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgS2lkJ3MgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBzaWRlc1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY29jby1jdXJyeS1zaWRlcy5wbmdcIiBhbHQ9XCJTaWRlcyBNZW51XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIFNpZGVzIE1lbnVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNob3BzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZC1sYWJlbCBzaG9wcy1sYWJlbFwiPkFib3V0IHRoZSBzaG9wczwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgbGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY29jby1zaG9wLXNtYWxsLnBuZ1wiIGFsdD1cIkNvQ28gSWNoaWJhbnlhIFN0b3JlXCIgLz5cbiAgICAgICAgICAgIENvQ28gSUNISUJBTllBLCBhIHNwZWNpYWx0eSBzaG9wIGZvciBjdXJyeSByaWNlIGluIEphcGFuLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIG90aGVyc1wiPlNlZSBvdmVyc2VhcyBzaG9wcyBoZXJlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICBJQ0hJQkFOWUEgQ08uLCBMVEQuIENvbXBhbnkgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxmb290ZXI+XG4gICAgICA8cCBjbGFzcz1cImZvb3Rlci1tYWluXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWNwXCI+XG4gICAgICAgIENVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSkgQ29weXJpZ2h0IMKpSUNISUJBTllBIENPLiwgTFRELiBBbGxcbiAgICAgICAgcmlnaHRzIHJlc2VydmVkXG4gICAgICA8L3A+XG4gICAgPC9mb290ZXI+XG4gXG4gICAgXG4gICAgXG4gICAgYDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbXBvcnRzXG5cbmltcG9ydCBpbml0UGFnZSBmcm9tICcuL2luaXRwYWdlJztcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBkaXNwbGF5QWJvdXQgZnJvbSAnLi9hYm91dHBhZ2UnO1xuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gJy4vbWVudXBhZ2UnO1xuXG4vLyBET00gU2VsZWN0b3JzXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRQYWdlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlIb21lKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNZW51KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBYm91dCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=