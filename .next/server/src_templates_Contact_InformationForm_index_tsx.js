"use strict";
exports.id = "src_templates_Contact_InformationForm_index_tsx";
exports.ids = ["src_templates_Contact_InformationForm_index_tsx"];
exports.modules = {

/***/ "./src/templates/Contact/InformationForm/DownloadBrochureModal.tsx":
/*!*************************************************************************!*\
  !*** ./src/templates/Contact/InformationForm/DownloadBrochureModal.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadBrochureModal": () => (/* binding */ DownloadBrochureModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _public_assets_images_brochure_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/assets/images/brochure.png */ "./public/assets/images/brochure.png");
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/gtag */ "./src/lib/gtag.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tracking */ "./src/templates/Contact/utils/tracking.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\InformationForm\\DownloadBrochureModal.tsx";







react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('#__next');
const DownloadBrochureModal = ({
  onClose
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_2__.useTranslations)('contact-form');
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          className: "close",
          onClick: onClose,
          children: t('close')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          className: "download",
          onClick: () => {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/InformationForm/FormStepContactInformation.tsx":
/*!******************************************************************************!*\
  !*** ./src/templates/Contact/InformationForm/FormStepContactInformation.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepContactInformation": () => (/* binding */ FormStepContactInformation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CheckBox */ "./src/templates/Contact/CheckBox.tsx");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\InformationForm\\FormStepContactInformation.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FormStepContactInformation = ({
  value,
  errors,
  disabledOptions,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_3__.FormStepContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "contact-info-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: t('contact-info.title.information')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "contact-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container salutation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            value: value.salutation || '',
            className: !value.salutation ? 'default' : '',
            placeholder: t('contact-info.salutation.title'),
            onChange: e => {
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                salutation: e.target.value
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "",
              disabled: true,
              hidden: true,
              children: t('contact-info.salutation.title')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "mr",
              children: t('contact-info.salutation.mr')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "ms",
              children: t('contact-info.salutation.ms')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "mrms",
              children: t('contact-info.salutation.mrms')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container first-name",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.firstName || '',
            placeholder: `${t('contact-info.firstName')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              firstName: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container last-name",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.lastName || '',
            placeholder: `${t('contact-info.lastName')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              lastName: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container date-Of-birth",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.dateOfBirth || '',
            placeholder: `${t('contact-info.dateOfBirth')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              dateOfBirth: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container kids-number",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.numberOfChildren || '',
            placeholder: t('contact-info.children'),
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              numberOfChildren: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container marital-status",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            value: value.maritalStatus || '',
            className: !value.maritalStatus ? 'default' : '',
            placeholder: t('contact-info.maritalStatus.title'),
            onChange: e => {
              let {
                partnerDateOfBirth
              } = value;
              const maritalStatus = e.target.value;

              if (maritalStatus !== 'married' && maritalStatus !== 'partnership') {
                partnerDateOfBirth = null;
              }

              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                maritalStatus,
                partnerDateOfBirth
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "",
              disabled: true,
              hidden: true,
              children: t('contact-info.maritalStatus.title')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "single",
              children: t('contact-info.maritalStatus.single')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "divorced",
              children: t('contact-info.maritalStatus.divorced')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "married",
              children: t('contact-info.maritalStatus.married')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "partnership",
              children: t('contact-info.maritalStatus.partnership')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "widowed",
              children: t('contact-info.maritalStatus.widowed')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), !disabledOptions.includes('partnerDateOfBirth') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container date-Of-birth-partner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.partnerDateOfBirth || '',
            placeholder: t('contact-info.partnerDateOfBirth'),
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              partnerDateOfBirth: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container email",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: `contact-info-data ${!!value.email && errors.some(e => e.includes('email')) ? 'error' : ''}`,
            value: value.email || '',
            placeholder: `${t('contact-info.email')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              email: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container phone",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.tel || '',
            placeholder: `${t('contact-info.phone')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              tel: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container street",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.street || '',
            placeholder: `${t('contact-info.street')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              street: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container building-number",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.houseNumber || '',
            placeholder: `${t('contact-info.houseNumber')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              houseNumber: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container zip-code",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.zipCode || '',
            placeholder: `${t('contact-info.zipCode')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              zipCode: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container city",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.city || '',
            placeholder: `${t('contact-info.city')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              city: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container viaEmailAndPost",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
            radio: true,
            isChecked: value.receiveInformationViaPostAndEmail,
            text: t('contact-info.receiveInformationViaPostAndEmail'),
            onToggle: () => {
              let {
                receiveInformationViaPostAndEmail,
                receiveInformationViaEmail
              } = value;
              receiveInformationViaPostAndEmail = !receiveInformationViaPostAndEmail;
              receiveInformationViaEmail = !receiveInformationViaEmail;
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                receiveInformationViaEmail,
                receiveInformationViaPostAndEmail
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container viaEmail",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
            radio: true,
            isChecked: value.receiveInformationViaEmail,
            text: t('contact-info.receiveInformationViaEmail'),
            onToggle: () => {
              let {
                receiveInformationViaPostAndEmail,
                receiveInformationViaEmail
              } = value;
              receiveInformationViaPostAndEmail = !receiveInformationViaPostAndEmail;
              receiveInformationViaEmail = !receiveInformationViaEmail;
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                receiveInformationViaEmail,
                receiveInformationViaPostAndEmail
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container comments",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
            value: value.comment || '',
            placeholder: t('contact-info.comments'),
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              comment: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container subscribe",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
            isChecked: value.subscribeToNewsLetter,
            text: t('contact-info.subscribeToNewsLetter'),
            onToggle: () => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              subscribeToNewsLetter: !value.subscribeToNewsLetter
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/InformationForm/index.tsx":
/*!*********************************************************!*\
  !*** ./src/templates/Contact/InformationForm/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationForm": () => (/* binding */ InformationForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _submitContactFormRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../submitContactFormRequest */ "./src/templates/Contact/submitContactFormRequest.ts");
/* harmony import */ var _FormStepContactInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormStepContactInformation */ "./src/templates/Contact/InformationForm/FormStepContactInformation.tsx");
/* harmony import */ var _FormStepSuccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormStepSuccess */ "./src/templates/Contact/FormStepSuccess.tsx");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schema */ "./src/templates/Contact/schema/index.ts");
/* harmony import */ var _DownloadBrochureModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DownloadBrochureModal */ "./src/templates/Contact/InformationForm/DownloadBrochureModal.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\InformationForm\\index.tsx";










const formStepsMapping = {
  contactInformation: _FormStepContactInformation__WEBPACK_IMPORTED_MODULE_4__.FormStepContactInformation
};
const InformationForm = ({
  onClose,
  onStepChanged,
  onlineSource
}) => {
  const {
    0: schema,
    1: setSchema
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_schema__WEBPACK_IMPORTED_MODULE_6__.getInformationSchema)());

  const onValueChange = value => {
    const contactInformation = schema.find(({
      name
    }) => name === 'contactInformation');
    contactInformation.value = value;

    if (contactInformation.value.maritalStatus === 'married' || contactInformation.value.maritalStatus === 'partnership') {
      contactInformation.disabledOptions = [];
    } else {
      contactInformation.disabledOptions = ['partnerDateOfBirth'];
    }

    setSchema([...schema]);
  };

  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_2__.useTranslations)('contact-form');
  const {
    0: isSubmitted,
    1: setIsSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showDownloadPdfModal,
    1: setShowDownloadPdfModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const closeForm = isCancelled => {
    setIsSubmitted(false);
    setShowDownloadPdfModal(false);
    setSchema((0,_schema__WEBPACK_IMPORTED_MODULE_6__.getInformationSchema)());
    onClose(isCancelled);
  };

  const submitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setIsSubmitted(true);
    await (0,_submitContactFormRequest__WEBPACK_IMPORTED_MODULE_3__.submitContactFormRequest)('information', onlineSource, schema);
    window.setTimeout(() => setShowDownloadPdfModal(true), 400);
  }, [schema, onlineSource, setIsSubmitted]);
  const canGoNext = !schema.some(s => s.validate().length);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [showDownloadPdfModal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_DownloadBrochureModal__WEBPACK_IMPORTED_MODULE_7__.DownloadBrochureModal, {
      onClose: () => {
        setShowDownloadPdfModal(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
      showThumbs: false,
      autoPlay: false,
      showArrows: false,
      showIndicators: false,
      showStatus: false,
      swipeable: false,
      dynamicHeight: true,
      useKeyboardArrows: false,
      selectedItem: isSubmitted ? 1 : 0,
      children: schema.map(formStep => {
        const FormStepComponent = formStepsMapping[formStep.name];
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(FormStepComponent, {
          value: formStep.value,
          errors: formStep.validate(),
          disabledOptions: formStep.disabledOptions,
          onValueChange: onValueChange
        }, formStep.name, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, undefined);
      }).concat( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_FormStepSuccess__WEBPACK_IMPORTED_MODULE_5__.FormStepSuccess, {}, "success", false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 19
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("nav", {
      children: !isSubmitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "prev",
          type: "button",
          onClick: () => {
            closeForm(true);
            onStepChanged();
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            children: t('prev')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: `next ${!canGoNext ? 'disabled' : ''}`,
          type: "button",
          disabled: !canGoNext,
          onClick: () => {
            submitForm();
            onStepChanged();
          },
          children: t('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          type: "button",
          onClick: () => closeForm(false),
          children: t('close')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InformationForm);

/***/ }),

/***/ "./public/assets/images/brochure.png":
/*!*******************************************!*\
  !*** ./public/assets/images/brochure.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/brochure.25b9e67aafd9c8d9588391cb1e7107cc.png","height":582,"width":565,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fbrochure.25b9e67aafd9c8d9588391cb1e7107cc.png&w=8&q=70"});

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19Db250YWN0X0luZm9ybWF0aW9uRm9ybV9pbmRleF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLGdFQUFBLENBQW9CLFNBQXBCO0FBTU8sTUFBTU8scUJBQTJELEdBQUcsQ0FBQztBQUMxRUMsRUFBQUE7QUFEMEUsQ0FBRCxLQUVyRTtBQUNKLFFBQU1DLENBQUMsR0FBR1Isd0RBQWUsQ0FBQyxjQUFELENBQXpCO0FBQ0Esc0JBQ0UsOERBQUMsb0RBQUQ7QUFDRSxVQUFNLEVBQUUsSUFEVjtBQUVFLGtCQUFjLEVBQUVPLE9BRmxCO0FBR0UsYUFBUyxFQUFDLHlCQUhaO0FBSUUsZ0JBQVksRUFBQyxlQUpmO0FBQUEsMkJBTUU7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUMsY0FBVDtBQUF3QixhQUFHLEVBQUVOLDJFQUFnQlE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQyxPQUFsQjtBQUEwQixpQkFBTyxFQUFFRixPQUFuQztBQUFBLG9CQUNHQyxDQUFDLENBQUMsT0FBRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUNFLG1CQUFTLEVBQUMsVUFEWjtBQUVFLGlCQUFPLEVBQUUsTUFBTTtBQUNiTCxZQUFBQSxnREFBUyxDQUFDO0FBQ1JPLGNBQUFBLE1BQU0sRUFBRU4sbUVBQWtCLENBQ3hCLHFCQUR3QixFQUV4QixhQUZ3QixDQURsQjtBQUtSTyxjQUFBQSxRQUFRLEVBQUUsYUFMRjtBQU1SQyxjQUFBQSxLQUFLLEVBQUU7QUFOQyxhQUFELENBQVQ7QUFRQUwsWUFBQUEsT0FBTztBQUNSLFdBWkg7QUFhRSxl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LENBQTlDO0FBQUEsb0JBQ0dwRCxDQUFDLENBQUMsT0FBRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDRjtBQUFBLGtCQURGO0FBdUVELENBckhNO0FBdUhQLGlFQUFleUMsZUFBZjs7Ozs7Ozs7Ozs7Ozs7QUMvSUEsaUVBQWUsQ0FBQyx1UUFBdVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL0NvbnRhY3QvSW5mb3JtYXRpb25Gb3JtL0Rvd25sb2FkQnJvY2h1cmVNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL3RlbXBsYXRlcy9Db250YWN0L0luZm9ybWF0aW9uRm9ybS9Gb3JtU3RlcENvbnRhY3RJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL3RlbXBsYXRlcy9Db250YWN0L0luZm9ybWF0aW9uRm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvYnJvY2h1cmUucG5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xvY2FsZSc7XHJcbmltcG9ydCBCcm9jaHVyZUljb24gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvYnJvY2h1cmUucG5nJztcclxuaW1wb3J0IHsgZXZlbnQgYXMgZ1RhZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vbGliL2d0YWcnO1xyXG5pbXBvcnQgeyBnZXRHdGFnRXZlbnRBY3Rpb24gfSBmcm9tICcuLi91dGlscy90cmFja2luZyc7XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCcjX19uZXh0Jyk7XHJcblxyXG5pbnRlcmZhY2UgRG93bmxvYWRCcm9jaHVyZU1vZGFsUHJvcHMge1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEb3dubG9hZEJyb2NodXJlTW9kYWw6IFJlYWN0LkZDPERvd25sb2FkQnJvY2h1cmVNb2RhbFByb3BzPiA9ICh7XHJcbiAgb25DbG9zZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ2NvbnRhY3QtZm9ybScpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXt0cnVlfVxyXG4gICAgICBvblJlcXVlc3RDbG9zZT17b25DbG9zZX1cclxuICAgICAgY2xhc3NOYW1lPVwiZG93bmxvYWQtYnJvY2h1cmUtbW9kYWxcIlxyXG4gICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgPGltZyBhbHQ9XCJwZGYgYnJvY2h1cmVcIiBzcmM9e0Jyb2NodXJlSWNvbi5zcmN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAge3QoJ2Nsb3NlJyl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvd25sb2FkXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGdUYWdFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IGdldEd0YWdFdmVudEFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgJ2Jyb2NodXJlX2Rvd25sb2FkZWQnLFxyXG4gICAgICAgICAgICAgICAgICAnaW5mb3JtYXRpb24nXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDb250YWN0Rm9ybScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0luZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRpdGxlPVwiR25pdyBJbmZvbWF0ZXJpYWwgMjAyMVwiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5kYXRvY21zLWFzc2V0cy5jb20vNTQ4NTUvMTYzODg5MjAwNC1nbml3LWluZm9tYXRlcmlhbC0yMDIxLnBkZlwiXHJcbiAgICAgICAgICAgIHJlbD1cImFsdGVybmF0ZSBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL3BkZlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0KCdkb3dubG9hZEJyb2NodXJlJyl9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sb2NhbGUnO1xyXG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gJy4uL0NoZWNrQm94JztcclxuaW1wb3J0IHsgRm9ybVN0ZXBCYXNlUHJvcHMgfSBmcm9tICcuLi9mb3JtU3RlcEJhc2VQcm9wcyc7XHJcbmltcG9ydCB7IEZvcm1TdGVwQ29udGFpbmVyIH0gZnJvbSAnLi4vRm9ybVN0ZXBDb250YWluZXInO1xyXG5pbXBvcnQgeyBDb250YWN0SW5mb3JtYXRpb25WYWx1ZSB9IGZyb20gJy4uL3NjaGVtYSc7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybVN0ZXBDb250YWN0SW5mb3JtYXRpb246IFJlYWN0LkZDPFxyXG4gIEZvcm1TdGVwQmFzZVByb3BzPENvbnRhY3RJbmZvcm1hdGlvblZhbHVlPlxyXG4+ID0gKHsgdmFsdWUsIGVycm9ycywgZGlzYWJsZWRPcHRpb25zLCBvblZhbHVlQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKCdjb250YWN0LWZvcm0nKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtU3RlcENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzPnt0KCdjb250YWN0LWluZm8udGl0bGUuaW5mb3JtYXRpb24nKX08L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIHNhbHV0YXRpb25cIj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5zYWx1dGF0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IXZhbHVlLnNhbHV0YXRpb24gPyAnZGVmYXVsdCcgOiAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnY29udGFjdC1pbmZvLnNhbHV0YXRpb24udGl0bGUnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2UoeyAuLi52YWx1ZSwgc2FsdXRhdGlvbjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29udGFjdC1pbmZvLnNhbHV0YXRpb24udGl0bGUnKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXJcIj57dCgnY29udGFjdC1pbmZvLnNhbHV0YXRpb24ubXInKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXNcIj57dCgnY29udGFjdC1pbmZvLnNhbHV0YXRpb24ubXMnKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXJtc1wiPnt0KCdjb250YWN0LWluZm8uc2FsdXRhdGlvbi5tcm1zJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBmaXJzdC1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZmlyc3ROYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHt0KCdjb250YWN0LWluZm8uZmlyc3ROYW1lJyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBsYXN0LW5hbWVcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5sYXN0TmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLmxhc3ROYW1lJyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGRhdGUtT2YtYmlydGhcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5kYXRlT2ZCaXJ0aCB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLmRhdGVPZkJpcnRoJyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBkYXRlT2ZCaXJ0aDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGtpZHMtbnVtYmVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUubnVtYmVyT2ZDaGlsZHJlbiB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnY29udGFjdC1pbmZvLmNoaWxkcmVuJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBudW1iZXJPZkNoaWxkcmVuOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgbWFyaXRhbC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5tYXJpdGFsU3RhdHVzIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IXZhbHVlLm1hcml0YWxTdGF0dXMgPyAnZGVmYXVsdCcgOiAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnY29udGFjdC1pbmZvLm1hcml0YWxTdGF0dXMudGl0bGUnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB7IHBhcnRuZXJEYXRlT2ZCaXJ0aCB9ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJpdGFsU3RhdHVzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIG1hcml0YWxTdGF0dXMgIT09ICdtYXJyaWVkJyAmJlxyXG4gICAgICAgICAgICAgICAgICBtYXJpdGFsU3RhdHVzICE9PSAncGFydG5lcnNoaXAnXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgcGFydG5lckRhdGVPZkJpcnRoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2UoeyAuLi52YWx1ZSwgbWFyaXRhbFN0YXR1cywgcGFydG5lckRhdGVPZkJpcnRoIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbnRhY3QtaW5mby5tYXJpdGFsU3RhdHVzLnRpdGxlJyl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbmdsZVwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbnRhY3QtaW5mby5tYXJpdGFsU3RhdHVzLnNpbmdsZScpfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkaXZvcmNlZFwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbnRhY3QtaW5mby5tYXJpdGFsU3RhdHVzLmRpdm9yY2VkJyl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hcnJpZWRcIj5cclxuICAgICAgICAgICAgICAgIHt0KCdjb250YWN0LWluZm8ubWFyaXRhbFN0YXR1cy5tYXJyaWVkJyl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhcnRuZXJzaGlwXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29udGFjdC1pbmZvLm1hcml0YWxTdGF0dXMucGFydG5lcnNoaXAnKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2lkb3dlZFwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbnRhY3QtaW5mby5tYXJpdGFsU3RhdHVzLndpZG93ZWQnKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHshZGlzYWJsZWRPcHRpb25zLmluY2x1ZGVzKCdwYXJ0bmVyRGF0ZU9mQmlydGgnKSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGRhdGUtT2YtYmlydGgtcGFydG5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnBhcnRuZXJEYXRlT2ZCaXJ0aCB8fCAnJ31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdjb250YWN0LWluZm8ucGFydG5lckRhdGVPZkJpcnRoJyl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJEYXRlT2ZCaXJ0aDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgZW1haWxcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRhY3QtaW5mby1kYXRhICR7XHJcbiAgICAgICAgICAgICAgICAhIXZhbHVlLmVtYWlsICYmIGVycm9ycy5zb21lKChlKSA9PiBlLmluY2x1ZGVzKCdlbWFpbCcpKVxyXG4gICAgICAgICAgICAgICAgICA/ICdlcnJvcidcclxuICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5lbWFpbCB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLmVtYWlsJyl9JHt0KCdyZXF1aXJlZCcpfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBlbWFpbDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgcGhvbmVcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS50ZWwgfHwgJyd9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3QoJ2NvbnRhY3QtaW5mby5waG9uZScpfSR7dCgncmVxdWlyZWQnKX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgdGVsOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBzdHJlZXRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5zdHJlZXQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3QoJ2NvbnRhY3QtaW5mby5zdHJlZXQnKX0ke3QoJ3JlcXVpcmVkJyl9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHN0cmVldDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgYnVpbGRpbmctbnVtYmVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuaG91c2VOdW1iZXIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3QoJ2NvbnRhY3QtaW5mby5ob3VzZU51bWJlcicpfSR7dCgncmVxdWlyZWQnKX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgaG91c2VOdW1iZXI6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIHppcC1jb2RlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuemlwQ29kZSB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7dCgnY29udGFjdC1pbmZvLnppcENvZGUnKX0ke3QoJ3JlcXVpcmVkJyl9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHppcENvZGU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIGNpdHlcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5jaXR5IHx8ICcnfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHt0KCdjb250YWN0LWluZm8uY2l0eScpfSR7dCgncmVxdWlyZWQnKX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgY2l0eTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgdmlhRW1haWxBbmRQb3N0XCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIHJhZGlvXHJcbiAgICAgICAgICAgICAgaXNDaGVja2VkPXt2YWx1ZS5yZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWx9XHJcbiAgICAgICAgICAgICAgdGV4dD17dCgnY29udGFjdC1pbmZvLnJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbCcpfVxyXG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsLFxyXG4gICAgICAgICAgICAgICAgfSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsID1cclxuICAgICAgICAgICAgICAgICAgIXJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbDtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsID0gIXJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsO1xyXG5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyIHZpYUVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIHJhZGlvXHJcbiAgICAgICAgICAgICAgaXNDaGVja2VkPXt2YWx1ZS5yZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbH1cclxuICAgICAgICAgICAgICB0ZXh0PXt0KCdjb250YWN0LWluZm8ucmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWwnKX1cclxuICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbCxcclxuICAgICAgICAgICAgICAgIH0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYVBvc3RBbmRFbWFpbCA9XHJcbiAgICAgICAgICAgICAgICAgICFyZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWw7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbCA9ICFyZWNlaXZlSW5mb3JtYXRpb25WaWFFbWFpbDtcclxuXHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbmZvcm1hdGlvblZpYUVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICByZWNlaXZlSW5mb3JtYXRpb25WaWFQb3N0QW5kRW1haWwsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBjb21tZW50c1wiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuY29tbWVudCB8fCAnJ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnY29udGFjdC1pbmZvLmNvbW1lbnRzJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh7IC4uLnZhbHVlLCBjb21tZW50OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXIgc3Vic2NyaWJlXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIGlzQ2hlY2tlZD17dmFsdWUuc3Vic2NyaWJlVG9OZXdzTGV0dGVyfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3QoJ2NvbnRhY3QtaW5mby5zdWJzY3JpYmVUb05ld3NMZXR0ZXInKX1cclxuICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT5cclxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlVG9OZXdzTGV0dGVyOiAhdmFsdWUuc3Vic2NyaWJlVG9OZXdzTGV0dGVyLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm1TdGVwQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xvY2FsZSc7XHJcbmltcG9ydCB7IHN1Ym1pdENvbnRhY3RGb3JtUmVxdWVzdCB9IGZyb20gJy4uL3N1Ym1pdENvbnRhY3RGb3JtUmVxdWVzdCc7XHJcbmltcG9ydCB7IEZvcm1TdGVwQ29udGFjdEluZm9ybWF0aW9uIH0gZnJvbSAnLi9Gb3JtU3RlcENvbnRhY3RJbmZvcm1hdGlvbic7XHJcbmltcG9ydCB7IEZvcm1TdGVwU3VjY2VzcyB9IGZyb20gJy4uL0Zvcm1TdGVwU3VjY2Vzcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFjdEluZm9ybWF0aW9uRm9ybVN0ZXAsXHJcbiAgZ2V0SW5mb3JtYXRpb25TY2hlbWEsXHJcbiAgU2NoZW1hLFxyXG59IGZyb20gJy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IEZvcm1TdGVwQmFzZVByb3BzIH0gZnJvbSAnLi4vZm9ybVN0ZXBCYXNlUHJvcHMnO1xyXG5pbXBvcnQgeyBEb3dubG9hZEJyb2NodXJlTW9kYWwgfSBmcm9tICcuL0Rvd25sb2FkQnJvY2h1cmVNb2RhbCc7XHJcblxyXG5jb25zdCBmb3JtU3RlcHNNYXBwaW5nOiBSZWNvcmQ8c3RyaW5nLCBSZWFjdC5GQzxGb3JtU3RlcEJhc2VQcm9wczxhbnk+Pj4gPSB7XHJcbiAgY29udGFjdEluZm9ybWF0aW9uOiBGb3JtU3RlcENvbnRhY3RJbmZvcm1hdGlvbixcclxufTtcclxuXHJcbmludGVyZmFjZSBJbmZvcm1hdGlvbkZvcm1Qcm9wcyB7XHJcbiAgb25saW5lU291cmNlOiBzdHJpbmcgfCBudWxsO1xyXG4gIG9uQ2xvc2U6IChpc0NhbmNlbGxlZDogYm9vbGVhbikgPT4gdm9pZDtcclxuICBvblN0ZXBDaGFuZ2VkOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb25Gb3JtOiBSZWFjdC5GQzxJbmZvcm1hdGlvbkZvcm1Qcm9wcz4gPSAoe1xyXG4gIG9uQ2xvc2UsXHJcbiAgb25TdGVwQ2hhbmdlZCxcclxuICBvbmxpbmVTb3VyY2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBbc2NoZW1hLCBzZXRTY2hlbWFdID0gdXNlU3RhdGU8U2NoZW1hPihnZXRJbmZvcm1hdGlvblNjaGVtYSgpKTtcclxuXHJcbiAgY29uc3Qgb25WYWx1ZUNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0SW5mb3JtYXRpb24gPSBzY2hlbWEuZmluZChcclxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnY29udGFjdEluZm9ybWF0aW9uJ1xyXG4gICAgKSEgYXMgQ29udGFjdEluZm9ybWF0aW9uRm9ybVN0ZXA7XHJcbiAgICBjb250YWN0SW5mb3JtYXRpb24udmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGNvbnRhY3RJbmZvcm1hdGlvbi52YWx1ZS5tYXJpdGFsU3RhdHVzID09PSAnbWFycmllZCcgfHxcclxuICAgICAgY29udGFjdEluZm9ybWF0aW9uLnZhbHVlLm1hcml0YWxTdGF0dXMgPT09ICdwYXJ0bmVyc2hpcCdcclxuICAgICkge1xyXG4gICAgICBjb250YWN0SW5mb3JtYXRpb24uZGlzYWJsZWRPcHRpb25zID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250YWN0SW5mb3JtYXRpb24uZGlzYWJsZWRPcHRpb25zID0gWydwYXJ0bmVyRGF0ZU9mQmlydGgnXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY2hlbWEoWy4uLnNjaGVtYV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ2NvbnRhY3QtZm9ybScpO1xyXG5cclxuICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Rvd25sb2FkUGRmTW9kYWwsIHNldFNob3dEb3dubG9hZFBkZk1vZGFsXSA9XHJcbiAgICB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlRm9ybSA9IChpc0NhbmNlbGxlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0SXNTdWJtaXR0ZWQoZmFsc2UpO1xyXG4gICAgc2V0U2hvd0Rvd25sb2FkUGRmTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0U2NoZW1hKGdldEluZm9ybWF0aW9uU2NoZW1hKCkpO1xyXG4gICAgb25DbG9zZShpc0NhbmNlbGxlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xyXG4gICAgYXdhaXQgc3VibWl0Q29udGFjdEZvcm1SZXF1ZXN0KCdpbmZvcm1hdGlvbicsIG9ubGluZVNvdXJjZSwgc2NoZW1hKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFNob3dEb3dubG9hZFBkZk1vZGFsKHRydWUpLCA0MDApO1xyXG4gIH0sIFtzY2hlbWEsIG9ubGluZVNvdXJjZSwgc2V0SXNTdWJtaXR0ZWRdKTtcclxuXHJcbiAgY29uc3QgY2FuR29OZXh0ID0gIXNjaGVtYS5zb21lKChzKSA9PiBzLnZhbGlkYXRlKCkubGVuZ3RoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93RG93bmxvYWRQZGZNb2RhbCA/IChcclxuICAgICAgICA8RG93bmxvYWRCcm9jaHVyZU1vZGFsXHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3dEb3dubG9hZFBkZk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgIGF1dG9QbGF5PXtmYWxzZX1cclxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgc3dpcGVhYmxlPXtmYWxzZX1cclxuICAgICAgICBkeW5hbWljSGVpZ2h0PXt0cnVlfVxyXG4gICAgICAgIHVzZUtleWJvYXJkQXJyb3dzPXtmYWxzZX1cclxuICAgICAgICBzZWxlY3RlZEl0ZW09e2lzU3VibWl0dGVkID8gMSA6IDB9XHJcbiAgICAgID5cclxuICAgICAgICB7c2NoZW1hXHJcbiAgICAgICAgICAubWFwKChmb3JtU3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBGb3JtU3RlcENvbXBvbmVudCA9IGZvcm1TdGVwc01hcHBpbmdbZm9ybVN0ZXAubmFtZV0hO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxGb3JtU3RlcENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAga2V5PXtmb3JtU3RlcC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGVwLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JzPXtmb3JtU3RlcC52YWxpZGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtmb3JtU3RlcC5kaXNhYmxlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtvblZhbHVlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNvbmNhdCg8Rm9ybVN0ZXBTdWNjZXNzIGtleT1cInN1Y2Nlc3NcIiAvPil9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgeyFpc1N1Ym1pdHRlZCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUZvcm0odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBvblN0ZXBDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0KCdwcmV2Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5leHQgJHshY2FuR29OZXh0ID8gJ2Rpc2FibGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5Hb05leHR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgb25TdGVwQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dCgnc2VuZCcpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBjbG9zZUZvcm0oZmFsc2UpfT5cclxuICAgICAgICAgICAgICB7dCgnY2xvc2UnKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvcm1hdGlvbkZvcm07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9icm9jaHVyZS4yNWI5ZTY3YWFmZDljOGQ5NTg4MzkxY2IxZTcxMDdjYy5wbmdcIixcImhlaWdodFwiOjU4MixcIndpZHRoXCI6NTY1LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRmJyb2NodXJlLjI1YjllNjdhYWZkOWM4ZDk1ODgzOTFjYjFlNzEwN2NjLnBuZyZ3PTgmcT03MFwifTsiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsInVzZVRyYW5zbGF0aW9ucyIsIkJyb2NodXJlSWNvbiIsImV2ZW50IiwiZ1RhZ0V2ZW50IiwiZ2V0R3RhZ0V2ZW50QWN0aW9uIiwic2V0QXBwRWxlbWVudCIsIkRvd25sb2FkQnJvY2h1cmVNb2RhbCIsIm9uQ2xvc2UiLCJ0Iiwic3JjIiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsIkNoZWNrQm94IiwiRm9ybVN0ZXBDb250YWluZXIiLCJGb3JtU3RlcENvbnRhY3RJbmZvcm1hdGlvbiIsInZhbHVlIiwiZXJyb3JzIiwiZGlzYWJsZWRPcHRpb25zIiwib25WYWx1ZUNoYW5nZSIsInNhbHV0YXRpb24iLCJlIiwidGFyZ2V0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkYXRlT2ZCaXJ0aCIsIm51bWJlck9mQ2hpbGRyZW4iLCJtYXJpdGFsU3RhdHVzIiwicGFydG5lckRhdGVPZkJpcnRoIiwiaW5jbHVkZXMiLCJlbWFpbCIsInNvbWUiLCJ0ZWwiLCJzdHJlZXQiLCJob3VzZU51bWJlciIsInppcENvZGUiLCJjaXR5IiwicmVjZWl2ZUluZm9ybWF0aW9uVmlhUG9zdEFuZEVtYWlsIiwicmVjZWl2ZUluZm9ybWF0aW9uVmlhRW1haWwiLCJjb21tZW50Iiwic3Vic2NyaWJlVG9OZXdzTGV0dGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwic3VibWl0Q29udGFjdEZvcm1SZXF1ZXN0IiwiRm9ybVN0ZXBTdWNjZXNzIiwiZ2V0SW5mb3JtYXRpb25TY2hlbWEiLCJmb3JtU3RlcHNNYXBwaW5nIiwiY29udGFjdEluZm9ybWF0aW9uIiwiSW5mb3JtYXRpb25Gb3JtIiwib25TdGVwQ2hhbmdlZCIsIm9ubGluZVNvdXJjZSIsInNjaGVtYSIsInNldFNjaGVtYSIsImZpbmQiLCJuYW1lIiwiaXNTdWJtaXR0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsInNob3dEb3dubG9hZFBkZk1vZGFsIiwic2V0U2hvd0Rvd25sb2FkUGRmTW9kYWwiLCJjbG9zZUZvcm0iLCJpc0NhbmNlbGxlZCIsInN1Ym1pdEZvcm0iLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY2FuR29OZXh0IiwicyIsInZhbGlkYXRlIiwibGVuZ3RoIiwibWFwIiwiZm9ybVN0ZXAiLCJGb3JtU3RlcENvbXBvbmVudCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=