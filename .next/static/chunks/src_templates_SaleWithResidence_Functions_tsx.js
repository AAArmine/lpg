"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_SaleWithResidence_Functions_tsx"],{

/***/ "./src/templates/SaleWithResidence/Functions.tsx":
/*!*******************************************************!*\
  !*** ./src/templates/SaleWithResidence/Functions.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SaleWithResidence\\Functions.tsx",
    _this = undefined;




var Functions = function Functions(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "functions-container sec-howFunctions-grid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "w-full sec-howFunctions-img",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("picture", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
            media: "(min-width:768px)",
            srcSet: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.url)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            className: "obj-fit-img",
            src: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.url),
            alt: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.alt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "sec-howFunctions-absContent max-w-xl",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: info && info.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "text-lg text-gray-700 pt-2",
          children: info && info.body.value.document.children[0].children[0].value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Functions;
/* harmony default export */ __webpack_exports__["default"] = (Functions);

var _c;

$RefreshReg$(_c, "Functions");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX1NhbGVXaXRoUmVzaWRlbmNlX0Z1bmN0aW9uc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQU9BLElBQU1DLFNBQThCLEdBQUcsU0FBakNBLFNBQWlDLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDbkQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFDRSxpQkFBSyxFQUFDLG1CQURSO0FBRUUsa0JBQU0sRUFBRSxDQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsS0FBTixNQUFlRCxJQUFmLGFBQWVBLElBQWYsdUJBQWVBLElBQUksQ0FBRUMsS0FBTixDQUFZQyxHQUEzQjtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUNFLHFCQUFTLEVBQUMsYUFEWjtBQUVFLGVBQUcsRUFBRSxDQUFBRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsS0FBTixNQUFlRCxJQUFmLGFBQWVBLElBQWYsdUJBQWVBLElBQUksQ0FBRUMsS0FBTixDQUFZQyxHQUEzQixDQUZQO0FBR0UsZUFBRyxFQUFFLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFQyxLQUFOLE1BQWVELElBQWYsYUFBZUEsSUFBZix1QkFBZUEsSUFBSSxDQUFFQyxLQUFOLENBQVlFLEdBQTNCO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUMsc0NBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLSCxJQUFJLElBQUlBLElBQUksQ0FBQ0k7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyw0QkFBYjtBQUFBLG9CQUNHSixJQUFJLElBQUlBLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxRQUFoQixDQUF5QkMsUUFBekIsQ0FBa0MsQ0FBbEMsRUFBcUNBLFFBQXJDLENBQThDLENBQTlDLEVBQWlERjtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQTFCRDs7S0FBTVA7QUE0Qk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9TYWxlV2l0aFJlc2lkZW5jZS9GdW5jdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEluZm9zIH0gZnJvbSAnLi4vLi4vbGliL2Ntcy90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgSW5mb1Byb3BzIHtcclxuICBpbmZvPzogSW5mb3M7XHJcbn1cclxuXHJcbmNvbnN0IEZ1bmN0aW9uczogUmVhY3QuRkM8SW5mb1Byb3BzPiA9ICh7IGluZm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmN0aW9ucy1jb250YWluZXIgc2VjLWhvd0Z1bmN0aW9ucy1ncmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2VjLWhvd0Z1bmN0aW9ucy1pbWdcIj5cclxuICAgICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgbWVkaWE9XCIobWluLXdpZHRoOjc2OHB4KVwiXHJcbiAgICAgICAgICAgICAgc3JjU2V0PXtpbmZvPy5pbWFnZSAmJiBpbmZvPy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmotZml0LWltZ1wiXHJcbiAgICAgICAgICAgICAgc3JjPXtpbmZvPy5pbWFnZSAmJiBpbmZvPy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgYWx0PXtpbmZvPy5pbWFnZSAmJiBpbmZvPy5pbWFnZS5hbHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtaG93RnVuY3Rpb25zLWFic0NvbnRlbnQgbWF4LXcteGxcIj5cclxuICAgICAgICAgIDxoMz57aW5mbyAmJiBpbmZvLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgcHQtMlwiPlxyXG4gICAgICAgICAgICB7aW5mbyAmJiBpbmZvLmJvZHkudmFsdWUuZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnVuY3Rpb25zIiwiaW5mbyIsImltYWdlIiwidXJsIiwiYWx0IiwidGl0bGUiLCJib2R5IiwidmFsdWUiLCJkb2N1bWVudCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==