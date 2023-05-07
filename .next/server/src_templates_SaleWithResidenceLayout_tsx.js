"use strict";
exports.id = "src_templates_SaleWithResidenceLayout_tsx";
exports.ids = ["src_templates_SaleWithResidenceLayout_tsx"];
exports.modules = {

/***/ "./src/templates/SaleWithResidenceLayout.tsx":
/*!***************************************************!*\
  !*** ./src/templates/SaleWithResidenceLayout.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Loader */ "./src/layout/Loader.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children"];
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SaleWithResidenceLayout.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/display-name */




const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Footer_tsx-_92a10").then(__webpack_require__.bind(__webpack_require__, /*! ./Footer */ "./src/templates/Footer.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Footer */ "./src/templates/Footer.tsx")],
    modules: ["..\\templates\\SaleWithResidenceLayout.tsx -> " + './Footer']
  }
});
const Meta = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "src_layout_Meta_tsx-_93d61").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/Meta */ "./src/layout/Meta.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../layout/Meta */ "./src/layout/Meta.tsx")],
    modules: ["..\\templates\\SaleWithResidenceLayout.tsx -> " + '../layout/Meta']
  }
});
const NavHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "src_navigation_NavHeader_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../navigation/NavHeader */ "./src/navigation/NavHeader.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../navigation/NavHeader */ "./src/navigation/NavHeader.tsx")],
    modules: ["..\\templates\\SaleWithResidenceLayout.tsx -> " + '../navigation/NavHeader']
  }
});

const SaleWithResidenceLayout = props => {
  const {
    children
  } = props,
        seo = _objectWithoutProperties(props, _excluded);

  const {
    description,
    title
  } = seo[0].seo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "flex flex-col h-screen justify-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Meta, {
      title: title,
      description: description,
      canonical: "https://gniw.de/hausverkauf-mit-wohnrecht/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(NavHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleWithResidenceLayout);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19TYWxlV2l0aFJlc2lkZW5jZUxheW91dF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxNQUFNLEdBQUdILG1EQUFPLENBQUMsTUFBTSwwS0FBUCxFQUEyQjtBQUMvQ0ksRUFBQUEsT0FBTyxFQUFFLG1CQUFNLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0M7QUFBQTtBQUFBLHdDQUFiLDRDQUFhO0FBQUEsaUVBQWIsVUFBYTtBQUFBO0FBQUEsQ0FBM0IsQ0FBdEI7QUFHQSxNQUFNQyxJQUFJLEdBQUdMLG1EQUFPLENBQUMsTUFBTSxzS0FBUCxFQUFpQztBQUNuREksRUFBQUEsT0FBTyxFQUFFLG1CQUFNLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0M7QUFBQTtBQUFBLHdDQUFuQiw2Q0FBbUI7QUFBQSxpRUFBbkIsZ0JBQW1CO0FBQUE7QUFBQSxDQUFqQyxDQUFwQjtBQUdBLE1BQU1FLFNBQVMsR0FBR04sbURBQU8sQ0FBQyxNQUFNLDBMQUFQLEVBQTBDO0FBQ2pFSSxFQUFBQSxPQUFPLEVBQUUsbUJBQU0sOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURrRDtBQUFBO0FBQUEsd0NBQTVCLCtEQUE0QjtBQUFBLGlFQUE1Qix5QkFBNEI7QUFBQTtBQUFBLENBQTFDLENBQXpCOztBQUlBLE1BQU1HLHVCQUFpQyxHQUFJQyxLQUFELElBQWdCO0FBQ3hELFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUF1QkQsS0FBN0I7QUFBQSxRQUFxQkUsR0FBckIsNEJBQTZCRixLQUE3Qjs7QUFDQSxRQUFNO0FBQUVHLElBQUFBLFdBQUY7QUFBZUMsSUFBQUE7QUFBZixNQUF5QkYsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPQSxHQUF0QztBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUEsNEJBQ0UsOERBQUMsSUFBRDtBQUNFLFdBQUssRUFBRUUsS0FEVDtBQUVFLGlCQUFXLEVBQUVELFdBRmY7QUFHRSxlQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLEVBT0dGLFFBUEgsZUFRRSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQWZEOztBQWlCQSxpRUFBZUYsdUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL1NhbGVXaXRoUmVzaWRlbmNlTGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sYXlvdXQvTG9hZGVyJztcclxuXHJcbmNvbnN0IEZvb3RlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL0Zvb3RlcicpLCB7XHJcbiAgbG9hZGluZzogKCkgPT4gPExvYWRlciAvPixcclxufSk7XHJcbmNvbnN0IE1ldGEgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vbGF5b3V0L01ldGEnKSwge1xyXG4gIGxvYWRpbmc6ICgpID0+IDxMb2FkZXIgLz4sXHJcbn0pO1xyXG5jb25zdCBOYXZIZWFkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vbmF2aWdhdGlvbi9OYXZIZWFkZXInKSwge1xyXG4gIGxvYWRpbmc6ICgpID0+IDxMb2FkZXIgLz4sXHJcbn0pO1xyXG5cclxuY29uc3QgU2FsZVdpdGhSZXNpZGVuY2VMYXlvdXQ6IFJlYWN0LkZDID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5zZW8gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIHRpdGxlIH0gPSBzZW9bMF0uc2VvO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4ganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxNZXRhXHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL2duaXcuZGUvaGF1c3ZlcmthdWYtbWl0LXdvaG5yZWNodC9cIlxyXG4gICAgICAvPlxyXG4gICAgICA8TmF2SGVhZGVyIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVXaXRoUmVzaWRlbmNlTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlJlYWN0IiwiTG9hZGVyIiwiRm9vdGVyIiwibG9hZGluZyIsIk1ldGEiLCJOYXZIZWFkZXIiLCJTYWxlV2l0aFJlc2lkZW5jZUxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJzZW8iLCJkZXNjcmlwdGlvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==