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
          <img src="/img/coco-logo.png" alt="Coco Ichibanya Logo" />
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
            <img src="/img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
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
          <img src="/img/coco-logo.png" alt="Coco Ichibanya Logo" />
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
            src="/img/coco-logo-circle.png"
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
          <img src="/img/coco-header-bg.png" alt="CoCo Curry" />
        </div>
      </main>

      <div class="shops">
        <p class="head-label shops-label">About the shops</p>
        <div class="shops-links">
          <div class="shops-link lead">
            <img src="/img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
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
          <img src="/img/coco-logo.png" alt="Coco Ichibanya Logo" />
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
            <img src="/img/coco-curry-meat.png" alt="Meat Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Meat Menu
            </div>
          </div>
          <div class="menu-item seafood">
            <img src="/img/coco-curry-seafood.png" alt="Seafood Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Seafood Menu
            </div>
          </div>
          <div class="menu-item vegetable">
            <img src="/img/coco-curry-vegetable.png" alt="Vegetable Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Vegetable Menu
            </div>
          </div>
          <div class="menu-item other">
            <img src="/img/coco-curry-other.png" alt="Other Dishes" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Other Dishes
            </div>
          </div>
          <div class="menu-item kids">
            <img src="/img/coco-curry-kids.png" alt="Kid's Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Kid's Menu
            </div>
          </div>
          <div class="menu-item sides">
            <img src="/img/coco-curry-sides.png" alt="Sides Menu" />
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
            <img src="/img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhOztBQUVFO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EYTs7QUFFcUI7O0FBRW5CO0FBQ2Y7O0FBRUEsRUFBRSxrREFBUTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7QUNSYTs7QUFFRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFYTs7QUFFRTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7O0FBRWtDO0FBQ0c7QUFDRTtBQUNGOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsOENBQVE7QUFDeEMsaUNBQWlDLDhDQUFXO0FBQzVDLGlDQUFpQyw4Q0FBVztBQUM1QyxpQ0FBaUMsK0NBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9hYm91dHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvaW5pdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlBYm91dChlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLmxpbmstYWJvdXQnKSkgcmV0dXJuO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gYFxuICBcbiAgICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvY28tbG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jb2NvLWxvZ28ucG5nXCIgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nb1wiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb2NvLWxvZ28tbmFtZVwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1hYm91dFwiPkFib3V0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW5mby1jb250YWluZXJcIj5cbiAgICAgIDxwIGNsYXNzPVwiYWJvdXQtaW5mbyBtYWluXCI+XG4gICAgICAgIFdlIHdpbGwgcHJvdmlkZSBvdXIgY3VycnkgcmljZSxhIGRpc2ggbG92ZWQgYnkgdGhlIEphcGFuZXNlIGZvciBzbyBsb25nLFxuICAgICAgICBiZXlvbmQgdGhlIGJvcmRlci5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYWJvdXQtaW5mbyBoaXN0b3J5XCI+XG4gICAgICAgIFRoZSBcIkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBXCIgc3RhcnRlZCBmcm9tIDMgc2hvcHMgc3Vycm91bmRlZCBieSByaWNlXG4gICAgICAgIGZpZWxkcyBpbiB0aGUgc3VidXJiIGFyZWEgb2YgTmFnb3lhLCBpbiAxOTc4LiBXaXRoIG91ciBjdXN0b21lciBmaXJzdFxuICAgICAgICBzcGlyaXQsIHdlIGhhdmUgYmVlbiBzdXBwb3J0ZWQgYnkgbWFueSBjdXN0b21lcnMgZm9yIDQwIHllYXJzIHVudGlsIG5vdyxcbiAgICAgICAgYW5kIGluIDIwMDQsIHdlIHdlcmUgYWJsZSB0byBpbmNyZWFzZSBvdXIgc2hvcHMgdXAgdG8gMSwwMDAuIFRvZGF5LFxuICAgICAgICBDb0NvSUNISSBoYXMgZXhwYW5kZWQgb3ZlcnNlYXMgdG8gc3VjaCBhcyBIYXdhaWksIFNoYW5naGFpLCBCYW5na29rLFxuICAgICAgICBIb25nIEtvbmcsIGFuZCBMb3MgQW5nZWxlcywgYW5kIGlzIGNvbnRpbnVpbmcgdG8gYmUgbG92ZWQgYnkgdGhlIGxvY2FsXG4gICAgICAgIGN1c3RvbWVycy5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvIG92ZXJsYXlcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgPGRpdiBjbGFzcz1cInNob3BzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZC1sYWJlbCBzaG9wcy1sYWJlbFwiPkFib3V0IHRoZSBzaG9wczwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgbGVhZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NvY28tc2hvcC1zbWFsbC5wbmdcIiBhbHQ9XCJDb0NvIEljaGliYW55YSBTdG9yZVwiIC8+XG4gICAgICAgICAgICBDb0NvIElDSElCQU5ZQSwgYSBzcGVjaWFsdHkgc2hvcCBmb3IgY3VycnkgcmljZSBpbiBKYXBhbi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBvdGhlcnNcIj5TZWUgb3ZlcnNlYXMgc2hvcHMgaGVyZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIGNvbXBhbnktaW5mb1wiPlxuICAgICAgICAgICAgSUNISUJBTllBIENPLiwgTFRELiBDb21wYW55IEluZm9ybWF0aW9uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPHAgY2xhc3M9XCJmb290ZXItbWFpblwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSk8L3A+XG4gICAgICA8cCBjbGFzcz1cImZvb3Rlci1jcFwiPlxuICAgICAgICBDVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpIENvcHlyaWdodCDCqUlDSElCQU5ZQSBDTy4sIExURC4gQWxsXG4gICAgICAgIHJpZ2h0cyByZXNlcnZlZFxuICAgICAgPC9wPlxuICAgIDwvZm9vdGVyPlxuICAgIFxuICAgIGA7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpbml0UGFnZSBmcm9tICcuL2luaXRwYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhvbWUoZSkge1xuICBpZiAoZS50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGluay5saW5rLWhvbWUnKSkgcmV0dXJuO1xuXG4gIGluaXRQYWdlKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRQYWdlKGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gIFxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvY28tbG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jb2NvLWxvZ28ucG5nXCIgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nb1wiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb2NvLWxvZ28tbmFtZVwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1hYm91dFwiPkFib3V0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxtYWluIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvY29jby1sb2dvLWNpcmNsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiQ29jbyBJY2hpYmFueWEgTG9nbyAtIENpcmNsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLWluZm8gZXN0YWJsaXNoZWRcIj5cbiAgICAgICAgICAgIEVzdGFibGlzaGVkIGluIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlc3RhYmxpc2hlZC15ZWFyXCI+MTk3ODwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItaW5mbyBoaXN0b3J5XCI+XG4gICAgICAgICAgICBcIkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBXCIsIGtub3duIGFzIFwiQ29Db0lDSElcIiwgaXMgYSBjaGFpblxuICAgICAgICAgICAgcmVzdGF1cmFudCBzcGVjaWFsaXppbmcgaW4gSmFwYW5lc2Utc3R5bGUgY3VycnkgcmljZS4gTWFueSBwZW9wbGVcbiAgICAgICAgICAgIGVuam95IG1ha2luZyB0aGVpciB2ZXJ5IG93biBDb0NvSUNISSBjdXJyeSBieSBjdXN0b21pemluZyB0aGUgcmljZVxuICAgICAgICAgICAgcG9ydGlvbiwgc3BpY2UgbGV2ZWwsIGFuZCBvcHRpb25hbCB0b3BwaW5ncyBjb21pbmcgaW4gbmVhcmx5IDQwXG4gICAgICAgICAgICB2YXJpZXRpZXMuIFBsZWFzZSBlbmpveSBvdXIgY3VycnksIHdoaWNoIGlzIHZlcnkgcG9wdWxhciB3aXRoIHRoZVxuICAgICAgICAgICAgSmFwYW5lc2UgcGVvcGxlIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYmdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvY29jby1oZWFkZXItYmcucG5nXCIgYWx0PVwiQ29DbyBDdXJyeVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2hvcHNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkLWxhYmVsIHNob3BzLWxhYmVsXCI+QWJvdXQgdGhlIHNob3BzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGlua3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBsZWFkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvY29jby1zaG9wLXNtYWxsLnBuZ1wiIGFsdD1cIkNvQ28gSWNoaWJhbnlhIFN0b3JlXCIgLz5cbiAgICAgICAgICAgIENvQ28gSUNISUJBTllBLCBhIHNwZWNpYWx0eSBzaG9wIGZvciBjdXJyeSByaWNlIGluIEphcGFuLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIG90aGVyc1wiPlNlZSBvdmVyc2VhcyBzaG9wcyBoZXJlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICBJQ0hJQkFOWUEgQ08uLCBMVEQuIENvbXBhbnkgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb290ZXItbWFpblwiPkNVUlJZIEhPVVNFIENvQ28gSUNISUJBTllBIChKYXBhbmVzZSk8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWNwXCI+XG4gICAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKSBDb3B5cmlnaHQgwqlJQ0hJQkFOWUEgQ08uLCBMVEQuXG4gICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICAgICAgICA8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiBcbiAgICBcbiAgICBcbiAgICBgO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudShlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saW5rLmxpbmstbWVudScpKSByZXR1cm47XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBgXG4gIFxuICAgICA8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29jby1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NvY28tbG9nby5wbmdcIiBhbHQ9XCJDb2NvIEljaGliYW55YSBMb2dvXCIgLz5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvY28tbG9nby1uYW1lXCI+Q1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1saW5rIGxpbmstaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxpbmsgbGluay1tZW51XCI+TWVudTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbGluayBsaW5rLWFib3V0XCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxtYWluIGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkLWxhYmVsIG1lbnUtbGFiZWxcIj5BYm91dCB0aGUgbWVudTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInN1YmxhYmVsIG1lbnUtc3VibGFiZWxcIj5cbiAgICAgICAgICAgIFdlIG9mZmVyIHZhcmlvdXMgdG9wcGluZ3Mgc3VjaCBhcyBtZWF0LCBzZWFmb29kLCBhbmQgdmVnZXRhYmxlcyBhdFxuICAgICAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOQVlBLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gbWVhdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NvY28tY3VycnktbWVhdC5wbmdcIiBhbHQ9XCJNZWF0IE1lbnVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcGx1cy1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgTWVhdCBNZW51XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtIHNlYWZvb2RcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jb2NvLWN1cnJ5LXNlYWZvb2QucG5nXCIgYWx0PVwiU2VhZm9vZCBNZW51XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIFNlYWZvb2QgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSB2ZWdldGFibGVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jb2NvLWN1cnJ5LXZlZ2V0YWJsZS5wbmdcIiBhbHQ9XCJWZWdldGFibGUgTWVudVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBWZWdldGFibGUgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBvdGhlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NvY28tY3Vycnktb3RoZXIucG5nXCIgYWx0PVwiT3RoZXIgRGlzaGVzXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LXBsdXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIE90aGVyIERpc2hlc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBraWRzXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvY29jby1jdXJyeS1raWRzLnBuZ1wiIGFsdD1cIktpZCdzIE1lbnVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtcGx1cy1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgS2lkJ3MgTWVudVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBzaWRlc1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NvY28tY3Vycnktc2lkZXMucG5nXCIgYWx0PVwiU2lkZXMgTWVudVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1wbHVzLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICBTaWRlcyBNZW51XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaG9wc1wiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWQtbGFiZWwgc2hvcHMtbGFiZWxcIj5BYm91dCB0aGUgc2hvcHM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcy1saW5rIGxlYWRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jb2NvLXNob3Atc21hbGwucG5nXCIgYWx0PVwiQ29DbyBJY2hpYmFueWEgU3RvcmVcIiAvPlxuICAgICAgICAgICAgQ29DbyBJQ0hJQkFOWUEsIGEgc3BlY2lhbHR5IHNob3AgZm9yIGN1cnJ5IHJpY2UgaW4gSmFwYW4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BzLWxpbmsgb3RoZXJzXCI+U2VlIG92ZXJzZWFzIHNob3BzIGhlcmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHMtbGluayBjb21wYW55LWluZm9cIj5cbiAgICAgICAgICAgIElDSElCQU5ZQSBDTy4sIExURC4gQ29tcGFueSBJbmZvcm1hdGlvblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLW1haW5cIj5DVVJSWSBIT1VTRSBDb0NvIElDSElCQU5ZQSAoSmFwYW5lc2UpPC9wPlxuICAgICAgPHAgY2xhc3M9XCJmb290ZXItY3BcIj5cbiAgICAgICAgQ1VSUlkgSE9VU0UgQ29DbyBJQ0hJQkFOWUEgKEphcGFuZXNlKSBDb3B5cmlnaHQgwqlJQ0hJQkFOWUEgQ08uLCBMVEQuIEFsbFxuICAgICAgICByaWdodHMgcmVzZXJ2ZWRcbiAgICAgIDwvcD5cbiAgICA8L2Zvb3Rlcj5cbiBcbiAgICBcbiAgICBcbiAgICBgO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbi8vIEltcG9ydHNcblxuaW1wb3J0IGluaXRQYWdlIGZyb20gJy4vaW5pdHBhZ2UnO1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGRpc3BsYXlBYm91dCBmcm9tICcuL2Fib3V0cGFnZSc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9tZW51cGFnZSc7XG5cbi8vIERPTSBTZWxlY3RvcnNcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFBhZ2UpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUhvbWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFib3V0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==