"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_SaleWithResidence_HowFunctions_tsx"],{

/***/ "./src/templates/SaleWithResidence/HowFunctions.tsx":
/*!**********************************************************!*\
  !*** ./src/templates/SaleWithResidence/HowFunctions.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SaleWithResidence\\HowFunctions.tsx",
    _this = undefined;




var HowFunctions = function HowFunctions(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "howFunctions-container pb-24",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sec-howFunctions-grid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "w-full sec-how-functions-img",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("picture", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
            media: "(min-width:768px)",
            srcSet: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.url)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            className: "obj-fit-img",
            src: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.url),
            alt: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.alt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "sec-howFunctions-absContent max-w-xl px-4 sm:px-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          children: info && info.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "text-lg text-gray-700 pt-2",
          children: info && info.body.value.document.children[0].children[0].value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = HowFunctions;
/* harmony default export */ __webpack_exports__["default"] = (HowFunctions);

var _c;

$RefreshReg$(_c, "HowFunctions");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX1NhbGVXaXRoUmVzaWRlbmNlX0hvd0Z1bmN0aW9uc190c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQU1BLElBQU1DLFlBQWlDLEdBQUcsU0FBcENBLFlBQW9DLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFDRSxpQkFBSyxFQUFDLG1CQURSO0FBRUUsa0JBQU0sRUFBRSxDQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsS0FBTixNQUFlRCxJQUFmLGFBQWVBLElBQWYsdUJBQWVBLElBQUksQ0FBRUMsS0FBTixDQUFZQyxHQUEzQjtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUNFLHFCQUFTLEVBQUMsYUFEWjtBQUVFLGVBQUcsRUFBRSxDQUFBRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsS0FBTixNQUFlRCxJQUFmLGFBQWVBLElBQWYsdUJBQWVBLElBQUksQ0FBRUMsS0FBTixDQUFZQyxHQUEzQixDQUZQO0FBR0UsZUFBRyxFQUFFLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFQyxLQUFOLE1BQWVELElBQWYsYUFBZUEsSUFBZix1QkFBZUEsSUFBSSxDQUFFQyxLQUFOLENBQVlFLEdBQTNCO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUMsbURBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLSCxJQUFJLElBQUlBLElBQUksQ0FBQ0k7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyw0QkFBYjtBQUFBLG9CQUNHSixJQUFJLElBQUlBLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxRQUFoQixDQUF5QkMsUUFBekIsQ0FBa0MsQ0FBbEMsRUFBcUNBLFFBQXJDLENBQThDLENBQTlDLEVBQWlERjtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQTFCRDs7S0FBTVA7QUE0Qk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9TYWxlV2l0aFJlc2lkZW5jZS9Ib3dGdW5jdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEluZm9zIH0gZnJvbSAnLi4vLi4vbGliL2Ntcy90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgSW5mb1Byb3BzIHtcclxuICBpbmZvPzogSW5mb3M7XHJcbn1cclxuY29uc3QgSG93RnVuY3Rpb25zOiBSZWFjdC5GQzxJbmZvUHJvcHM+ID0gKHsgaW5mbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93RnVuY3Rpb25zLWNvbnRhaW5lciBwYi0yNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1ob3dGdW5jdGlvbnMtZ3JpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNlYy1ob3ctZnVuY3Rpb25zLWltZ1wiPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6NzY4cHgpXCJcclxuICAgICAgICAgICAgICBzcmNTZXQ9e2luZm8/LmltYWdlICYmIGluZm8/LmltYWdlLnVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iai1maXQtaW1nXCJcclxuICAgICAgICAgICAgICBzcmM9e2luZm8/LmltYWdlICYmIGluZm8/LmltYWdlLnVybH1cclxuICAgICAgICAgICAgICBhbHQ9e2luZm8/LmltYWdlICYmIGluZm8/LmltYWdlLmFsdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1ob3dGdW5jdGlvbnMtYWJzQ29udGVudCBtYXgtdy14bCBweC00IHNtOnB4LTZcIj5cclxuICAgICAgICAgIDxoMj57aW5mbyAmJiBpbmZvLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgcHQtMlwiPlxyXG4gICAgICAgICAgICB7aW5mbyAmJiBpbmZvLmJvZHkudmFsdWUuZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvd0Z1bmN0aW9ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG93RnVuY3Rpb25zIiwiaW5mbyIsImltYWdlIiwidXJsIiwiYWx0IiwidGl0bGUiLCJib2R5IiwidmFsdWUiLCJkb2N1bWVudCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==