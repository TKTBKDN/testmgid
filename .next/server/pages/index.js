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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./domain.tsx":
/*!********************!*\
  !*** ./domain.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domain\": () => (/* binding */ domain)\n/* harmony export */ });\nconst domain = \"https://moluy.com\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb21haW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxTQUFTLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R2YnQvLi9kb21haW4udHN4PzVkYWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRvbWFpbiA9IFwiaHR0cHM6Ly9tb2x1eS5jb21cIjtcbiJdLCJuYW1lcyI6WyJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./domain.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Error),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fetch-meta-tags */ \"fetch-meta-tags\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain */ \"./domain.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([fetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__]);\nfetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore\n\n\n\n\n\nasync function getServerSideProps(context) {\n    const data = await (0,fetch_meta_tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_domain__WEBPACK_IMPORTED_MODULE_4__.domain);\n    return {\n        props: data\n    };\n}\nfunction Error({ url , title , description , icon , image  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"og:title\",\n                    content: title\n                }, void 0, false, {\n                    fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"og:description\",\n                    content: description\n                }, void 0, false, {\n                    fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"og:image\",\n                    content: image\n                }, void 0, false, {\n                    fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: icon\n                }, void 0, false, {\n                    fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/viet.nguyen.p/Downloads/common-mainmoi/pages/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWE7QUFDYjtBQUF3QztBQUNYO0FBQ0g7QUFDUztBQUU1QixlQUFlSSxtQkFBbUJDLE9BQVksRUFBRTtJQUNyRCxNQUFNQyxPQUFPLE1BQU1OLDJEQUFTQSxDQUFDRywyQ0FBTUE7SUFFbkMsT0FBTztRQUNMSSxPQUFPRDtJQUNUO0FBQ0YsQ0FBQztBQUVjLFNBQVNFLE1BQU0sRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQU8sRUFBRTtJQUMzRSxxQkFDRTtrQkFDRSw0RUFBQ1osa0RBQUlBOzs4QkFDSCw4REFBQ1M7OEJBQU9BOzs7Ozs7OEJBQ1IsOERBQUNJO29CQUFLQyxNQUFLO29CQUFXQyxTQUFTTjs7Ozs7OzhCQUMvQiw4REFBQ0k7b0JBQUtDLE1BQUs7b0JBQWlCQyxTQUFTTDs7Ozs7OzhCQUNyQyw4REFBQ0c7b0JBQUtDLE1BQUs7b0JBQVdDLFNBQVNIOzs7Ozs7OEJBQy9CLDhEQUFDQztvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7OzhCQUM5Qiw4REFBQ0M7b0JBQUtDLEtBQUk7b0JBQU9DLE1BQU1QOzs7Ozs7Ozs7Ozs7O0FBSS9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dmJ0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGZldGNoTWV0YSBmcm9tIFwiZmV0Y2gtbWV0YS10YWdzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb21haW4gfSBmcm9tIFwiLi4vZG9tYWluXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE1ldGEoZG9tYWluKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiBkYXRhLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvcih7IHVybCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uLCBpbWFnZSB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2ljb259IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZmV0Y2hNZXRhIiwiSGVhZCIsIlJlYWN0IiwiZG9tYWluIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImRhdGEiLCJwcm9wcyIsIkVycm9yIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJpbWFnZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();