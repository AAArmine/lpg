"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_SaleWithResidence_RentalSales_tsx"],{

/***/ "./src/templates/SaleWithResidence/RentalSales.tsx":
/*!*********************************************************!*\
  !*** ./src/templates/SaleWithResidence/RentalSales.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SaleWithResidence\\RentalSales.tsx",
    _this = undefined;




var RentalSales = function RentalSales(_ref) {
  var realEstateInfo = _ref.realEstateInfo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sec-rentalSales-forth-container text-center sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: "sec-main-title",
      children: "Immobilienverkauf mit Wohnrecht in 5 einfachen Schritten"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ol", {
      className: "rentalSales-grid",
      children: realEstateInfo.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          className: "rentalSales-grid-item rs-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "grid-item-abs",
            children: index + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-gray-700",
            children: item && item.body.value.document.children[0].children[0].value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = RentalSales;
/* harmony default export */ __webpack_exports__["default"] = (RentalSales);

var _c;

$RefreshReg$(_c, "RentalSales");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX1NhbGVXaXRoUmVzaWRlbmNlX1JlbnRhbFNhbGVzX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBTUEsSUFBTUMsV0FBZ0MsR0FBRyxTQUFuQ0EsV0FBbUMsT0FBd0I7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCO0FBQy9ELHNCQUNFO0FBQUssYUFBUyxFQUFDLHdHQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUEsZ0JBQ0dBLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDbEI7QUFBSSxtQkFBUyxFQUFDLCtCQUFkO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLHNCQUFnQ0QsS0FBSyxHQUFHO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFHLHFCQUFTLEVBQUMsZUFBYjtBQUFBLHNCQUNHRCxJQUFJLElBQUlBLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxRQUFoQixDQUF5QkMsUUFBekIsQ0FBa0MsQ0FBbEMsRUFBcUNBLFFBQXJDLENBQThDLENBQTlDLEVBQWlERjtBQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUEsV0FBbURILEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtCO0FBQUEsT0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0FuQkQ7O0tBQU1KO0FBcUJOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZW1wbGF0ZXMvU2FsZVdpdGhSZXNpZGVuY2UvUmVudGFsU2FsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWxFc3RhdGVJbmZvcyB9IGZyb20gJy4uLy4uL2xpYi9jbXMvdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIEluZm9Qcm9wcyB7XHJcbiAgcmVhbEVzdGF0ZUluZm86IFJlYWxFc3RhdGVJbmZvc1tdO1xyXG59XHJcbmNvbnN0IFJlbnRhbFNhbGVzOiBSZWFjdC5GQzxJbmZvUHJvcHM+ID0gKHsgcmVhbEVzdGF0ZUluZm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1yZW50YWxTYWxlcy1mb3J0aC1jb250YWluZXIgdGV4dC1jZW50ZXIgc2VjLWNvbnRlbnQtY29udGFpbmVyIG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBwYi0yNFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwic2VjLW1haW4tdGl0bGVcIj5cclxuICAgICAgICBJbW1vYmlsaWVudmVya2F1ZiBtaXQgV29obnJlY2h0IGluIDUgZWluZmFjaGVuIFNjaHJpdHRlblxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8b2wgY2xhc3NOYW1lPVwicmVudGFsU2FsZXMtZ3JpZFwiPlxyXG4gICAgICAgIHtyZWFsRXN0YXRlSW5mby5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVudGFsU2FsZXMtZ3JpZC1pdGVtIHJzLWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWFic1wiPntpbmRleCArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICB7aXRlbSAmJiBpdGVtLmJvZHkudmFsdWUuZG9jdW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvb2w+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVudGFsU2FsZXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlbnRhbFNhbGVzIiwicmVhbEVzdGF0ZUluZm8iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImJvZHkiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9