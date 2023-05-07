"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_LogoCloud_tsx"],{

/***/ "./src/templates/LogoCloud.tsx":
/*!*************************************!*\
  !*** ./src/templates/LogoCloud.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var _TrustPilotSmallWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrustPilotSmallWidget */ "./src/templates/TrustPilotSmallWidget.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\LogoCloud.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Cloud = function Cloud(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "max-w-7xl py-4 sm:px-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        className: "text-center text-3xl font-bold text-white",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "mt-4 grid grid-cols-2 gap-2 md:grid-cols-3",
        children: props.images.map(function (image) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "logoPartners max-w-16 max-h-24 col-span-1 flex justify-center py-4 px-12 bg-white rounded-lg filter grayscale hover:grayscale-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              className: "object-contain",
              src: image.logo.src,
              alt: image.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this)
          }, image.name, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = Cloud;

var LogoCloud = function LogoCloud(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_background_Background__WEBPACK_IMPORTED_MODULE_2__.Background, {
    color: "bg-primary-500",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_3__.Section, {
      yPadding: "py-4 pb-8",
      children: [props.showTrust && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TrustPilotSmallWidget__WEBPACK_IMPORTED_MODULE_4__.default, {
        theme: "dark"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cloud, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_c2 = LogoCloud;
/* harmony default export */ __webpack_exports__["default"] = (LogoCloud);

var _c, _c2;

$RefreshReg$(_c, "Cloud");
$RefreshReg$(_c2, "LogoCloud");

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


/***/ }),

/***/ "./src/templates/TrustPilotSmallWidget.tsx":
/*!*************************************************!*\
  !*** ./src/templates/TrustPilotSmallWidget.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\TrustPilotSmallWidget.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var TrustPilotSmallWidget = function TrustPilotSmallWidget(_ref) {
  _s();

  var _ref$trustClasses = _ref.trustClasses,
      trustClasses = _ref$trustClasses === void 0 ? 'lg:hidden' : _ref$trustClasses,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'light' : _ref$theme;
  var largeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(largeRef.current, true);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "lg:bg-white ".concat(trustClasses, " sm:block pl-4 py-2"),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      ref: largeRef,
      className: "trustpilot-widget",
      "data-locale": "de-DE",
      "data-template-id": "53aa8807dec7e10d38f59f32",
      "data-businessunit-id": "6183fe7c30372a1e65069f84",
      "data-style-height": "120px",
      "data-style-width": "100%",
      "data-theme": theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "https://de.trustpilot.com/review/gniw.de",
        target: "_blank",
        rel: "noopener",
        children: "Trustpilot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(TrustPilotSmallWidget, "VSFiw2O0rDif6luIyhqxY4bU8+0=");

_c = TrustPilotSmallWidget;
/* harmony default export */ __webpack_exports__["default"] = (TrustPilotSmallWidget);

var _c;

$RefreshReg$(_c, "TrustPilotSmallWidget");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX0xvZ29DbG91ZF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFhQSxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQTRCO0FBQ3hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQywyQ0FBYjtBQUFBLGtCQUNHQSxLQUFLLENBQUNDO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLDRDQUFmO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSw4QkFDaEI7QUFFRSxxQkFBUyxFQUFDLGlJQUZaO0FBQUEsbUNBSUU7QUFDRSx1QkFBUyxFQUFDLGdCQURaO0FBRUUsaUJBQUcsRUFBRUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBRmxCO0FBR0UsaUJBQUcsRUFBRUYsS0FBSyxDQUFDRztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixhQUNPSCxLQUFLLENBQUNHLElBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0F4QkQ7O0tBQU1SOztBQTBCTixJQUFNUyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixLQUFELEVBQTRCO0FBQzVDLHNCQUNFLDhEQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFDLGdCQUFsQjtBQUFBLDJCQUNFLDhEQUFDLG9EQUFEO0FBQVMsY0FBUSxFQUFDLFdBQWxCO0FBQUEsaUJBQ0dBLEtBQUssQ0FBQ1MsU0FBTixpQkFBbUIsOERBQUMsMkRBQUQ7QUFBdUIsYUFBSyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEdEIsZUFFRSw4REFBQyxLQUFELG9CQUFXVCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztNQUFNUTtBQVdOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7OztBQU1BLElBQU1WLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FHYjtBQUFBOztBQUFBLCtCQUZmYyxZQUVlO0FBQUEsTUFGZkEsWUFFZSxrQ0FGQSxXQUVBO0FBQUEsd0JBRGZDLEtBQ2U7QUFBQSxNQURmQSxLQUNlLDJCQURQLE9BQ087QUFDZixNQUFNQyxRQUFRLEdBQUdILDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBRCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxRQUFLSyxNQUFELENBQWdCQyxVQUFwQixFQUFnQztBQUM3QkQsTUFBQUEsTUFBRCxDQUFnQkMsVUFBaEIsQ0FBMkJDLGVBQTNCLENBQTJDSCxRQUFRLENBQUNJLE9BQXBELEVBQTZELElBQTdEO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUEsc0JBQ0U7QUFBSyxhQUFTLHdCQUFpQk4sWUFBakIsd0JBQWQ7QUFBQSwyQkFDRTtBQUNFLFNBQUcsRUFBRUUsUUFEUDtBQUVFLGVBQVMsRUFBQyxtQkFGWjtBQUdFLHFCQUFZLE9BSGQ7QUFJRSwwQkFBaUIsMEJBSm5CO0FBS0UsOEJBQXFCLDBCQUx2QjtBQU1FLDJCQUFrQixPQU5wQjtBQU9FLDBCQUFpQixNQVBuQjtBQVFFLG9CQUFZRCxLQVJkO0FBQUEsNkJBVUU7QUFDRSxZQUFJLEVBQUMsMENBRFA7QUFFRSxjQUFNLFVBRlI7QUFHRSxXQUFHLEVBQUMsVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0FuQ0Q7O0dBQU1mOztLQUFBQTtBQXFDTiwrREFBZUEscUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9Mb2dvQ2xvdWQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvdGVtcGxhdGVzL1RydXN0UGlsb3RTbWFsbFdpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vbGF5b3V0L1NlY3Rpb24nO1xyXG5pbXBvcnQgVHJ1c3RQaWxvdFNtYWxsV2lkZ2V0IGZyb20gJy4vVHJ1c3RQaWxvdFNtYWxsV2lkZ2V0JztcclxuXHJcbnR5cGUgSUltYWdlID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsb2dvOiBhbnk7XHJcbn07XHJcblxyXG50eXBlIElMb2dvQ2xvdWRQcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGltYWdlczogSUltYWdlW107XHJcbiAgc2hvd1RydXN0PzogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IENsb3VkID0gKHByb3BzOiBJTG9nb0Nsb3VkUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgcHktNCBzbTpweC02XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgIHtwcm9wcy5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbWFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29QYXJ0bmVycyBtYXgtdy0xNiBtYXgtaC0yNCBjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgcHktNCBweC0xMiBiZy13aGl0ZSByb3VuZGVkLWxnIGZpbHRlciBncmF5c2NhbGUgaG92ZXI6Z3JheXNjYWxlLTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5sb2dvLnNyY31cclxuICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMb2dvQ2xvdWQgPSAocHJvcHM6IElMb2dvQ2xvdWRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFja2dyb3VuZCBjb2xvcj1cImJnLXByaW1hcnktNTAwXCI+XHJcbiAgICAgIDxTZWN0aW9uIHlQYWRkaW5nPVwicHktNCBwYi04XCI+XHJcbiAgICAgICAge3Byb3BzLnNob3dUcnVzdCAmJiA8VHJ1c3RQaWxvdFNtYWxsV2lkZ2V0IHRoZW1lPVwiZGFya1wiIC8+fVxyXG4gICAgICAgIDxDbG91ZCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvQmFja2dyb3VuZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb0Nsb3VkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVHJ1c1Byb3BzIHtcclxuICB0cnVzdENsYXNzZXM/OiBzdHJpbmc7XHJcbiAgdGhlbWU/OiBzdHJpbmc7XHJcbn1cclxuY29uc3QgVHJ1c3RQaWxvdFNtYWxsV2lkZ2V0ID0gKHtcclxuICB0cnVzdENsYXNzZXMgPSAnbGc6aGlkZGVuJyxcclxuICB0aGVtZSA9ICdsaWdodCcsXHJcbn06IFRydXNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxhcmdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJZiB3aW5kb3cuVHJ1c3RwaWxvdCBpcyBhdmFpbGFibGUgaXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIGxvYWQgdGhlIFRydXN0Qm94IGZyb20gb3VyIHJlZi5cclxuICAgIC8vIElmIGl0J3Mgbm90LCBpdCBtZWFucyB0aGUgc2NyaXB0IHlvdSBwYXN0ZWQgaW50byA8aGVhZCAvPiBpc24ndCBsb2FkZWQgIGp1c3QgeWV0LlxyXG4gICAgLy8gV2hlbiBpdCBpcywgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGxvYWQgdGhlIFRydXN0Qm94LlxyXG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5UcnVzdHBpbG90KSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5UcnVzdHBpbG90LmxvYWRGcm9tRWxlbWVudChsYXJnZVJlZi5jdXJyZW50LCB0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbGc6Ymctd2hpdGUgJHt0cnVzdENsYXNzZXN9IHNtOmJsb2NrIHBsLTQgcHktMmB9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtsYXJnZVJlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ0cnVzdHBpbG90LXdpZGdldFwiXHJcbiAgICAgICAgZGF0YS1sb2NhbGU9XCJkZS1ERVwiXHJcbiAgICAgICAgZGF0YS10ZW1wbGF0ZS1pZD1cIjUzYWE4ODA3ZGVjN2UxMGQzOGY1OWYzMlwiXHJcbiAgICAgICAgZGF0YS1idXNpbmVzc3VuaXQtaWQ9XCI2MTgzZmU3YzMwMzcyYTFlNjUwNjlmODRcIlxyXG4gICAgICAgIGRhdGEtc3R5bGUtaGVpZ2h0PVwiMTIwcHhcIlxyXG4gICAgICAgIGRhdGEtc3R5bGUtd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBkYXRhLXRoZW1lPXt0aGVtZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZS50cnVzdHBpbG90LmNvbS9yZXZpZXcvZ25pdy5kZVwiXHJcbiAgICAgICAgICB0YXJnZXQ9e2BfYmxhbmtgfVxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFRydXN0cGlsb3RcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRydXN0UGlsb3RTbWFsbFdpZGdldDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFja2dyb3VuZCIsIlNlY3Rpb24iLCJUcnVzdFBpbG90U21hbGxXaWRnZXQiLCJDbG91ZCIsInByb3BzIiwidGl0bGUiLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsImxvZ28iLCJzcmMiLCJuYW1lIiwiTG9nb0Nsb3VkIiwic2hvd1RydXN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidHJ1c3RDbGFzc2VzIiwidGhlbWUiLCJsYXJnZVJlZiIsIndpbmRvdyIsIlRydXN0cGlsb3QiLCJsb2FkRnJvbUVsZW1lbnQiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==