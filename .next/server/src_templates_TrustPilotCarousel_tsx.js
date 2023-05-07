"use strict";
exports.id = "src_templates_TrustPilotCarousel_tsx";
exports.ids = ["src_templates_TrustPilotCarousel_tsx"];
exports.modules = {

/***/ "./src/templates/TrustPilotCarousel.tsx":
/*!**********************************************!*\
  !*** ./src/templates/TrustPilotCarousel.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\TrustPilotCarousel.tsx";





const TrustPilotCarousel = () => {
  const {
    0: windowWidth,
    1: setWindowWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_2__.Section, {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrustPilotCarousel);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19UcnVzdFBpbG90Q2Fyb3VzZWxfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1NLGtCQUFrQixHQUFHLE1BQU07QUFDL0IsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDTCwrQ0FBUSxDQUFDTSxNQUFNLENBQUNDLFVBQVIsQ0FBOUM7QUFDQSxRQUFNQyxHQUFHLEdBQUdULDZDQUFNLENBQUMsSUFBRCxDQUFsQjtBQUNBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxRQUFLUSxNQUFELENBQWdCRyxVQUFwQixFQUFnQztBQUM3QkgsTUFBQUEsTUFBRCxDQUFnQkcsVUFBaEIsQ0FBMkJDLGVBQTNCLENBQTJDRixHQUFHLENBQUNHLE9BQS9DLEVBQXdELElBQXhEO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLFFBQU1DLFlBQVksR0FBRyxNQUFNO0FBQ3pCUCxJQUFBQSxjQUFjLENBQUNDLE1BQU0sQ0FBQ0MsVUFBUixDQUFkO0FBQ0QsR0FGRDs7QUFJQVQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RRLElBQUFBLE1BQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFlBQWxDO0FBQ0EsV0FBTyxNQUFNO0FBQ1hOLE1BQUFBLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBTFEsRUFLTixDQUFDUixXQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFLDhEQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFDLGdCQUFsQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLDBGQURaO0FBRUUsUUFBRSxFQUFDLGVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSw4REFBQyxvREFBRDtBQUFTLGNBQVEsRUFBQyxhQUFsQjtBQUFnQyxRQUFFLEVBQUMsT0FBbkM7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBRUksR0FEUDtBQUVFLGlCQUFTLEVBQUMsbUJBRlo7QUFHRSx1QkFBWSxPQUhkO0FBSUUsNEJBQWlCLDBCQUpuQjtBQUtFLGdDQUFxQiwwQkFMdkI7QUFNRSw2QkFBbUJKLFdBQVcsR0FBRyxHQUFkLEdBQW9CLE9BQXBCLEdBQThCLE9BTm5EO0FBT0UsNEJBQWlCLE1BUG5CO0FBUUUsc0JBQVcsTUFSYjtBQVNFLHNCQUFXLFdBVGI7QUFVRSxpQ0FBc0IsSUFWeEI7QUFBQSwrQkFZRTtBQUNFLGNBQUksRUFBQywwQ0FEUDtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGFBQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0NELENBdkREOztBQXlEQSxpRUFBZUQsa0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL1RydXN0UGlsb3RDYXJvdXNlbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4uL2JhY2tncm91bmQvQmFja2dyb3VuZCc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9sYXlvdXQvU2VjdGlvbic7XHJcblxyXG5jb25zdCBUcnVzdFBpbG90Q2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJZiB3aW5kb3cuVHJ1c3RwaWxvdCBpcyBhdmFpbGFibGUgaXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIGxvYWQgdGhlIFRydXN0Qm94IGZyb20gb3VyIHJlZi5cclxuICAgIC8vIElmIGl0J3Mgbm90LCBpdCBtZWFucyB0aGUgc2NyaXB0IHlvdSBwYXN0ZWQgaW50byA8aGVhZCAvPiBpc24ndCBsb2FkZWQgIGp1c3QgeWV0LlxyXG4gICAgLy8gV2hlbiBpdCBpcywgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGxvYWQgdGhlIFRydXN0Qm94LlxyXG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5UcnVzdHBpbG90KSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5UcnVzdHBpbG90LmxvYWRGcm9tRWxlbWVudChyZWYuY3VycmVudCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFt3aW5kb3dXaWR0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tncm91bmQgY29sb3I9XCJiZy1wcmltYXJ5LTUwMFwiPlxyXG4gICAgICA8aDJcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBsZWFkaW5nLTggZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBzbTp0ZXh0LTR4bCBweS04XCJcclxuICAgICAgICBpZD1cImt1bmRlbnN0aW1tZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgRWluaWdlIHVuc2VyZXIgS3VuZGVuc3RpbW1lblxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8U2VjdGlvbiB5UGFkZGluZz1cInB0LTE2IHBiLTIwXCIgaWQ9XCJ0cnVzdFwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidHJ1c3RwaWxvdC13aWRnZXRcIlxyXG4gICAgICAgICAgZGF0YS1sb2NhbGU9XCJkZS1DSFwiXHJcbiAgICAgICAgICBkYXRhLXRlbXBsYXRlLWlkPVwiNTNhYTg5MTJkZWM3ZTEwZDM4ZjU5ZjM2XCJcclxuICAgICAgICAgIGRhdGEtYnVzaW5lc3N1bml0LWlkPVwiNjE4M2ZlN2MzMDM3MmExZTY1MDY5Zjg0XCJcclxuICAgICAgICAgIGRhdGEtc3R5bGUtaGVpZ2h0PXt3aW5kb3dXaWR0aCA8IDc2OCA/ICczNTBweCcgOiAnMTUwcHgnfVxyXG4gICAgICAgICAgZGF0YS1zdHlsZS13aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgZGF0YS10aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgZGF0YS1zdGFycz1cIjEsMiwzLDQsNVwiXHJcbiAgICAgICAgICBkYXRhLXJldmlldy1sYW5ndWFnZXM9XCJkZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2gudHJ1c3RwaWxvdC5jb20vcmV2aWV3L2duaXcuZGVcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVHJ1c3RwaWxvdFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L0JhY2tncm91bmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRydXN0UGlsb3RDYXJvdXNlbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJCYWNrZ3JvdW5kIiwiU2VjdGlvbiIsIlRydXN0UGlsb3RDYXJvdXNlbCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVmIiwiVHJ1c3RwaWxvdCIsImxvYWRGcm9tRWxlbWVudCIsImN1cnJlbnQiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=