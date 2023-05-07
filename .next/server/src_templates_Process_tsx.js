"use strict";
exports.id = "src_templates_Process_tsx";
exports.ids = ["src_templates_Process_tsx"];
exports.modules = {

/***/ "./src/templates/Process.tsx":
/*!***********************************!*\
  !*** ./src/templates/Process.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Process": () => (/* binding */ Process),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Process.tsx";




const processSteps = [{
  id: 1,
  name: 'Angebot anfordern',
  description: 'Sie übermitteln im beigelegten Kundenfragebogen die Eckdaten Ihres Eigenheims.'
}, {
  id: 2,
  name: 'Bewertung',
  description: 'Die GNIW ermittelt anhand von aktuellen Marktdaten den Verkehrswert Ihrer Immobilie und bewertet dann den Wert dieser Immobilie im bewohnten Zustand.'
}, {
  id: 3,
  name: 'Angebot erhalten',
  description: `Sie erhalten von uns ein unverbindliches Kaufangebot für Ihr
Eigenheim und gleichzeitig ein Angebot für ein anschließendes
lebenslanges Mietverhältnis. Entspricht unser unverbindliches
Angebot Ihren Vorstellungen, vereinbaren wir gerne gemeinsam
einen Termin für ein persönliches Kennenlernen.`
}, {
  id: 4,
  name: 'Vertragsabschluss',
  description: `Der Verkaufsprozess wird notariell begleitet und unabhängig
geprüft. Bei Angebotsannahme durch Sie übernimmt GNIW
die Abwicklung der Transaktion und die zukünftige Verwaltung
sowie Wartung Ihres Eigenheims. Hierbei entstehen für Sie
keinerlei Kosten.`
}, {
  id: 5,
  name: 'Sofortauszahlung',
  description: `Der Kaufpreis wird nach erfolgreichem Kaufabschluss direkt
und vollständig an Sie ausgezahlt. Sie bleiben in Ihrem Eigen-
heim wohnen und zahlen dann die vereinbarte faire Miete. Den
Kaufpreis können Sie anlegen oder ausgeben. Das lebenslange
Mietverhältnis ist vertraglich garantiert, kann aber von Ihrer
Seite jederzeit gekündigt werde. Die GNIW kann das Mietverhältnis nicht kündigen.`
}];

const ProcessSection = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "py-8 overflow-hidden lg:pt-16 lg:pb-12",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "text-center text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl",
          children: "R\xFCckmietverkauf Ablauf"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "mt-4 max-w-3xl mx-auto text-xl text-gray-800",
          children: ["Das bew\xE4hrte Konzept der GNIW f\xFCr den sicheren Verkauf Ihres Eigenheims -", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
            className: "text-gray-900",
            children: "in 5 einfachen und transparenten Schritten zur Sofortauszahlung"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), ". Wir beraten Sie eingehend bei jedem der folgenden Prozessschritte."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "relative mt-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "relative col-span-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("dl", {
            className: "mt-10 space-y-10",
            children: processSteps.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("dt", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "absolute flex items-center justify-center h-16 w-16 rounded-md bg-primary-500 text-white",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "h-8 w-8 text-center font-bold text-4xl",
                    "aria-hidden": "true",
                    children: item.id
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  className: "ml-20 text-2xl leading-6 font-bold text-primary-900",
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("dd", {
                className: "mt-2 ml-20 text-lg text-gray-700",
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, undefined)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

const Process = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_background_Background__WEBPACK_IMPORTED_MODULE_1__.Background, {
    color: "bg-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_2__.Section, {
      yPadding: "py-12",
      id: "ablauf",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ProcessSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Process);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFDLFVBQWxCO0FBQUEsMkJBQ0UsOERBQUMsb0RBQUQ7QUFBUyxjQUFRLEVBQUMsT0FBbEI7QUFBMEIsUUFBRSxFQUFDLFFBQTdCO0FBQUEsNkJBQ0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUk07QUFVUCxpRUFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2duaXctd2Vic2l0ZS8uL3NyYy90ZW1wbGF0ZXMvUHJvY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vbGF5b3V0L1NlY3Rpb24nO1xyXG5cclxuY29uc3QgcHJvY2Vzc1N0ZXBzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0FuZ2Vib3QgYW5mb3JkZXJuJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnU2llIMO8YmVybWl0dGVsbiBpbSBiZWlnZWxlZ3RlbiBLdW5kZW5mcmFnZWJvZ2VuIGRpZSBFY2tkYXRlbiBJaHJlcyBFaWdlbmhlaW1zLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICdCZXdlcnR1bmcnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdEaWUgR05JVyBlcm1pdHRlbHQgYW5oYW5kIHZvbiBha3R1ZWxsZW4gTWFya3RkYXRlbiBkZW4gVmVya2VocnN3ZXJ0IElocmVyIEltbW9iaWxpZSB1bmQgYmV3ZXJ0ZXQgZGFubiBkZW4gV2VydCBkaWVzZXIgSW1tb2JpbGllIGltIGJld29obnRlbiBadXN0YW5kLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdBbmdlYm90IGVyaGFsdGVuJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgU2llIGVyaGFsdGVuIHZvbiB1bnMgZWluIHVudmVyYmluZGxpY2hlcyBLYXVmYW5nZWJvdCBmw7xyIEloclxyXG5FaWdlbmhlaW0gdW5kIGdsZWljaHplaXRpZyBlaW4gQW5nZWJvdCBmw7xyIGVpbiBhbnNjaGxpZcOfZW5kZXNcclxubGViZW5zbGFuZ2VzIE1pZXR2ZXJow6RsdG5pcy4gRW50c3ByaWNodCB1bnNlciB1bnZlcmJpbmRsaWNoZXNcclxuQW5nZWJvdCBJaHJlbiBWb3JzdGVsbHVuZ2VuLCB2ZXJlaW5iYXJlbiB3aXIgZ2VybmUgZ2VtZWluc2FtXHJcbmVpbmVuIFRlcm1pbiBmw7xyIGVpbiBwZXJzw7ZubGljaGVzIEtlbm5lbmxlcm5lbi5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAnVmVydHJhZ3NhYnNjaGx1c3MnLFxyXG4gICAgZGVzY3JpcHRpb246IGBEZXIgVmVya2F1ZnNwcm96ZXNzIHdpcmQgbm90YXJpZWxsIGJlZ2xlaXRldCB1bmQgdW5hYmjDpG5naWdcclxuZ2VwcsO8ZnQuIEJlaSBBbmdlYm90c2FubmFobWUgZHVyY2ggU2llIMO8YmVybmltbXQgR05JV1xyXG5kaWUgQWJ3aWNrbHVuZyBkZXIgVHJhbnNha3Rpb24gdW5kIGRpZSB6dWvDvG5mdGlnZSBWZXJ3YWx0dW5nXHJcbnNvd2llIFdhcnR1bmcgSWhyZXMgRWlnZW5oZWltcy4gSGllcmJlaSBlbnRzdGVoZW4gZsO8ciBTaWVcclxua2VpbmVybGVpIEtvc3Rlbi5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiAnU29mb3J0YXVzemFobHVuZycsXHJcbiAgICBkZXNjcmlwdGlvbjogYERlciBLYXVmcHJlaXMgd2lyZCBuYWNoIGVyZm9sZ3JlaWNoZW0gS2F1ZmFic2NobHVzcyBkaXJla3RcclxudW5kIHZvbGxzdMOkbmRpZyBhbiBTaWUgYXVzZ2V6YWhsdC4gU2llIGJsZWliZW4gaW4gSWhyZW0gRWlnZW4tXHJcbmhlaW0gd29obmVuIHVuZCB6YWhsZW4gZGFubiBkaWUgdmVyZWluYmFydGUgZmFpcmUgTWlldGUuIERlblxyXG5LYXVmcHJlaXMga8O2bm5lbiBTaWUgYW5sZWdlbiBvZGVyIGF1c2dlYmVuLiBEYXMgbGViZW5zbGFuZ2VcclxuTWlldHZlcmjDpGx0bmlzIGlzdCB2ZXJ0cmFnbGljaCBnYXJhbnRpZXJ0LCBrYW5uIGFiZXIgdm9uIElocmVyXHJcblNlaXRlIGplZGVyemVpdCBnZWvDvG5kaWd0IHdlcmRlLiBEaWUgR05JVyBrYW5uIGRhcyBNaWV0dmVyaMOkbHRuaXMgbmljaHQga8O8bmRpZ2VuLmAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByb2Nlc3NTZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggb3ZlcmZsb3ctaGlkZGVuIGxnOnB0LTE2IGxnOnBiLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXcteGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBsZzptYXgtdy03eGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtcHJpbWFyeS05MDAgc206dGV4dC00eGxcIj5cclxuICAgICAgICAgICAgUsO8Y2ttaWV0dmVya2F1ZiBBYmxhdWZcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IG1heC13LTN4bCBteC1hdXRvIHRleHQteGwgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICBEYXMgYmV3w6RocnRlIEtvbnplcHQgZGVyIEdOSVcgZsO8ciBkZW4gc2ljaGVyZW4gVmVya2F1ZiBJaHJlc1xyXG4gICAgICAgICAgICBFaWdlbmhlaW1zIC17JyAnfVxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBpbiA1IGVpbmZhY2hlbiB1bmQgdHJhbnNwYXJlbnRlbiBTY2hyaXR0ZW4genVyIFNvZm9ydGF1c3phaGx1bmdcclxuICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIC4gV2lyIGJlcmF0ZW4gU2llIGVpbmdlaGVuZCBiZWkgamVkZW0gZGVyIGZvbGdlbmRlbiBQcm96ZXNzc2Nocml0dGUuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMTIgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMyBsZzpnYXAtOCBsZzppdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwibXQtMTAgc3BhY2UteS0xMFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9jZXNzU3RlcHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xNiB3LTE2IHJvdW5kZWQtbWQgYmctcHJpbWFyeS01MDAgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTR4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMjAgdGV4dC0yeGwgbGVhZGluZy02IGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTIgbWwtMjAgdGV4dC1sZyB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tncm91bmQgY29sb3I9XCJiZy13aGl0ZVwiPlxyXG4gICAgICA8U2VjdGlvbiB5UGFkZGluZz1cInB5LTEyXCIgaWQ9XCJhYmxhdWZcIj5cclxuICAgICAgICA8UHJvY2Vzc1NlY3Rpb24gLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9CYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCYWNrZ3JvdW5kIiwiU2VjdGlvbiIsInByb2Nlc3NTdGVwcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiUHJvY2Vzc1NlY3Rpb24iLCJtYXAiLCJpdGVtIiwiUHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=