"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_SaleWithResidence_HouseSale_tsx"],{

/***/ "./src/templates/SaleWithResidence/HouseSale.tsx":
/*!*******************************************************!*\
  !*** ./src/templates/SaleWithResidence/HouseSale.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SaleWithResidence\\HouseSale.tsx",
    _this = undefined;




var HouseSale = function HouseSale(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "houseSale-container pb-24 pt-24",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sec-howFunctions-grid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "sec-howFunctions-relContent ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "houseSaleAbs sm:px-6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
            children: info && info.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-lg text-gray-700 pt-2",
            children: info && info.body.value.document.children[0].children[0].value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
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
        className: "w-full sec-houseSale-img",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("picture", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
            media: "(min-width:768px)",
            srcSet: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.url)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            className: "obj-fit-img",
            src: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.url),
            alt: (info === null || info === void 0 ? void 0 : info.image) && (info === null || info === void 0 ? void 0 : info.image.alt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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

_c = HouseSale;
/* harmony default export */ __webpack_exports__["default"] = (HouseSale);

var _c;

$RefreshReg$(_c, "HouseSale");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX1NhbGVXaXRoUmVzaWRlbmNlX0hvdXNlU2FsZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQU9BLElBQU1DLFNBQThCLEdBQUcsU0FBakNBLFNBQWlDLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDbkQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNFO0FBQUEsc0JBQUtBLElBQUksSUFBSUEsSUFBSSxDQUFDQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLDRCQUFiO0FBQUEsc0JBQ0dELElBQUksSUFBSUEsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQyxDQUFsQyxFQUFxQ0EsUUFBckMsQ0FBOEMsQ0FBOUMsRUFBaURGO0FBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUNFLGlCQUFLLEVBQUMsbUJBRFI7QUFFRSxrQkFBTSxFQUFFLENBQUFILElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTSxLQUFOLE1BQWVOLElBQWYsYUFBZUEsSUFBZix1QkFBZUEsSUFBSSxDQUFFTSxLQUFOLENBQVlDLEdBQTNCO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQ0UscUJBQVMsRUFBQyxhQURaO0FBRUUsZUFBRyxFQUFFLENBQUFQLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTSxLQUFOLE1BQWVOLElBQWYsYUFBZUEsSUFBZix1QkFBZUEsSUFBSSxDQUFFTSxLQUFOLENBQVlDLEdBQTNCLENBRlA7QUFHRSxlQUFHLEVBQUUsQ0FBQVAsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVNLEtBQU4sTUFBZU4sSUFBZixhQUFlQSxJQUFmLHVCQUFlQSxJQUFJLENBQUVNLEtBQU4sQ0FBWUUsR0FBM0I7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0E1QkQ7O0tBQU1UO0FBOEJOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZW1wbGF0ZXMvU2FsZVdpdGhSZXNpZGVuY2UvSG91c2VTYWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbmZvcyB9IGZyb20gJy4uLy4uL2xpYi9jbXMvdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIEluZm9Qcm9wcyB7XHJcbiAgaW5mbz86IEluZm9zO1xyXG59XHJcblxyXG5jb25zdCBIb3VzZVNhbGU6IFJlYWN0LkZDPEluZm9Qcm9wcz4gPSAoeyBpbmZvIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob3VzZVNhbGUtY29udGFpbmVyIHBiLTI0IHB0LTI0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjLWhvd0Z1bmN0aW9ucy1ncmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtaG93RnVuY3Rpb25zLXJlbENvbnRlbnQgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdXNlU2FsZUFicyBzbTpweC02XCI+XHJcbiAgICAgICAgICAgIDxoMj57aW5mbyAmJiBpbmZvLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTcwMCBwdC0yXCI+XHJcbiAgICAgICAgICAgICAge2luZm8gJiYgaW5mby5ib2R5LnZhbHVlLmRvY3VtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzZWMtaG91c2VTYWxlLWltZ1wiPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6NzY4cHgpXCJcclxuICAgICAgICAgICAgICBzcmNTZXQ9e2luZm8/LmltYWdlICYmIGluZm8/LmltYWdlLnVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iai1maXQtaW1nXCJcclxuICAgICAgICAgICAgICBzcmM9e2luZm8/LmltYWdlICYmIGluZm8/LmltYWdlLnVybH1cclxuICAgICAgICAgICAgICBhbHQ9e2luZm8/LmltYWdlICYmIGluZm8/LmltYWdlLmFsdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG91c2VTYWxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIb3VzZVNhbGUiLCJpbmZvIiwidGl0bGUiLCJib2R5IiwidmFsdWUiLCJkb2N1bWVudCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9