module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(34);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function() {

eval("require")("@actions/core");


/***/ }),

/***/ 34:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(6);
const tc = __webpack_require__(141);

/*
function getFileEnding(file) {
    let fileEnding = '';

    if (file.endsWith('.tar')) {
        fileEnding = '.tar';
    } else if (file.endsWith('.tar.gz')) {
        fileEnding = '.tar.gz';
    } else if (file.endsWith('.zip')) {
        fileEnding = '.zip';
    } else if (file.endsWith('.7z')) {
        fileEnding = '.7z';
    } else {
        throw new Error("${file} has an unsupported file extension");
    }

    return fileEnding;
}
*/

try {
    const file = core.getInput('file');
    console.log("File to extract: ${file}.");

    const dest = core.getInput('dest');
    console.log("Destination: ${dest}.");

    const fileEnding = file.slice((file.lastIndexOf('.') - 1 >>> 0) + 2);
    console.log("File Extension: ${fileEnding}.");

    if ('.tar' === fileEnding || '.tar.gz' === fileEnding) {
        tc.extractTar(file, dest);
    } else if ('.zip' === fileEnding) {
        tc.extractZip(file, dest);
    } else if ('.7z' === fileEnding) {
        tc.extract7z(file, dest);
    } else {
        throw new Error("${file} has an unsupported file extension.");
    }
} catch (error) {
    core.setFailed(error.message);
}


/***/ }),

/***/ 141:
/***/ (function() {

eval("require")("@actions/tool-cache");


/***/ })

/******/ });