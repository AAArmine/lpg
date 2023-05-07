"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_TrustPilotCarousel_tsx"],{

/***/ "./src/templates/TrustPilotCarousel.tsx":
/*!**********************************************!*\
  !*** ./src/templates/TrustPilotCarousel.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\TrustPilotCarousel.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var TrustPilotCarousel = function TrustPilotCarousel() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),
      windowWidth = _useState[0],
      setWindowWidth = _useState[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  var handleResize = function handleResize() {
    setWindowWidth(window.innerWidth);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_background_Background__WEBPACK_IMPORTED_MODULE_1__.Background, {
    color: "bg-primary-500",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: "text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl py-8",
      id: "kundenstimmen",
      children: "Einige unserer Kundenstimmen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_2__.Section, {
      yPadding: "pt-16 pb-20",
      id: "trust",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        ref: ref,
        className: "trustpilot-widget",
        "data-locale": "de-CH",
        "data-template-id": "53aa8912dec7e10d38f59f36",
        "data-businessunit-id": "6183fe7c30372a1e65069f84",
        "data-style-height": windowWidth < 768 ? '350px' : '150px',
        "data-style-width": "100%",
        "data-theme": "dark",
        "data-stars": "1,2,3,4,5",
        "data-review-languages": "de",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://ch.trustpilot.com/review/gniw.de",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Trustpilot"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(TrustPilotCarousel, "OBTAZrkWMPs6JeYHDfkFL6922UA=");

_c = TrustPilotCarousel;
/* harmony default export */ __webpack_exports__["default"] = (TrustPilotCarousel);

var _c;

$RefreshReg$(_c, "TrustPilotCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX1RydXN0UGlsb3RDYXJvdXNlbF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0Isa0JBQXNDSCwrQ0FBUSxDQUFDSSxNQUFNLENBQUNDLFVBQVIsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLE1BQU1DLEdBQUcsR0FBR1QsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0FELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBLFFBQUtNLE1BQUQsQ0FBZ0JLLFVBQXBCLEVBQWdDO0FBQzdCTCxNQUFBQSxNQUFELENBQWdCSyxVQUFoQixDQUEyQkMsZUFBM0IsQ0FBMkNGLEdBQUcsQ0FBQ0csT0FBL0MsRUFBd0QsSUFBeEQ7QUFDRDtBQUNGLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkwsSUFBQUEsY0FBYyxDQUFDSCxNQUFNLENBQUNDLFVBQVIsQ0FBZDtBQUNELEdBRkQ7O0FBSUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkTSxJQUFBQSxNQUFNLENBQUNTLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYUixNQUFBQSxNQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ04sV0FBRCxDQUxNLENBQVQ7QUFPQSxzQkFDRSw4REFBQyw4REFBRDtBQUFZLFNBQUssRUFBQyxnQkFBbEI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBQywwRkFEWjtBQUVFLFFBQUUsRUFBQyxlQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxvREFBRDtBQUFTLGNBQVEsRUFBQyxhQUFsQjtBQUFnQyxRQUFFLEVBQUMsT0FBbkM7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBRUUsR0FEUDtBQUVFLGlCQUFTLEVBQUMsbUJBRlo7QUFHRSx1QkFBWSxPQUhkO0FBSUUsNEJBQWlCLDBCQUpuQjtBQUtFLGdDQUFxQiwwQkFMdkI7QUFNRSw2QkFBbUJGLFdBQVcsR0FBRyxHQUFkLEdBQW9CLE9BQXBCLEdBQThCLE9BTm5EO0FBT0UsNEJBQWlCLE1BUG5CO0FBUUUsc0JBQVcsTUFSYjtBQVNFLHNCQUFXLFdBVGI7QUFVRSxpQ0FBc0IsSUFWeEI7QUFBQSwrQkFZRTtBQUNFLGNBQUksRUFBQywwQ0FEUDtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGFBQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F2REQ7O0dBQU1IOztLQUFBQTtBQXlETiwrREFBZUEsa0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9UcnVzdFBpbG90Q2Fyb3VzZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vbGF5b3V0L1NlY3Rpb24nO1xyXG5cclxuY29uc3QgVHJ1c3RQaWxvdENhcm91c2VsID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSWYgd2luZG93LlRydXN0cGlsb3QgaXMgYXZhaWxhYmxlIGl0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBsb2FkIHRoZSBUcnVzdEJveCBmcm9tIG91ciByZWYuXHJcbiAgICAvLyBJZiBpdCdzIG5vdCwgaXQgbWVhbnMgdGhlIHNjcmlwdCB5b3UgcGFzdGVkIGludG8gPGhlYWQgLz4gaXNuJ3QgbG9hZGVkICBqdXN0IHlldC5cclxuICAgIC8vIFdoZW4gaXQgaXMsIGl0IHdpbGwgYXV0b21hdGljYWxseSBsb2FkIHRoZSBUcnVzdEJveC5cclxuICAgIGlmICgod2luZG93IGFzIGFueSkuVHJ1c3RwaWxvdCkge1xyXG4gICAgICAod2luZG93IGFzIGFueSkuVHJ1c3RwaWxvdC5sb2FkRnJvbUVsZW1lbnQocmVmLmN1cnJlbnQsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYWNrZ3JvdW5kIGNvbG9yPVwiYmctcHJpbWFyeS01MDBcIj5cclxuICAgICAgPGgyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgbGVhZGluZy04IGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgc206dGV4dC00eGwgcHktOFwiXHJcbiAgICAgICAgaWQ9XCJrdW5kZW5zdGltbWVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIEVpbmlnZSB1bnNlcmVyIEt1bmRlbnN0aW1tZW5cclxuICAgICAgPC9oMj5cclxuICAgICAgPFNlY3Rpb24geVBhZGRpbmc9XCJwdC0xNiBwYi0yMFwiIGlkPVwidHJ1c3RcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRydXN0cGlsb3Qtd2lkZ2V0XCJcclxuICAgICAgICAgIGRhdGEtbG9jYWxlPVwiZGUtQ0hcIlxyXG4gICAgICAgICAgZGF0YS10ZW1wbGF0ZS1pZD1cIjUzYWE4OTEyZGVjN2UxMGQzOGY1OWYzNlwiXHJcbiAgICAgICAgICBkYXRhLWJ1c2luZXNzdW5pdC1pZD1cIjYxODNmZTdjMzAzNzJhMWU2NTA2OWY4NFwiXHJcbiAgICAgICAgICBkYXRhLXN0eWxlLWhlaWdodD17d2luZG93V2lkdGggPCA3NjggPyAnMzUwcHgnIDogJzE1MHB4J31cclxuICAgICAgICAgIGRhdGEtc3R5bGUtd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgIGRhdGEtdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgIGRhdGEtc3RhcnM9XCIxLDIsMyw0LDVcIlxyXG4gICAgICAgICAgZGF0YS1yZXZpZXctbGFuZ3VhZ2VzPVwiZGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NoLnRydXN0cGlsb3QuY29tL3Jldmlldy9nbml3LmRlXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRydXN0cGlsb3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9CYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcnVzdFBpbG90Q2Fyb3VzZWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmFja2dyb3VuZCIsIlNlY3Rpb24iLCJUcnVzdFBpbG90Q2Fyb3VzZWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsInJlZiIsIlRydXN0cGlsb3QiLCJsb2FkRnJvbUVsZW1lbnQiLCJjdXJyZW50IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9