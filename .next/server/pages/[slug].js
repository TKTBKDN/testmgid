"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./domain.tsx":
/*!********************!*\
  !*** ./domain.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domain\": () => (/* binding */ domain)\n/* harmony export */ });\nconst domain = \"https://moluy.com\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb21haW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxTQUFTLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R2YnQvLi9kb21haW4udHN4PzVkYWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRvbWFpbiA9IFwiaHR0cHM6Ly9tb2x1eS5jb21cIjtcbiJdLCJuYW1lcyI6WyJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./domain.tsx\n");

/***/ }),

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fetch-meta-tags */ \"fetch-meta-tags\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain */ \"./domain.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([fetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__]);\nfetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore\n\n\n\n\n\nasync function getServerSideProps(context) {\n    const data = await (0,fetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_domain__WEBPACK_IMPORTED_MODULE_4__.domain + \"/\" + (context.params.slug || \"\"));\n    return {\n        props: data\n    };\n}\nfunction App({ url , title , description , icon , image  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"og:title\",\n                content: title\n            }, void 0, false, {\n                fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"og:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"og:image\",\n                content: image\n            }, void 0, false, {\n                fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1\"\n            }, void 0, false, {\n                fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: icon\n            }, void 0, false, {\n                fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/[slug].tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2I7QUFBd0M7QUFDWDtBQUNIO0FBQ1M7QUFFNUIsZUFBZUksbUJBQW1CQyxPQUFZLEVBQUU7SUFDckQsTUFBTUMsT0FBTyxNQUFNTiwyREFBU0EsQ0FBQ0csMkNBQU1BLEdBQUcsTUFBT0UsQ0FBQUEsUUFBUUUsTUFBTSxDQUFDQyxJQUFJLElBQUksRUFBQztJQUVyRSxPQUFPO1FBQUVDLE9BQU9IO0lBQUs7QUFDdkIsQ0FBQztBQUVjLFNBQVNJLElBQUksRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQU8sRUFBRTtJQUN6RSxxQkFDRSw4REFBQ2Qsa0RBQUlBOzswQkFDSCw4REFBQ1c7MEJBQU9BOzs7Ozs7MEJBQ1IsOERBQUNJO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFTTjs7Ozs7OzBCQUMvQiw4REFBQ0k7Z0JBQUtDLE1BQUs7Z0JBQWlCQyxTQUFTTDs7Ozs7OzBCQUNyQyw4REFBQ0c7Z0JBQUtDLE1BQUs7Z0JBQVdDLFNBQVNIOzs7Ozs7MEJBQy9CLDhEQUFDQztnQkFBS0MsTUFBSztnQkFBV0MsU0FBUTs7Ozs7OzBCQUM5Qiw4REFBQ0M7Z0JBQUtDLEtBQUk7Z0JBQU9DLE1BQU1QOzs7Ozs7Ozs7Ozs7QUFHN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R2YnQvLi9wYWdlcy9bc2x1Z10udHN4P2MyMzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGZldGNoTWV0YSBmcm9tIFwiZmV0Y2gtbWV0YS10YWdzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb21haW4gfSBmcm9tIFwiLi4vZG9tYWluXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE1ldGEoZG9tYWluICsgXCIvXCIgKyAoY29udGV4dC5wYXJhbXMuc2x1ZyB8fCBcIlwiKSk7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IGRhdGEgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgdXJsLCB0aXRsZSwgZGVzY3JpcHRpb24sIGljb24sIGltYWdlIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtpY29ufSAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaE1ldGEiLCJIZWFkIiwiUmVhY3QiLCJkb21haW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZGF0YSIsInBhcmFtcyIsInNsdWciLCJwcm9wcyIsIkFwcCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiaW1hZ2UiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fetch-meta-tags":
/*!**********************************!*\
  !*** external "fetch-meta-tags" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("fetch-meta-tags");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].tsx"));
module.exports = __webpack_exports__;

})();