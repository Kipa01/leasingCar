/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _models_formValidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/formValidate */ \"./js/models/formValidate.js\");\n/* harmony import */ var _models_formValidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_formValidate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ \"../node_modules/imask/esm/index.js\");\n/* harmony import */ var swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/swiper-bundle.min.js */ \"../node_modules/swiper/swiper-bundle.min.js\");\n/* harmony import */ var swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ \"../node_modules/swiper/swiper-bundle.min.css\");\n\n\n\n\n\nvar burger = document.querySelector('.burger');\nvar nav = document.querySelector('.nav');\nvar body = document.querySelector('body'); // Burger Menu\n\nburger.addEventListener('click', function () {\n  if (burger.classList.contains('active')) {\n    burger.classList.remove('active');\n    nav.classList.remove('active');\n    body.classList.remove('lock');\n  } else {\n    burger.classList.add('active');\n    nav.classList.add('active');\n    body.classList.add('lock');\n  }\n}); // / Burger Menu\n// Modal Form\n\nvar btnsFormTrigger = document.querySelectorAll('.btn');\nvar formApplication = document.querySelector('.form');\nvar formApplicationClose = document.querySelector('.form__close');\nbtnsFormTrigger.forEach(function (e) {\n  e.addEventListener('click', function () {\n    formApplication.classList.add('show');\n    body.classList.add('form-lock');\n  });\n});\nformApplicationClose.addEventListener('click', function () {\n  formApplication.classList.remove('show');\n  body.classList.remove('form-lock');\n});\nvar phoneMask = (0,imask__WEBPACK_IMPORTED_MODULE_2__.default)(document.getElementById('tel'), {\n  mask: '+{7}(000) 000-00-00'\n}); // / Modal Form\n// slider\n\nvar mySwiper = new (swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default())('.main-slider', {\n  spaceBetween: 30,\n  loop: true,\n  effect: 'fade',\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  },\n  autoplay: {\n    delay: 10000,\n    disableOnInteraction: false\n  }\n});\nvar mySwiperNextButton = document.querySelector('.main-slider__buttonNext');\nmySwiper.on('slideChangeTransitionStart', function () {\n  mySwiperNextButton.classList.remove('active');\n  mySwiperNextButton.classList.add('active');\n}); // /slider\n// Calculator\n\nvar totalCost = document.getElementById('total-cost'),\n    anInitialFree = document.getElementById('an-initial-free'),\n    termLeasing = document.getElementById('term-leasing');\nvar totalCostRange = document.getElementById('total-cost-range'),\n    anInitialFreeRange = document.getElementById('an-initial-free-range'),\n    termLeasingRange = document.getElementById('term-leasing-range');\nvar inputsRange = document.querySelectorAll('.input-calculator__slider');\nvar inputsCount = document.querySelectorAll('.input-calculator__count');\nvar totalAmountOfCredit = document.querySelector('.calculator__count--sum');\nvar totalMonthlyPayment = document.querySelector('.calculator__count--month');\nvar anInitialFreePercent = document.querySelector('.input-calculator__unit--proc');\n\nvar assignValue = function assignValue() {\n  totalCost.value = totalCostRange.value;\n  anInitialFree.value = totalCost.value * (anInitialFreeRange.value / 100);\n  termLeasing.value = termLeasingRange.value;\n};\n\nvar assignNumberValue = function assignNumberValue(e) {\n  var elemParentChildrenRange = e.closest('.input-calculator').querySelector('.input-calculator__slider');\n\n  if (e.value < elemParentChildrenRange.min * (totalAmountOfCredit.value / 100)) {\n    if (e.classList.contains('input-calculator__unit--proc')) {\n      elemParentChildrenRange.value = elemParentChildrenRange.min;\n      e.value = elemParentChildrenRange.min * (totalAmountOfCredit.value / 100);\n    } else {\n      elemParentChildrenRange.value = elemParentChildrenRange.min;\n      e.value = elemParentChildrenRange.min;\n    }\n  } else if (e.value > elemParentChildrenRange.max * (totalAmountOfCredit.value / 100)) {\n    if (e.classList.contains('input-calculator__unit--proc')) {\n      elemParentChildrenRange.value = elemParentChildrenRange.max;\n      e.value = elemParentChildrenRange.max * (totalAmountOfCredit.value / 100);\n    } else {\n      elemParentChildrenRange.value = elemParentChildrenRange.max;\n      e.value = elemParentChildrenRange.max * (totalAmountOfCredit.value / 100);\n    }\n  } else {\n    if (e.classList.contains('input-calculator__unit--proc')) {\n      elemParentChildrenRange.value = Math.round(e.value / totalAmountOfCredit.value * 100);\n    } else {\n      elemParentChildrenRange.value = e.value;\n    }\n  }\n};\n\nvar calculation = function calculation() {\n  var totalCost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000000;\n  var anInitialFree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n  var termLeasing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var firstFeePercent = Math.round(anInitialFree / 100 * totalCost);\n  var totalCostNumber = +totalCost;\n  var monthlyPayment = Math.round((totalCostNumber + totalCostNumber * 9.1 / 100) / termLeasing); // 9.1 - процентная ставка\n\n  var loanAmount = firstFeePercent + termLeasing * monthlyPayment;\n  totalAmountOfCredit.innerHTML = \"\".concat(loanAmount, \" \\u20BD\");\n  totalMonthlyPayment.innerHTML = \"\".concat(monthlyPayment, \" \\u20BD\");\n  anInitialFreePercent.innerHTML = \"\".concat(anInitialFree, \"%\");\n};\n\nassignValue();\ncalculation(totalCost.value, anInitialFreeRange.value, termLeasing.value);\ninputsRange.forEach(function (e) {\n  e.addEventListener('input', function () {\n    assignValue();\n    calculation(+totalCost.value, +anInitialFreeRange.value, +termLeasing.value);\n  });\n});\ninputsCount.forEach(function (e) {\n  e.addEventListener('change', function () {\n    assignNumberValue(e);\n    assignValue();\n    calculation(+totalCost.value, +anInitialFreeRange.value, +termLeasing.value);\n  });\n}); // /Calculator\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/models/formValidate.js":
/*!***********************************!*\
  !*** ./js/models/formValidate.js ***!
  \***********************************/
/***/ (function() {

eval("// =========== Form ===========\nvar form = document.getElementById(\"form\");\nform.addEventListener(\"submit\", formSend);\n\nfunction formValidate(form) {\n  var formError = 0;\n  var formReq = document.querySelectorAll(\"._req\");\n\n  for (var index = 0; index < formReq.length; index++) {\n    // идем по каждому элементу массива\n    var input = formReq[index]; // каждый текущий элемент записываем в переменную input\n\n    formRemoveError(input); // удаляем класс \"_error\" у текущего поля\n\n    if (input.getAttribute(\"type\") == \"tel\" && input.value.length < 17) {\n      formAddError(input); // если имя пустое, то добавляем класс \"_error\"\n\n      formError++;\n    }\n\n    if (input.value === \"\") {\n      formAddError(input); // если имя пустое, то добавляем класс \"_error\"\n\n      formError++;\n    }\n  }\n\n  return formError;\n}\n\n;\n\nfunction formAddError(input) {\n  input.classList.add(\"_error\"); // добавляем класс \"_error\" самому элементу\n}\n\n;\n\nfunction formRemoveError(input) {\n  input.classList.remove(\"_error\"); // удаляем класс \"_error\" у самого элемента\n}\n\n;\n\nfunction formSend(e) {\n  e.preventDefault(); // Проверка на правильность введенных данных\n\n  var error = formValidate(form); // в этой переменной будем хранить кол-во ошибок(т.е. есть они или нет)\n\n  if (error == 0) {\n    // ошибок нет - делаем отправку формы\n    form.classList.add(\"_sending\"); // чтобы пользователь видел, что что-то происходит(отправка формы)\n\n    setTimeout(function () {\n      form.reset();\n      form.classList.remove(\"_sending\");\n    }, 2500);\n  }\n}\n\n; // =========== /Form ===========\n\n//# sourceURL=webpack:///./js/models/formValidate.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.scss?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_imask_esm_index_js-node_modules-fcf51f"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_imask_esm_index_js-node_modules-fcf51f"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;