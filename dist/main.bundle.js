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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\r\n//import { enableLiveReload } from 'electron-compile';\r\n\r\n\r\n\r\n//require('electron-reload')(__dirname)\r\n\r\nconst fs = __webpack_require__(/*! fs */ \"fs\");\r\n\r\n\r\n\r\n/*nodemon.on('start', function () {\r\n  console.log('App has started');\r\n}).on('quit', function () {\r\n  console.log('App has quit');\r\n  process.exit();\r\n}).on('restart', function (files) {\r\n  console.log('App restarted due to: ', files);\r\n});*/\r\n\r\nlet mainWindow;\r\n\r\nconsole.log(`${__dirname}`);\r\n\r\nlet watchInterval = (new Date).getTime();\r\n\r\nfs.watch(`${__dirname}`, function(event, targetfile){\r\n\r\n\r\n    if(((new Date).getTime() - watchInterval) > 500) {\r\n        mainWindow.reload();\r\n    }\r\n\r\n\r\n    console.log('watch', targetfile);\r\n    /*if(targetfile != null && event == 'rename'){\r\n        console.log( targetfile, 'is', event);\r\n        fs.stat(targetfile, function(err, stats) {\r\n           console.log(stats);\r\n        });\r\n    }*/\r\n});\r\n\r\nconst isDevMode = process.execPath.match(/[\\\\/]electron/);\r\n\r\n//if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });\r\n\r\n/*if (process.env.NODE_ENV === 'development') {\r\n    const electronHot = require('electron-hot-loader');\r\n    electronHot.install();\r\n    electronHot.watchJsx(['../renderer/*.jsx']);\r\n    electronHot.watchCss(['../renderer/*.scss']);\r\n}*/\r\n\r\nfunction createWindow() {\r\n    // Create the browser window.\r\n    mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\r\n        height: 600,\r\n        width: 800,\r\n        webPreferences: {\r\n            nativeWindowOpen: true\r\n        }\r\n    });\r\n\r\n    // and load the index.html of the app.\r\n    mainWindow.loadURL(\r\n        url__WEBPACK_IMPORTED_MODULE_2___default.a.format({\r\n            pathname: path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, './index.html'),\r\n            protocol: 'file:',\r\n            slashes: true,\r\n        })\r\n    );\r\n\r\n    // Open the DevTools.\r\n    mainWindow.webContents.openDevTools();\r\n\r\n    // Emitted when the window is closed.\r\n    mainWindow.on('closed', () => {\r\n        // Dereference the window object, usually you would store windows\r\n        // in an array if your app supports multi windows, this is the time\r\n        // when you should delete the corresponding element.\r\n        mainWindow = null;\r\n    });\r\n}\r\n\r\n// This method will be called when Electron has finished\r\n// initialization and is ready to create browser windows.\r\n// Some APIs can only be used after this event occurs.\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', createWindow);\r\n\r\n// Quit when all windows are closed.\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\r\n    // On OS X it is common for applications and their menu bar\r\n    // to stay active until the user quits explicitly with Cmd + Q\r\n    if (process.platform !== 'darwin') {\r\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\r\n    }\r\n});\r\n\r\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\r\n    // On OS X it\"s common to re-create a window in the app when the\r\n    // dock icon is clicked and there are no other windows open.\r\n    if (mainWindow === null) {\r\n        createWindow();\r\n    }\r\n});\r\n\r\n// In this file you can include the rest of your app\"s specific main process\r\n// code. You can also put them in separate files and require them here.\r\n\n\n//# sourceURL=webpack:///./src/main/main.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });