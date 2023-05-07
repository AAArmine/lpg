(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_Contact_InformationForm_index_tsx"],{

/***/ "./src/templates/Contact/InformationForm/DownloadBrochureModal.tsx":
/*!*************************************************************************!*\
  !*** ./src/templates/Contact/InformationForm/DownloadBrochureModal.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadBrochureModal": function() { return /* binding */ DownloadBrochureModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _public_assets_images_brochure_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/assets/images/brochure.png */ "./public/assets/images/brochure.png");
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/gtag */ "./src/lib/gtag.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tracking */ "./src/templates/Contact/utils/tracking.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\InformationForm\\DownloadBrochureModal.tsx",
    _this = undefined,
    _s = $RefreshSig$();








react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('#__next');
var DownloadBrochureModal = function DownloadBrochureModal(_ref) {
  _s();

  var onClose = _ref.onClose;
  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_2__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: true,
    onRequestClose: onClose,
    className: "download-brochure-modal",
    contentLabel: "Example Modal",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "inner",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "body",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          alt: "pdf brochure",
          src: _public_assets_images_brochure_png__WEBPACK_IMPORTED_MODULE_3__.default.src
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          className: "close",
          onClick: onClose,
          children: t('close')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          className: "download",
          onClick: function onClick() {
            (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_4__.event)({
              action: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_5__.getGtagEventAction)('brochure_downloaded', 'information'),
              category: 'ContactForm',
              label: 'Information'
            });
            onClose();
          },
          title: "Gniw Infomaterial 2021",
          target: "_blank",
          href: "https://www.datocms-assets.com/54855/1638892004-gniw-infomaterial-2021.pdf",
          rel: "alternate noreferrer",
          type: "application/pdf",
          children: t('downloadBrochure')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(DownloadBrochureModal, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function () {
  return [_locale__WEBPACK_IMPORTED_MODULE_2__.useTranslations];
});

_c = DownloadBrochureModal;

var _c;

$RefreshReg$(_c, "DownloadBrochureModal");

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

/***/ "./src/templates/Contact/InformationForm/FormStepContactInformation.tsx":
/*!******************************************************************************!*\
  !*** ./src/templates/Contact/InformationForm/FormStepContactInformation.tsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepContactInformation": function() { return /* binding */ FormStepContactInformation; }
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CheckBox */ "./src/templates/Contact/CheckBox.tsx");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\InformationForm\\FormStepContactInformation.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var FormStepContactInformation = function FormStepContactInformation(_ref) {
  _s();

  var value = _ref.value,
      errors = _ref.errors,
      disabledOptions = _ref.disabledOptions,
      onValueChange = _ref.onValueChange;
  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_2__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_4__.FormStepContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "contact-info-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
        children: t('contact-info.title.information')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "contact-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container salutation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
            value: value.salutation || '',
            className: !value.salutation ? 'default' : '',
            placeholder: t('contact-info.salutation.title'),
            onChange: function onChange(e) {
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                salutation: e.target.value
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "",
              disabled: true,
              hidden: true,
              children: t('contact-info.salutation.title')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "mr",
              children: t('contact-info.salutation.mr')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "ms",
              children: t('contact-info.salutation.ms')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "mrms",
              children: t('contact-info.salutation.mrms')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container first-name",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.firstName || '',
            placeholder: "".concat(t('contact-info.firstName')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                firstName: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container last-name",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.lastName || '',
            placeholder: "".concat(t('contact-info.lastName')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                lastName: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container date-Of-birth",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.dateOfBirth || '',
            placeholder: "".concat(t('contact-info.dateOfBirth')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                dateOfBirth: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container kids-number",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.numberOfChildren || '',
            placeholder: t('contact-info.children'),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                numberOfChildren: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container marital-status",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
            value: value.maritalStatus || '',
            className: !value.maritalStatus ? 'default' : '',
            placeholder: t('contact-info.maritalStatus.title'),
            onChange: function onChange(e) {
              var partnerDateOfBirth = value.partnerDateOfBirth;
              var maritalStatus = e.target.value;

              if (maritalStatus !== 'married' && maritalStatus !== 'partnership') {
                partnerDateOfBirth = null;
              }

              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                maritalStatus: maritalStatus,
                partnerDateOfBirth: partnerDateOfBirth
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "",
              disabled: true,
              hidden: true,
              children: t('contact-info.maritalStatus.title')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "single",
              children: t('contact-info.maritalStatus.single')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "divorced",
              children: t('contact-info.maritalStatus.divorced')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "married",
              children: t('contact-info.maritalStatus.married')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "partnership",
              children: t('contact-info.maritalStatus.partnership')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
              value: "widowed",
              children: t('contact-info.maritalStatus.widowed')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), !disabledOptions.includes('partnerDateOfBirth') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container date-Of-birth-partner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.partnerDateOfBirth || '',
            placeholder: t('contact-info.partnerDateOfBirth'),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                partnerDateOfBirth: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container email",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            className: "contact-info-data ".concat(!!value.email && errors.some(function (e) {
              return e.includes('email');
            }) ? 'error' : ''),
            value: value.email || '',
            placeholder: "".concat(t('contact-info.email')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                email: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container phone",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.tel || '',
            placeholder: "".concat(t('contact-info.phone')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                tel: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container street",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.street || '',
            placeholder: "".concat(t('contact-info.street')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                street: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container building-number",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.houseNumber || '',
            placeholder: "".concat(t('contact-info.houseNumber')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                houseNumber: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container zip-code",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.zipCode || '',
            placeholder: "".concat(t('contact-info.zipCode')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                zipCode: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container city",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "text",
            value: value.city || '',
            placeholder: "".concat(t('contact-info.city')).concat(t('required')),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                city: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container viaEmailAndPost",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_3__.CheckBox, {
            radio: true,
            isChecked: value.receiveInformationViaPostAndEmail,
            text: t('contact-info.receiveInformationViaPostAndEmail'),
            onToggle: function onToggle() {
              var receiveInformationViaPostAndEmail = value.receiveInformationViaPostAndEmail,
                  receiveInformationViaEmail = value.receiveInformationViaEmail;
              receiveInformationViaPostAndEmail = !receiveInformationViaPostAndEmail;
              receiveInformationViaEmail = !receiveInformationViaEmail;
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                receiveInformationViaEmail: receiveInformationViaEmail,
                receiveInformationViaPostAndEmail: receiveInformationViaPostAndEmail
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container viaEmail",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_3__.CheckBox, {
            radio: true,
            isChecked: value.receiveInformationViaEmail,
            text: t('contact-info.receiveInformationViaEmail'),
            onToggle: function onToggle() {
              var receiveInformationViaPostAndEmail = value.receiveInformationViaPostAndEmail,
                  receiveInformationViaEmail = value.receiveInformationViaEmail;
              receiveInformationViaPostAndEmail = !receiveInformationViaPostAndEmail;
              receiveInformationViaEmail = !receiveInformationViaEmail;
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                receiveInformationViaEmail: receiveInformationViaEmail,
                receiveInformationViaPostAndEmail: receiveInformationViaPostAndEmail
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container comments",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("textarea", {
            value: value.comment || '',
            placeholder: t('contact-info.comments'),
            onChange: function onChange(e) {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                comment: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "input-container subscribe",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_3__.CheckBox, {
            isChecked: value.subscribeToNewsLetter,
            text: t('contact-info.subscribeToNewsLetter'),
            onToggle: function onToggle() {
              return onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                subscribeToNewsLetter: !value.subscribeToNewsLetter
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(FormStepContactInformation, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function () {
  return [_locale__WEBPACK_IMPORTED_MODULE_2__.useTranslations];
});

_c = FormStepContactInformation;

var _c;

$RefreshReg$(_c, "FormStepContactInformation");

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

/***/ "./src/templates/Contact/InformationForm/index.tsx":
/*!*********************************************************!*\
  !*** ./src/templates/Contact/InformationForm/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationForm": function() { return /* binding */ InformationForm; }
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _submitContactFormRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../submitContactFormRequest */ "./src/templates/Contact/submitContactFormRequest.ts");
/* harmony import */ var _FormStepContactInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormStepContactInformation */ "./src/templates/Contact/InformationForm/FormStepContactInformation.tsx");
/* harmony import */ var _FormStepSuccess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormStepSuccess */ "./src/templates/Contact/FormStepSuccess.tsx");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../schema */ "./src/templates/Contact/schema/index.ts");
/* harmony import */ var _DownloadBrochureModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DownloadBrochureModal */ "./src/templates/Contact/InformationForm/DownloadBrochureModal.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\InformationForm\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var formStepsMapping = {
  contactInformation: _FormStepContactInformation__WEBPACK_IMPORTED_MODULE_7__.FormStepContactInformation
};
var InformationForm = function InformationForm(_ref) {
  _s();

  var onClose = _ref.onClose,
      onStepChanged = _ref.onStepChanged,
      onlineSource = _ref.onlineSource;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_schema__WEBPACK_IMPORTED_MODULE_9__.getInformationSchema)()),
      schema = _useState[0],
      setSchema = _useState[1];

  var onValueChange = function onValueChange(value) {
    var contactInformation = schema.find(function (_ref2) {
      var name = _ref2.name;
      return name === 'contactInformation';
    });
    contactInformation.value = value;

    if (contactInformation.value.maritalStatus === 'married' || contactInformation.value.maritalStatus === 'partnership') {
      contactInformation.disabledOptions = [];
    } else {
      contactInformation.disabledOptions = ['partnerDateOfBirth'];
    }

    setSchema((0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(schema));
  };

  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_5__.useTranslations)('contact-form');

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isSubmitted = _useState2[0],
      setIsSubmitted = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showDownloadPdfModal = _useState3[0],
      setShowDownloadPdfModal = _useState3[1];

  var closeForm = function closeForm(isCancelled) {
    setIsSubmitted(false);
    setShowDownloadPdfModal(false);
    setSchema((0,_schema__WEBPACK_IMPORTED_MODULE_9__.getInformationSchema)());
    onClose(isCancelled);
  };

  var submitForm = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    return C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsSubmitted(true);
            _context.next = 3;
            return (0,_submitContactFormRequest__WEBPACK_IMPORTED_MODULE_6__.submitContactFormRequest)('information', onlineSource, schema);

          case 3:
            window.setTimeout(function () {
              return setShowDownloadPdfModal(true);
            }, 400);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [schema, onlineSource, setIsSubmitted]);
  var canGoNext = !schema.some(function (s) {
    return s.validate().length;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [showDownloadPdfModal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DownloadBrochureModal__WEBPACK_IMPORTED_MODULE_10__.DownloadBrochureModal, {
      onClose: function onClose() {
        setShowDownloadPdfModal(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {
      showThumbs: false,
      autoPlay: false,
      showArrows: false,
      showIndicators: false,
      showStatus: false,
      swipeable: false,
      dynamicHeight: true,
      useKeyboardArrows: false,
      selectedItem: isSubmitted ? 1 : 0,
      children: schema.map(function (formStep) {
        var FormStepComponent = formStepsMapping[formStep.name];
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(FormStepComponent, {
          value: formStep.value,
          errors: formStep.validate(),
          disabledOptions: formStep.disabledOptions,
          onValueChange: onValueChange
        }, formStep.name, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, _this);
      }).concat( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_FormStepSuccess__WEBPACK_IMPORTED_MODULE_8__.FormStepSuccess, {}, "success", false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 19
      }, _this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("nav", {
      children: !isSubmitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: "prev",
          type: "button",
          onClick: function onClick() {
            closeForm(true);
            onStepChanged();
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            children: t('prev')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: "next ".concat(!canGoNext ? 'disabled' : ''),
          type: "button",
          disabled: !canGoNext,
          onClick: function onClick() {
            submitForm();
            onStepChanged();
          },
          children: t('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          type: "button",
          onClick: function onClick() {
            return closeForm(false);
          },
          children: t('close')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(InformationForm, "4qBenobnN6V7JEHfAbGKMbq70Bw=", false, function () {
  return [_locale__WEBPACK_IMPORTED_MODULE_5__.useTranslations];
});

_c = InformationForm;
/* harmony default export */ __webpack_exports__["default"] = (InformationForm);

var _c;

$RefreshReg$(_c, "InformationForm");

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

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./public/assets/images/brochure.png":
/*!*******************************************!*\
  !*** ./public/assets/images/brochure.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/assets/images/brochure.25b9e67aafd9c8d9588391cb1e7107cc.png","height":582,"width":565,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fbrochure.25b9e67aafd9c8d9588391cb1e7107cc.png&w=8&q=70"});

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": function() { return /* binding */ polyfill; }
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var createHTMLElement = function createHTMLElement(name) {
  return document.createElement(name);
};

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

if (true) {
  Modal.setCreateHTMLElement = function (fn) {
    return createHTMLElement = fn;
  };
}

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus(_this.props.preventScroll);
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.openAnimationFrame = requestAnimationFrame(function () {
            _this.setState({ afterOpen: true });

            if (_this.props.isOpen && _this.props.onAfterOpen) {
              _this.props.onAfterOpen({
                overlayEl: _this.overlay,
                contentEl: _this.content
              });
            }
          });
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
      cancelAnimationFrame(this.openAnimationFrame);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}

/* istanbul ignore next */
function log() {
  if (true) {
    var check = globalElement || {};
    console.log("ariaAppHider ----------");
    console.log(check.nodeName, check.className, check.id);
    console.log("end ariaAppHider ----------");
  }
}
/* eslint-enable no-console */

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  var el = appElement || globalElement;
  if (el) {
    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return [];
  }
}

function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      el.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      el.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;

var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  var _arr = [before, after];

  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item) continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}

/* istanbul ignore next */
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check = item || {};
    console.log(check.nodeName, check.className, check.id);
  }
  console.log("edn bodyTrap ----------");
}
/* eslint-enable no-console */

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
var htmlClassList = {};
var docBodyClassList = {};

/* eslint-disable no-console */
/* istanbul ignore next */
function removeClass(at, cls) {
  at.classList.remove(cls);
}

/* istanbul ignore next */
function resetState() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }

  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }

  htmlClassList = {};
  docBodyClassList = {};
}

/* istanbul ignore next */
function log() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n  ";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n  ";
    }

    classes = document.body.className;

    buffer += "\n\ndoc.body (" + classes + "):\n  ";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
    }

    buffer += "\n";

    console.log(buffer);
  }
}
/* eslint-enable no-console */

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  focusLaterElements = [];
}

/* istanbul ignore next */
function log() {
  if (true) {
    console.log("focusManager ----------");
    focusLaterElements.forEach(function (f) {
      var check = f || {};
      console.log(check.nodeName, check.className, check.id);
    });
    console.log("end focusManager ----------");
  }
}
/* eslint-enable no-console */

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.log = log;
exports.resetState = resetState;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

/* eslint-disable no-console */
/* istanbul ignore next */
function log() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function (p) {
    return console.log(p);
  });
  console.log("end portalOpenInstances ----------");
}

/* istanbul ignore next */
function resetState() {
  portalOpenInstances = new PortalOpenInstances();
}
/* eslint-enable no-console */

exports.default = portalOpenInstances;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};

var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActiveElement() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];
  var activeElement = getActiveElement();

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === activeElement && !shiftKey) {
    target = head;
  }

  if (head === activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  try {
    // Otherwise we need to check some styles
    var style = window.getComputedStyle(element);
    return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
    // if 'overflow: visible' set, check if there is actually any overflow
    element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.warn("Failed to inspect element style");
    return false;
  }
}

function visible(element) {
  var parentElement = element;
  var rootNode = element.getRootNode && element.getRootNode();
  while (parentElement) {
    if (parentElement === document.body) break;

    // if we are not hidden yet, skip to checking outside the Web Component
    if (rootNode && parentElement === rootNode) parentElement = rootNode.host.parentNode;

    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function (finished, el) {
    return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
  }, []);
  return descendants.filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfdGVtcGxhdGVzX0NvbnRhY3RfSW5mb3JtYXRpb25Gb3JtX2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxnRUFBQSxDQUFvQixTQUFwQjtBQU1PLElBQU1PLHFCQUEyRCxHQUFHLFNBQTlEQSxxQkFBOEQsT0FFckU7QUFBQTs7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7QUFDSixNQUFNQyxDQUFDLEdBQUdSLHdEQUFlLENBQUMsY0FBRCxDQUF6QjtBQUNBLHNCQUNFLDhEQUFDLG9EQUFEO0FBQ0UsVUFBTSxFQUFFLElBRFY7QUFFRSxrQkFBYyxFQUFFTyxPQUZsQjtBQUdFLGFBQVMsRUFBQyx5QkFIWjtBQUlFLGdCQUFZLEVBQUMsZUFKZjtBQUFBLDJCQU1FO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDLGNBQVQ7QUFBd0IsYUFBRyxFQUFFTiwyRUFBZ0JRO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQyxPQUFsQjtBQUEwQixpQkFBTyxFQUFFRixPQUFuQztBQUFBLG9CQUNHQyxDQUFDLENBQUMsT0FBRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLG1CQUFTLEVBQUMsVUFEWjtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkwsWUFBQUEsZ0RBQVMsQ0FBQztBQUNSTyxjQUFBQSxNQUFNLEVBQUVOLG1FQUFrQixDQUN4QixxQkFEd0IsRUFFeEIsYUFGd0IsQ0FEbEI7QUFLUk8sY0FBQUEsUUFBUSxFQUFFLGFBTEY7QUFNUkMsY0FBQUEsS0FBSyxFQUFFO0FBTkMsYUFBRCxDQUFU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cm1hdGlvbkZvcm0vRG93bmxvYWRCcm9jaHVyZU1vZGFsLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9Db250YWN0L0luZm9ybWF0aW9uRm9ybS9Gb3JtU3RlcENvbnRhY3RJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZW1wbGF0ZXMvQ29udGFjdC9JbmZvcm1hdGlvbkZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Jyb2NodXJlLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbFBvcnRhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2FyaWFBcHBIaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2JvZHlUcmFwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvY2xhc3NMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvZm9jdXNNYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvcG9ydGFsT3Blbkluc3RhbmNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3Njb3BlVGFiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvdGFiYmFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbG9jYWxlJztcclxuaW1wb3J0IEJyb2NodXJlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9icm9jaHVyZS5wbmcnO1xyXG5pbXBvcnQgeyBldmVudCBhcyBnVGFnRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3RhZyc7XHJcbmltcG9ydCB7IGdldEd0YWdFdmVudEFjdGlvbiB9IGZyb20gJy4uL3V0aWxzL3RyYWNraW5nJztcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKTtcclxuXHJcbmludGVyZmFjZSBEb3dubG9hZEJyb2NodXJlTW9kYWxQcm9wcyB7XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERvd25sb2FkQnJvY2h1cmVNb2RhbDogUmVhY3QuRkM8RG93bmxvYWRCcm9jaHVyZU1vZGFsUHJvcHM+ID0gKHtcclxuICBvbkNsb3NlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygnY29udGFjdC1mb3JtJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBpc09wZW49e3RydWV9XHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBjbGFzc05hbWU9XCJkb3dubG9hZC1icm9jaHVyZS1tb2RhbFwiXHJcbiAgICAgIGNvbnRlbnRMYWJlbD1cIkV4YW1wbGUgTW9kYWxcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cInBkZiBicm9jaHVyZVwiIHNyYz17QnJvY2h1cmVJY29uLnNyY30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgICB7dCgnY2xvc2UnKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG93bmxvYWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZ1RhZ0V2ZW50KHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogZ2V0R3RhZ0V2ZW50QWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAnYnJvY2h1cmVfZG93bmxvYWRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICdpbmZvcm1hdGlvbidcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0NvbnRhY3RGb3JtJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnSW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGl0bGU9XCJHbml3IEluZm9tYXRlcmlhbCAyMDIxXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmRhdG9jbXMtYXNzZXRzLmNvbS81NDg1NS8xNjM4ODkyMDA0LWduaXctaW5mb21hdGVyaWFsLTIwMjEucGRmXCJcclxuICAgICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3QoJ2Rvd25sb2FkQnJvY2h1cmUnKX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xvY2FsZSc7XHJcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSAnLi4vQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBGb3JtU3RlcEJhc2VQcm9wcyB9IGZyb20gJy4uL2Zvcm1TdGVwQmFzZVByb3BzJztcclxuaW1wb3J0IHsgRm9ybVN0ZXBDb250YWluZXIgfSBmcm9tICcuLi9Gb3JtU3RlcENvbnRhaW5lcic7XHJcbmltcG9ydCB7IENvbnRhY3RJbmZvcm1hdGlvblZhbHVlIH0gZnJvbSAnLi4vc2NoZW1hJztcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtU3RlcENvbnRhY3RJbmZvcm1hdGlvbjogUmVhY3QuRkM8XHJcbiAgRm9ybVN0ZXBCYXNlUHJvcHM8Q29udGFjdEluZm9ybWF0aW9uVmFsdWU+XHJcbj4gPSAoeyB2YWx1ZSwgZXJyb3JzLCBkaXNhYmxlZE9wdGlvbnMsIG9uVmFsdWVDaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ2NvbnRhY3QtZm9ybScpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1TdGVwQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mby1jb250YWluZXJcIj5cclxuICAgICAgICA8aDM+e3QoJ2NvbnRhY3QtaW5mby50aXRsZS5pbmZvcm1hdGlvbicpfTwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgc2FsdXRhdGlvblwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnNhbHV0YXRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXshdmFsdWUuc2FsdXRhdGlvbiA/ICdkZWZhdWx0JyA6ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdjb250YWN0LWluZm8uc2FsdXRhdGlvbi50aXRsZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBzYWx1dGF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgIHt0KCdjb250YWN0LWluZm8uc2FsdXRhdGlvbi50aXRsZScpfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtclwiPnt0KCdjb250YWN0LWluZm8uc2FsdXRhdGlvbi5tcicpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtc1wiPnt0KCdjb250YWN0LWluZm8uc2FsdXRhdGlvbi5tcycpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtcm1zXCI+e3QoJ2NvbnRhY3QtaW5mby5zYWx1dGF0aW9uLm1ybXMnKX08L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGZpcnN0LW5hbWVcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5maXJzdE5hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3QoJ2NvbnRhY3QtaW5mby5maXJzdE5hbWUnKX0ke3QoJ3JlcXVpcmVkJyl9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHsgLi4udmFsdWUsIGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGxhc3QtbmFtZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmxhc3ROYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHt0KCdjb250YWN0LWluZm8ubGFzdE5hbWUnKX0ke3QoJ3JlcXVpcmVkJyl9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHsgLi4udmFsdWUsIGxhc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgZGF0ZS1PZi1iaXJ0aFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmRhdGVPZkJpcnRoIHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHt0KCdjb250YWN0LWluZm8uZGF0ZU9mQmlydGgnKX0ke3QoJ3JlcXVpcmVkJyl9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHsgLi4udmFsdWUsIGRhdGVPZkJpcnRoOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIga2lkcy1udW1iZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5udW1iZXJPZkNoaWxkcmVuIHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdjb250YWN0LWluZm8uY2hpbGRyZW4nKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHsgLi4udmFsdWUsIG51bWJlck9mQ2hpbGRyZW46IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBtYXJpdGFsLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLm1hcml0YWxTdGF0dXMgfHwgJyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXshdmFsdWUubWFyaXRhbFN0YXR1cyA/ICdkZWZhdWx0JyA6ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdjb250YWN0LWluZm8ubWFyaXRhbFN0YXR1cy50aXRsZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHsgcGFydG5lckRhdGVPZkJpcnRoIH0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcml0YWxTdGF0dXMgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgbWFyaXRhbFN0YXR1cyAhPT0gJ21hcnJpZWQnICYmXHJcbiAgICAgICAgICAgICAgICAgIG1hcml0YWxTdGF0dXMgIT09ICdwYXJ0bmVyc2hpcCdcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBwYXJ0bmVyRGF0ZU9mQmlydGggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBtYXJpdGFsU3RhdHVzLCBwYXJ0bmVyRGF0ZU9mQmlydGggfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29udGFjdC1pbmZvLm1hcml0YWxTdGF0dXMudGl0bGUnKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2luZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29udGFjdC1pbmZvLm1hcml0YWxTdGF0dXMuc2luZ2xlJyl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRpdm9yY2VkXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29udGFjdC1pbmZvLm1hcml0YWxTdGF0dXMuZGl2b3JjZWQnKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFycmllZFwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbnRhY3QtaW5mby5tYXJpdGFsU3RhdHVzLm1hcnJpZWQnKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGFydG5lcnNoaXBcIj5cclxuICAgICAgICAgICAgICAgIHt0KCdjb250YWN0LWluZm8ubWFyaXRhbFN0YXR1cy5wYXJ0bmVyc2hpcCcpfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3aWRvd2VkXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29udGFjdC1pbmZvLm1hcml0YWxTdGF0dXMud2lkb3dlZCcpfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyFkaXNhYmxlZE9wdGlvbnMuaW5jbHVkZXMoJ3BhcnRuZXJEYXRlT2ZCaXJ0aCcpICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgZGF0ZS1PZi1iaXJ0aC1wYXJ0bmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUucGFydG5lckRhdGVPZkJpcnRoIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ2NvbnRhY3QtaW5mby5wYXJ0bmVyRGF0ZU9mQmlydGgnKX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lckRhdGVPZkJpcnRoOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBlbWFpbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udGFjdC1pbmZvLWRhdGEgJHtcclxuICAgICAgICAgICAgICAgICEhdmFsdWUuZW1haWwgJiYgZXJyb3JzLnNvbWUoKGUpID0+IGUuaW5jbHVkZXMoJ2VtYWlsJykpXHJcbiAgICAgICAgICAgICAgICAgID8gJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmVtYWlsIHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHt0KCdjb250YWN0LWluZm8uZW1haWwnKX0ke3QoJ3JlcXVpcmVkJyl9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBwaG9uZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnRlbCB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLnBob25lJyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB0ZWw6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIHN0cmVldFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnN0cmVldCB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLnN0cmVldCcpfSR7dCgncmVxdWlyZWQnKX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3RyZWV0OiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBidWlsZGluZy1udW1iZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5ob3VzZU51bWJlciB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLmhvdXNlTnVtYmVyJyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBob3VzZU51bWJlcjogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgemlwLWNvZGVcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS56aXBDb2RlIHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHt0KCdjb250YWN0LWluZm8uemlwQ29kZScpfSR7dCgncmVxdWlyZWQnKX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgemlwQ29kZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgY2l0eVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmNpdHkgfHwgJyd9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3QoJ2NvbnRhY3QtaW5mby5jaXR5Jyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBjaXR5OiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciB2aWFFbWFpbEFuZFBvc3RcIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgcmFkaW9cclxuICAgICAgICAgICAgICBpc0NoZWNrZWQ9e3ZhbHVlLnJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbH1cclxuICAgICAgICAgICAgICB0ZXh0PXt0KCdjb250YWN0LWluZm8ucmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsJyl9XHJcbiAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWwsXHJcbiAgICAgICAgICAgICAgICB9ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWwgPVxyXG4gICAgICAgICAgICAgICAgICAhcmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsO1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWwgPSAhcmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWw7XHJcblxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgdmlhRW1haWxcIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgcmFkaW9cclxuICAgICAgICAgICAgICBpc0NoZWNrZWQ9e3ZhbHVlLnJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3QoJ2NvbnRhY3QtaW5mby5yZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbCcpfVxyXG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsLFxyXG4gICAgICAgICAgICAgICAgfSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsID1cclxuICAgICAgICAgICAgICAgICAgIXJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbDtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsID0gIXJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsO1xyXG5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5jb21tZW50IHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdjb250YWN0LWluZm8uY29tbWVudHMnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHsgLi4udmFsdWUsIGNvbW1lbnQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBzdWJzY3JpYmVcIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgaXNDaGVja2VkPXt2YWx1ZS5zdWJzY3JpYmVUb05ld3NMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgdGV4dD17dCgnY29udGFjdC1pbmZvLnN1YnNjcmliZVRvTmV3c0xldHRlcicpfVxyXG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVUb05ld3NMZXR0ZXI6ICF2YWx1ZS5zdWJzY3JpYmVUb05ld3NMZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybVN0ZXBDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbG9jYWxlJztcclxuaW1wb3J0IHsgc3VibWl0Q29udGFjdEZvcm1SZXF1ZXN0IH0gZnJvbSAnLi4vc3VibWl0Q29udGFjdEZvcm1SZXF1ZXN0JztcclxuaW1wb3J0IHsgRm9ybVN0ZXBDb250YWN0SW5mb3JtYXRpb24gfSBmcm9tICcuL0Zvcm1TdGVwQ29udGFjdEluZm9ybWF0aW9uJztcclxuaW1wb3J0IHsgRm9ybVN0ZXBTdWNjZXNzIH0gZnJvbSAnLi4vRm9ybVN0ZXBTdWNjZXNzJztcclxuaW1wb3J0IHtcclxuICBDb250YWN0SW5mb3JtYXRpb25Gb3JtU3RlcCxcclxuICBnZXRJbmZvcm1hdGlvblNjaGVtYSxcclxuICBTY2hlbWEsXHJcbn0gZnJvbSAnLi4vc2NoZW1hJztcclxuaW1wb3J0IHsgRm9ybVN0ZXBCYXNlUHJvcHMgfSBmcm9tICcuLi9mb3JtU3RlcEJhc2VQcm9wcyc7XHJcbmltcG9ydCB7IERvd25sb2FkQnJvY2h1cmVNb2RhbCB9IGZyb20gJy4vRG93bmxvYWRCcm9jaHVyZU1vZGFsJztcclxuXHJcbmNvbnN0IGZvcm1TdGVwc01hcHBpbmc6IFJlY29yZDxzdHJpbmcsIFJlYWN0LkZDPEZvcm1TdGVwQmFzZVByb3BzPGFueT4+PiA9IHtcclxuICBjb250YWN0SW5mb3JtYXRpb246IEZvcm1TdGVwQ29udGFjdEluZm9ybWF0aW9uLFxyXG59O1xyXG5cclxuaW50ZXJmYWNlIEluZm9ybWF0aW9uRm9ybVByb3BzIHtcclxuICBvbmxpbmVTb3VyY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgb25DbG9zZTogKGlzQ2FuY2VsbGVkOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIG9uU3RlcENoYW5nZWQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hdGlvbkZvcm06IFJlYWN0LkZDPEluZm9ybWF0aW9uRm9ybVByb3BzPiA9ICh7XHJcbiAgb25DbG9zZSxcclxuICBvblN0ZXBDaGFuZ2VkLFxyXG4gIG9ubGluZVNvdXJjZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzY2hlbWEsIHNldFNjaGVtYV0gPSB1c2VTdGF0ZTxTY2hlbWE+KGdldEluZm9ybWF0aW9uU2NoZW1hKCkpO1xyXG5cclxuICBjb25zdCBvblZhbHVlQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvcm1hdGlvbiA9IHNjaGVtYS5maW5kKFxyXG4gICAgICAoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdjb250YWN0SW5mb3JtYXRpb24nXHJcbiAgICApISBhcyBDb250YWN0SW5mb3JtYXRpb25Gb3JtU3RlcDtcclxuICAgIGNvbnRhY3RJbmZvcm1hdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgY29udGFjdEluZm9ybWF0aW9uLnZhbHVlLm1hcml0YWxTdGF0dXMgPT09ICdtYXJyaWVkJyB8fFxyXG4gICAgICBjb250YWN0SW5mb3JtYXRpb24udmFsdWUubWFyaXRhbFN0YXR1cyA9PT0gJ3BhcnRuZXJzaGlwJ1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnRhY3RJbmZvcm1hdGlvbi5kaXNhYmxlZE9wdGlvbnMgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRhY3RJbmZvcm1hdGlvbi5kaXNhYmxlZE9wdGlvbnMgPSBbJ3BhcnRuZXJEYXRlT2ZCaXJ0aCddO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjaGVtYShbLi4uc2NoZW1hXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygnY29udGFjdC1mb3JtJyk7XHJcblxyXG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0SXNTdWJtaXR0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93RG93bmxvYWRQZGZNb2RhbCwgc2V0U2hvd0Rvd25sb2FkUGRmTW9kYWxdID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2xvc2VGb3JtID0gKGlzQ2FuY2VsbGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXRJc1N1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICBzZXRTaG93RG93bmxvYWRQZGZNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRTY2hlbWEoZ2V0SW5mb3JtYXRpb25TY2hlbWEoKSk7XHJcbiAgICBvbkNsb3NlKGlzQ2FuY2VsbGVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICBhd2FpdCBzdWJtaXRDb250YWN0Rm9ybVJlcXVlc3QoJ2luZm9ybWF0aW9uJywgb25saW5lU291cmNlLCBzY2hlbWEpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd0Rvd25sb2FkUGRmTW9kYWwodHJ1ZSksIDQwMCk7XHJcbiAgfSwgW3NjaGVtYSwgb25saW5lU291cmNlLCBzZXRJc1N1Ym1pdHRlZF0pO1xyXG5cclxuICBjb25zdCBjYW5Hb05leHQgPSAhc2NoZW1hLnNvbWUoKHMpID0+IHMudmFsaWRhdGUoKS5sZW5ndGgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nob3dEb3dubG9hZFBkZk1vZGFsID8gKFxyXG4gICAgICAgIDxEb3dubG9hZEJyb2NodXJlTW9kYWxcclxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd0Rvd25sb2FkUGRmTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgYXV0b1BsYXk9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICBzd2lwZWFibGU9e2ZhbHNlfVxyXG4gICAgICAgIGR5bmFtaWNIZWlnaHQ9e3RydWV9XHJcbiAgICAgICAgdXNlS2V5Ym9hcmRBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgIHNlbGVjdGVkSXRlbT17aXNTdWJtaXR0ZWQgPyAxIDogMH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzY2hlbWFcclxuICAgICAgICAgIC5tYXAoKGZvcm1TdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IEZvcm1TdGVwQ29tcG9uZW50ID0gZm9ybVN0ZXBzTWFwcGluZ1tmb3JtU3RlcC5uYW1lXSE7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEZvcm1TdGVwQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Zvcm1TdGVwLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0ZXAudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBlcnJvcnM9e2Zvcm1TdGVwLnZhbGlkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Zvcm1TdGVwLmRpc2FibGVkT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e29uVmFsdWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY29uY2F0KDxGb3JtU3RlcFN1Y2Nlc3Mga2V5PVwic3VjY2Vzc1wiIC8+KX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPG5hdj5cclxuICAgICAgICB7IWlzU3VibWl0dGVkID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZXZcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRm9ybSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIG9uU3RlcENoYW5nZWQoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3QoJ3ByZXYnKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmV4dCAkeyFjYW5Hb05leHQgPyAnZGlzYWJsZWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbkdvTmV4dH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICBvblN0ZXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0KCdzZW5kJyl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGNsb3NlRm9ybShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIHt0KCdjbG9zZScpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uRm9ybTtcclxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9icm9jaHVyZS4yNWI5ZTY3YWFmZDljOGQ5NTg4MzkxY2IxZTcxMDdjYy5wbmdcIixcImhlaWdodFwiOjU4MixcIndpZHRoXCI6NTY1LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRmJyb2NodXJlLjI1YjllNjdhYWZkOWM4ZDk1ODgzOTFjYjFlNzEwN2NjLnBuZyZ3PTgmcT03MFwifTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX01vZGFsUG9ydGFsID0gcmVxdWlyZShcIi4vTW9kYWxQb3J0YWxcIik7XG5cbnZhciBfTW9kYWxQb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxQb3J0YWwpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHBvcnRhbENsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsUG9ydGFsXCI7XG52YXIgYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsX19Cb2R5LS1vcGVuXCI7XG5cbnZhciBpc1JlYWN0MTYgPSBfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSAmJiBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsICE9PSB1bmRlZmluZWQ7XG5cbnZhciBjcmVhdGVIVE1MRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50KG5hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59O1xuXG52YXIgZ2V0Q3JlYXRlUG9ydGFsID0gZnVuY3Rpb24gZ2V0Q3JlYXRlUG9ydGFsKCkge1xuICByZXR1cm4gaXNSZWFjdDE2ID8gX3JlYWN0RG9tMi5kZWZhdWx0LmNyZWF0ZVBvcnRhbCA6IF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQocGFyZW50U2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudFNlbGVjdG9yKCk7XG59XG5cbnZhciBNb2RhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBNb2RhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVtb3ZlUG9ydGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgIWlzUmVhY3QxNiAmJiBfcmVhY3REb20yLmRlZmF1bHQudW5tb3VudENvbXBvbmVudEF0Tm9kZShfdGhpcy5ub2RlKTtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KF90aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNvbnRhaW5zKF90aGlzLm5vZGUpKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IFwicGFyZW50U2VsZWN0b3JcIiBwcm9wIGRpZCBub3QgcmV0dXJuZWQgYW55IERPTSAnICsgXCJlbGVtZW50LiBNYWtlIHN1cmUgdGhhdCB0aGUgcGFyZW50IGVsZW1lbnQgaXMgdW5tb3VudGVkIHRvIFwiICsgXCJhdm9pZCBhbnkgbWVtb3J5IGxlYWtzLlwiKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5wb3J0YWxSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5wb3J0YWwgPSByZWY7XG4gICAgfSwgX3RoaXMucmVuZGVyUG9ydGFsID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICB2YXIgY3JlYXRlUG9ydGFsID0gZ2V0Q3JlYXRlUG9ydGFsKCk7XG4gICAgICB2YXIgcG9ydGFsID0gY3JlYXRlUG9ydGFsKF90aGlzLCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxQb3J0YWwyLmRlZmF1bHQsIF9leHRlbmRzKHsgZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlcyB9LCBwcm9wcykpLCBfdGhpcy5ub2RlKTtcbiAgICAgIF90aGlzLnBvcnRhbFJlZihwb3J0YWwpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHJldHVybjtcblxuICAgICAgaWYgKCFpc1JlYWN0MTYpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gY3JlYXRlSFRNTEVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5wb3J0YWxDbGFzc05hbWU7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICFpc1JlYWN0MTYgJiYgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNuYXBzaG90QmVmb3JlVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByZXZQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHByZXZQcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICB2YXIgbmV4dFBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICByZXR1cm4geyBwcmV2UGFyZW50OiBwcmV2UGFyZW50LCBuZXh0UGFyZW50OiBuZXh0UGFyZW50IH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBfLCBzbmFwc2hvdCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkgcmV0dXJuO1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNPcGVuID0gX3Byb3BzLmlzT3BlbixcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWUgPSBfcHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG5cbiAgICAgIGlmIChwcmV2UHJvcHMucG9ydGFsQ2xhc3NOYW1lICE9PSBwb3J0YWxDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHBvcnRhbENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZQYXJlbnQgPSBzbmFwc2hvdC5wcmV2UGFyZW50LFxuICAgICAgICAgIG5leHRQYXJlbnQgPSBzbmFwc2hvdC5uZXh0UGFyZW50O1xuXG4gICAgICBpZiAobmV4dFBhcmVudCAhPT0gcHJldlBhcmVudCkge1xuICAgICAgICBwcmV2UGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgIG5leHRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RvcCB1bm5lY2Vzc2FyeSByZW5kZXJzIGlmIG1vZGFsIGlzIHJlbWFpbmluZyBjbG9zZWRcbiAgICAgIGlmICghcHJldlByb3BzLmlzT3BlbiAmJiAhaXNPcGVuKSByZXR1cm47XG5cbiAgICAgICFpc1JlYWN0MTYgJiYgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSB8fCAhdGhpcy5ub2RlIHx8ICF0aGlzLnBvcnRhbCkgcmV0dXJuO1xuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnBvcnRhbC5zdGF0ZTtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gc3RhdGUuaXNPcGVuICYmIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgJiYgKHN0YXRlLmNsb3Nlc0F0IHx8IG5vdyArIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMpO1xuXG4gICAgICBpZiAoY2xvc2VzQXQpIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW1vdmVQb3J0YWwsIGNsb3Nlc0F0IC0gbm93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NIHx8ICFpc1JlYWN0MTYpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5ub2RlICYmIGlzUmVhY3QxNikge1xuICAgICAgICB0aGlzLm5vZGUgPSBjcmVhdGVIVE1MRWxlbWVudChcImRpdlwiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNyZWF0ZVBvcnRhbCA9IGdldENyZWF0ZVBvcnRhbCgpO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxQb3J0YWwyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnBvcnRhbFJlZixcbiAgICAgICAgZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlc1xuICAgICAgfSwgdGhpcy5wcm9wcykpLCB0aGlzLm5vZGUpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcInNldEFwcEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXBwRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBodG1sT3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBiYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiZWZvcmVDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KV0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJlZm9yZUNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSksXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksIF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50LlNhZmVIVE1MQ29sbGVjdGlvbiksIF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50LlNhZmVOb2RlTGlzdCksIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCkpXSksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgYXJpYUhpZGVBcHA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBwcmV2ZW50U2Nyb2xsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHBhcmVudFNlbGVjdG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGFyaWE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBkYXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgcm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHNob3VsZENsb3NlT25Fc2M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb3ZlcmxheVJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjb250ZW50UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3ZlcmxheUVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY29udGVudEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBwb3J0YWxDbGFzc05hbWUsXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBib2R5T3BlbkNsYXNzTmFtZSxcbiAgcm9sZTogXCJkaWFsb2dcIixcbiAgYXJpYUhpZGVBcHA6IHRydWUsXG4gIGNsb3NlVGltZW91dE1TOiAwLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiB0cnVlLFxuICBzaG91bGRDbG9zZU9uRXNjOiB0cnVlLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IHRydWUsXG4gIHByZXZlbnRTY3JvbGw6IGZhbHNlLFxuICBwYXJlbnRTZWxlY3RvcjogZnVuY3Rpb24gcGFyZW50U2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH0sXG4gIG92ZXJsYXlFbGVtZW50OiBmdW5jdGlvbiBvdmVybGF5RWxlbWVudChwcm9wcywgY29udGVudEVsKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHByb3BzLFxuICAgICAgY29udGVudEVsXG4gICAgKTtcbiAgfSxcbiAgY29udGVudEVsZW1lbnQ6IGZ1bmN0aW9uIGNvbnRlbnRFbGVtZW50KHByb3BzLCBjaGlsZHJlbikge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBwcm9wcyxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufTtcbk1vZGFsLmRlZmF1bHRTdHlsZXMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCI0MHB4XCIsXG4gICAgbGVmdDogXCI0MHB4XCIsXG4gICAgcmlnaHQ6IFwiNDBweFwiLFxuICAgIGJvdHRvbTogXCI0MHB4XCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiXG4gIH1cbn07XG5cblxuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKE1vZGFsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBNb2RhbC5zZXRDcmVhdGVIVE1MRWxlbWVudCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBjcmVhdGVIVE1MRWxlbWVudCA9IGZuO1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ZvY3VzTWFuYWdlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlclwiKTtcblxudmFyIGZvY3VzTWFuYWdlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9mb2N1c01hbmFnZXIpO1xuXG52YXIgX3Njb3BlVGFiID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2NvcGVUYWJcIik7XG5cbnZhciBfc2NvcGVUYWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NvcGVUYWIpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX2NsYXNzTGlzdCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2NsYXNzTGlzdFwiKTtcblxudmFyIGNsYXNzTGlzdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jbGFzc0xpc3QpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcG9ydGFsT3Blbkluc3RhbmNlc1wiKTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvcnRhbE9wZW5JbnN0YW5jZXMpO1xuXG5yZXF1aXJlKFwiLi4vaGVscGVycy9ib2R5VHJhcFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBzbyB0aGF0IG91ciBDU1MgaXMgc3RhdGljYWxseSBhbmFseXphYmxlXG52YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIG92ZXJsYXk6IFwiUmVhY3RNb2RhbF9fT3ZlcmxheVwiLFxuICBjb250ZW50OiBcIlJlYWN0TW9kYWxfX0NvbnRlbnRcIlxufTtcblxudmFyIFRBQl9LRVkgPSA5O1xudmFyIEVTQ19LRVkgPSAyNztcblxudmFyIGFyaWFIaWRkZW5JbnN0YW5jZXMgPSAwO1xuXG52YXIgTW9kYWxQb3J0YWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWxQb3J0YWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsUG9ydGFsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsUG9ydGFsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNb2RhbFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsUG9ydGFsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc2V0T3ZlcmxheVJlZiA9IGZ1bmN0aW9uIChvdmVybGF5KSB7XG4gICAgICBfdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICAgIF90aGlzLnByb3BzLm92ZXJsYXlSZWYgJiYgX3RoaXMucHJvcHMub3ZlcmxheVJlZihvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q29udGVudFJlZiA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBfdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgIF90aGlzLnByb3BzLmNvbnRlbnRSZWYgJiYgX3RoaXMucHJvcHMuY29udGVudFJlZihjb250ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfdGhpcyRwcm9wcy5hcHBFbGVtZW50LFxuICAgICAgICAgIGFyaWFIaWRlQXBwID0gX3RoaXMkcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lO1xuXG4gICAgICAvLyBSZW1vdmUgY2xhc3Nlcy5cblxuICAgICAgYm9keU9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LnJlbW92ZShkb2N1bWVudC5ib2R5LCBib2R5T3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5yZW1vdmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLCBodG1sT3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIC8vIFJlc2V0IGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSBpZiBhbGwgbW9kYWxzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICBpZiAoYXJpYUhpZGVBcHAgJiYgYXJpYUhpZGRlbkluc3RhbmNlcyA+IDApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyAtPSAxO1xuXG4gICAgICAgIGlmIChhcmlhSGlkZGVuSW5zdGFuY2VzID09PSAwKSB7XG4gICAgICAgICAgYXJpYUFwcEhpZGVyLnNob3coYXBwRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZEZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZSkge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cyhfdGhpcy5wcm9wcy5wcmV2ZW50U2Nyb2xsKTtcbiAgICAgICAgICBmb2N1c01hbmFnZXIudGVhcmRvd25TY29wZWRGb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5wb3BXaXRob3V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25BZnRlckNsb3NlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJDbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBfcG9ydGFsT3Blbkluc3RhbmNlczIuZGVmYXVsdC5kZXJlZ2lzdGVyKF90aGlzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4gJiYgX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnNldHVwU2NvcGVkRm9jdXMoX3RoaXMubm9kZSk7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgYWZ0ZXJPcGVuOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuaXNPcGVuICYmIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKHtcbiAgICAgICAgICAgICAgICBvdmVybGF5RWw6IF90aGlzLm92ZXJsYXksXG4gICAgICAgICAgICAgICAgY29udGVudEVsOiBfdGhpcy5jb250ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgPiAwKSB7XG4gICAgICAgIF90aGlzLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmNvbnRlbnQgJiYgIV90aGlzLmNvbnRlbnRIYXNGb2N1cygpICYmIF90aGlzLmNvbnRlbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gRGF0ZS5ub3coKSArIF90aGlzLnByb3BzLmNsb3NlVGltZW91dE1TO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogdHJ1ZSwgY2xvc2VzQXQ6IGNsb3Nlc0F0IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCwgX3RoaXMuc3RhdGUuY2xvc2VzQXQgLSBEYXRlLm5vdygpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICAgIGNsb3Nlc0F0OiBudWxsXG4gICAgICB9LCBfdGhpcy5hZnRlckNsb3NlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFRBQl9LRVkpIHtcbiAgICAgICAgKDAsIF9zY29wZVRhYjIuZGVmYXVsdCkoX3RoaXMuY29udGVudCwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzYyAmJiBldmVudC5rZXlDb2RlID09PSBFU0NfS0VZKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNob3VsZENsb3NlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlICYmIF90aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpIHtcbiAgICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayAmJiBldmVudC50YXJnZXQgPT0gX3RoaXMub3ZlcmxheSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDb250ZW50T25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLnJlcXVlc3RDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkgJiYgX3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vd25lckhhbmRsZXNDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQmVDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnN0YXRlLmlzT3BlbiAmJiAhX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbnRlbnRIYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5jb250ZW50IHx8IF90aGlzLmNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkQ2xhc3NOYW1lID0gZnVuY3Rpb24gKHdoaWNoLCBhZGRpdGlvbmFsKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9ICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGFkZGl0aW9uYWwpKSA9PT0gXCJvYmplY3RcIiA/IGFkZGl0aW9uYWwgOiB7XG4gICAgICAgIGJhc2U6IENMQVNTX05BTUVTW3doaWNoXSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBDTEFTU19OQU1FU1t3aGljaF0gKyBcIi0tYWZ0ZXItb3BlblwiLFxuICAgICAgICBiZWZvcmVDbG9zZTogQ0xBU1NfTkFNRVNbd2hpY2hdICsgXCItLWJlZm9yZS1jbG9zZVwiXG4gICAgICB9O1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuYmFzZTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVzLmFmdGVyT3BlbjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZXMuYmVmb3JlQ2xvc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIGFkZGl0aW9uYWwgPT09IFwic3RyaW5nXCIgJiYgYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArIFwiIFwiICsgYWRkaXRpb25hbCA6IGNsYXNzTmFtZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QgPSBmdW5jdGlvbiAocHJlZml4LCBpdGVtcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICBhY2NbcHJlZml4ICsgXCItXCIgKyBuYW1lXSA9IGl0ZW1zW25hbWVdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBudWxsO1xuICAgIF90aGlzLm1vdmVGcm9tQ29udGVudFRvT3ZlcmxheSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsUG9ydGFsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAocHJldlByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcImJvZHlPcGVuQ2xhc3NOYW1lXCIgcHJvcCBoYXMgYmVlbiBtb2RpZmllZC4gJyArIFwiVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZQcm9wcy5odG1sT3BlbkNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJodG1sT3BlbkNsYXNzTmFtZVwiIHByb3AgaGFzIGJlZW4gbW9kaWZpZWQuICcgKyBcIlRoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiBtdWx0aXBsZSBtb2RhbHMgYXJlIG9wZW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBGb2N1cyBvbmx5IG5lZWRzIHRvIGJlIHNldCBvbmNlIHdoZW4gdGhlIG1vZGFsIGlzIGJlaW5nIG9wZW5lZFxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlciAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmFmdGVyQ2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5vcGVuQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiZWZvcmVPcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlZm9yZU9wZW4oKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBFbGVtZW50ID0gX3Byb3BzLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfcHJvcHMuaHRtbE9wZW5DbGFzc05hbWUsXG4gICAgICAgICAgYm9keU9wZW5DbGFzc05hbWUgPSBfcHJvcHMuYm9keU9wZW5DbGFzc05hbWU7XG5cbiAgICAgIC8vIEFkZCBjbGFzc2VzLlxuXG4gICAgICBib2R5T3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QuYWRkKGRvY3VtZW50LmJvZHksIGJvZHlPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaHRtbE9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LmFkZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0sIGh0bWxPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKGFyaWFIaWRlQXBwKSB7XG4gICAgICAgIGFyaWFIaWRkZW5JbnN0YW5jZXMgKz0gMTtcbiAgICAgICAgYXJpYUFwcEhpZGVyLmhpZGUoYXBwRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wb3J0YWxPcGVuSW5zdGFuY2VzMi5kZWZhdWx0LnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERvbid0IHN0ZWFsIGZvY3VzIGZyb20gaW5uZXIgZWxlbWVudHNcblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBfcHJvcHMyLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAgICAgZGVmYXVsdFN0eWxlcyA9IF9wcm9wczIuZGVmYXVsdFN0eWxlcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG5cbiAgICAgIHZhciBjb250ZW50U3R5bGVzID0gY2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLmNvbnRlbnQ7XG4gICAgICB2YXIgb3ZlcmxheVN0eWxlcyA9IG92ZXJsYXlDbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMub3ZlcmxheTtcblxuICAgICAgaWYgKHRoaXMuc2hvdWxkQmVDbG9zZWQoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG92ZXJsYXlQcm9wcyA9IHtcbiAgICAgICAgcmVmOiB0aGlzLnNldE92ZXJsYXlSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZShcIm92ZXJsYXlcIiwgb3ZlcmxheUNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgb3ZlcmxheVN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5vdmVybGF5KSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlT3ZlcmxheU9uTW91c2VEb3duXG4gICAgICB9O1xuXG4gICAgICB2YXIgY29udGVudFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHJlZjogdGhpcy5zZXRDb250ZW50UmVmLFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNvbnRlbnRTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUuY29udGVudCksXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZShcImNvbnRlbnRcIiwgY2xhc3NOYW1lKSxcbiAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ29udGVudE9uQ2xpY2ssXG4gICAgICAgIHJvbGU6IHRoaXMucHJvcHMucm9sZSxcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuY29udGVudExhYmVsXG4gICAgICB9LCB0aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0KFwiYXJpYVwiLCBfZXh0ZW5kcyh7IG1vZGFsOiB0cnVlIH0sIHRoaXMucHJvcHMuYXJpYSkpLCB0aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0KFwiZGF0YVwiLCB0aGlzLnByb3BzLmRhdGEgfHwge30pLCB7XG4gICAgICAgIFwiZGF0YS10ZXN0aWRcIjogdGhpcy5wcm9wcy50ZXN0SWRcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgY29udGVudEVsZW1lbnQgPSB0aGlzLnByb3BzLmNvbnRlbnRFbGVtZW50KGNvbnRlbnRQcm9wcywgY2hpbGRyZW4pO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3ZlcmxheUVsZW1lbnQob3ZlcmxheVByb3BzLCBjb250ZW50RWxlbWVudCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsUG9ydGFsO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTW9kYWxQb3J0YWwuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge1xuICAgIG92ZXJsYXk6IHt9LFxuICAgIGNvbnRlbnQ6IHt9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZXM6IHt9XG59O1xuTW9kYWxQb3J0YWwucHJvcFR5cGVzID0ge1xuICBpc09wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBkZWZhdWx0U3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgb3ZlcmxheUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBib2R5T3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGh0bWxPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXJpYUhpZGVBcHA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYXBwRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSwgX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQuU2FmZUhUTUxDb2xsZWN0aW9uKSwgX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQuU2FmZU5vZGVMaXN0KSwgX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSldKSxcbiAgb25BZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25BZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBwcmV2ZW50U2Nyb2xsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHJvbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250ZW50TGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhcmlhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIHNob3VsZENsb3NlT25Fc2M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb3ZlcmxheVJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjb250ZW50UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3ZlcmxheUVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY29udGVudEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGVzdElkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsUG9ydGFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzZXRTdGF0ZSA9IHJlc2V0U3RhdGU7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuYXNzZXJ0Tm9kZUxpc3QgPSBhc3NlcnROb2RlTGlzdDtcbmV4cG9ydHMuc2V0RWxlbWVudCA9IHNldEVsZW1lbnQ7XG5leHBvcnRzLnZhbGlkYXRlRWxlbWVudCA9IHZhbGlkYXRlRWxlbWVudDtcbmV4cG9ydHMuaGlkZSA9IGhpZGU7XG5leHBvcnRzLnNob3cgPSBzaG93O1xuZXhwb3J0cy5kb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nID0gZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZztcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKFwiLi9zYWZlSFRNTEVsZW1lbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnbG9iYWxFbGVtZW50ID0gbnVsbDtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gIGlmIChnbG9iYWxFbGVtZW50KSB7XG4gICAgaWYgKGdsb2JhbEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKSB7XG4gICAgICBnbG9iYWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgIH0gZWxzZSBpZiAoZ2xvYmFsRWxlbWVudC5sZW5ndGggIT0gbnVsbCkge1xuICAgICAgZ2xvYmFsRWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ2xvYmFsRWxlbWVudCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnbG9iYWxFbGVtZW50ID0gbnVsbDtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGxvZygpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciBjaGVjayA9IGdsb2JhbEVsZW1lbnQgfHwge307XG4gICAgY29uc29sZS5sb2coXCJhcmlhQXBwSGlkZXIgLS0tLS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhjaGVjay5ub2RlTmFtZSwgY2hlY2suY2xhc3NOYW1lLCBjaGVjay5pZCk7XG4gICAgY29uc29sZS5sb2coXCJlbmQgYXJpYUFwcEhpZGVyIC0tLS0tLS0tLS1cIik7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBhc3NlcnROb2RlTGlzdChub2RlTGlzdCwgc2VsZWN0b3IpIHtcbiAgaWYgKCFub2RlTGlzdCB8fCAhbm9kZUxpc3QubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwicmVhY3QtbW9kYWw6IE5vIGVsZW1lbnRzIHdlcmUgZm91bmQgZm9yIHNlbGVjdG9yIFwiICsgc2VsZWN0b3IgKyBcIi5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB1c2VFbGVtZW50ID0gZWxlbWVudDtcbiAgaWYgKHR5cGVvZiB1c2VFbGVtZW50ID09PSBcInN0cmluZ1wiICYmIF9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh1c2VFbGVtZW50KTtcbiAgICBhc3NlcnROb2RlTGlzdChlbCwgdXNlRWxlbWVudCk7XG4gICAgdXNlRWxlbWVudCA9IGVsO1xuICB9XG4gIGdsb2JhbEVsZW1lbnQgPSB1c2VFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQ7XG4gIHJldHVybiBnbG9iYWxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkge1xuICB2YXIgZWwgPSBhcHBFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQ7XG4gIGlmIChlbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGVsKSB8fCBlbCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgPyBlbCA6IFtlbF07XG4gIH0gZWxzZSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgW1wicmVhY3QtbW9kYWw6IEFwcCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkLlwiLCBcIlBsZWFzZSB1c2UgYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCBvciBzZXQgYGFwcEVsZW1lbnQ9e2VsfWAuXCIsIFwiVGhpcyBpcyBuZWVkZWQgc28gc2NyZWVuIHJlYWRlcnMgZG9uJ3Qgc2VlIG1haW4gY29udGVudFwiLCBcIndoZW4gbW9kYWwgaXMgb3BlbmVkLiBJdCBpcyBub3QgcmVjb21tZW5kZWQsIGJ1dCB5b3UgY2FuIG9wdC1vdXRcIiwgXCJieSBzZXR0aW5nIGBhcmlhSGlkZUFwcD17ZmFsc2V9YC5cIl0uam9pbihcIiBcIikpO1xuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgZWwgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdyhhcHBFbGVtZW50KSB7XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgIHZhciBlbCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlc2V0U3RhdGUgPSByZXNldFN0YXRlO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlcyA9IHJlcXVpcmUoXCIuL3BvcnRhbE9wZW5JbnN0YW5jZXNcIik7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gQm9keSBmb2N1cyB0cmFwIHNlZSBJc3N1ZSAjNzQyXG5cbnZhciBiZWZvcmUgPSB2b2lkIDAsXG4gICAgYWZ0ZXIgPSB2b2lkIDAsXG4gICAgaW5zdGFuY2VzID0gW107XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiByZXNldFN0YXRlKCkge1xuICB2YXIgX2FyciA9IFtiZWZvcmUsIGFmdGVyXTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgaXRlbSA9IF9hcnJbX2ldO1xuICAgIGlmICghaXRlbSkgY29udGludWU7XG4gICAgaXRlbS5wYXJlbnROb2RlICYmIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKTtcbiAgfVxuICBiZWZvcmUgPSBhZnRlciA9IG51bGw7XG4gIGluc3RhbmNlcyA9IFtdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gbG9nKCkge1xuICBjb25zb2xlLmxvZyhcImJvZHlUcmFwIC0tLS0tLS0tLS1cIik7XG4gIGNvbnNvbGUubG9nKGluc3RhbmNlcy5sZW5ndGgpO1xuICB2YXIgX2FycjIgPSBbYmVmb3JlLCBhZnRlcl07XG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgaXRlbSA9IF9hcnIyW19pMl07XG4gICAgdmFyIGNoZWNrID0gaXRlbSB8fCB7fTtcbiAgICBjb25zb2xlLmxvZyhjaGVjay5ub2RlTmFtZSwgY2hlY2suY2xhc3NOYW1lLCBjaGVjay5pZCk7XG4gIH1cbiAgY29uc29sZS5sb2coXCJlZG4gYm9keVRyYXAgLS0tLS0tLS0tLVwiKTtcbn1cbi8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBmb2N1c0NvbnRlbnQoKSB7XG4gIGlmIChpbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlJlYWN0LU1vZGFsOiBPcGVuIGluc3RhbmNlcyA+IDAgZXhwZWN0ZWRcIik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpbnN0YW5jZXNbaW5zdGFuY2VzLmxlbmd0aCAtIDFdLmZvY3VzQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBib2R5VHJhcChldmVudFR5cGUsIG9wZW5JbnN0YW5jZXMpIHtcbiAgaWYgKCFiZWZvcmUgJiYgIWFmdGVyKSB7XG4gICAgYmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZWZvcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZWFjdC1tb2RhbC1ib2R5LXRyYXBcIiwgXCJcIik7XG4gICAgYmVmb3JlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJlZm9yZS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgYmVmb3JlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICBiZWZvcmUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzQ29udGVudCk7XG4gICAgYWZ0ZXIgPSBiZWZvcmUuY2xvbmVOb2RlKCk7XG4gICAgYWZ0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzQ29udGVudCk7XG4gIH1cblxuICBpbnN0YW5jZXMgPSBvcGVuSW5zdGFuY2VzO1xuXG4gIGlmIChpbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgIC8vIEFkZCBmb2N1cyB0cmFwXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCAhPT0gYmVmb3JlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiZWZvcmUsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCAhPT0gYWZ0ZXIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWZ0ZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBSZW1vdmUgZm9jdXMgdHJhcFxuICAgIGlmIChiZWZvcmUucGFyZW50RWxlbWVudCkge1xuICAgICAgYmVmb3JlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYmVmb3JlKTtcbiAgICB9XG4gICAgaWYgKGFmdGVyLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGFmdGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYWZ0ZXIpO1xuICAgIH1cbiAgfVxufVxuXG5fcG9ydGFsT3Blbkluc3RhbmNlczIuZGVmYXVsdC5zdWJzY3JpYmUoYm9keVRyYXApOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXNldFN0YXRlID0gcmVzZXRTdGF0ZTtcbmV4cG9ydHMubG9nID0gbG9nO1xudmFyIGh0bWxDbGFzc0xpc3QgPSB7fTtcbnZhciBkb2NCb2R5Q2xhc3NMaXN0ID0ge307XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhhdCwgY2xzKSB7XG4gIGF0LmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gIHZhciBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcbiAgZm9yICh2YXIgY2xzIGluIGh0bWxDbGFzc0xpc3QpIHtcbiAgICByZW1vdmVDbGFzcyhodG1sRWxlbWVudCwgaHRtbENsYXNzTGlzdFtjbHNdKTtcbiAgfVxuXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgZm9yICh2YXIgX2NscyBpbiBkb2NCb2R5Q2xhc3NMaXN0KSB7XG4gICAgcmVtb3ZlQ2xhc3MoYm9keSwgZG9jQm9keUNsYXNzTGlzdFtfY2xzXSk7XG4gIH1cblxuICBodG1sQ2xhc3NMaXN0ID0ge307XG4gIGRvY0JvZHlDbGFzc0xpc3QgPSB7fTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGxvZygpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciBjbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLmNsYXNzTmFtZTtcbiAgICB2YXIgYnVmZmVyID0gXCJTaG93IHRyYWNrZWQgY2xhc3NlczpcXG5cXG5cIjtcblxuICAgIGJ1ZmZlciArPSBcIjxodG1sIC8+IChcIiArIGNsYXNzZXMgKyBcIik6XFxuICBcIjtcbiAgICBmb3IgKHZhciB4IGluIGh0bWxDbGFzc0xpc3QpIHtcbiAgICAgIGJ1ZmZlciArPSBcIiAgXCIgKyB4ICsgXCIgXCIgKyBodG1sQ2xhc3NMaXN0W3hdICsgXCJcXG4gIFwiO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZTtcblxuICAgIGJ1ZmZlciArPSBcIlxcblxcbmRvYy5ib2R5IChcIiArIGNsYXNzZXMgKyBcIik6XFxuICBcIjtcbiAgICBmb3IgKHZhciBfeCBpbiBkb2NCb2R5Q2xhc3NMaXN0KSB7XG4gICAgICBidWZmZXIgKz0gXCIgIFwiICsgX3ggKyBcIiBcIiArIGRvY0JvZHlDbGFzc0xpc3RbX3hdICsgXCJcXG4gIFwiO1xuICAgIH1cblxuICAgIGJ1ZmZlciArPSBcIlxcblwiO1xuXG4gICAgY29uc29sZS5sb2coYnVmZmVyKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbi8qKlxuICogVHJhY2sgdGhlIG51bWJlciBvZiByZWZlcmVuY2Ugb2YgYSBjbGFzcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwb2xsIFRoZSBwb2xsIHRvIHJlY2VpdmUgdGhlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBpbmNyZW1lbnRSZWZlcmVuY2UgPSBmdW5jdGlvbiBpbmNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKSB7XG4gIGlmICghcG9sbFtjbGFzc05hbWVdKSB7XG4gICAgcG9sbFtjbGFzc05hbWVdID0gMDtcbiAgfVxuICBwb2xsW2NsYXNzTmFtZV0gKz0gMTtcbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbi8qKlxuICogRHJvcCB0aGUgcmVmZXJlbmNlIG9mIGEgY2xhc3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcG9sbCBUaGUgcG9sbCB0byByZWNlaXZlIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZGVjcmVtZW50UmVmZXJlbmNlID0gZnVuY3Rpb24gZGVjcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSkge1xuICBpZiAocG9sbFtjbGFzc05hbWVdKSB7XG4gICAgcG9sbFtjbGFzc05hbWVdIC09IDE7XG4gIH1cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbi8qKlxuICogVHJhY2sgYSBjbGFzcyBhbmQgYWRkIHRvIHRoZSBnaXZlbiBjbGFzcyBsaXN0LlxuICogQHBhcmFtIHtPYmplY3R9IGNsYXNzTGlzdFJlZiBBIGNsYXNzIGxpc3Qgb2YgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xsICAgICAgICAgVGhlIHBvbGwgdG8gYmUgdXNlZC5cbiAqIEBwYXJhbSB7QXJyYXl9ICBjbGFzc2VzICAgICAgVGhlIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSB0cmFja2VkLlxuICovXG52YXIgdHJhY2tDbGFzcyA9IGZ1bmN0aW9uIHRyYWNrQ2xhc3MoY2xhc3NMaXN0UmVmLCBwb2xsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaW5jcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSk7XG4gICAgY2xhc3NMaXN0UmVmLmFkZChjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8qKlxuICogVW50cmFjayBhIGNsYXNzIGFuZCByZW1vdmUgZnJvbSB0aGUgZ2l2ZW4gY2xhc3MgbGlzdCBpZiB0aGUgcmVmZXJlbmNlXG4gKiByZWFjaGVzIDAuXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhc3NMaXN0UmVmIEEgY2xhc3MgbGlzdCBvZiBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHBvbGwgICAgICAgICBUaGUgcG9sbCB0byBiZSB1c2VkLlxuICogQHBhcmFtIHtBcnJheX0gIGNsYXNzZXMgICAgICBUaGUgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIHVudHJhY2tlZC5cbiAqL1xudmFyIHVudHJhY2tDbGFzcyA9IGZ1bmN0aW9uIHVudHJhY2tDbGFzcyhjbGFzc0xpc3RSZWYsIHBvbGwsIGNsYXNzZXMpIHtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBkZWNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKTtcbiAgICBwb2xsW2NsYXNzTmFtZV0gPT09IDAgJiYgY2xhc3NMaXN0UmVmLnJlbW92ZShjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUHVibGljIGluZmVyZmFjZSB0byBhZGQgY2xhc3NlcyB0byB0aGUgZG9jdW1lbnQuYm9keS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5Q2xhc3MgVGhlIGNsYXNzIHN0cmluZyB0byBiZSBhZGRlZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgbWF5IGNvbnRhaW4gbW9yZSB0aGVuIG9uZSBjbGFzc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoICcgJyBhcyBzZXBhcmF0b3IuXG4gKi9cbnZhciBhZGQgPSBleHBvcnRzLmFkZCA9IGZ1bmN0aW9uIGFkZChlbGVtZW50LCBjbGFzc1N0cmluZykge1xuICByZXR1cm4gdHJhY2tDbGFzcyhlbGVtZW50LmNsYXNzTGlzdCwgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaHRtbFwiID8gaHRtbENsYXNzTGlzdCA6IGRvY0JvZHlDbGFzc0xpc3QsIGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG59O1xuXG4vKipcbiAqIFB1YmxpYyBpbmZlcmZhY2UgdG8gcmVtb3ZlIGNsYXNzZXMgZnJvbSB0aGUgZG9jdW1lbnQuYm9keS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5Q2xhc3MgVGhlIGNsYXNzIHN0cmluZyB0byBiZSBhZGRlZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgbWF5IGNvbnRhaW4gbW9yZSB0aGVuIG9uZSBjbGFzc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoICcgJyBhcyBzZXBhcmF0b3IuXG4gKi9cbnZhciByZW1vdmUgPSBleHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50LCBjbGFzc1N0cmluZykge1xuICByZXR1cm4gdW50cmFja0NsYXNzKGVsZW1lbnQuY2xhc3NMaXN0LCBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJodG1sXCIgPyBodG1sQ2xhc3NMaXN0IDogZG9jQm9keUNsYXNzTGlzdCwgY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlc2V0U3RhdGUgPSByZXNldFN0YXRlO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmhhbmRsZUJsdXIgPSBoYW5kbGVCbHVyO1xuZXhwb3J0cy5oYW5kbGVGb2N1cyA9IGhhbmRsZUZvY3VzO1xuZXhwb3J0cy5tYXJrRm9yRm9jdXNMYXRlciA9IG1hcmtGb3JGb2N1c0xhdGVyO1xuZXhwb3J0cy5yZXR1cm5Gb2N1cyA9IHJldHVybkZvY3VzO1xuZXhwb3J0cy5wb3BXaXRob3V0Rm9jdXMgPSBwb3BXaXRob3V0Rm9jdXM7XG5leHBvcnRzLnNldHVwU2NvcGVkRm9jdXMgPSBzZXR1cFNjb3BlZEZvY3VzO1xuZXhwb3J0cy50ZWFyZG93blNjb3BlZEZvY3VzID0gdGVhcmRvd25TY29wZWRGb2N1cztcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3RhYmJhYmxlXCIpO1xuXG52YXIgX3RhYmJhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhYmJhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGZvY3VzTGF0ZXJFbGVtZW50cyA9IFtdO1xudmFyIG1vZGFsRWxlbWVudCA9IG51bGw7XG52YXIgbmVlZFRvRm9jdXMgPSBmYWxzZTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cyA9IFtdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gbG9nKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJmb2N1c01hbmFnZXIgLS0tLS0tLS0tLVwiKTtcbiAgICBmb2N1c0xhdGVyRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgdmFyIGNoZWNrID0gZiB8fCB7fTtcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrLm5vZGVOYW1lLCBjaGVjay5jbGFzc05hbWUsIGNoZWNrLmlkKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImVuZCBmb2N1c01hbmFnZXIgLS0tLS0tLS0tLVwiKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZWwgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudDtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0ZvckZvY3VzTGF0ZXIoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5wdXNoKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5mdW5jdGlvbiByZXR1cm5Gb2N1cygpIHtcbiAgdmFyIHByZXZlbnRTY3JvbGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gIHZhciB0b0ZvY3VzID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBpZiAoZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdG9Gb2N1cyA9IGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbiAgICAgIHRvRm9jdXMuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiBwcmV2ZW50U2Nyb2xsIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oW1wiWW91IHRyaWVkIHRvIHJldHVybiBmb2N1cyB0b1wiLCB0b0ZvY3VzLCBcImJ1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlXCJdLmpvaW4oXCIgXCIpKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIHBvcFdpdGhvdXRGb2N1cygpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFNjb3BlZEZvY3VzKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1ciwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KFwib25CbHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25Gb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVhcmRvd25TY29wZWRGb2N1cygpIHtcbiAgbW9kYWxFbGVtZW50ID0gbnVsbDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoXCJvbkJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbkZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLnJlc2V0U3RhdGUgPSByZXNldFN0YXRlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBUcmFja3MgcG9ydGFscyB0aGF0IGFyZSBvcGVuIGFuZCBlbWl0cyBldmVudHMgdG8gc3Vic2NyaWJlcnNcblxudmFyIFBvcnRhbE9wZW5JbnN0YW5jZXMgPSBmdW5jdGlvbiBQb3J0YWxPcGVuSW5zdGFuY2VzKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxuICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wZW5JbnN0YW5jZSkge1xuICAgIGlmIChfdGhpcy5vcGVuSW5zdGFuY2VzLmluZGV4T2Yob3Blbkluc3RhbmNlKSAhPT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IENhbm5vdCByZWdpc3RlciBtb2RhbCBpbnN0YW5jZSB0aGF0J3MgYWxyZWFkeSBvcGVuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnB1c2gob3Blbkluc3RhbmNlKTtcbiAgICBfdGhpcy5lbWl0KFwicmVnaXN0ZXJcIik7XG4gIH07XG5cbiAgdGhpcy5kZXJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wZW5JbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IF90aGlzLm9wZW5JbnN0YW5jZXMuaW5kZXhPZihvcGVuSW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IFVuYWJsZSB0byBkZXJlZ2lzdGVyIFwiICsgb3Blbkluc3RhbmNlICsgXCIgYXMgXCIgKyBcIml0IHdhcyBuZXZlciByZWdpc3RlcmVkXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgX3RoaXMuZW1pdChcImRlcmVnaXN0ZXJcIik7XG4gIH07XG5cbiAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfdGhpcy5zdWJzY3JpYmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfTtcblxuICB0aGlzLmVtaXQgPSBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgX3RoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZXIoZXZlbnRUeXBlLFxuICAgICAgLy8gc2hhbGxvdyBjb3B5IHRvIGF2b2lkIGFjY2lkZW50YWwgbXV0YXRpb25cbiAgICAgIF90aGlzLm9wZW5JbnN0YW5jZXMuc2xpY2UoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5vcGVuSW5zdGFuY2VzID0gW107XG4gIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbn07XG5cbnZhciBwb3J0YWxPcGVuSW5zdGFuY2VzID0gbmV3IFBvcnRhbE9wZW5JbnN0YW5jZXMoKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGxvZygpIHtcbiAgY29uc29sZS5sb2coXCJwb3J0YWxPcGVuSW5zdGFuY2VzIC0tLS0tLS0tLS1cIik7XG4gIGNvbnNvbGUubG9nKHBvcnRhbE9wZW5JbnN0YW5jZXMub3Blbkluc3RhbmNlcy5sZW5ndGgpO1xuICBwb3J0YWxPcGVuSW5zdGFuY2VzLm9wZW5JbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhwKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwiZW5kIHBvcnRhbE9wZW5JbnN0YW5jZXMgLS0tLS0tLS0tLVwiKTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gIHBvcnRhbE9wZW5JbnN0YW5jZXMgPSBuZXcgUG9ydGFsT3Blbkluc3RhbmNlcygpO1xufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBvcnRhbE9wZW5JbnN0YW5jZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhblVzZURPTSA9IGV4cG9ydHMuU2FmZU5vZGVMaXN0ID0gZXhwb3J0cy5TYWZlSFRNTENvbGxlY3Rpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXhlbnYgPSByZXF1aXJlKFwiZXhlbnZcIik7XG5cbnZhciBfZXhlbnYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhlbnYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRUUgPSBfZXhlbnYyLmRlZmF1bHQ7XG5cbnZhciBTYWZlSFRNTEVsZW1lbnQgPSBFRS5jYW5Vc2VET00gPyB3aW5kb3cuSFRNTEVsZW1lbnQgOiB7fTtcblxudmFyIFNhZmVIVE1MQ29sbGVjdGlvbiA9IGV4cG9ydHMuU2FmZUhUTUxDb2xsZWN0aW9uID0gRUUuY2FuVXNlRE9NID8gd2luZG93LkhUTUxDb2xsZWN0aW9uIDoge307XG5cbnZhciBTYWZlTm9kZUxpc3QgPSBleHBvcnRzLlNhZmVOb2RlTGlzdCA9IEVFLmNhblVzZURPTSA/IHdpbmRvdy5Ob2RlTGlzdCA6IHt9O1xuXG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSBFRS5jYW5Vc2VET007XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVIVE1MRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNjb3BlVGFiO1xuXG52YXIgX3RhYmJhYmxlID0gcmVxdWlyZShcIi4vdGFiYmFibGVcIik7XG5cbnZhciBfdGFiYmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFiYmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KCkge1xuICB2YXIgZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGRvY3VtZW50O1xuXG4gIHJldHVybiBlbC5hY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QgPyBnZXRBY3RpdmVFbGVtZW50KGVsLmFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkgOiBlbC5hY3RpdmVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzY29wZVRhYihub2RlLCBldmVudCkge1xuICB2YXIgdGFiYmFibGUgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShub2RlKTtcblxuICBpZiAoIXRhYmJhYmxlLmxlbmd0aCkge1xuICAgIC8vIERvIG5vdGhpbmcsIHNpbmNlIHRoZXJlIGFyZSBubyBlbGVtZW50cyB0aGF0IGNhbiByZWNlaXZlIGZvY3VzLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHZvaWQgMDtcblxuICB2YXIgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgdmFyIGhlYWQgPSB0YWJiYWJsZVswXTtcbiAgdmFyIHRhaWwgPSB0YWJiYWJsZVt0YWJiYWJsZS5sZW5ndGggLSAxXTtcbiAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50KCk7XG5cbiAgLy8gcHJvY2VlZCB3aXRoIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvbiB0YWIuXG4gIC8vIEZvY3VzIG9uIGxhc3QgZWxlbWVudCBvbiBzaGlmdCArIHRhYi5cbiAgaWYgKG5vZGUgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoIXNoaWZ0S2V5KSByZXR1cm47XG4gICAgdGFyZ2V0ID0gdGFpbDtcbiAgfVxuXG4gIGlmICh0YWlsID09PSBhY3RpdmVFbGVtZW50ICYmICFzaGlmdEtleSkge1xuICAgIHRhcmdldCA9IGhlYWQ7XG4gIH1cblxuICBpZiAoaGVhZCA9PT0gYWN0aXZlRWxlbWVudCAmJiBzaGlmdEtleSkge1xuICAgIHRhcmdldCA9IHRhaWw7XG4gIH1cblxuICBpZiAodGFyZ2V0KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTYWZhcmkgcmFkaW8gaXNzdWUuXG4gIC8vXG4gIC8vIFNhZmFyaSBkb2VzIG5vdCBtb3ZlIHRoZSBmb2N1cyB0byB0aGUgcmFkaW8gYnV0dG9uLFxuICAvLyBzbyB3ZSBuZWVkIHRvIGZvcmNlIGl0IHRvIHJlYWxseSB3YWxrIHRocm91Z2ggYWxsIGVsZW1lbnRzLlxuICAvL1xuICAvLyBUaGlzIGlzIHZlcnkgZXJyb3IgcHJvbmUsIHNpbmNlIHdlIGFyZSB0cnlpbmcgdG8gZ3Vlc3NcbiAgLy8gaWYgaXQgaXMgYSBzYWZhcmkgYnJvd3NlciBmcm9tIHRoZSBmaXJzdCBvY2N1cmVuY2UgYmV0d2VlblxuICAvLyBjaHJvbWUgb3Igc2FmYXJpLlxuICAvL1xuICAvLyBUaGUgY2hyb21lIHVzZXIgYWdlbnQgY29udGFpbnMgdGhlIGZpcnN0IG9jdXJyZW5jZVxuICAvLyBhcyB0aGUgJ2Nocm9tZS92ZXJzaW9uJyBhbmQgbGF0ZXIgdGhlICdzYWZhcmkvdmVyc2lvbicuXG4gIHZhciBjaGVja1NhZmFyaSA9IC8oXFxiQ2hyb21lXFxifFxcYlNhZmFyaVxcYilcXC8vLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciBpc1NhZmFyaURlc2t0b3AgPSBjaGVja1NhZmFyaSAhPSBudWxsICYmIGNoZWNrU2FmYXJpWzFdICE9IFwiQ2hyb21lXCIgJiYgL1xcYmlQb2RcXGJ8XFxiaVBhZFxcYi9nLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgPT0gbnVsbDtcblxuICAvLyBJZiB3ZSBhcmUgbm90IGluIHNhZmFyaSBkZXNrdG9wLCBsZXQgdGhlIGJyb3dzZXIgY29udHJvbFxuICAvLyB0aGUgZm9jdXNcbiAgaWYgKCFpc1NhZmFyaURlc2t0b3ApIHJldHVybjtcblxuICB2YXIgeCA9IHRhYmJhYmxlLmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG5cbiAgaWYgKHggPiAtMSkge1xuICAgIHggKz0gc2hpZnRLZXkgPyAtMSA6IDE7XG4gIH1cblxuICB0YXJnZXQgPSB0YWJiYWJsZVt4XTtcblxuICAvLyBJZiB0aGUgdGFiYmFibGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCxcbiAgLy8gZm9jdXMgaGVhZC90YWlsIGJhc2VkIG9uIHNoaWZ0S2V5XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXJnZXQgPSBzaGlmdEtleSA/IHRhaWwgOiBoZWFkO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdGFyZ2V0LmZvY3VzKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmluZFRhYmJhYmxlRGVzY2VuZGFudHM7XG4vKiFcbiAqIEFkYXB0ZWQgZnJvbSBqUXVlcnkgVUkgY29yZVxuICpcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cbiAqL1xuXG52YXIgdGFiYmFibGVOb2RlID0gL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0LztcblxuZnVuY3Rpb24gaGlkZXNDb250ZW50cyhlbGVtZW50KSB7XG4gIHZhciB6ZXJvU2l6ZSA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPD0gMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA8PSAwO1xuXG4gIC8vIElmIHRoZSBub2RlIGlzIGVtcHR5LCB0aGlzIGlzIGdvb2QgZW5vdWdoXG4gIGlmICh6ZXJvU2l6ZSAmJiAhZWxlbWVudC5pbm5lckhUTUwpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gY2hlY2sgc29tZSBzdHlsZXNcbiAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICByZXR1cm4gemVyb1NpemUgPyBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwib3ZlcmZsb3dcIikgIT09IFwidmlzaWJsZVwiIHx8XG4gICAgLy8gaWYgJ292ZXJmbG93OiB2aXNpYmxlJyBzZXQsIGNoZWNrIGlmIHRoZXJlIGlzIGFjdHVhbGx5IGFueSBvdmVyZmxvd1xuICAgIGVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gMCAmJiBlbGVtZW50LnNjcm9sbEhlaWdodCA8PSAwIDogc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgPT0gXCJub25lXCI7XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKFwiRmFpbGVkIHRvIGluc3BlY3QgZWxlbWVudCBzdHlsZVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHZhciBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgdmFyIHJvb3ROb2RlID0gZWxlbWVudC5nZXRSb290Tm9kZSAmJiBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIGJyZWFrO1xuXG4gICAgLy8gaWYgd2UgYXJlIG5vdCBoaWRkZW4geWV0LCBza2lwIHRvIGNoZWNraW5nIG91dHNpZGUgdGhlIFdlYiBDb21wb25lbnRcbiAgICBpZiAocm9vdE5vZGUgJiYgcGFyZW50RWxlbWVudCA9PT0gcm9vdE5vZGUpIHBhcmVudEVsZW1lbnQgPSByb290Tm9kZS5ob3N0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoaGlkZXNDb250ZW50cyhwYXJlbnRFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvY3VzYWJsZShlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOKSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgdmFyIHJlcyA9IHRhYmJhYmxlTm9kZS50ZXN0KG5vZGVOYW1lKSAmJiAhZWxlbWVudC5kaXNhYmxlZCB8fCAobm9kZU5hbWUgPT09IFwiYVwiID8gZWxlbWVudC5ocmVmIHx8IGlzVGFiSW5kZXhOb3ROYU4gOiBpc1RhYkluZGV4Tm90TmFOKTtcbiAgcmV0dXJuIHJlcyAmJiB2aXNpYmxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB0YWJiYWJsZShlbGVtZW50KSB7XG4gIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIGlmICh0YWJJbmRleCA9PT0gbnVsbCkgdGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gIHZhciBpc1RhYkluZGV4TmFOID0gaXNOYU4odGFiSW5kZXgpO1xuICByZXR1cm4gKGlzVGFiSW5kZXhOYU4gfHwgdGFiSW5kZXggPj0gMCkgJiYgZm9jdXNhYmxlKGVsZW1lbnQsICFpc1RhYkluZGV4TmFOKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYmJhYmxlRGVzY2VuZGFudHMoZWxlbWVudCkge1xuICB2YXIgZGVzY2VuZGFudHMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIiksIDApLnJlZHVjZShmdW5jdGlvbiAoZmluaXNoZWQsIGVsKSB7XG4gICAgcmV0dXJuIGZpbmlzaGVkLmNvbmNhdCghZWwuc2hhZG93Um9vdCA/IFtlbF0gOiBmaW5kVGFiYmFibGVEZXNjZW5kYW50cyhlbC5zaGFkb3dSb290KSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGRlc2NlbmRhbnRzLmZpbHRlcih0YWJiYWJsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01vZGFsID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9Nb2RhbFwiKTtcblxudmFyIF9Nb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Nb2RhbDIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMSA/IGxlbiAtIDEgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAxOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDFdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkobnVsbCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1vZGFsIiwidXNlVHJhbnNsYXRpb25zIiwiQnJvY2h1cmVJY29uIiwiZXZlbnQiLCJnVGFnRXZlbnQiLCJnZXRHdGFnRXZlbnRBY3Rpb24iLCJzZXRBcHBFbGVtZW50IiwiRG93bmxvYWRCcm9jaHVyZU1vZGFsIiwib25DbG9zZSIsInQiLCJzcmMiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwiQ2hlY2tCb3giLCJGb3JtU3RlcENvbnRhaW5lciIsIkZvcm1TdGVwQ29udGFjdEluZm9ybWF0aW9uIiwidmFsdWUiLCJlcnJvcnMiLCJkaXNhYmxlZE9wdGlvbnMiLCJvblZhbHVlQ2hhbmdlIiwic2FsdXRhdGlvbiIsImUiLCJ0YXJnZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGVPZkJpcnRoIiwibnVtYmVyT2ZDaGlsZHJlbiIsIm1hcml0YWxTdGF0dXMiLCJwYXJ0bmVyRGF0ZU9mQmlydGgiLCJpbmNsdWRlcyIsImVtYWlsIiwic29tZSIsInRlbCIsInN0cmVldCIsImhvdXNlTnVtYmVyIiwiemlwQ29kZSIsImNpdHkiLCJyZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWwiLCJyZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbCIsImNvbW1lbnQiLCJzdWJzY3JpYmVUb05ld3NMZXR0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiQ2Fyb3VzZWwiLCJzdWJtaXRDb250YWN0Rm9ybVJlcXVlc3QiLCJGb3JtU3RlcFN1Y2Nlc3MiLCJnZXRJbmZvcm1hdGlvblNjaGVtYSIsImZvcm1TdGVwc01hcHBpbmciLCJjb250YWN0SW5mb3JtYXRpb24iLCJJbmZvcm1hdGlvbkZvcm0iLCJvblN0ZXBDaGFuZ2VkIiwib25saW5lU291cmNlIiwic2NoZW1hIiwic2V0U2NoZW1hIiwiZmluZCIsIm5hbWUiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwic2hvd0Rvd25sb2FkUGRmTW9kYWwiLCJzZXRTaG93RG93bmxvYWRQZGZNb2RhbCIsImNsb3NlRm9ybSIsImlzQ2FuY2VsbGVkIiwic3VibWl0Rm9ybSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJjYW5Hb05leHQiLCJzIiwidmFsaWRhdGUiLCJsZW5ndGgiLCJtYXAiLCJmb3JtU3RlcCIsIkZvcm1TdGVwQ29tcG9uZW50IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==