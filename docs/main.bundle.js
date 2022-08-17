/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://clone-oronamin-re/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"common\": () => (/* binding */ common)\n/* harmony export */ });\n/* common script */\r\n\r\nfunction common() {\r\n    let search = location.search;\r\n    let result = search.split(\"?\")[1];\r\n    let resultImage = document.querySelectorAll('[data-control=\"toggle\"]');\r\n\r\n    /* result.html 결과 이미지 토글 */\r\n    resultImage.forEach(function(element, index) {\r\n        let images = element.children;\r\n        images[index].classList.remove(\"-on\");\r\n        if(result === 'fail') {\r\n            images[1].classList.add(\"-on\");\r\n        } else {\r\n            images[0].classList.add(\"-on\");\r\n        }\r\n    })\r\n    $(function() {\r\n        /* result.html */\r\n        $('#resultBtn').on('click', function () {\r\n            if(result === 'fail') {\r\n                location.href = \"./form.html?fail\";\r\n            } else {\r\n                location.href = \"./form.html?win\";\r\n            }\r\n        })\r\n        if(result === 'fail') {\r\n            $('.form__success').addClass('-off');\r\n            $('#form__confirm').addClass('-off');\r\n        }\r\n        /* confirm.html */\r\n        $('#confirmBtn').on('click', function () {\r\n            alert('이벤트 참여가 완료되었습니다.')\r\n        })\r\n        $('#rewriteBtn').on('click', function () {\r\n            location.href = \"./form.html?\" + result;\r\n        })\r\n        // 라디오, 체크박스 WCAG 토글 처리\r\n        $('input').on('click', function () {\r\n            if ($(this).attr('type') == 'radio') {\r\n                toggleWCAG($(this), 'radio', 'aria-checked');\r\n            } else if ($(this).attr('type') == 'checkbox') {\r\n                toggleWCAG($(this), 'checkbox', 'aria-checked');\r\n                // 약관 동의 여부에 따른 하단 '작성 완료' 버튼 활성/비활성 처리\r\n                if($(this).attr('aria-checked') == 'true') {\r\n                    $('.form__button').attr('aria-disabled', 'false');\r\n                } else {\r\n                    $('.form__button').attr('aria-disabled', 'true');\r\n                }\r\n            }\r\n        })\r\n    })\r\n\r\n    // 라디오, 체크박스 WCAG 토글 처리\r\n    function toggleWCAG (el, type, key) {\r\n        if ( type == 'radio' ) {\r\n            $('.' + el.attr('class').split('-')[0]).attr(key, 'false');\r\n            el.attr(key, 'true');\r\n        } else { // type == undefined || type == 'checkbox'\r\n            el.attr(key)  == 'true' ?\r\n                el.attr(key, 'false') :\r\n                el.attr(key, 'true');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://clone-oronamin-re/./src/js/common.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"index\": () => (/* binding */ index)\n/* harmony export */ });\n/* for index.html */\r\n\r\nfunction index() {\r\n    function winning() {\r\n        location.href = \"./result.html?win\"\r\n    }\r\n    function failing() {\r\n        location.href = \"./result.html?fail\"\r\n    }\r\n\r\n    $(function () {\r\n        $('#startBtn').on('click', function () {\r\n            Math.random() < 0.8 ? failing() : winning();\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://clone-oronamin-re/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/js/common.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\r\n(0,_common__WEBPACK_IMPORTED_MODULE_0__.common)();\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.index)();\n\n//# sourceURL=webpack://clone-oronamin-re/./src/js/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;