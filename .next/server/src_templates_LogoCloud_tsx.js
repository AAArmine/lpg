"use strict";
exports.id = "src_templates_LogoCloud_tsx";
exports.ids = ["src_templates_LogoCloud_tsx"];
exports.modules = {

/***/ "./src/templates/LogoCloud.tsx":
/*!*************************************!*\
  !*** ./src/templates/LogoCloud.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var _TrustPilotSmallWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrustPilotSmallWidget */ "./src/templates/TrustPilotSmallWidget.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\LogoCloud.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Cloud = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "max-w-7xl py-4 sm:px-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-center text-3xl font-bold text-white",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "mt-4 grid grid-cols-2 gap-2 md:grid-cols-3",
        children: props.images.map(image => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "logoPartners max-w-16 max-h-24 col-span-1 flex justify-center py-4 px-12 bg-white rounded-lg filter grayscale hover:grayscale-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            className: "object-contain",
            src: image.logo.src,
            alt: image.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)
        }, image.name, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

const LogoCloud = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_background_Background__WEBPACK_IMPORTED_MODULE_1__.Background, {
    color: "bg-primary-500",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_2__.Section, {
      yPadding: "py-4 pb-8",
      children: [props.showTrust && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TrustPilotSmallWidget__WEBPACK_IMPORTED_MODULE_3__.default, {
        theme: "dark"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Cloud, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoCloud);

/***/ }),

/***/ "./src/templates/TrustPilotSmallWidget.tsx":
/*!*************************************************!*\
  !*** ./src/templates/TrustPilotSmallWidget.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\TrustPilotSmallWidget.tsx";



const TrustPilotSmallWidget = ({
  trustClasses = 'lg:hidden',
  theme = 'light'
}) => {
  const largeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(largeRef.current, true);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: `lg:bg-white ${trustClasses} sm:block pl-4 py-2`,
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
        target: `_blank`,
        rel: "noopener",
        children: "Trustpilot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrustPilotSmallWidget);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL3RlbXBsYXRlcy9Mb2dvQ2xvdWQudHN4Iiwid2VicGFjazovL2duaXctd2Vic2l0ZS8uL3NyYy90ZW1wbGF0ZXMvVHJ1c3RQaWxvdFNtYWxsV2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4uL2JhY2tncm91bmQvQmFja2dyb3VuZCc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9sYXlvdXQvU2VjdGlvbic7XHJcbmltcG9ydCBUcnVzdFBpbG90U21hbGxXaWRnZXQgZnJvbSAnLi9UcnVzdFBpbG90U21hbGxXaWRnZXQnO1xyXG5cclxudHlwZSBJSW1hZ2UgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxvZ286IGFueTtcclxufTtcclxuXHJcbnR5cGUgSUxvZ29DbG91ZFByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1hZ2VzOiBJSW1hZ2VbXTtcclxuICBzaG93VHJ1c3Q/OiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgQ2xvdWQgPSAocHJvcHM6IElMb2dvQ2xvdWRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBweS00IHNtOnB4LTZcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiBtZDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAge3Byb3BzLmltYWdlcy5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2ltYWdlLm5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1BhcnRuZXJzIG1heC13LTE2IG1heC1oLTI0IGNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBweS00IHB4LTEyIGJnLXdoaXRlIHJvdW5kZWQtbGcgZmlsdGVyIGdyYXlzY2FsZSBob3ZlcjpncmF5c2NhbGUtMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLmxvZ28uc3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExvZ29DbG91ZCA9IChwcm9wczogSUxvZ29DbG91ZFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYWNrZ3JvdW5kIGNvbG9yPVwiYmctcHJpbWFyeS01MDBcIj5cclxuICAgICAgPFNlY3Rpb24geVBhZGRpbmc9XCJweS00IHBiLThcIj5cclxuICAgICAgICB7cHJvcHMuc2hvd1RydXN0ICYmIDxUcnVzdFBpbG90U21hbGxXaWRnZXQgdGhlbWU9XCJkYXJrXCIgLz59XHJcbiAgICAgICAgPENsb3VkIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9CYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvQ2xvdWQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBUcnVzUHJvcHMge1xyXG4gIHRydXN0Q2xhc3Nlcz86IHN0cmluZztcclxuICB0aGVtZT86IHN0cmluZztcclxufVxyXG5jb25zdCBUcnVzdFBpbG90U21hbGxXaWRnZXQgPSAoe1xyXG4gIHRydXN0Q2xhc3NlcyA9ICdsZzpoaWRkZW4nLFxyXG4gIHRoZW1lID0gJ2xpZ2h0JyxcclxufTogVHJ1c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgbGFyZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIElmIHdpbmRvdy5UcnVzdHBpbG90IGlzIGF2YWlsYWJsZSBpdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbG9hZCB0aGUgVHJ1c3RCb3ggZnJvbSBvdXIgcmVmLlxyXG4gICAgLy8gSWYgaXQncyBub3QsIGl0IG1lYW5zIHRoZSBzY3JpcHQgeW91IHBhc3RlZCBpbnRvIDxoZWFkIC8+IGlzbid0IGxvYWRlZCAganVzdCB5ZXQuXHJcbiAgICAvLyBXaGVuIGl0IGlzLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9hZCB0aGUgVHJ1c3RCb3guXHJcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLlRydXN0cGlsb3QpIHtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLlRydXN0cGlsb3QubG9hZEZyb21FbGVtZW50KGxhcmdlUmVmLmN1cnJlbnQsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BsZzpiZy13aGl0ZSAke3RydXN0Q2xhc3Nlc30gc206YmxvY2sgcGwtNCBweS0yYH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2xhcmdlUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRydXN0cGlsb3Qtd2lkZ2V0XCJcclxuICAgICAgICBkYXRhLWxvY2FsZT1cImRlLURFXCJcclxuICAgICAgICBkYXRhLXRlbXBsYXRlLWlkPVwiNTNhYTg4MDdkZWM3ZTEwZDM4ZjU5ZjMyXCJcclxuICAgICAgICBkYXRhLWJ1c2luZXNzdW5pdC1pZD1cIjYxODNmZTdjMzAzNzJhMWU2NTA2OWY4NFwiXHJcbiAgICAgICAgZGF0YS1zdHlsZS1oZWlnaHQ9XCIxMjBweFwiXHJcbiAgICAgICAgZGF0YS1zdHlsZS13aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGRhdGEtdGhlbWU9e3RoZW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RlLnRydXN0cGlsb3QuY29tL3Jldmlldy9nbml3LmRlXCJcclxuICAgICAgICAgIHRhcmdldD17YF9ibGFua2B9XHJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHJ1c3RwaWxvdFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJ1c3RQaWxvdFNtYWxsV2lkZ2V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCYWNrZ3JvdW5kIiwiU2VjdGlvbiIsIlRydXN0UGlsb3RTbWFsbFdpZGdldCIsIkNsb3VkIiwicHJvcHMiLCJ0aXRsZSIsImltYWdlcyIsIm1hcCIsImltYWdlIiwibG9nbyIsInNyYyIsIm5hbWUiLCJMb2dvQ2xvdWQiLCJzaG93VHJ1c3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ0cnVzdENsYXNzZXMiLCJ0aGVtZSIsImxhcmdlUmVmIiwid2luZG93IiwiVHJ1c3RwaWxvdCIsImxvYWRGcm9tRWxlbWVudCIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9