/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/validate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/validate.js":
/*!************************!*\
  !*** ./js/validate.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\n    const submit = document.getElementById('js-submit');\n    const errorContainer = document.querySelector('#js-error');\n    const regExpsObj = {\n        name: /[a-zA-Zа-яА-Я|\\s-| ]/gm,\n        email: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/\n    };\n\n    const form= document.querySelector('form');\n    errorContainer.removeAttribute('class');\n    form.addEventListener('focusout', function (event) {\n\n        let currentInput = event.target;\n        let regName = currentInput.getAttribute('name');\n        let validData  = '';\n            if(currentInput.getAttribute('name') === regName && currentInput.value !== ''){\n                errorContainer.removeAttribute('class');\n                if(regExpsObj.hasOwnProperty(regName)){\n                    validData = regExpsObj[regName].exec(currentInput.value)\n                }\n                if(!regExpsObj.hasOwnProperty(regName)){\n                    validData = currentInput.value\n                }\n                errorContainer.setAttribute('class', 'error');\n            }\n\n            if(!validData) {\n                currentInput.classList.add('wrapper__form__input-error');\n                errorContainer.setAttribute('class', 'error');\n                errorContainer.innerText = `Enter correct ${regName}`;\n                errorContainer.classList.add(`error${regName}`);\n            }\n\n            if(currentInput.value === '') {\n                errorContainer.setAttribute('class', 'error');\n                errorContainer.innerText = `Can be empty`;\n                errorContainer.classList.add(`error${regName}`);\n            }\n    });\n    submit.addEventListener('click', (e) =>{\n            e.preventDefault()\n    });\n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/validate.js?");

/***/ })

/******/ });