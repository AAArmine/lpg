(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_templates_Calculator_index_tsx"],{

/***/ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": function() { return /* binding */ _arrayLikeToArray; },
/* harmony export */   "createForOfIteratorHelperLoose": function() { return /* binding */ _createForOfIteratorHelperLoose; },
/* harmony export */   "extends": function() { return /* binding */ _extends; },
/* harmony export */   "objectWithoutPropertiesLoose": function() { return /* binding */ _objectWithoutPropertiesLoose; },
/* harmony export */   "unsupportedIterableToArray": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.esm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": function() { return /* binding */ Description; },
/* harmony export */   "useDescriptions": function() { return /* binding */ useDescriptions; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");






var DescriptionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useDescriptionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DescriptionContext);

  if (context === null) {
    var err = new Error('You used a <Description /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }

  return context;
}

function useDescriptions() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      descriptionIds = _useState[0],
      setDescriptionIds = _useState[1];

  return [// The actual id's as string or undefined
  descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined, // The provider component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function DescriptionProvider(props) {
      var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        setDescriptionIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setDescriptionIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setDescriptionIds])];
} // ---

var DEFAULT_DESCRIPTION_TAG = 'p';
function Description(props) {
  var context = useDescriptionContext();
  var id = "headlessui-description-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__.useId)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    return context.register(id);
  }, [id, context.register]);
  var passThroughProps = props;

  var propsWeControl = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__.extends)({}, context.props, {
    id: id
  });

  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__.extends)({}, passThroughProps, propsWeControl),
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || 'Description'
  });
}


//# sourceMappingURL=description.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": function() { return /* binding */ Dialog; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-focus-trap.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js");
/* harmony import */ var _hooks_use_inert_others_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-inert-others.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js");
/* harmony import */ var _internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/portal-force-root.esm.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js");
/* harmony import */ var _portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../portal/portal.esm.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.esm.js");
/* harmony import */ var _description_description_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../description/description.esm.js */ "./node_modules/@headlessui/react/dist/components/description/description.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../internal/stack-context.esm.js */ "./node_modules/@headlessui/react/dist/internal/stack-context.esm.js");


















var _reducers;
var DialogStates;

(function (DialogStates) {
  DialogStates[DialogStates["Open"] = 0] = "Open";
  DialogStates[DialogStates["Closed"] = 1] = "Closed";
})(DialogStates || (DialogStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["SetTitleId"] = 0] = "SetTitleId";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.SetTitleId] = function (state, action) {
  if (state.titleId === action.id) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    titleId: action.id
  });
}, _reducers);
var DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DialogContext.displayName = 'DialogContext';

function useDialogContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DialogContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Dialog.displayName + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDialogContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_DIALOG_TAG = 'div';
var DialogRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.Static;
var DialogRoot = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function Dialog(props, ref) {
  var open = props.open,
      onClose = props.onClose,
      initialFocus = props.initialFocus,
      rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["open", "onClose", "initialFocus"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      nestedDialogCount = _useState[0],
      setNestedDialogCount = _useState[1];

  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.useOpenClosed)();

  if (open === undefined && usesOpenClosedState !== null) {
    var _match;

    // Update the `open` prop based on the open closed state
    open = (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(usesOpenClosedState, (_match = {}, _match[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open] = true, _match[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Closed] = false, _match));
  }

  var containers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
  var internalDialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dialogRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(internalDialogRef, ref); // Validations

  var hasOpen = props.hasOwnProperty('open') || usesOpenClosedState !== null;
  var hasOnClose = props.hasOwnProperty('onClose');

  if (!hasOpen && !hasOnClose) {
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  }

  if (!hasOpen) {
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  }

  if (!hasOnClose) {
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  }

  if (typeof open !== 'boolean') {
    throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + open);
  }

  if (typeof onClose !== 'function') {
    throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + onClose);
  }

  var dialogState = open ? DialogStates.Open : DialogStates.Closed;

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open;
    }

    return dialogState === DialogStates.Open;
  }();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    titleId: null,
    descriptionId: null
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return onClose(false);
  }, [onClose]);
  var setTitleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    return dispatch({
      type: ActionTypes.SetTitleId,
      id: id
    });
  }, [dispatch]);
  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_6__.useServerHandoffComplete)();
  var enabled = ready && dialogState === DialogStates.Open;
  var hasNestedDialogs = nestedDialogCount > 1; // 1 is the current dialog

  var hasParentDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DialogContext) !== null; // If there are multiple dialogs, then you can be the root, the leaf or one
  // in between. We only care abou whether you are the top most one or not.

  var position = !hasNestedDialogs ? 'leaf' : 'parent';
  (0,_hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.useFocusTrap)(internalDialogRef, enabled ? (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(position, {
    parent: _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RestoreFocus,
    leaf: _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.All
  }) : _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.None, {
    initialFocus: initialFocus,
    containers: containers
  });
  (0,_hooks_use_inert_others_esm_js__WEBPACK_IMPORTED_MODULE_8__.useInertOthers)(internalDialogRef, hasNestedDialogs ? enabled : false); // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_9__.useWindowEvent)('mousedown', function (event) {
    var _internalDialogRef$cu;

    var target = event.target;
    if (dialogState !== DialogStates.Open) return;
    if (hasNestedDialogs) return;
    if ((_internalDialogRef$cu = internalDialogRef.current) == null ? void 0 : _internalDialogRef$cu.contains(target)) return;
    close();
  }); // Handle `Escape` to close

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_9__.useWindowEvent)('keydown', function (event) {
    if (event.key !== _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_10__.Keys.Escape) return;
    if (dialogState !== DialogStates.Open) return;
    if (hasNestedDialogs) return;
    event.preventDefault();
    event.stopPropagation();
    close();
  }); // Scroll lock

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dialogState !== DialogStates.Open) return;
    if (hasParentDialog) return;
    var overflow = document.documentElement.style.overflow;
    var paddingRight = document.documentElement.style.paddingRight;
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = scrollbarWidth + "px";
    return function () {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [dialogState, hasParentDialog]); // Trigger close when the FocusTrap gets hidden

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dialogState !== DialogStates.Open) return;
    if (!internalDialogRef.current) return;
    var observer = new IntersectionObserver(function (entries) {
      for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(entries), _step; !(_step = _iterator()).done;) {
        var entry = _step.value;

        if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return function () {
      return observer.disconnect();
    };
  }, [dialogState, internalDialogRef, close]);

  var _useDescriptions = (0,_description_description_esm_js__WEBPACK_IMPORTED_MODULE_11__.useDescriptions)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var id = "headlessui-dialog-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_12__.useId)();
  var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [{
      dialogState: dialogState,
      close: close,
      setTitleId: setTitleId
    }, state];
  }, [dialogState, state, close, setTitleId]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    ref: dialogRef,
    id: id,
    role: 'dialog',
    'aria-modal': dialogState === DialogStates.Open ? true : undefined,
    'aria-labelledby': state.titleId,
    'aria-describedby': describedby,
    onClick: function onClick(event) {
      event.stopPropagation();
    }
  };
  var passthroughProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__.StackProvider, {
    type: "Dialog",
    element: internalDialogRef,
    onUpdate: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message, type, element) {
      var _match2;

      if (type !== 'Dialog') return;
      (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(message, (_match2 = {}, _match2[_internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__.StackMessage.Add] = function () {
        containers.current.add(element);
        setNestedDialogCount(function (count) {
          return count + 1;
        });
      }, _match2[_internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__.StackMessage.Remove] = function () {
        containers.current.add(element);
        setNestedDialogCount(function (count) {
          return count - 1;
        });
      }, _match2));
    }, [])
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_14__.ForcePortalRoot, {
    force: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_15__.Portal, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DialogContext.Provider, {
    value: contextBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_15__.Portal.Group, {
    target: internalDialogRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_14__.ForcePortalRoot, {
    force: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionProvider, {
    slot: slot,
    name: "Dialog.Description"
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_DIALOG_TAG,
    features: DialogRenderFeatures,
    visible: visible,
    name: 'Dialog'
  }))))))));
}); // ---

var DEFAULT_OVERLAY_TAG = 'div';
var Overlay = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function Overlay(props, ref) {
  var _useDialogContext = useDialogContext([Dialog.displayName, Overlay.name].join('.')),
      _useDialogContext$ = _useDialogContext[0],
      dialogState = _useDialogContext$.dialogState,
      close = _useDialogContext$.close;

  var overlayRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(ref);
  var id = "headlessui-dialog-overlay-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_12__.useId)();
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (event.target !== event.currentTarget) return;
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_16__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  }, [close]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    ref: overlayRef,
    id: id,
    'aria-hidden': true,
    onClick: handleClick
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: 'Dialog.Overlay'
  });
}); // ---

var DEFAULT_TITLE_TAG = 'h2';

function Title(props) {
  var _useDialogContext2 = useDialogContext([Dialog.displayName, Title.name].join('.')),
      _useDialogContext2$ = _useDialogContext2[0],
      dialogState = _useDialogContext2$.dialogState,
      setTitleId = _useDialogContext2$.setTitleId;

  var id = "headlessui-dialog-title-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_12__.useId)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTitleId(id);
    return function () {
      return setTitleId(null);
    };
  }, [id, setTitleId]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    id: id
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: 'Dialog.Title'
  });
} // ---


var Dialog = /*#__PURE__*/Object.assign(DialogRoot, {
  Overlay: Overlay,
  Title: Title,
  Description: _description_description_esm_js__WEBPACK_IMPORTED_MODULE_11__.Description
});


//# sourceMappingURL=dialog.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Disclosure": function() { return /* binding */ Disclosure; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");











var _reducers;
var DisclosureStates;

(function (DisclosureStates) {
  DisclosureStates[DisclosureStates["Open"] = 0] = "Open";
  DisclosureStates[DisclosureStates["Closed"] = 1] = "Closed";
})(DisclosureStates || (DisclosureStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["ToggleDisclosure"] = 0] = "ToggleDisclosure";
  ActionTypes[ActionTypes["CloseDisclosure"] = 1] = "CloseDisclosure";
  ActionTypes[ActionTypes["SetButtonId"] = 2] = "SetButtonId";
  ActionTypes[ActionTypes["SetPanelId"] = 3] = "SetPanelId";
  ActionTypes[ActionTypes["LinkPanel"] = 4] = "LinkPanel";
  ActionTypes[ActionTypes["UnlinkPanel"] = 5] = "UnlinkPanel";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.ToggleDisclosure] = function (state) {
  var _match;

  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    disclosureState: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(state.disclosureState, (_match = {}, _match[DisclosureStates.Open] = DisclosureStates.Closed, _match[DisclosureStates.Closed] = DisclosureStates.Open, _match))
  });
}, _reducers[ActionTypes.CloseDisclosure] = function (state) {
  if (state.disclosureState === DisclosureStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    disclosureState: DisclosureStates.Closed
  });
}, _reducers[ActionTypes.LinkPanel] = function (state) {
  if (state.linkedPanel === true) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    linkedPanel: true
  });
}, _reducers[ActionTypes.UnlinkPanel] = function (state) {
  if (state.linkedPanel === false) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    linkedPanel: false
  });
}, _reducers[ActionTypes.SetButtonId] = function (state, action) {
  if (state.buttonId === action.buttonId) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    buttonId: action.buttonId
  });
}, _reducers[ActionTypes.SetPanelId] = function (state, action) {
  if (state.panelId === action.panelId) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    panelId: action.panelId
  });
}, _reducers);
var DisclosureContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DisclosureContext.displayName = 'DisclosureContext';

function useDisclosureContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DisclosureContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }

  return context;
}

var DisclosureAPIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DisclosureAPIContext.displayName = 'DisclosureAPIContext';

function useDisclosureAPIContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DisclosureAPIContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }

  return context;
}

var DisclosurePanelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DisclosurePanelContext.displayName = 'DisclosurePanelContext';

function useDisclosurePanelContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DisclosurePanelContext);
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_DISCLOSURE_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Disclosure(props) {
  var _match2;

  var _props$defaultOpen = props.defaultOpen,
      defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["defaultOpen"]);

  var buttonId = "headlessui-disclosure-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var panelId = "headlessui-disclosure-panel-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    disclosureState: defaultOpen ? DisclosureStates.Open : DisclosureStates.Closed,
    linkedPanel: false,
    buttonId: buttonId,
    panelId: panelId
  });
  var disclosureState = reducerBag[0].disclosureState,
      dispatch = reducerBag[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return dispatch({
      type: ActionTypes.SetButtonId,
      buttonId: buttonId
    });
  }, [buttonId, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return dispatch({
      type: ActionTypes.SetPanelId,
      panelId: panelId
    });
  }, [panelId, dispatch]);
  var close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (focusableElement) {
    dispatch({
      type: ActionTypes.CloseDisclosure
    });

    var restoreElement = function () {
      if (!focusableElement) return document.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement) return focusableElement;
      if (focusableElement.current instanceof HTMLElement) return focusableElement.current;
      return document.getElementById(buttonId);
    }();

    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, buttonId]);
  var api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      close: close
    };
  }, [close]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: disclosureState === DisclosureStates.Open,
      close: close
    };
  }, [disclosureState, close]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisclosureContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisclosureAPIContext.Provider, {
    value: api
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(disclosureState, (_match2 = {}, _match2[DisclosureStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open, _match2[DisclosureStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Closed, _match2))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: passthroughProps,
    slot: slot,
    defaultTag: DEFAULT_DISCLOSURE_TAG,
    name: 'Disclosure'
  }))));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function Button(props, ref) {
  var _useDisclosureContext = useDisclosureContext([Disclosure.name, Button.name].join('.')),
      state = _useDisclosureContext[0],
      dispatch = _useDisclosureContext[1];

  var internalButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(internalButtonRef, ref);
  var panelContext = useDisclosurePanelContext();
  var isWithinPanel = panelContext === null ? false : panelContext === state.panelId;
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _document$getElementB;

    if (isWithinPanel) {
      if (state.disclosureState === DisclosureStates.Closed) return;

      switch (event.key) {
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ToggleDisclosure
          });
          (_document$getElementB = document.getElementById(state.buttonId)) == null ? void 0 : _document$getElementB.focus();
          break;
      }
    } else {
      switch (event.key) {
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ToggleDisclosure
          });
          break;
      }
    }
  }, [dispatch, isWithinPanel, state.disclosureState]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_8__.isDisabledReactIssue7711)(event.currentTarget)) return;
    if (props.disabled) return;

    if (isWithinPanel) {
      var _document$getElementB2;

      dispatch({
        type: ActionTypes.ToggleDisclosure
      });
      (_document$getElementB2 = document.getElementById(state.buttonId)) == null ? void 0 : _document$getElementB2.focus();
    } else {
      dispatch({
        type: ActionTypes.ToggleDisclosure
      });
    }
  }, [dispatch, props.disabled, state.buttonId, isWithinPanel]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.disclosureState === DisclosureStates.Open
    };
  }, [state]);
  var type = (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(props, internalButtonRef);
  var passthroughProps = props;
  var propsWeControl = isWithinPanel ? {
    ref: buttonRef,
    type: type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state.buttonId,
    type: type,
    'aria-expanded': props.disabled ? undefined : state.disclosureState === DisclosureStates.Open,
    'aria-controls': state.linkedPanel ? state.panelId : undefined,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Disclosure.Button'
  });
}); // ---

var DEFAULT_PANEL_TAG = 'div';
var PanelRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.Features.Static;
var Panel = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function Panel(props, ref) {
  var _useDisclosureContext2 = useDisclosureContext([Disclosure.name, Panel.name].join('.')),
      state = _useDisclosureContext2[0],
      dispatch = _useDisclosureContext2[1];

  var _useDisclosureAPICont = useDisclosureAPIContext([Disclosure.name, Panel.name].join('.')),
      close = _useDisclosureAPICont.close;

  var panelRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(ref, function () {
    if (state.linkedPanel) return;
    dispatch({
      type: ActionTypes.LinkPanel
    });
  });
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open;
    }

    return state.disclosureState === DisclosureStates.Open;
  }(); // Unlink on "unmount" myself


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return dispatch({
        type: ActionTypes.UnlinkPanel
      });
    };
  }, [dispatch]); // Unlink on "unmount" children

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _props$unmount;

    if (state.disclosureState === DisclosureStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
      dispatch({
        type: ActionTypes.UnlinkPanel
      });
    }
  }, [state.disclosureState, props.unmount, dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.disclosureState === DisclosureStates.Open,
      close: close
    };
  }, [state, close]);
  var propsWeControl = {
    ref: panelRef,
    id: state.panelId
  };
  var passthroughProps = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisclosurePanelContext.Provider, {
    value: state.panelId
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible: visible,
    name: 'Disclosure.Panel'
  }));
}); // ---

Disclosure.Button = Button;
Disclosure.Panel = Panel;


//# sourceMappingURL=disclosure.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.esm.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": function() { return /* binding */ FocusTrap; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-focus-trap.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js");






var DEFAULT_FOCUS_TRAP_TAG = 'div';
function FocusTrap(props) {
  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var initialFocus = props.initialFocus,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["initialFocus"]);

  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)();
  (0,_hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_3__.useFocusTrap)(container, ready ? _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.All : _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.None, {
    initialFocus: initialFocus
  });
  var propsWeControl = {
    ref: container
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_FOCUS_TRAP_TAG,
    name: 'FocusTrap'
  });
}


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": function() { return /* binding */ Keys; }
/* harmony export */ });
// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowLeft"] = "ArrowLeft";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowRight"] = "ArrowRight";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));


//# sourceMappingURL=keyboard.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/label/label.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/label/label.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": function() { return /* binding */ Label; },
/* harmony export */   "useLabels": function() { return /* binding */ useLabels; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");






var LabelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useLabelContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LabelContext);

  if (context === null) {
    var err = new Error('You used a <Label /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useLabelContext);
    throw err;
  }

  return context;
}

function useLabels() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      labelIds = _useState[0],
      setLabelIds = _useState[1];

  return [// The actual id's as string or undefined.
  labelIds.length > 0 ? labelIds.join(' ') : undefined, // The provider component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function LabelProvider(props) {
      var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        setLabelIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setLabelIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setLabelIds])];
} // ---

var DEFAULT_LABEL_TAG = 'label';
function Label(props) {
  var _props$passive = props.passive,
      passive = _props$passive === void 0 ? false : _props$passive,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["passive"]);

  var context = useLabelContext();
  var id = "headlessui-label-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_2__.useId)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(function () {
    return context.register(id);
  }, [id, context.register]);

  var propsWeControl = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, context.props, {
    id: id
  });

  var allProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps, propsWeControl); // @ts-expect-error props are dynamic via context, some components will
  //                  provide an onClick then we can delete it.


  if (passive) delete allProps['onClick'];
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__.render)({
    props: allProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG,
    name: context.name || 'Label'
  });
}


//# sourceMappingURL=label.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/listbox/listbox.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/listbox/listbox.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Listbox": function() { return /* binding */ Listbox; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-disposables.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js");
/* harmony import */ var _hooks_use_computed_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-computed.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-computed.esm.js");
/* harmony import */ var _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.esm.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js");


















var _reducers;
var ListboxStates;

(function (ListboxStates) {
  ListboxStates[ListboxStates["Open"] = 0] = "Open";
  ListboxStates[ListboxStates["Closed"] = 1] = "Closed";
})(ListboxStates || (ListboxStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["OpenListbox"] = 0] = "OpenListbox";
  ActionTypes[ActionTypes["CloseListbox"] = 1] = "CloseListbox";
  ActionTypes[ActionTypes["SetDisabled"] = 2] = "SetDisabled";
  ActionTypes[ActionTypes["SetOrientation"] = 3] = "SetOrientation";
  ActionTypes[ActionTypes["GoToOption"] = 4] = "GoToOption";
  ActionTypes[ActionTypes["Search"] = 5] = "Search";
  ActionTypes[ActionTypes["ClearSearch"] = 6] = "ClearSearch";
  ActionTypes[ActionTypes["RegisterOption"] = 7] = "RegisterOption";
  ActionTypes[ActionTypes["UnregisterOption"] = 8] = "UnregisterOption";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.CloseListbox] = function (state) {
  if (state.disabled) return state;
  if (state.listboxState === ListboxStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    activeOptionIndex: null,
    listboxState: ListboxStates.Closed
  });
}, _reducers[ActionTypes.OpenListbox] = function (state) {
  if (state.disabled) return state;
  if (state.listboxState === ListboxStates.Open) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    listboxState: ListboxStates.Open
  });
}, _reducers[ActionTypes.SetDisabled] = function (state, action) {
  if (state.disabled === action.disabled) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    disabled: action.disabled
  });
}, _reducers[ActionTypes.SetOrientation] = function (state, action) {
  if (state.orientation === action.orientation) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    orientation: action.orientation
  });
}, _reducers[ActionTypes.GoToOption] = function (state, action) {
  if (state.disabled) return state;
  if (state.listboxState === ListboxStates.Closed) return state;
  var activeOptionIndex = (0,_utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(action, {
    resolveItems: function resolveItems() {
      return state.options;
    },
    resolveActiveIndex: function resolveActiveIndex() {
      return state.activeOptionIndex;
    },
    resolveId: function resolveId(item) {
      return item.id;
    },
    resolveDisabled: function resolveDisabled(item) {
      return item.dataRef.current.disabled;
    }
  });
  if (state.searchQuery === '' && state.activeOptionIndex === activeOptionIndex) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: '',
    activeOptionIndex: activeOptionIndex
  });
}, _reducers[ActionTypes.Search] = function (state, action) {
  if (state.disabled) return state;
  if (state.listboxState === ListboxStates.Closed) return state;
  var searchQuery = state.searchQuery + action.value.toLowerCase();
  var match = state.options.findIndex(function (option) {
    var _option$dataRef$curre;

    return !option.dataRef.current.disabled && ((_option$dataRef$curre = option.dataRef.current.textValue) == null ? void 0 : _option$dataRef$curre.startsWith(searchQuery));
  });
  if (match === -1 || match === state.activeOptionIndex) return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: searchQuery
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: searchQuery,
    activeOptionIndex: match
  });
}, _reducers[ActionTypes.ClearSearch] = function (state) {
  if (state.disabled) return state;
  if (state.listboxState === ListboxStates.Closed) return state;
  if (state.searchQuery === '') return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: ''
  });
}, _reducers[ActionTypes.RegisterOption] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    options: [].concat(state.options, [{
      id: action.id,
      dataRef: action.dataRef
    }])
  });
}, _reducers[ActionTypes.UnregisterOption] = function (state, action) {
  var nextOptions = state.options.slice();
  var currentActiveOption = state.activeOptionIndex !== null ? nextOptions[state.activeOptionIndex] : null;
  var idx = nextOptions.findIndex(function (a) {
    return a.id === action.id;
  });
  if (idx !== -1) nextOptions.splice(idx, 1);
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    options: nextOptions,
    activeOptionIndex: function () {
      if (idx === state.activeOptionIndex) return null;
      if (currentActiveOption === null) return null; // If we removed the option before the actual active index, then it would be out of sync. To
      // fix this, we will find the correct (new) index position.

      return nextOptions.indexOf(currentActiveOption);
    }()
  });
}, _reducers);
var ListboxContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
ListboxContext.displayName = 'ListboxContext';

function useListboxContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ListboxContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Listbox.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useListboxContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_LISTBOX_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Listbox(props) {
  var _match;

  var value = props.value,
      onChange = props.onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$horizontal = props.horizontal,
      horizontal = _props$horizontal === void 0 ? false : _props$horizontal,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["value", "onChange", "disabled", "horizontal"]);

  var orientation = horizontal ? 'horizontal' : 'vertical';
  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    listboxState: ListboxStates.Closed,
    propsRef: {
      current: {
        value: value,
        onChange: onChange
      }
    },
    labelRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    buttonRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    optionsRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    disabled: disabled,
    orientation: orientation,
    options: [],
    searchQuery: '',
    activeOptionIndex: null
  });
  var _reducerBag$ = reducerBag[0],
      listboxState = _reducerBag$.listboxState,
      propsRef = _reducerBag$.propsRef,
      optionsRef = _reducerBag$.optionsRef,
      buttonRef = _reducerBag$.buttonRef,
      dispatch = reducerBag[1];
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    propsRef.current.value = value;
  }, [value, propsRef]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    propsRef.current.onChange = onChange;
  }, [onChange, propsRef]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    return dispatch({
      type: ActionTypes.SetDisabled,
      disabled: disabled
    });
  }, [disabled]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    return dispatch({
      type: ActionTypes.SetOrientation,
      orientation: orientation
    });
  }, [orientation]); // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_5__.useWindowEvent)('mousedown', function (event) {
    var _buttonRef$current, _optionsRef$current;

    var target = event.target;
    if (listboxState !== ListboxStates.Open) return;
    if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target)) return;
    if ((_optionsRef$current = optionsRef.current) == null ? void 0 : _optionsRef$current.contains(target)) return;
    dispatch({
      type: ActionTypes.CloseListbox
    });

    if (!(0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_6__.isFocusableElement)(target, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_6__.FocusableMode.Loose)) {
      var _buttonRef$current2;

      event.preventDefault();
      (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
  });
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: listboxState === ListboxStates.Open,
      disabled: disabled
    };
  }, [listboxState, disabled]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ListboxContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_7__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(listboxState, (_match = {}, _match[ListboxStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_7__.State.Open, _match[ListboxStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_7__.State.Closed, _match))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.render)({
    props: passThroughProps,
    slot: slot,
    defaultTag: DEFAULT_LISTBOX_TAG,
    name: 'Listbox'
  })));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.forwardRefWithAs)(function Button(props, ref) {
  var _state$optionsRef$cur;

  var _useListboxContext = useListboxContext([Listbox.name, Button.name].join('.')),
      state = _useListboxContext[0],
      dispatch = _useListboxContext[1];

  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(state.buttonRef, ref);
  var id = "headlessui-listbox-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_10__.useId)();
  var d = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_11__.useDisposables)();
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowDown:
        event.preventDefault();
        dispatch({
          type: ActionTypes.OpenListbox
        });
        d.nextFrame(function () {
          if (!state.propsRef.current.value) dispatch({
            type: ActionTypes.GoToOption,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowUp:
        event.preventDefault();
        dispatch({
          type: ActionTypes.OpenListbox
        });
        d.nextFrame(function () {
          if (!state.propsRef.current.value) dispatch({
            type: ActionTypes.GoToOption,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
          });
        });
        break;
    }
  }, [dispatch, state, d]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_13__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();

    if (state.listboxState === ListboxStates.Open) {
      dispatch({
        type: ActionTypes.CloseListbox
      });
      d.nextFrame(function () {
        var _state$buttonRef$curr;

        return (_state$buttonRef$curr = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
          preventScroll: true
        });
      });
    } else {
      event.preventDefault();
      dispatch({
        type: ActionTypes.OpenListbox
      });
    }
  }, [dispatch, d, state]);
  var labelledby = (0,_hooks_use_computed_esm_js__WEBPACK_IMPORTED_MODULE_14__.useComputed)(function () {
    if (!state.labelRef.current) return undefined;
    return [state.labelRef.current.id, id].join(' ');
  }, [state.labelRef.current, id]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.listboxState === ListboxStates.Open,
      disabled: state.disabled
    };
  }, [state]);
  var passthroughProps = props;
  var propsWeControl = {
    ref: buttonRef,
    id: id,
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_15__.useResolveButtonType)(props, state.buttonRef),
    'aria-haspopup': true,
    'aria-controls': (_state$optionsRef$cur = state.optionsRef.current) == null ? void 0 : _state$optionsRef$cur.id,
    'aria-expanded': state.disabled ? undefined : state.listboxState === ListboxStates.Open,
    'aria-labelledby': labelledby,
    disabled: state.disabled,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Listbox.Button'
  });
}); // ---

var DEFAULT_LABEL_TAG = 'label';

function Label(props) {
  var _useListboxContext2 = useListboxContext([Listbox.name, Label.name].join('.')),
      state = _useListboxContext2[0];

  var id = "headlessui-listbox-label-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_10__.useId)();
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _state$buttonRef$curr2;

    return (_state$buttonRef$curr2 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
      preventScroll: true
    });
  }, [state.buttonRef]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.listboxState === ListboxStates.Open,
      disabled: state.disabled
    };
  }, [state]);
  var propsWeControl = {
    ref: state.labelRef,
    id: id,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, props, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_LABEL_TAG,
    name: 'Listbox.Label'
  });
} // ---


var DEFAULT_OPTIONS_TAG = 'ul';
var OptionsRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.Features.Static;
var Options = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.forwardRefWithAs)(function Options(props, ref) {
  var _state$options$state$;

  var _useListboxContext3 = useListboxContext([Listbox.name, Options.name].join('.')),
      state = _useListboxContext3[0],
      dispatch = _useListboxContext3[1];

  var optionsRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_9__.useSyncRefs)(state.optionsRef, ref);
  var id = "headlessui-listbox-options-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_10__.useId)();
  var d = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_11__.useDisposables)();
  var searchDisposables = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_11__.useDisposables)();
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_7__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_7__.State.Open;
    }

    return state.listboxState === ListboxStates.Open;
  }();

  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    var container = state.optionsRef.current;
    if (!container) return;
    if (state.listboxState !== ListboxStates.Open) return;
    if (container === document.activeElement) return;
    container.focus({
      preventScroll: true
    });
  }, [state.listboxState, state.optionsRef]);
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    searchDisposables.dispose();

    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
      // @ts-expect-error Fallthrough is expected here
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space:
        if (state.searchQuery !== '') {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
        }

      // When in type ahead mode, fallthrough

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseListbox
        });

        if (state.activeOptionIndex !== null) {
          var dataRef = state.options[state.activeOptionIndex].dataRef;
          state.propsRef.current.onChange(dataRef.current.value);
        }

        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_16__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr3;

          return (_state$buttonRef$curr3 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
            preventScroll: true
          });
        });
        break;

      case (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state.orientation, {
        vertical: _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowDown,
        horizontal: _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowRight
      }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next
        });

      case (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state.orientation, {
        vertical: _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowUp,
        horizontal: _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.ArrowLeft
      }):
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Home:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.End:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToOption,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Escape:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseListbox
        });
        return d.nextFrame(function () {
          var _state$buttonRef$curr4;

          return (_state$buttonRef$curr4 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.focus({
            preventScroll: true
          });
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Tab:
        event.preventDefault();
        event.stopPropagation();
        break;

      default:
        if (event.key.length === 1) {
          dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
          searchDisposables.setTimeout(function () {
            return dispatch({
              type: ActionTypes.ClearSearch
            });
          }, 350);
        }

        break;
    }
  }, [d, dispatch, searchDisposables, state]);
  var labelledby = (0,_hooks_use_computed_esm_js__WEBPACK_IMPORTED_MODULE_14__.useComputed)(function () {
    var _state$labelRef$curre, _state$labelRef$curre2, _state$buttonRef$curr5;

    return (_state$labelRef$curre = (_state$labelRef$curre2 = state.labelRef.current) == null ? void 0 : _state$labelRef$curre2.id) != null ? _state$labelRef$curre : (_state$buttonRef$curr5 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.id;
  }, [state.labelRef.current, state.buttonRef.current]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.listboxState === ListboxStates.Open
    };
  }, [state]);
  var propsWeControl = {
    'aria-activedescendant': state.activeOptionIndex === null ? undefined : (_state$options$state$ = state.options[state.activeOptionIndex]) == null ? void 0 : _state$options$state$.id,
    'aria-labelledby': labelledby,
    'aria-orientation': state.orientation,
    id: id,
    onKeyDown: handleKeyDown,
    role: 'listbox',
    tabIndex: 0,
    ref: optionsRef
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OPTIONS_TAG,
    features: OptionsRenderFeatures,
    visible: visible,
    name: 'Listbox.Options'
  });
}); // ---

var DEFAULT_OPTION_TAG = 'li';

function Option(props) {
  var _props$disabled2 = props.disabled,
      disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
      value = props.value,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["disabled", "value"]);

  var _useListboxContext4 = useListboxContext([Listbox.name, Option.name].join('.')),
      state = _useListboxContext4[0],
      dispatch = _useListboxContext4[1];

  var id = "headlessui-listbox-option-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_10__.useId)();
  var active = state.activeOptionIndex !== null ? state.options[state.activeOptionIndex].id === id : false;
  var selected = state.propsRef.current.value === value;
  var bag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    disabled: disabled,
    value: value
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    bag.current.value = value;
  }, [bag, value]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    var _document$getElementB, _document$getElementB2;

    bag.current.textValue = (_document$getElementB = document.getElementById(id)) == null ? void 0 : (_document$getElementB2 = _document$getElementB.textContent) == null ? void 0 : _document$getElementB2.toLowerCase();
  }, [bag, id]);
  var select = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return state.propsRef.current.onChange(value);
  }, [state.propsRef, value]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    dispatch({
      type: ActionTypes.RegisterOption,
      id: id,
      dataRef: bag
    });
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterOption,
        id: id
      });
    };
  }, [bag, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    var _document$getElementB3;

    if (state.listboxState !== ListboxStates.Open) return;
    if (!selected) return;
    dispatch({
      type: ActionTypes.GoToOption,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
    (_document$getElementB3 = document.getElementById(id)) == null ? void 0 : _document$getElementB3.focus == null ? void 0 : _document$getElementB3.focus();
  }, [state.listboxState]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    if (state.listboxState !== ListboxStates.Open) return;
    if (!active) return;
    var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_16__.disposables)();
    d.nextFrame(function () {
      var _document$getElementB4;

      return (_document$getElementB4 = document.getElementById(id)) == null ? void 0 : _document$getElementB4.scrollIntoView == null ? void 0 : _document$getElementB4.scrollIntoView({
        block: 'nearest'
      });
    });
    return d.dispose;
  }, [id, active, state.listboxState]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (disabled) return event.preventDefault();
    select();
    dispatch({
      type: ActionTypes.CloseListbox
    });
    (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_16__.disposables)().nextFrame(function () {
      var _state$buttonRef$curr6;

      return (_state$buttonRef$curr6 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr6.focus({
        preventScroll: true
      });
    });
  }, [dispatch, state.buttonRef, disabled, select]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return dispatch({
      type: ActionTypes.GoToOption,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
    dispatch({
      type: ActionTypes.GoToOption,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, id, dispatch]);
  var handleMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (active) return;
    dispatch({
      type: ActionTypes.GoToOption,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, active, id, dispatch]);
  var handleLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (!active) return;
    dispatch({
      type: ActionTypes.GoToOption,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
  }, [disabled, active, dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      active: active,
      selected: selected,
      disabled: disabled
    };
  }, [active, selected, disabled]);
  var propsWeControl = {
    id: id,
    role: 'option',
    tabIndex: disabled === true ? undefined : -1,
    'aria-disabled': disabled === true ? true : undefined,
    'aria-selected': selected === true ? true : undefined,
    disabled: undefined,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_8__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: 'Listbox.Option'
  });
} // ---


Listbox.Button = Button;
Listbox.Label = Label;
Listbox.Options = Options;
Listbox.Option = Option;


//# sourceMappingURL=listbox.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/menu/menu.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/menu/menu.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-disposables.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js");
/* harmony import */ var _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.esm.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js");
/* harmony import */ var _hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-tree-walker.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js");


















var _reducers;
var MenuStates;

(function (MenuStates) {
  MenuStates[MenuStates["Open"] = 0] = "Open";
  MenuStates[MenuStates["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["OpenMenu"] = 0] = "OpenMenu";
  ActionTypes[ActionTypes["CloseMenu"] = 1] = "CloseMenu";
  ActionTypes[ActionTypes["GoToItem"] = 2] = "GoToItem";
  ActionTypes[ActionTypes["Search"] = 3] = "Search";
  ActionTypes[ActionTypes["ClearSearch"] = 4] = "ClearSearch";
  ActionTypes[ActionTypes["RegisterItem"] = 5] = "RegisterItem";
  ActionTypes[ActionTypes["UnregisterItem"] = 6] = "UnregisterItem";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.CloseMenu] = function (state) {
  if (state.menuState === MenuStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    activeItemIndex: null,
    menuState: MenuStates.Closed
  });
}, _reducers[ActionTypes.OpenMenu] = function (state) {
  if (state.menuState === MenuStates.Open) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    menuState: MenuStates.Open
  });
}, _reducers[ActionTypes.GoToItem] = function (state, action) {
  var activeItemIndex = (0,_utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(action, {
    resolveItems: function resolveItems() {
      return state.items;
    },
    resolveActiveIndex: function resolveActiveIndex() {
      return state.activeItemIndex;
    },
    resolveId: function resolveId(item) {
      return item.id;
    },
    resolveDisabled: function resolveDisabled(item) {
      return item.dataRef.current.disabled;
    }
  });
  if (state.searchQuery === '' && state.activeItemIndex === activeItemIndex) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: '',
    activeItemIndex: activeItemIndex
  });
}, _reducers[ActionTypes.Search] = function (state, action) {
  var searchQuery = state.searchQuery + action.value.toLowerCase();
  var match = state.items.findIndex(function (item) {
    var _item$dataRef$current;

    return ((_item$dataRef$current = item.dataRef.current.textValue) == null ? void 0 : _item$dataRef$current.startsWith(searchQuery)) && !item.dataRef.current.disabled;
  });
  if (match === -1 || match === state.activeItemIndex) return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: searchQuery
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: searchQuery,
    activeItemIndex: match
  });
}, _reducers[ActionTypes.ClearSearch] = function (state) {
  if (state.searchQuery === '') return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    searchQuery: ''
  });
}, _reducers[ActionTypes.RegisterItem] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    items: [].concat(state.items, [{
      id: action.id,
      dataRef: action.dataRef
    }])
  });
}, _reducers[ActionTypes.UnregisterItem] = function (state, action) {
  var nextItems = state.items.slice();
  var currentActiveItem = state.activeItemIndex !== null ? nextItems[state.activeItemIndex] : null;
  var idx = nextItems.findIndex(function (a) {
    return a.id === action.id;
  });
  if (idx !== -1) nextItems.splice(idx, 1);
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    items: nextItems,
    activeItemIndex: function () {
      if (idx === state.activeItemIndex) return null;
      if (currentActiveItem === null) return null; // If we removed the item before the actual active index, then it would be out of sync. To
      // fix this, we will find the correct (new) index position.

      return nextItems.indexOf(currentActiveItem);
    }()
  });
}, _reducers);
var MenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
MenuContext.displayName = 'MenuContext';

function useMenuContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Menu.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_MENU_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Menu(props) {
  var _match;

  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    menuState: MenuStates.Closed,
    buttonRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    itemsRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),
    items: [],
    searchQuery: '',
    activeItemIndex: null
  });
  var _reducerBag$ = reducerBag[0],
      menuState = _reducerBag$.menuState,
      itemsRef = _reducerBag$.itemsRef,
      buttonRef = _reducerBag$.buttonRef,
      dispatch = reducerBag[1]; // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('mousedown', function (event) {
    var _buttonRef$current, _itemsRef$current;

    var target = event.target;
    if (menuState !== MenuStates.Open) return;
    if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target)) return;
    if ((_itemsRef$current = itemsRef.current) == null ? void 0 : _itemsRef$current.contains(target)) return;
    dispatch({
      type: ActionTypes.CloseMenu
    });

    if (!(0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.isFocusableElement)(target, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusableMode.Loose)) {
      var _buttonRef$current2;

      event.preventDefault();
      (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
  });
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: menuState === MenuStates.Open
    };
  }, [menuState]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(menuState, (_match = {}, _match[MenuStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open, _match[MenuStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Closed, _match))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: props,
    slot: slot,
    defaultTag: DEFAULT_MENU_TAG,
    name: 'Menu'
  })));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Button(props, ref) {
  var _state$itemsRef$curre;

  var _useMenuContext = useMenuContext([Menu.name, Button.name].join('.')),
      state = _useMenuContext[0],
      dispatch = _useMenuContext[1];

  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(state.buttonRef, ref);
  var id = "headlessui-menu-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var d = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)();
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function () {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function () {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
          });
        });
        break;
    }
  }, [dispatch, d]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    if (props.disabled) return;

    if (state.menuState === MenuStates.Open) {
      dispatch({
        type: ActionTypes.CloseMenu
      });
      d.nextFrame(function () {
        var _state$buttonRef$curr;

        return (_state$buttonRef$curr = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
          preventScroll: true
        });
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: ActionTypes.OpenMenu
      });
    }
  }, [dispatch, d, state, props.disabled]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.menuState === MenuStates.Open
    };
  }, [state]);
  var passthroughProps = props;
  var propsWeControl = {
    ref: buttonRef,
    id: id,
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(props, state.buttonRef),
    'aria-haspopup': true,
    'aria-controls': (_state$itemsRef$curre = state.itemsRef.current) == null ? void 0 : _state$itemsRef$curre.id,
    'aria-expanded': props.disabled ? undefined : state.menuState === MenuStates.Open,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Menu.Button'
  });
}); // ---

var DEFAULT_ITEMS_TAG = 'div';
var ItemsRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.Static;
var Items = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Items(props, ref) {
  var _state$items$state$ac, _state$buttonRef$curr4;

  var _useMenuContext2 = useMenuContext([Menu.name, Items.name].join('.')),
      state = _useMenuContext2[0],
      dispatch = _useMenuContext2[1];

  var itemsRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(state.itemsRef, ref);
  var id = "headlessui-menu-items-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var searchDisposables = (0,_hooks_use_disposables_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)();
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open;
    }

    return state.menuState === MenuStates.Open;
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var container = state.itemsRef.current;
    if (!container) return;
    if (state.menuState !== MenuStates.Open) return;
    if (container === document.activeElement) return;
    container.focus({
      preventScroll: true
    });
  }, [state.menuState, state.itemsRef]);
  (0,_hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_14__.useTreeWalker)({
    container: state.itemsRef.current,
    enabled: state.menuState === MenuStates.Open,
    accept: function accept(node) {
      if (node.getAttribute('role') === 'menuitem') return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute('role')) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk: function walk(node) {
      node.setAttribute('role', 'none');
    }
  });
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    searchDisposables.dispose();

    switch (event.key) {
      // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
      // @ts-expect-error Fallthrough is expected here
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        if (state.searchQuery !== '') {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
        }

      // When in type ahead mode, fallthrough

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });

        if (state.activeItemIndex !== null) {
          var _document$getElementB;

          var _id = state.items[state.activeItemIndex].id;
          (_document$getElementB = document.getElementById(_id)) == null ? void 0 : _document$getElementB.click();
        }

        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr2;

          return (_state$buttonRef$curr2 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
            preventScroll: true
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Home:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.End:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last
        });

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });
        (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
          var _state$buttonRef$curr3;

          return (_state$buttonRef$curr3 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
            preventScroll: true
          });
        });
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Tab:
        event.preventDefault();
        event.stopPropagation();
        break;

      default:
        if (event.key.length === 1) {
          dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
          searchDisposables.setTimeout(function () {
            return dispatch({
              type: ActionTypes.ClearSearch
            });
          }, 350);
        }

        break;
    }
  }, [dispatch, searchDisposables, state]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }, []);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.menuState === MenuStates.Open
    };
  }, [state]);
  var propsWeControl = {
    'aria-activedescendant': state.activeItemIndex === null ? undefined : (_state$items$state$ac = state.items[state.activeItemIndex]) == null ? void 0 : _state$items$state$ac.id,
    'aria-labelledby': (_state$buttonRef$curr4 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.id,
    id: id,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: 'menu',
    tabIndex: 0,
    ref: itemsRef
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible: visible,
    name: 'Menu.Items'
  });
}); // ---

var DEFAULT_ITEM_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function Item(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      onClick = props.onClick,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["disabled", "onClick"]);

  var _useMenuContext3 = useMenuContext([Menu.name, Item.name].join('.')),
      state = _useMenuContext3[0],
      dispatch = _useMenuContext3[1];

  var id = "headlessui-menu-item-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_9__.useId)();
  var active = state.activeItemIndex !== null ? state.items[state.activeItemIndex].id === id : false;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    if (state.menuState !== MenuStates.Open) return;
    if (!active) return;
    var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)();
    d.nextFrame(function () {
      var _document$getElementB2;

      return (_document$getElementB2 = document.getElementById(id)) == null ? void 0 : _document$getElementB2.scrollIntoView == null ? void 0 : _document$getElementB2.scrollIntoView({
        block: 'nearest'
      });
    });
    return d.dispose;
  }, [id, active, state.menuState]);
  var bag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    disabled: disabled
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    var _document$getElementB3, _document$getElementB4;

    bag.current.textValue = (_document$getElementB3 = document.getElementById(id)) == null ? void 0 : (_document$getElementB4 = _document$getElementB3.textContent) == null ? void 0 : _document$getElementB4.toLowerCase();
  }, [bag, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_16__.useIsoMorphicEffect)(function () {
    dispatch({
      type: ActionTypes.RegisterItem,
      id: id,
      dataRef: bag
    });
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterItem,
        id: id
      });
    };
  }, [bag, id]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (disabled) return event.preventDefault();
    dispatch({
      type: ActionTypes.CloseMenu
    });
    (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_15__.disposables)().nextFrame(function () {
      var _state$buttonRef$curr5;

      return (_state$buttonRef$curr5 = state.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.focus({
        preventScroll: true
      });
    });
    if (onClick) return onClick(event);
  }, [dispatch, state.buttonRef, disabled, onClick]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, id, dispatch]);
  var handleMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (active) return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,
      id: id
    });
  }, [disabled, active, id, dispatch]);
  var handleLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (disabled) return;
    if (!active) return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: _utils_calculate_active_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing
    });
  }, [disabled, active, dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      active: active,
      disabled: disabled
    };
  }, [active, disabled]);
  var propsWeControl = {
    id: id,
    role: 'menuitem',
    tabIndex: disabled === true ? undefined : -1,
    'aria-disabled': disabled === true ? true : undefined,
    disabled: undefined,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: 'Menu.Item'
  });
} // ---


Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;


//# sourceMappingURL=menu.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/popover/popover.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/popover/popover.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popover": function() { return /* binding */ Popover; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");













var _reducers;
var PopoverStates;

(function (PopoverStates) {
  PopoverStates[PopoverStates["Open"] = 0] = "Open";
  PopoverStates[PopoverStates["Closed"] = 1] = "Closed";
})(PopoverStates || (PopoverStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["TogglePopover"] = 0] = "TogglePopover";
  ActionTypes[ActionTypes["ClosePopover"] = 1] = "ClosePopover";
  ActionTypes[ActionTypes["SetButton"] = 2] = "SetButton";
  ActionTypes[ActionTypes["SetButtonId"] = 3] = "SetButtonId";
  ActionTypes[ActionTypes["SetPanel"] = 4] = "SetPanel";
  ActionTypes[ActionTypes["SetPanelId"] = 5] = "SetPanelId";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.TogglePopover] = function (state) {
  var _match;

  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    popoverState: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(state.popoverState, (_match = {}, _match[PopoverStates.Open] = PopoverStates.Closed, _match[PopoverStates.Closed] = PopoverStates.Open, _match))
  });
}, _reducers[ActionTypes.ClosePopover] = function (state) {
  if (state.popoverState === PopoverStates.Closed) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    popoverState: PopoverStates.Closed
  });
}, _reducers[ActionTypes.SetButton] = function (state, action) {
  if (state.button === action.button) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    button: action.button
  });
}, _reducers[ActionTypes.SetButtonId] = function (state, action) {
  if (state.buttonId === action.buttonId) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    buttonId: action.buttonId
  });
}, _reducers[ActionTypes.SetPanel] = function (state, action) {
  if (state.panel === action.panel) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    panel: action.panel
  });
}, _reducers[ActionTypes.SetPanelId] = function (state, action) {
  if (state.panelId === action.panelId) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    panelId: action.panelId
  });
}, _reducers);
var PopoverContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
PopoverContext.displayName = 'PopoverContext';

function usePopoverContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }

  return context;
}

var PopoverAPIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
PopoverAPIContext.displayName = 'PopoverAPIContext';

function usePopoverAPIContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverAPIContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }

  return context;
}

var PopoverGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
PopoverGroupContext.displayName = 'PopoverGroupContext';

function usePopoverGroupContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverGroupContext);
}

var PopoverPanelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
PopoverPanelContext.displayName = 'PopoverPanelContext';

function usePopoverPanelContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverPanelContext);
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_POPOVER_TAG = 'div';
function Popover(props) {
  var _match2;

  var buttonId = "headlessui-popover-button-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var panelId = "headlessui-popover-panel-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var reducerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    popoverState: PopoverStates.Closed,
    button: null,
    buttonId: buttonId,
    panel: null,
    panelId: panelId
  });
  var _reducerBag$ = reducerBag[0],
      popoverState = _reducerBag$.popoverState,
      button = _reducerBag$.button,
      panel = _reducerBag$.panel,
      dispatch = reducerBag[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return dispatch({
      type: ActionTypes.SetButtonId,
      buttonId: buttonId
    });
  }, [buttonId, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return dispatch({
      type: ActionTypes.SetPanelId,
      panelId: panelId
    });
  }, [panelId, dispatch]);
  var registerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      buttonId: buttonId,
      panelId: panelId,
      close: function close() {
        return dispatch({
          type: ActionTypes.ClosePopover
        });
      }
    };
  }, [buttonId, panelId, dispatch]);
  var groupContext = usePopoverGroupContext();
  var registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
  var isFocusWithinPopoverGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _groupContext$isFocus;

    return (_groupContext$isFocus = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _groupContext$isFocus : (button == null ? void 0 : button.contains(document.activeElement)) || (panel == null ? void 0 : panel.contains(document.activeElement));
  }, [groupContext, button, panel]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return registerPopover == null ? void 0 : registerPopover(registerBag);
  }, [registerPopover, registerBag]); // Handle focus out

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('focus', function () {
    if (popoverState !== PopoverStates.Open) return;
    if (isFocusWithinPopoverGroup()) return;
    if (!button) return;
    if (!panel) return;
    dispatch({
      type: ActionTypes.ClosePopover
    });
  }, true); // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('mousedown', function (event) {
    var target = event.target;
    if (popoverState !== PopoverStates.Open) return;
    if (button == null ? void 0 : button.contains(target)) return;
    if (panel == null ? void 0 : panel.contains(target)) return;
    dispatch({
      type: ActionTypes.ClosePopover
    });

    if (!(0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.isFocusableElement)(target, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusableMode.Loose)) {
      event.preventDefault();
      button == null ? void 0 : button.focus();
    }
  });
  var close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (focusableElement) {
    dispatch({
      type: ActionTypes.ClosePopover
    });

    var restoreElement = function () {
      if (!focusableElement) return button;
      if (focusableElement instanceof HTMLElement) return focusableElement;
      if (focusableElement.current instanceof HTMLElement) return focusableElement.current;
      return button;
    }();

    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, button]);
  var api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      close: close
    };
  }, [close]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: popoverState === PopoverStates.Open,
      close: close
    };
  }, [popoverState, close]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PopoverContext.Provider, {
    value: reducerBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PopoverAPIContext.Provider, {
    value: api
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(popoverState, (_match2 = {}, _match2[PopoverStates.Open] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open, _match2[PopoverStates.Closed] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Closed, _match2))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: props,
    slot: slot,
    defaultTag: DEFAULT_POPOVER_TAG,
    name: 'Popover'
  }))));
} // ---

var DEFAULT_BUTTON_TAG = 'button';
var Button = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Button(props, ref) {
  var _usePopoverContext = usePopoverContext([Popover.name, Button.name].join('.')),
      state = _usePopoverContext[0],
      dispatch = _usePopoverContext[1];

  var internalButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var groupContext = usePopoverGroupContext();
  var closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
  var panelContext = usePopoverPanelContext();
  var isWithinPanel = panelContext === null ? false : panelContext === state.panelId;
  var buttonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(internalButtonRef, ref, isWithinPanel ? null : function (button) {
    return dispatch({
      type: ActionTypes.SetButton,
      button: button
    });
  });
  var withinPanelButtonRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(internalButtonRef, ref); // TODO: Revisit when handling Tab/Shift+Tab when using Portal's

  var activeElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var previousActiveElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window === 'undefined' ? null : document.activeElement);
  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('focus', function () {
    previousActiveElementRef.current = activeElementRef.current;
    activeElementRef.current = document.activeElement;
  }, true);
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _state$button;

    if (isWithinPanel) {
      if (state.popoverState === PopoverStates.Closed) return;

      switch (event.key) {
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space:
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Enter:
          event.preventDefault(); // Prevent triggering a *click* event

          event.stopPropagation();
          dispatch({
            type: ActionTypes.ClosePopover
          });
          (_state$button = state.button) == null ? void 0 : _state$button.focus(); // Re-focus the original opening Button

          break;
      }
    } else {
      switch (event.key) {
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space:
        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Enter:
          event.preventDefault(); // Prevent triggering a *click* event

          event.stopPropagation();
          if (state.popoverState === PopoverStates.Closed) closeOthers == null ? void 0 : closeOthers(state.buttonId);
          dispatch({
            type: ActionTypes.TogglePopover
          });
          break;

        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Escape:
          if (state.popoverState !== PopoverStates.Open) return closeOthers == null ? void 0 : closeOthers(state.buttonId);
          if (!internalButtonRef.current) return;
          if (!internalButtonRef.current.contains(document.activeElement)) return;
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ClosePopover
          });
          break;

        case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Tab:
          if (state.popoverState !== PopoverStates.Open) return;
          if (!state.panel) return;
          if (!state.button) return; // TODO: Revisit when handling Tab/Shift+Tab when using Portal's

          if (event.shiftKey) {
            var _state$button2;

            // Check if the last focused element exists, and check that it is not inside button or panel itself
            if (!previousActiveElementRef.current) return;
            if ((_state$button2 = state.button) == null ? void 0 : _state$button2.contains(previousActiveElementRef.current)) return;
            if (state.panel.contains(previousActiveElementRef.current)) return; // Check if the last focused element is *after* the button in the DOM

            var focusableElements = (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.getFocusableElements)();
            var previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
            var buttonIdx = focusableElements.indexOf(state.button);
            if (buttonIdx > previousIdx) return;
            event.preventDefault();
            event.stopPropagation();
            (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(state.panel, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last);
          } else {
            event.preventDefault();
            event.stopPropagation();
            (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(state.panel, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First);
          }

          break;
      }
    }
  }, [dispatch, state.popoverState, state.buttonId, state.button, state.panel, internalButtonRef, closeOthers, isWithinPanel]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _state$button3;

    if (isWithinPanel) return;

    if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space) {
      // Required for firefox, event.preventDefault() in handleKeyDown for
      // the Space key doesn't cancel the handleKeyUp, which in turn
      // triggers a *click*.
      event.preventDefault();
    }

    if (state.popoverState !== PopoverStates.Open) return;
    if (!state.panel) return;
    if (!state.button) return; // TODO: Revisit when handling Tab/Shift+Tab when using Portal's

    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Tab:
        // Check if the last focused element exists, and check that it is not inside button or panel itself
        if (!previousActiveElementRef.current) return;
        if ((_state$button3 = state.button) == null ? void 0 : _state$button3.contains(previousActiveElementRef.current)) return;
        if (state.panel.contains(previousActiveElementRef.current)) return; // Check if the last focused element is *after* the button in the DOM

        var focusableElements = (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.getFocusableElements)();
        var previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
        var buttonIdx = focusableElements.indexOf(state.button);
        if (buttonIdx > previousIdx) return;
        event.preventDefault();
        event.stopPropagation();
        (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(state.panel, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Last);
        break;
    }
  }, [state.popoverState, state.panel, state.button, isWithinPanel]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_10__.isDisabledReactIssue7711)(event.currentTarget)) return;
    if (props.disabled) return;

    if (isWithinPanel) {
      var _state$button4;

      dispatch({
        type: ActionTypes.ClosePopover
      });
      (_state$button4 = state.button) == null ? void 0 : _state$button4.focus(); // Re-focus the original opening Button
    } else {
      var _state$button5;

      if (state.popoverState === PopoverStates.Closed) closeOthers == null ? void 0 : closeOthers(state.buttonId);
      (_state$button5 = state.button) == null ? void 0 : _state$button5.focus();
      dispatch({
        type: ActionTypes.TogglePopover
      });
    }
  }, [dispatch, state.button, state.popoverState, state.buttonId, props.disabled, closeOthers, isWithinPanel]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.popoverState === PopoverStates.Open
    };
  }, [state]);
  var type = (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_11__.useResolveButtonType)(props, internalButtonRef);
  var passthroughProps = props;
  var propsWeControl = isWithinPanel ? {
    ref: withinPanelButtonRef,
    type: type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state.buttonId,
    type: type,
    'aria-expanded': props.disabled ? undefined : state.popoverState === PopoverStates.Open,
    'aria-controls': state.panel ? state.panelId : undefined,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: 'Popover.Button'
  });
}); // ---

var DEFAULT_OVERLAY_TAG = 'div';
var OverlayRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.Static;
var Overlay = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Overlay(props, ref) {
  var _usePopoverContext2 = usePopoverContext([Popover.name, Overlay.name].join('.')),
      popoverState = _usePopoverContext2[0].popoverState,
      dispatch = _usePopoverContext2[1];

  var overlayRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(ref);
  var id = "headlessui-popover-overlay-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open;
    }

    return popoverState === PopoverStates.Open;
  }();

  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_10__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    dispatch({
      type: ActionTypes.ClosePopover
    });
  }, [dispatch]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: popoverState === PopoverStates.Open
    };
  }, [popoverState]);
  var propsWeControl = {
    ref: overlayRef,
    id: id,
    'aria-hidden': true,
    onClick: handleClick
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    features: OverlayRenderFeatures,
    visible: visible,
    name: 'Popover.Overlay'
  });
}); // ---

var DEFAULT_PANEL_TAG = 'div';
var PanelRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.Static;
var Panel = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(function Panel(props, ref) {
  var _props$focus = props.focus,
      focus = _props$focus === void 0 ? false : _props$focus,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["focus"]);

  var _usePopoverContext3 = usePopoverContext([Popover.name, Panel.name].join('.')),
      state = _usePopoverContext3[0],
      dispatch = _usePopoverContext3[1];

  var _usePopoverAPIContext = usePopoverAPIContext([Popover.name, Panel.name].join('.')),
      close = _usePopoverAPIContext.close;

  var internalPanelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var panelRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_8__.useSyncRefs)(internalPanelRef, ref, function (panel) {
    dispatch({
      type: ActionTypes.SetPanel,
      panel: panel
    });
  });
  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.useOpenClosed)();

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_6__.State.Open;
    }

    return state.popoverState === PopoverStates.Open;
  }();

  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _state$button6;

    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Escape:
        if (state.popoverState !== PopoverStates.Open) return;
        if (!internalPanelRef.current) return;
        if (!internalPanelRef.current.contains(document.activeElement)) return;
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.ClosePopover
        });
        (_state$button6 = state.button) == null ? void 0 : _state$button6.focus();
        break;
    }
  }, [state, internalPanelRef, dispatch]); // Unlink on "unmount" myself

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return dispatch({
        type: ActionTypes.SetPanel,
        panel: null
      });
    };
  }, [dispatch]); // Unlink on "unmount" children

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _props$unmount;

    if (props["static"]) return;

    if (state.popoverState === PopoverStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
      dispatch({
        type: ActionTypes.SetPanel,
        panel: null
      });
    }
  }, [state.popoverState, props.unmount, props["static"], dispatch]); // Move focus within panel

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!focus) return;
    if (state.popoverState !== PopoverStates.Open) return;
    if (!internalPanelRef.current) return;
    var activeElement = document.activeElement;
    if (internalPanelRef.current.contains(activeElement)) return; // Already focused within Dialog

    (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(internalPanelRef.current, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First);
  }, [focus, internalPanelRef, state.popoverState]); // Handle Tab / Shift+Tab focus positioning

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('keydown', function (event) {
    if (state.popoverState !== PopoverStates.Open) return;
    if (!internalPanelRef.current) return;
    if (event.key !== _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Tab) return;
    if (!document.activeElement) return;
    if (!internalPanelRef.current) return;
    if (!internalPanelRef.current.contains(document.activeElement)) return; // We will take-over the default tab behaviour so that we have a bit
    // control over what is focused next. It will behave exactly the same,
    // but it will also "fix" some issues based on whether you are using a
    // Portal or not.

    event.preventDefault();
    var result = (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(internalPanelRef.current, event.shiftKey ? _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Previous : _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.Next);

    if (result === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Underflow) {
      var _state$button7;

      return (_state$button7 = state.button) == null ? void 0 : _state$button7.focus();
    } else if (result === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Overflow) {
      if (!state.button) return;
      var elements = (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.getFocusableElements)();
      var buttonIdx = elements.indexOf(state.button);
      var nextElements = elements.splice(buttonIdx + 1) // Elements after button
      .filter(function (element) {
        var _internalPanelRef$cur;

        return !((_internalPanelRef$cur = internalPanelRef.current) == null ? void 0 : _internalPanelRef$cur.contains(element));
      }); // Ignore items in panel
      // Try to focus the next element, however it could fail if we are in a
      // Portal that happens to be the very last one in the DOM. In that
      // case we would Error (because nothing after the button is
      // focusable). Therefore we will try and focus the very first item in
      // the document.body.

      if ((0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(nextElements, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First) === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.FocusResult.Error) {
        (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.focusIn)(document.body, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_5__.Focus.First);
      }
    }
  }); // Handle focus out when we are in special "focus" mode

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)('focus', function () {
    var _internalPanelRef$cur2;

    if (!focus) return;
    if (state.popoverState !== PopoverStates.Open) return;
    if (!internalPanelRef.current) return;
    if ((_internalPanelRef$cur2 = internalPanelRef.current) == null ? void 0 : _internalPanelRef$cur2.contains(document.activeElement)) return;
    dispatch({
      type: ActionTypes.ClosePopover
    });
  }, true);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: state.popoverState === PopoverStates.Open,
      close: close
    };
  }, [state, close]);
  var propsWeControl = {
    ref: panelRef,
    id: state.panelId,
    onKeyDown: handleKeyDown
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PopoverPanelContext.Provider, {
    value: state.panelId
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible: visible,
    name: 'Popover.Panel'
  }));
}); // ---

var DEFAULT_GROUP_TAG = 'div';

function Group(props) {
  var groupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      popovers = _useState[0],
      setPopovers = _useState[1];

  var unregisterPopover = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (registerbag) {
    setPopovers(function (existing) {
      var idx = existing.indexOf(registerbag);

      if (idx !== -1) {
        var clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }

      return existing;
    });
  }, [setPopovers]);
  var registerPopover = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (registerbag) {
    setPopovers(function (existing) {
      return [].concat(existing, [registerbag]);
    });
    return function () {
      return unregisterPopover(registerbag);
    };
  }, [setPopovers, unregisterPopover]);
  var isFocusWithinPopoverGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _groupRef$current;

    var element = document.activeElement;
    if ((_groupRef$current = groupRef.current) == null ? void 0 : _groupRef$current.contains(element)) return true; // Check if the focus is in one of the button or panel elements. This is important in case you are rendering inside a Portal.

    return popovers.some(function (bag) {
      var _document$getElementB, _document$getElementB2;

      return ((_document$getElementB = document.getElementById(bag.buttonId)) == null ? void 0 : _document$getElementB.contains(element)) || ((_document$getElementB2 = document.getElementById(bag.panelId)) == null ? void 0 : _document$getElementB2.contains(element));
    });
  }, [groupRef, popovers]);
  var closeOthers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (buttonId) {
    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(popovers), _step; !(_step = _iterator()).done;) {
      var popover = _step.value;
      if (popover.buttonId !== buttonId) popover.close();
    }
  }, [popovers]);
  var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      registerPopover: registerPopover,
      unregisterPopover: unregisterPopover,
      isFocusWithinPopoverGroup: isFocusWithinPopoverGroup,
      closeOthers: closeOthers
    };
  }, [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {};
  }, []);
  var propsWeControl = {
    ref: groupRef
  };
  var passthroughProps = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PopoverGroupContext.Provider, {
    value: contextBag
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_7__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Popover.Group'
  }));
} // ---


Popover.Button = Button;
Popover.Overlay = Overlay;
Popover.Panel = Panel;
Popover.Group = Group;


//# sourceMappingURL=popover.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": function() { return /* binding */ Portal; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.esm.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js");








function usePortalTarget() {
  var forceInRoot = (0,_internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)();
  var groupTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalGroupContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    // Group context is used, but still null
    if (!forceInRoot && groupTarget !== null) return null; // No group context is used, let's create a default portal root

    if (typeof window === 'undefined') return null;
    var existingRoot = document.getElementById('headlessui-portal-root');
    if (existingRoot) return existingRoot;
    var root = document.createElement('div');
    root.setAttribute('id', 'headlessui-portal-root');
    return document.body.appendChild(root);
  }),
      target = _useState[0],
      setTarget = _useState[1]; // Ensure the portal root is always in the DOM


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (target === null) return;

    if (!document.body.contains(target)) {
      document.body.appendChild(target);
    }
  }, [target]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (forceInRoot) return;
    if (groupTarget === null) return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
} // ---


var DEFAULT_PORTAL_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Portal(props) {
  var passthroughProps = props;
  var target = usePortalTarget();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return typeof window === 'undefined' ? null : document.createElement('div');
  }),
      element = _useState2[0];

  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_3__.useServerHandoffComplete)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    if (!target) return;
    if (!element) return;
    target.appendChild(element);
    return function () {
      if (!target) return;
      if (!element) return;
      target.removeChild(element);

      if (target.childNodes.length <= 0) {
        var _target$parentElement;

        (_target$parentElement = target.parentElement) == null ? void 0 : _target$parentElement.removeChild(target);
      }
    };
  }, [target, element]);
  if (!ready) return null;
  return !target || !element ? null : (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: passthroughProps,
    defaultTag: DEFAULT_PORTAL_TAG,
    name: 'Portal'
  }), element);
} // ---

var DEFAULT_GROUP_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
var PortalGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function Group(props) {
  var target = props.target,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_6__.objectWithoutPropertiesLoose)(props, ["target"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PortalGroupContext.Provider, {
    value: target
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: passthroughProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Popover.Group'
  }));
} // ---


Portal.Group = Group;


//# sourceMappingURL=portal.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/radio-group/radio-group.esm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroup": function() { return /* binding */ RadioGroup; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _description_description_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../description/description.esm.js */ "./node_modules/@headlessui/react/dist/components/description/description.esm.js");
/* harmony import */ var _hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-tree-walker.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js");
/* harmony import */ var _hooks_use_flags_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-flags.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.esm.js");
/* harmony import */ var _label_label_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label/label.esm.js */ "./node_modules/@headlessui/react/dist/components/label/label.esm.js");













var _reducers;
var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["RegisterOption"] = 0] = "RegisterOption";
  ActionTypes[ActionTypes["UnregisterOption"] = 1] = "UnregisterOption";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.RegisterOption] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    options: [].concat(state.options, [{
      id: action.id,
      element: action.element,
      propsRef: action.propsRef
    }])
  });
}, _reducers[ActionTypes.UnregisterOption] = function (state, action) {
  var options = state.options.slice();
  var idx = state.options.findIndex(function (radio) {
    return radio.id === action.id;
  });
  if (idx === -1) return state;
  options.splice(idx, 1);
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    options: options
  });
}, _reducers);
var RadioGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
RadioGroupContext.displayName = 'RadioGroupContext';

function useRadioGroupContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RadioGroupContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + RadioGroup.name + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useRadioGroupContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_RADIO_GROUP_TAG = 'div';
function RadioGroup(props) {
  var value = props.value,
      onChange = props.onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["value", "onChange", "disabled"]);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    options: []
  }),
      options = _useReducer[0].options,
      dispatch = _useReducer[1];

  var _useLabels = (0,_label_label_esm_js__WEBPACK_IMPORTED_MODULE_3__.useLabels)(),
      labelledby = _useLabels[0],
      LabelProvider = _useLabels[1];

  var _useDescriptions = (0,_description_description_esm_js__WEBPACK_IMPORTED_MODULE_4__.useDescriptions)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var id = "headlessui-radiogroup-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__.useId)();
  var radioGroupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var firstOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return options.find(function (option) {
      if (option.propsRef.current.disabled) return false;
      return true;
    });
  }, [options]);
  var containsCheckedOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return options.some(function (option) {
      return option.propsRef.current.value === value;
    });
  }, [options, value]);
  var triggerChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextValue) {
    var _options$find;

    if (disabled) return false;
    if (nextValue === value) return false;
    var nextOption = (_options$find = options.find(function (option) {
      return option.propsRef.current.value === nextValue;
    })) == null ? void 0 : _options$find.propsRef.current;
    if (nextOption == null ? void 0 : nextOption.disabled) return false;
    onChange(nextValue);
    return true;
  }, [onChange, value, disabled, options]);
  (0,_hooks_use_tree_walker_esm_js__WEBPACK_IMPORTED_MODULE_6__.useTreeWalker)({
    container: radioGroupRef.current,
    accept: function accept(node) {
      if (node.getAttribute('role') === 'radio') return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute('role')) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk: function walk(node) {
      node.setAttribute('role', 'none');
    }
  });
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var container = radioGroupRef.current;
    if (!container) return;
    var all = options.filter(function (option) {
      return option.propsRef.current.disabled === false;
    }).map(function (radio) {
      return radio.element.current;
    });

    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowLeft:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowUp:
        {
          event.preventDefault();
          event.stopPropagation();
          var result = (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(all, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Previous | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.WrapAround);

          if (result === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.FocusResult.Success) {
            var activeOption = options.find(function (option) {
              return option.element.current === document.activeElement;
            });
            if (activeOption) triggerChange(activeOption.propsRef.current.value);
          }
        }
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowRight:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowDown:
        {
          event.preventDefault();
          event.stopPropagation();

          var _result = (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(all, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Next | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.WrapAround);

          if (_result === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.FocusResult.Success) {
            var _activeOption = options.find(function (option) {
              return option.element.current === document.activeElement;
            });

            if (_activeOption) triggerChange(_activeOption.propsRef.current.value);
          }
        }
        break;

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space:
        {
          event.preventDefault();
          event.stopPropagation();

          var _activeOption2 = options.find(function (option) {
            return option.element.current === document.activeElement;
          });

          if (_activeOption2) triggerChange(_activeOption2.propsRef.current.value);
        }
        break;
    }
  }, [radioGroupRef, options, triggerChange]);
  var registerOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (option) {
    dispatch((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({
      type: ActionTypes.RegisterOption
    }, option));
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterOption,
        id: option.id
      });
    };
  }, [dispatch]);
  var api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      registerOption: registerOption,
      firstOption: firstOption,
      containsCheckedOption: containsCheckedOption,
      change: triggerChange,
      disabled: disabled,
      value: value
    };
  }, [registerOption, firstOption, containsCheckedOption, triggerChange, disabled, value]);
  var propsWeControl = {
    ref: radioGroupRef,
    id: id,
    role: 'radiogroup',
    'aria-labelledby': labelledby,
    'aria-describedby': describedby,
    onKeyDown: handleKeyDown
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RadioGroupContext.Provider, {
    value: api
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_9__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps, propsWeControl),
    defaultTag: DEFAULT_RADIO_GROUP_TAG,
    name: 'RadioGroup'
  }))));
} // ---

var OptionState;

(function (OptionState) {
  OptionState[OptionState["Empty"] = 1] = "Empty";
  OptionState[OptionState["Active"] = 2] = "Active";
})(OptionState || (OptionState = {}));

var DEFAULT_OPTION_TAG = 'div';

function Option(props) {
  var optionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var id = "headlessui-radiogroup-option-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__.useId)();

  var _useLabels2 = (0,_label_label_esm_js__WEBPACK_IMPORTED_MODULE_3__.useLabels)(),
      labelledby = _useLabels2[0],
      LabelProvider = _useLabels2[1];

  var _useDescriptions2 = (0,_description_description_esm_js__WEBPACK_IMPORTED_MODULE_4__.useDescriptions)(),
      describedby = _useDescriptions2[0],
      DescriptionProvider = _useDescriptions2[1];

  var _useFlags = (0,_hooks_use_flags_esm_js__WEBPACK_IMPORTED_MODULE_10__.useFlags)(OptionState.Empty),
      addFlag = _useFlags.addFlag,
      removeFlag = _useFlags.removeFlag,
      hasFlag = _useFlags.hasFlag;

  var value = props.value,
      _props$disabled2 = props.disabled,
      disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["value", "disabled"]);

  var propsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    value: value,
    disabled: disabled
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_11__.useIsoMorphicEffect)(function () {
    propsRef.current.value = value;
  }, [value, propsRef]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_11__.useIsoMorphicEffect)(function () {
    propsRef.current.disabled = disabled;
  }, [disabled, propsRef]);

  var _useRadioGroupContext = useRadioGroupContext([RadioGroup.name, Option.name].join('.')),
      registerOption = _useRadioGroupContext.registerOption,
      radioGroupDisabled = _useRadioGroupContext.disabled,
      change = _useRadioGroupContext.change,
      firstOption = _useRadioGroupContext.firstOption,
      containsCheckedOption = _useRadioGroupContext.containsCheckedOption,
      radioGroupValue = _useRadioGroupContext.value;

  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_11__.useIsoMorphicEffect)(function () {
    return registerOption({
      id: id,
      element: optionRef,
      propsRef: propsRef
    });
  }, [id, registerOption, optionRef, props]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _optionRef$current;

    if (!change(value)) return;
    addFlag(OptionState.Active);
    (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.focus();
  }, [addFlag, change, value]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return addFlag(OptionState.Active);
  }, [addFlag]);
  var handleBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return removeFlag(OptionState.Active);
  }, [removeFlag]);
  var isFirstOption = (firstOption == null ? void 0 : firstOption.id) === id;
  var isDisabled = radioGroupDisabled || disabled;
  var checked = radioGroupValue === value;
  var propsWeControl = {
    ref: optionRef,
    id: id,
    role: 'radio',
    'aria-checked': checked ? 'true' : 'false',
    'aria-labelledby': labelledby,
    'aria-describedby': describedby,
    'aria-disabled': isDisabled ? true : undefined,
    tabIndex: function () {
      if (isDisabled) return -1;
      if (checked) return 0;
      if (!containsCheckedOption && isFirstOption) return 0;
      return -1;
    }(),
    onClick: isDisabled ? undefined : handleClick,
    onFocus: isDisabled ? undefined : handleFocus,
    onBlur: isDisabled ? undefined : handleBlur
  };
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      checked: checked,
      disabled: isDisabled,
      active: hasFlag(OptionState.Active)
    };
  }, [checked, isDisabled, hasFlag]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionProvider, {
    name: "RadioGroup.Description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelProvider, {
    name: "RadioGroup.Label"
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_9__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OPTION_TAG,
    name: 'RadioGroup.Option'
  })));
} // ---


RadioGroup.Option = Option;
RadioGroup.Label = _label_label_esm_js__WEBPACK_IMPORTED_MODULE_3__.Label;
RadioGroup.Description = _description_description_esm_js__WEBPACK_IMPORTED_MODULE_4__.Description;


//# sourceMappingURL=radio-group.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/switch/switch.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/switch/switch.esm.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Switch": function() { return /* binding */ Switch; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _description_description_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../description/description.esm.js */ "./node_modules/@headlessui/react/dist/components/description/description.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");
/* harmony import */ var _label_label_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label/label.esm.js */ "./node_modules/@headlessui/react/dist/components/label/label.esm.js");











var GroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
GroupContext.displayName = 'GroupContext'; // ---

var DEFAULT_GROUP_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function Group(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      switchElement = _useState[0],
      setSwitchElement = _useState[1];

  var _useLabels = (0,_label_label_esm_js__WEBPACK_IMPORTED_MODULE_1__.useLabels)(),
      labelledby = _useLabels[0],
      LabelProvider = _useLabels[1];

  var _useDescriptions = (0,_description_description_esm_js__WEBPACK_IMPORTED_MODULE_2__.useDescriptions)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      "switch": switchElement,
      setSwitch: setSwitchElement,
      labelledby: labelledby,
      describedby: describedby
    };
  }, [switchElement, setSwitchElement, labelledby, describedby]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionProvider, {
    name: "Switch.Description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelProvider, {
    name: "Switch.Label",
    props: {
      onClick: function onClick() {
        if (!switchElement) return;
        switchElement.click();
        switchElement.focus({
          preventScroll: true
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GroupContext.Provider, {
    value: context
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: props,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Switch.Group'
  }))));
} // ---


var DEFAULT_SWITCH_TAG = 'button';
function Switch(props) {
  var checked = props.checked,
      onChange = props.onChange,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["checked", "onChange"]);

  var id = "headlessui-switch-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__.useId)();
  var groupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GroupContext);
  var internalSwitchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var switchRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(internalSwitchRef, groupContext === null ? null : groupContext.setSwitch);
  var toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return onChange(!checked);
  }, [onChange, checked]);
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_7__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    event.preventDefault();
    toggle();
  }, [toggle]);
  var handleKeyUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (event.key !== _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Tab) event.preventDefault();
    if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space) toggle();
  }, [toggle]); // This is needed so that we can "cancel" the click event when we use the `Enter` key on a button.

  var handleKeyPress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    return event.preventDefault();
  }, []);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      checked: checked
    };
  }, [checked]);
  var propsWeControl = {
    id: id,
    ref: switchRef,
    role: 'switch',
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(props, internalSwitchRef),
    tabIndex: 0,
    'aria-checked': checked,
    'aria-labelledby': groupContext == null ? void 0 : groupContext.labelledby,
    'aria-describedby': groupContext == null ? void 0 : groupContext.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.extends)({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_SWITCH_TAG,
    name: 'Switch'
  });
} // ---

Switch.Group = Group;
Switch.Label = _label_label_esm_js__WEBPACK_IMPORTED_MODULE_1__.Label;
Switch.Description = _description_description_esm_js__WEBPACK_IMPORTED_MODULE_2__.Description;


//# sourceMappingURL=switch.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/tabs/tabs.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/tabs/tabs.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": function() { return /* binding */ Tab; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js");











var _reducers;
var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["SetSelectedIndex"] = 0] = "SetSelectedIndex";
  ActionTypes[ActionTypes["SetOrientation"] = 1] = "SetOrientation";
  ActionTypes[ActionTypes["SetActivation"] = 2] = "SetActivation";
  ActionTypes[ActionTypes["RegisterTab"] = 3] = "RegisterTab";
  ActionTypes[ActionTypes["UnregisterTab"] = 4] = "UnregisterTab";
  ActionTypes[ActionTypes["RegisterPanel"] = 5] = "RegisterPanel";
  ActionTypes[ActionTypes["UnregisterPanel"] = 6] = "UnregisterPanel";
  ActionTypes[ActionTypes["ForceRerender"] = 7] = "ForceRerender";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.SetSelectedIndex] = function (state, action) {
  if (state.selectedIndex === action.index) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    selectedIndex: action.index
  });
}, _reducers[ActionTypes.SetOrientation] = function (state, action) {
  if (state.orientation === action.orientation) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    orientation: action.orientation
  });
}, _reducers[ActionTypes.SetActivation] = function (state, action) {
  if (state.activation === action.activation) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    activation: action.activation
  });
}, _reducers[ActionTypes.RegisterTab] = function (state, action) {
  if (state.tabs.includes(action.tab)) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    tabs: [].concat(state.tabs, [action.tab])
  });
}, _reducers[ActionTypes.UnregisterTab] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    tabs: state.tabs.filter(function (tab) {
      return tab !== action.tab;
    })
  });
}, _reducers[ActionTypes.RegisterPanel] = function (state, action) {
  if (state.panels.includes(action.panel)) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    panels: [].concat(state.panels, [action.panel])
  });
}, _reducers[ActionTypes.UnregisterPanel] = function (state, action) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    panels: state.panels.filter(function (panel) {
      return panel !== action.panel;
    })
  });
}, _reducers[ActionTypes.ForceRerender] = function (state) {
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state);
}, _reducers);
var TabsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
TabsContext.displayName = 'TabsContext';

function useTabsContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TabsContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <Tab.Group /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useTabsContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_TABS_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;

function Tabs(props) {
  var _props$defaultIndex = props.defaultIndex,
      defaultIndex = _props$defaultIndex === void 0 ? 0 : _props$defaultIndex,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? false : _props$vertical,
      _props$manual = props.manual,
      manual = _props$manual === void 0 ? false : _props$manual,
      onChange = props.onChange,
      _props$selectedIndex = props.selectedIndex,
      selectedIndex = _props$selectedIndex === void 0 ? null : _props$selectedIndex,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["defaultIndex", "vertical", "manual", "onChange", "selectedIndex"]);

  var orientation = vertical ? 'vertical' : 'horizontal';
  var activation = manual ? 'manual' : 'auto';

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    selectedIndex: null,
    tabs: [],
    panels: [],
    orientation: orientation,
    activation: activation
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      selectedIndex: state.selectedIndex
    };
  }, [state.selectedIndex]);
  var onChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () {});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: ActionTypes.SetOrientation,
      orientation: orientation
    });
  }, [orientation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch({
      type: ActionTypes.SetActivation,
      activation: activation
    });
  }, [activation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof onChange === 'function') {
      onChangeRef.current = onChange;
    }
  }, [onChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (state.tabs.length <= 0) return;
    if (selectedIndex === null && state.selectedIndex !== null) return;
    var tabs = state.tabs.map(function (tab) {
      return tab.current;
    }).filter(Boolean);
    var focusableTabs = tabs.filter(function (tab) {
      return !tab.hasAttribute('disabled');
    });
    var indexToSet = selectedIndex != null ? selectedIndex : defaultIndex; // Underflow

    if (indexToSet < 0) {
      dispatch({
        type: ActionTypes.SetSelectedIndex,
        index: tabs.indexOf(focusableTabs[0])
      });
    } // Overflow
    else if (indexToSet > state.tabs.length) {
        dispatch({
          type: ActionTypes.SetSelectedIndex,
          index: tabs.indexOf(focusableTabs[focusableTabs.length - 1])
        });
      } // Middle
      else {
          var before = tabs.slice(0, indexToSet);
          var after = tabs.slice(indexToSet);
          var next = [].concat(after, before).find(function (tab) {
            return focusableTabs.includes(tab);
          });
          if (!next) return;
          dispatch({
            type: ActionTypes.SetSelectedIndex,
            index: tabs.indexOf(next)
          });
        }
  }, [defaultIndex, selectedIndex, state.tabs, state.selectedIndex]);
  var lastChangedIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state.selectedIndex);
  var providerBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [state, {
      dispatch: dispatch,
      change: function change(index) {
        if (lastChangedIndex.current !== index) onChangeRef.current(index);
        lastChangedIndex.current = index;
        dispatch({
          type: ActionTypes.SetSelectedIndex,
          index: index
        });
      }
    }];
  }, [state, dispatch]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsContext.Provider, {
    value: providerBag
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps),
    slot: slot,
    defaultTag: DEFAULT_TABS_TAG,
    name: 'Tabs'
  }));
} // ---


var DEFAULT_LIST_TAG = 'div';

function List(props) {
  var _useTabsContext = useTabsContext([Tab.name, List.name].join('.')),
      _useTabsContext$ = _useTabsContext[0],
      selectedIndex = _useTabsContext$.selectedIndex,
      orientation = _useTabsContext$.orientation;

  var slot = {
    selectedIndex: selectedIndex
  };
  var propsWeControl = {
    role: 'tablist',
    'aria-orientation': orientation
  };
  var passThroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_LIST_TAG,
    name: 'Tabs.List'
  });
} // ---


var DEFAULT_TAB_TAG = 'button';
function Tab(props) {
  var _panels$myIndex, _panels$myIndex$curre;

  var id = "headlessui-tabs-tab-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_4__.useId)();

  var _useTabsContext2 = useTabsContext(Tab.name),
      _useTabsContext2$ = _useTabsContext2[0],
      selectedIndex = _useTabsContext2$.selectedIndex,
      tabs = _useTabsContext2$.tabs,
      panels = _useTabsContext2$.panels,
      orientation = _useTabsContext2$.orientation,
      activation = _useTabsContext2$.activation,
      _useTabsContext2$2 = _useTabsContext2[1],
      dispatch = _useTabsContext2$2.dispatch,
      change = _useTabsContext2$2.change;

  var internalTabRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var tabRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(internalTabRef, function (element) {
    if (!element) return;
    dispatch({
      type: ActionTypes.ForceRerender
    });
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    dispatch({
      type: ActionTypes.RegisterTab,
      tab: internalTabRef
    });
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterTab,
        tab: internalTabRef
      });
    };
  }, [dispatch, internalTabRef]);
  var myIndex = tabs.indexOf(internalTabRef);
  var selected = myIndex === selectedIndex;
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var list = tabs.map(function (tab) {
      return tab.current;
    }).filter(Boolean);

    if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Space || event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Enter) {
      event.preventDefault();
      event.stopPropagation();
      change(myIndex);
      return;
    }

    switch (event.key) {
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.Home:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(list, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.First);

      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.End:
      case _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(list, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Last);
    }

    return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(orientation, {
      vertical: function vertical() {
        if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowUp) return (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(list, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Previous | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.WrapAround);
        if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowDown) return (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(list, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Next | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.WrapAround);
        return;
      },
      horizontal: function horizontal() {
        if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowLeft) return (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(list, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Previous | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.WrapAround);
        if (event.key === _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_7__.Keys.ArrowRight) return (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.focusIn)(list, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.Next | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_8__.Focus.WrapAround);
        return;
      }
    });
  }, [tabs, orientation, myIndex, change]);
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _internalTabRef$curre;

    (_internalTabRef$curre = internalTabRef.current) == null ? void 0 : _internalTabRef$curre.focus();
  }, [internalTabRef]);
  var handleSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _internalTabRef$curre2;

    (_internalTabRef$curre2 = internalTabRef.current) == null ? void 0 : _internalTabRef$curre2.focus();
    change(myIndex);
  }, [change, myIndex, internalTabRef]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      selected: selected
    };
  }, [selected]);
  var propsWeControl = {
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onFocus: activation === 'manual' ? handleFocus : handleSelection,
    onClick: handleSelection,
    id: id,
    role: 'tab',
    type: (0,_hooks_use_resolve_button_type_esm_js__WEBPACK_IMPORTED_MODULE_9__.useResolveButtonType)(props, internalTabRef),
    'aria-controls': (_panels$myIndex = panels[myIndex]) == null ? void 0 : (_panels$myIndex$curre = _panels$myIndex.current) == null ? void 0 : _panels$myIndex$curre.id,
    'aria-selected': selected,
    tabIndex: selected ? 0 : -1
  };
  var passThroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_TAB_TAG,
    name: 'Tabs.Tab'
  });
} // ---

var DEFAULT_PANELS_TAG = 'div';

function Panels(props) {
  var _useTabsContext3 = useTabsContext([Tab.name, Panels.name].join('.')),
      selectedIndex = _useTabsContext3[0].selectedIndex;

  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      selectedIndex: selectedIndex
    };
  }, [selectedIndex]);
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: props,
    slot: slot,
    defaultTag: DEFAULT_PANELS_TAG,
    name: 'Tabs.Panels'
  });
} // ---


var DEFAULT_PANEL_TAG = 'div';
var PanelRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.Static;

function Panel(props) {
  var _tabs$myIndex, _tabs$myIndex$current;

  var _useTabsContext4 = useTabsContext([Tab.name, Panel.name].join('.')),
      _useTabsContext4$ = _useTabsContext4[0],
      selectedIndex = _useTabsContext4$.selectedIndex,
      tabs = _useTabsContext4$.tabs,
      panels = _useTabsContext4$.panels,
      dispatch = _useTabsContext4[1].dispatch;

  var id = "headlessui-tabs-panel-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_4__.useId)();
  var internalPanelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var panelRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(internalPanelRef, function (element) {
    if (!element) return;
    dispatch({
      type: ActionTypes.ForceRerender
    });
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    dispatch({
      type: ActionTypes.RegisterPanel,
      panel: internalPanelRef
    });
    return function () {
      return dispatch({
        type: ActionTypes.UnregisterPanel,
        panel: internalPanelRef
      });
    };
  }, [dispatch, internalPanelRef]);
  var myIndex = panels.indexOf(internalPanelRef);
  var selected = myIndex === selectedIndex;
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      selected: selected
    };
  }, [selected]);
  var propsWeControl = {
    ref: panelRef,
    id: id,
    role: 'tabpanel',
    'aria-labelledby': (_tabs$myIndex = tabs[myIndex]) == null ? void 0 : (_tabs$myIndex$current = _tabs$myIndex.current) == null ? void 0 : _tabs$myIndex$current.id,
    tabIndex: selected ? 0 : -1
  };
  var passThroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible: selected,
    name: 'Tabs.Panel'
  });
} // ---


Tab.Group = Tabs;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel;


//# sourceMappingURL=tabs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": function() { return /* binding */ Transition; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-is-mounted.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-is-initial-render.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js");
/* harmony import */ var _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/transition.esm.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js");












function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return classes.split(' ').filter(function (className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}

var TransitionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
TransitionContext.displayName = 'TransitionContext';
var TreeStates;

(function (TreeStates) {
  TreeStates["Visible"] = "visible";
  TreeStates["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));

function useTransitionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

function useParentNesting() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NestingContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

var NestingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
NestingContext.displayName = 'NestingContext';

function hasChildren(bag) {
  if ('children' in bag) return hasChildren(bag.children);
  return bag.current.filter(function (_ref) {
    var state = _ref.state;
    return state === TreeStates.Visible;
  }).length > 0;
}

function useNesting(done) {
  var doneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(done);
  var transitionableChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var mounted = (0,_hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    doneRef.current = done;
  }, [done]);
  var unregister = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId, strategy) {
    var _match;

    if (strategy === void 0) {
      strategy = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;
    }

    var idx = transitionableChildren.current.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === childId;
    });
    if (idx === -1) return;
    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(strategy, (_match = {}, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount] = function () {
      transitionableChildren.current.splice(idx, 1);
    }, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden] = function () {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));

    if (!hasChildren(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId) {
    var child = transitionableChildren.current.find(function (_ref3) {
      var id = _ref3.id;
      return id === childId;
    });

    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }

    return function () {
      return unregister(childId, _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      children: transitionableChildren,
      register: register,
      unregister: unregister
    };
  }, [register, unregister, transitionableChildren]);
}

function noop() {}

var eventNames = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];

function ensureEventHooksExist(events) {
  var result = {};

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createForOfIteratorHelperLoose)(eventNames), _step; !(_step = _iterator()).done;) {
    var _events$name;

    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }

  return result;
}

function useEvents(events) {
  var eventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(ensureEventHooksExist(events));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
} // ---


var DEFAULT_TRANSITION_CHILD_TAG = 'div';
var TransitionChildRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy;

function TransitionChild(props) {
  var _match3;

  var beforeEnter = props.beforeEnter,
      afterEnter = props.afterEnter,
      beforeLeave = props.beforeLeave,
      afterLeave = props.afterLeave,
      enter = props.enter,
      enterFrom = props.enterFrom,
      enterTo = props.enterTo,
      entered = props.entered,
      leave = props.leave,
      leaveFrom = props.leaveFrom,
      leaveTo = props.leaveTo,
      rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);

  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TreeStates.Visible),
      state = _useState[0],
      setState = _useState[1];

  var strategy = rest.unmount ? _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount : _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;

  var _useTransitionContext = useTransitionContext(),
      show = _useTransitionContext.show,
      appear = _useTransitionContext.appear,
      initial = _useTransitionContext.initial;

  var _useParentNesting = useParentNesting(),
      register = _useParentNesting.register,
      unregister = _useParentNesting.unregister;

  var id = (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_5__.useId)();
  var isTransitioning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var nesting = useNesting(function () {
    // When all children have been unmounted we can only hide ourselves if and only if we are not
    // transitioning ourselves. Otherwise we would unmount before the transitions are finished.
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id);
      events.current.afterLeave();
    }
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    if (!id) return;
    return register(id);
  }, [register, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    var _match2;

    // If we are in another mode than the Hidden mode then ignore
    if (strategy !== _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden) return;
    if (!id) return; // Make sure that we are visible

    if (show && state !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }

    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match2 = {}, _match2[TreeStates.Hidden] = function () {
      return unregister(id);
    }, _match2[TreeStates.Visible] = function () {
      return register(id);
    }, _match2));
  }, [state, id, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter: beforeEnter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    afterLeave: afterLeave
  });
  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ready && state === TreeStates.Visible && container.current === null) {
      throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
    }
  }, [container, state, ready]); // Skipping initial transition

  var skip = initial && !appear;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(function () {
    var node = container.current;
    if (!node) return;
    if (skip) return;
    isTransitioning.current = true;
    if (show) events.current.beforeEnter();
    if (!show) events.current.beforeLeave();
    return show ? (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.transition)(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason === _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.Reason.Finished) events.current.afterEnter();
    }) : (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.transition)(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason !== _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_8__.Reason.Finished) return; // When we don't have children anymore we can safely unregister from the parent and hide
      // ourselves.

      if (!hasChildren(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id);
        events.current.afterLeave();
      }
    });
  }, [events, id, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NestingContext.Provider, {
    value: nesting
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match3 = {}, _match3[TreeStates.Visible] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Open, _match3[TreeStates.Hidden] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Closed, _match3))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.extends)({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition.Child'
  })));
}

function Transition(props) {
  // @ts-expect-error
  var show = props.show,
      _props$appear = props.appear,
      appear = _props$appear === void 0 ? false : _props$appear,
      unmount = props.unmount,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["show", "appear", "unmount"]);

  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.useOpenClosed)();

  if (show === undefined && usesOpenClosedState !== null) {
    var _match4;

    show = (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(usesOpenClosedState, (_match4 = {}, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Open] = true, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.State.Closed] = false, _match4));
  }

  if (![true, false].includes(show)) {
    throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
  }

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show ? TreeStates.Visible : TreeStates.Hidden),
      state = _useState2[0],
      setState = _useState2[1];

  var nestingBag = useNesting(function () {
    setState(TreeStates.Hidden);
  });
  var initial = (0,_hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_10__.useIsInitialRender)();
  var transitionBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      show: show,
      appear: appear || !initial,
      initial: initial
    };
  }, [show, appear, initial]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount: unmount
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NestingContext.Provider, {
    value: nestingBag
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionContext.Provider, {
    value: transitionBag
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.extends)({}, sharedProps, {
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      children: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition'
  })));
}

Transition.Child = function Child(props) {
  var hasTransitionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext) !== null;
  var hasOpenClosedContext = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_9__.useOpenClosed)() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Transition, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionChild, Object.assign({}, props));
};

Transition.Root = Transition;


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reason": function() { return /* binding */ Reason; },
/* harmony export */   "transition": function() { return /* binding */ transition; }
/* harmony export */ });
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.esm.js */ "./node_modules/@headlessui/react/dist/utils/once.esm.js");



function addClasses(node) {
  var _node$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}

function removeClasses(node) {
  var _node$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}

var Reason;

(function (Reason) {
  Reason["Finished"] = "finished";
  Reason["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));

function waitForTransition(node, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();
  if (!node) return d.dispose; // Safari returns a comma separated list of values, so let's sort them and take the highest value.

  var _getComputedStyle = getComputedStyle(node),
      transitionDuration = _getComputedStyle.transitionDuration,
      transitionDelay = _getComputedStyle.transitionDelay;

  var _map = [transitionDuration, transitionDelay].map(function (value) {
    var _value$split$filter$m = value.split(',') // Remove falsy we can't work with
    .filter(Boolean) // Values are returned as `0.3s` or `75ms`
    .map(function (v) {
      return v.includes('ms') ? parseFloat(v) : parseFloat(v) * 1000;
    }).sort(function (a, z) {
      return z - a;
    }),
        _value$split$filter$m2 = _value$split$filter$m[0],
        resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;

    return resolvedValue;
  }),
      durationMs = _map[0],
      delaysMs = _map[1]; // Waiting for the transition to end. We could use the `transitionend` event, however when no
  // actual transition/duration is defined then the `transitionend` event is not fired.
  //
  // TODO: Downside is, when you slow down transitions via devtools this timeout is still using the
  // full 100% speed instead of the 25% or 10%.


  if (durationMs !== 0) {
    d.setTimeout(function () {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    // No transition is happening, so we should cleanup already. Otherwise we have to wait until we
    // get disposed.
    done(Reason.Finished);
  } // If we get disposed before the timeout runs we should cleanup anyway


  d.add(function () {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}

function transition(node, base, from, to, entered, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();

  var _done = done !== undefined ? (0,_utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__.once)(done) : function () {};

  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function () {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function (reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  }); // Once we get disposed, we should ensure that we cleanup after ourselves. In case of an unmount,
  // the node itself will be nullified and will be a no-op. In case of a full transition the classes
  // are already removed which is also a no-op. However if you go from enter -> leave mid-transition
  // then we have some leftovers that should be cleaned.

  d.add(function () {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  }); // When we get disposed early, than we should also call the done method but switch the reason.

  d.add(function () {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-computed.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-computed.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useComputed": function() { return /* binding */ useComputed; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function useComputed(cb, dependencies) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cb),
      value = _useState[0],
      setValue = _useState[1];

  var cbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(cb);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    cbRef.current = cb;
  }, [cb]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    return setValue(cbRef.current);
  }, [cbRef, setValue].concat(dependencies));
  return value;
}


//# sourceMappingURL=use-computed.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisposables": function() { return /* binding */ useDisposables; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");



function useDisposables() {
  // Using useState instead of useRef so that we can use the initializer function.
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_1__.disposables),
      d = _useState[0];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return d.dispose();
    };
  }, [d]);
  return d;
}


//# sourceMappingURL=use-disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.esm.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFlags": function() { return /* binding */ useFlags; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useFlags(initialFlags) {
  if (initialFlags === void 0) {
    initialFlags = 0;
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFlags),
      flags = _useState[0],
      setFlags = _useState[1];

  var addFlag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (flag) {
    return setFlags(function (flags) {
      return flags | flag;
    });
  }, [setFlags]);
  var hasFlag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (flag) {
    return Boolean(flags & flag);
  }, [flags]);
  var removeFlag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (flag) {
    return setFlags(function (flags) {
      return flags & ~flag;
    });
  }, [setFlags]);
  var toggleFlag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (flag) {
    return setFlags(function (flags) {
      return flags ^ flag;
    });
  }, [setFlags]);
  return {
    addFlag: addFlag,
    hasFlag: hasFlag,
    removeFlag: removeFlag,
    toggleFlag: toggleFlag
  };
}


//# sourceMappingURL=use-flags.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": function() { return /* binding */ Features; },
/* harmony export */   "useFocusTrap": function() { return /* binding */ useFocusTrap; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_keyboard_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-mounted.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js");







var Features;

(function (Features) {
  /** No features enabled for the `useFocusTrap` hook. */
  Features[Features["None"] = 1] = "None";
  /** Ensure that we move focus initially into the container. */

  Features[Features["InitialFocus"] = 2] = "InitialFocus";
  /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */

  Features[Features["TabLock"] = 4] = "TabLock";
  /** Ensure that programmatically moving focus outside of the container is disallowed. */

  Features[Features["FocusLock"] = 8] = "FocusLock";
  /** Ensure that we restore the focus when unmounting the component that uses this `useFocusTrap` hook. */

  Features[Features["RestoreFocus"] = 16] = "RestoreFocus";
  /** Enable all features. */

  Features[Features["All"] = 30] = "All";
})(Features || (Features = {}));

function useFocusTrap(container, features, _temp) {
  if (features === void 0) {
    features = Features.All;
  }

  var _ref = _temp === void 0 ? {} : _temp,
      initialFocus = _ref.initialFocus,
      containers = _ref.containers;

  var restoreElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window !== 'undefined' ? document.activeElement : null);
  var previousActiveElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var mounted = (0,_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
  var featuresRestoreFocus = Boolean(features & Features.RestoreFocus);
  var featuresInitialFocus = Boolean(features & Features.InitialFocus); // Capture the currently focused element, before we enable the focus trap.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!featuresRestoreFocus) return;
    restoreElement.current = document.activeElement;
  }, [featuresRestoreFocus]); // Restore the focus when we unmount the component.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!featuresRestoreFocus) return;
    return function () {
      (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(restoreElement.current);
      restoreElement.current = null;
    };
  }, [featuresRestoreFocus]); // Handle initial focus

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!featuresInitialFocus) return;
    if (!container.current) return;
    var activeElement = document.activeElement;

    if (initialFocus == null ? void 0 : initialFocus.current) {
      if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
        previousActiveElement.current = activeElement;
        return; // Initial focus ref is already the active element
      }
    } else if (container.current.contains(activeElement)) {
      previousActiveElement.current = activeElement;
      return; // Already focused within Dialog
    } // Try to focus the initialFocus ref


    if (initialFocus == null ? void 0 : initialFocus.current) {
      (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(initialFocus.current);
    } else {
      if ((0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusIn)(container.current, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First) === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.FocusResult.Error) {
        console.warn('There are no focusable elements inside the <FocusTrap />');
      }
    }

    previousActiveElement.current = document.activeElement;
  }, [container, initialFocus, featuresInitialFocus]); // Handle `Tab` & `Shift+Tab` keyboard events

  (0,_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_3__.useWindowEvent)('keydown', function (event) {
    if (!(features & Features.TabLock)) return;
    if (!container.current) return;
    if (event.key !== _components_keyboard_esm_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Tab) return;
    event.preventDefault();

    if ((0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusIn)(container.current, (event.shiftKey ? _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous : _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next) | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.WrapAround) === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.FocusResult.Success) {
      previousActiveElement.current = document.activeElement;
    }
  }); // Prevent programmatically escaping the container

  (0,_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_3__.useWindowEvent)('focus', function (event) {
    if (!(features & Features.FocusLock)) return;
    var allContainers = new Set(containers == null ? void 0 : containers.current);
    allContainers.add(container);
    if (!allContainers.size) return;
    var previous = previousActiveElement.current;
    if (!previous) return;
    if (!mounted.current) return;
    var toElement = event.target;

    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(allContainers, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(previous);
      } else {
        previousActiveElement.current = toElement;
        (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(toElement);
      }
    } else {
      (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(previousActiveElement.current);
    }
  }, true);
}

function contains(containers, element) {
  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createForOfIteratorHelperLoose)(containers), _step; !(_step = _iterator()).done;) {
    var _container$current;

    var container = _step.value;
    if ((_container$current = container.current) == null ? void 0 : _container$current.contains(element)) return true;
  }

  return false;
}


//# sourceMappingURL=use-focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");




// didn't take care of the Suspense case. To fix this we used the approach the @reach-ui/auto-id
// uses.
//
// Credits: https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  var ready = (0,_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ready ? generateId : null),
      id = _useState[0],
      setId = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    if (id === null) setId(generateId());
  }, [id]);
  return id != null ? '' + id : undefined;
}


//# sourceMappingURL=use-id.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInertOthers": function() { return /* binding */ useInertOthers; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



var interactables = /*#__PURE__*/new Set();
var originals = /*#__PURE__*/new Map();

function inert(element) {
  element.setAttribute('aria-hidden', 'true'); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = true;
}

function restore(element) {
  var original = originals.get(element);
  if (!original) return;
  if (original['aria-hidden'] === null) element.removeAttribute('aria-hidden');else element.setAttribute('aria-hidden', original['aria-hidden']); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = original.inert;
}

function useInertOthers(container, enabled) {
  if (enabled === void 0) {
    enabled = true;
  }

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_0__.useIsoMorphicEffect)(function () {
    if (!enabled) return;
    if (!container.current) return;
    var element = container.current; // Mark myself as an interactable element

    interactables.add(element); // Restore elements that now contain an interactable child

    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(originals.keys()), _step; !(_step = _iterator()).done;) {
      var original = _step.value;

      if (original.contains(element)) {
        restore(original);
        originals["delete"](original);
      }
    } // Collect direct children of the body


    document.querySelectorAll('body > *').forEach(function (child) {
      if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
      // Skip the interactables, and the parents of the interactables

      for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(interactables), _step2; !(_step2 = _iterator2()).done;) {
        var interactable = _step2.value;
        if (child.contains(interactable)) return;
      } // Keep track of the elements


      if (interactables.size === 1) {
        originals.set(child, {
          'aria-hidden': child.getAttribute('aria-hidden'),
          // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
          inert: child.inert
        }); // Mutate the element

        inert(child);
      }
    });
    return function () {
      // Inert is disabled on the current element
      interactables["delete"](element); // We still have interactable elements, therefore this one and its parent
      // will become inert as well.

      if (interactables.size > 0) {
        // Collect direct children of the body
        document.querySelectorAll('body > *').forEach(function (child) {
          if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
          // Skip already inert parents

          if (originals.has(child)) return; // Skip the interactables, and the parents of the interactables

          for (var _iterator3 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(interactables), _step3; !(_step3 = _iterator3()).done;) {
            var interactable = _step3.value;
            if (child.contains(interactable)) return;
          }

          originals.set(child, {
            'aria-hidden': child.getAttribute('aria-hidden'),
            // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
            inert: child.inert
          }); // Mutate the element

          inert(child);
        });
      } else {
        for (var _iterator4 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(originals.keys()), _step4; !(_step4 = _iterator4()).done;) {
          var _element = _step4.value;
          // Restore
          restore(_element); // Cleanup

          originals["delete"](_element);
        }
      }
    };
  }, [enabled]);
}


//# sourceMappingURL=use-inert-others.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsInitialRender": function() { return /* binding */ useIsInitialRender; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useIsInitialRender() {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initial.current = false;
  }, []);
  return initial.current;
}


//# sourceMappingURL=use-is-initial-render.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": function() { return /* binding */ useIsMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useIsMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}


//# sourceMappingURL=use-is-mounted.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": function() { return /* binding */ useIsoMorphicEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useIsoMorphicEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-iso-morphic-effect.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": function() { return /* binding */ useResolveButtonType; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function resolveType(props) {
  var _props$as;

  if (props.type) return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : 'button';
  if (typeof tag === 'string' && tag.toLowerCase() === 'button') return 'button';
  return undefined;
}

function useResolveButtonType(props, ref) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return resolveType(props);
  }),
      type = _useState[0],
      setType = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    setType(resolveType(props));
  }, [props.type, props.as]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    if (type) return;
    if (!ref.current) return;

    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute('type')) {
      setType('button');
    }
  }, [type, ref]);
  return type;
}


//# sourceMappingURL=use-resolve-button-type.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": function() { return /* binding */ useServerHandoffComplete; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.serverHandoffComplete),
      serverHandoffComplete = _useState[0],
      setServerHandoffComplete = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (serverHandoffComplete === true) return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (state.serverHandoffComplete === false) state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}


//# sourceMappingURL=use-server-handoff-complete.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncRefs": function() { return /* binding */ useSyncRefs; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    cache.current = refs;
  }, [refs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(cache.current), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      if (ref == null) continue;
      if (typeof ref === 'function') ref(value);else ref.current = value;
    }
  }, [cache]);
}


//# sourceMappingURL=use-sync-refs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTreeWalker": function() { return /* binding */ useTreeWalker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



function useTreeWalker(_ref) {
  var container = _ref.container,
      accept = _ref.accept,
      walk = _ref.walk,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var acceptRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(accept);
  var walkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(walk);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    if (!container) return;
    if (!enabled) return;
    var accept = acceptRef.current;
    var walk = walkRef.current;
    var acceptNode = Object.assign(function (node) {
      return accept(node);
    }, {
      acceptNode: accept
    });
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);

    while (walker.nextNode()) {
      walk(walker.currentNode);
    }
  }, [container, enabled, acceptRef, walkRef]);
}


//# sourceMappingURL=use-tree-walker.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": function() { return /* binding */ useWindowEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowEvent(type, listener, options) {
  var listenerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(listener);
  listenerRef.current = listener;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handler(event) {
      listenerRef.current.call(window, event);
    }

    window.addEventListener(type, handler, options);
    return function () {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}


//# sourceMappingURL=use-window-event.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/index.esm.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": function() { return /* reexport safe */ _components_portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_0__.Portal; },
/* harmony export */   "Dialog": function() { return /* reexport safe */ _components_dialog_dialog_esm_js__WEBPACK_IMPORTED_MODULE_1__.Dialog; },
/* harmony export */   "Disclosure": function() { return /* reexport safe */ _components_disclosure_disclosure_esm_js__WEBPACK_IMPORTED_MODULE_2__.Disclosure; },
/* harmony export */   "FocusTrap": function() { return /* reexport safe */ _components_focus_trap_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_3__.FocusTrap; },
/* harmony export */   "Listbox": function() { return /* reexport safe */ _components_listbox_listbox_esm_js__WEBPACK_IMPORTED_MODULE_4__.Listbox; },
/* harmony export */   "Menu": function() { return /* reexport safe */ _components_menu_menu_esm_js__WEBPACK_IMPORTED_MODULE_5__.Menu; },
/* harmony export */   "Popover": function() { return /* reexport safe */ _components_popover_popover_esm_js__WEBPACK_IMPORTED_MODULE_6__.Popover; },
/* harmony export */   "RadioGroup": function() { return /* reexport safe */ _components_radio_group_radio_group_esm_js__WEBPACK_IMPORTED_MODULE_7__.RadioGroup; },
/* harmony export */   "Switch": function() { return /* reexport safe */ _components_switch_switch_esm_js__WEBPACK_IMPORTED_MODULE_8__.Switch; },
/* harmony export */   "Tab": function() { return /* reexport safe */ _components_tabs_tabs_esm_js__WEBPACK_IMPORTED_MODULE_9__.Tab; },
/* harmony export */   "Transition": function() { return /* reexport safe */ _components_transitions_transition_esm_js__WEBPACK_IMPORTED_MODULE_10__.Transition; }
/* harmony export */ });
/* harmony import */ var _components_portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/portal/portal.esm.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.esm.js");
/* harmony import */ var _components_dialog_dialog_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dialog/dialog.esm.js */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js");
/* harmony import */ var _components_disclosure_disclosure_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/disclosure/disclosure.esm.js */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js");
/* harmony import */ var _components_focus_trap_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/focus-trap/focus-trap.esm.js */ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.esm.js");
/* harmony import */ var _components_listbox_listbox_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/listbox/listbox.esm.js */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.esm.js");
/* harmony import */ var _components_menu_menu_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.esm.js */ "./node_modules/@headlessui/react/dist/components/menu/menu.esm.js");
/* harmony import */ var _components_popover_popover_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popover/popover.esm.js */ "./node_modules/@headlessui/react/dist/components/popover/popover.esm.js");
/* harmony import */ var _components_radio_group_radio_group_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/radio-group/radio-group.esm.js */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.esm.js");
/* harmony import */ var _components_switch_switch_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/switch/switch.esm.js */ "./node_modules/@headlessui/react/dist/components/switch/switch.esm.js");
/* harmony import */ var _components_tabs_tabs_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs/tabs.esm.js */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.esm.js");
/* harmony import */ var _components_transitions_transition_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transitions/transition.esm.js */ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js");











//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.esm.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": function() { return /* binding */ OpenClosedProvider; },
/* harmony export */   "State": function() { return /* binding */ State; },
/* harmony export */   "useOpenClosed": function() { return /* binding */ useOpenClosed; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
Context.displayName = 'OpenClosedContext';
var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Closed"] = 1] = "Closed";
})(State || (State = {}));

function useOpenClosed() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: value
  }, children);
}


//# sourceMappingURL=open-closed.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePortalRoot": function() { return /* binding */ ForcePortalRoot; },
/* harmony export */   "usePortalRoot": function() { return /* binding */ usePortalRoot; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ForcePortalRootContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
function usePortalRoot() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ForcePortalRootContext.Provider, {
    value: props.force
  }, props.children);
}


//# sourceMappingURL=portal-force-root.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/stack-context.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/stack-context.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackMessage": function() { return /* binding */ StackMessage; },
/* harmony export */   "StackProvider": function() { return /* binding */ StackProvider; },
/* harmony export */   "useStackContext": function() { return /* binding */ useStackContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



var StackContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(function () {});
StackContext.displayName = 'StackContext';
var StackMessage;

(function (StackMessage) {
  StackMessage[StackMessage["Add"] = 0] = "Add";
  StackMessage[StackMessage["Remove"] = 1] = "Remove";
})(StackMessage || (StackMessage = {}));

function useStackContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StackContext);
}
function StackProvider(_ref) {
  var children = _ref.children,
      onUpdate = _ref.onUpdate,
      type = _ref.type,
      element = _ref.element;
  var parentUpdate = useStackContext();
  var notify = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Notify our layer
    onUpdate == null ? void 0 : onUpdate.apply(void 0, args); // Notify the parent

    parentUpdate.apply(void 0, args);
  }, [parentUpdate, onUpdate]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    notify(StackMessage.Add, type, element);
    return function () {
      return notify(StackMessage.Remove, type, element);
    };
  }, [notify, type, element]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StackContext.Provider, {
    value: notify
  }, children);
}


//# sourceMappingURL=stack-context.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": function() { return /* binding */ isDisabledReactIssue7711; }
/* harmony export */ });
// See: https://github.com/facebook/react/issues/7711
// See: https://github.com/facebook/react/pull/20612
// See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled (2.)
function isDisabledReactIssue7711(element) {
  var _ref, _parent;

  var parent = element.parentElement;
  var legend = null;

  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement) legend = parent;
    parent = parent.parentElement;
  }

  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute('disabled')) === '') != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend)) return false;
  return isParentDisabled;
}

function isFirstLegend(element) {
  if (!element) return false;
  var previous = element.previousElementSibling;

  while (previous !== null) {
    if (previous instanceof HTMLLegendElement) return false;
    previous = previous.previousElementSibling;
  }

  return true;
}


//# sourceMappingURL=bugs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": function() { return /* binding */ Focus; },
/* harmony export */   "calculateActiveIndex": function() { return /* binding */ calculateActiveIndex; }
/* harmony export */ });
function assertNever(x) {
  throw new Error('Unexpected object: ' + x);
}

var Focus;

(function (Focus) {
  /** Focus the first non-disabled item. */
  Focus[Focus["First"] = 0] = "First";
  /** Focus the previous non-disabled item. */

  Focus[Focus["Previous"] = 1] = "Previous";
  /** Focus the next non-disabled item. */

  Focus[Focus["Next"] = 2] = "Next";
  /** Focus the last non-disabled item. */

  Focus[Focus["Last"] = 3] = "Last";
  /** Focus a specific item based on the `id` of the item. */

  Focus[Focus["Specific"] = 4] = "Specific";
  /** Focus no items at all. */

  Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));

function calculateActiveIndex(action, resolvers) {
  var items = resolvers.resolveItems();
  if (items.length <= 0) return null;
  var currentActiveIndex = resolvers.resolveActiveIndex();
  var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;

  var nextActiveIndex = function () {
    switch (action.focus) {
      case Focus.First:
        return items.findIndex(function (item) {
          return !resolvers.resolveDisabled(item);
        });

      case Focus.Previous:
        {
          var idx = items.slice().reverse().findIndex(function (item, idx, all) {
            if (activeIndex !== -1 && all.length - idx - 1 >= activeIndex) return false;
            return !resolvers.resolveDisabled(item);
          });
          if (idx === -1) return idx;
          return items.length - 1 - idx;
        }

      case Focus.Next:
        return items.findIndex(function (item, idx) {
          if (idx <= activeIndex) return false;
          return !resolvers.resolveDisabled(item);
        });

      case Focus.Last:
        {
          var _idx = items.slice().reverse().findIndex(function (item) {
            return !resolvers.resolveDisabled(item);
          });

          if (_idx === -1) return _idx;
          return items.length - 1 - _idx;
        }

      case Focus.Specific:
        return items.findIndex(function (item) {
          return resolvers.resolveId(item) === action.id;
        });

      case Focus.Nothing:
        return null;

      default:
        assertNever(action);
    }
  }();

  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}


//# sourceMappingURL=calculate-active-index.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": function() { return /* binding */ disposables; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");


function disposables() {
  var disposables = [];
  var api = {
    requestAnimationFrame: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function () {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      api.requestAnimationFrame(function () {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function () {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createForOfIteratorHelperLoose)(disposables.splice(0)), _step; !(_step = _iterator()).done;) {
        var dispose = _step.value;
        dispose();
      }
    }
  };
  return api;
}


//# sourceMappingURL=disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": function() { return /* binding */ Focus; },
/* harmony export */   "FocusResult": function() { return /* binding */ FocusResult; },
/* harmony export */   "FocusableMode": function() { return /* binding */ FocusableMode; },
/* harmony export */   "focusElement": function() { return /* binding */ focusElement; },
/* harmony export */   "focusIn": function() { return /* binding */ focusIn; },
/* harmony export */   "getFocusableElements": function() { return /* binding */ getFocusableElements; },
/* harmony export */   "isFocusableElement": function() { return /* binding */ isFocusableElement; }
/* harmony export */ });
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");


//  - https://stackoverflow.com/a/30753870

var focusableSelector = /*#__PURE__*/['[contentEditable=true]', '[tabindex]', 'a[href]', 'area[href]', 'button:not([disabled])', 'iframe', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])'].map( false ? // TODO: Remove this once JSDOM fixes the issue where an element that is
// "hidden" can be the document.activeElement, because this is not possible
// in real browsers.
// TODO: Remove this once JSDOM fixes the issue where an element that is
0 : function (selector) {
  return selector + ":not([tabindex='-1'])";
}).join(',');
var Focus;

(function (Focus) {
  /** Focus the first non-disabled element */
  Focus[Focus["First"] = 1] = "First";
  /** Focus the previous non-disabled element */

  Focus[Focus["Previous"] = 2] = "Previous";
  /** Focus the next non-disabled element */

  Focus[Focus["Next"] = 4] = "Next";
  /** Focus the last non-disabled element */

  Focus[Focus["Last"] = 8] = "Last";
  /** Wrap tab around */

  Focus[Focus["WrapAround"] = 16] = "WrapAround";
  /** Prevent scrolling the focusable elements into view */

  Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));

var FocusResult;

(function (FocusResult) {
  /** Something went wrong while trying to focus. */
  FocusResult[FocusResult["Error"] = 0] = "Error";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */

  FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
  /** Focus was successful. */

  FocusResult[FocusResult["Success"] = 2] = "Success";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */

  FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));

var Direction;

(function (Direction) {
  Direction[Direction["Previous"] = -1] = "Previous";
  Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));

function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }

  if (container == null) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;

(function (FocusableMode) {
  /** The element itself must be focusable. */
  FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
  /** The element should be inside of a focusable element. */

  FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));

function isFocusableElement(element, mode) {
  var _match;

  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }

  if (element === document.body) return false;
  return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_0__.match)(mode, (_match = {}, _match[FocusableMode.Strict] = function () {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function () {
    var next = element;

    while (next !== null) {
      if (next.matches(focusableSelector)) return true;
      next = next.parentElement;
    }

    return false;
  }, _match));
}
function focusElement(element) {
  element == null ? void 0 : element.focus({
    preventScroll: true
  });
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container.slice().sort(function (a, b) {
    var position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  }) : getFocusableElements(container);
  var active = document.activeElement;

  var direction = function () {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var startIndex = function () {
    if (focus & Focus.First) return 0;
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last) return elements.length - 1;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = undefined;

  do {
    var _next;

    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;
    var nextIdx = startIndex + offset;

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx]; // Try the focus the next element, might not work if it is "hidden" to the user.

    (_next = next) == null ? void 0 : _next.focus(focusOptions); // Try the next one in line

    offset += direction;
  } while (next !== document.activeElement); // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.


  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');
  return FocusResult.Success;
}


//# sourceMappingURL=focus-management.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": function() { return /* binding */ match; }
/* harmony export */ });
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}


//# sourceMappingURL=match.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": function() { return /* binding */ once; }
/* harmony export */ });
function once(cb) {
  var state = {
    called: false
  };
  return function () {
    if (state.called) return;
    state.called = true;
    return cb.apply(void 0, arguments);
  };
}


//# sourceMappingURL=once.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": function() { return /* binding */ Features; },
/* harmony export */   "RenderStrategy": function() { return /* binding */ RenderStrategy; },
/* harmony export */   "forwardRefWithAs": function() { return /* binding */ forwardRefWithAs; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");




var Features;

(function (Features) {
  /** No features at all */
  Features[Features["None"] = 0] = "None";
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */

  Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */

  Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));

var RenderStrategy;

(function (RenderStrategy) {
  RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
  RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));

function render(_ref) {
  var props = _ref.props,
      slot = _ref.slot,
      defaultTag = _ref.defaultTag,
      features = _ref.features,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      name = _ref.name;
  // Visible always render
  if (visible) return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;

  if (featureFlags & Features.Static) {
    var _props$static = props["static"],
        isStatic = _props$static === void 0 ? false : _props$static,
        rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["static"]); // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else


    if (isStatic) return _render(rest, slot, defaultTag, name);
  }

  if (featureFlags & Features.RenderStrategy) {
    var _match;

    var _props$unmount = props.unmount,
        unmount = _props$unmount === void 0 ? true : _props$unmount,
        _rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["unmount"]);

    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      return null;
    }, _match[RenderStrategy.Hidden] = function () {
      return _render((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, _rest, {
        hidden: true,
        style: {
          display: 'none'
        }
      }), slot, defaultTag, name);
    }, _match));
  } // No features enabled, just render


  return _render(props, slot, defaultTag, name);
}

function _render(props, slot, tag, name) {
  var _ref2;

  if (slot === void 0) {
    slot = {};
  }

  var _omit = omit(props, ['unmount', 'static']),
      _omit$as = _omit.as,
      Component = _omit$as === void 0 ? tag : _omit$as,
      children = _omit.children,
      _omit$refName = _omit.refName,
      refName = _omit$refName === void 0 ? 'ref' : _omit$refName,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(_omit, ["as", "children", "refName"]); // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`


  var refRelatedProps = props.ref !== undefined ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === 'function' ? children(slot) : children; // Allow for className to be a function with the slot as the contents

  if (passThroughProps.className && typeof passThroughProps.className === 'function') {
    passThroughProps.className = passThroughProps.className(slot);
  }

  if (Component === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', '', "The current component <" + name + " /> is rendering a \"Fragment\".", "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function (line) {
          return "  - " + line;
        }).join('\n'), '', 'You can apply a few solutions:', ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', 'Render a single element as the child so that we can forward the props onto that element.'].map(function (line) {
          return "  - " + line;
        }).join('\n')].join('\n'));
      }

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(resolvedChildren, Object.assign({}, // Filter out undefined values so that they don't override the existing values
      mergeEventFunctions(compact(omit(passThroughProps, ['ref'])), resolvedChildren.props, ['onClick']), refRelatedProps));
    }
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, Object.assign({}, omit(passThroughProps, ['ref']), Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment && refRelatedProps), resolvedChildren);
}
/**
 * We can use this function for the following useCase:
 *
 * <Menu.Item> <button onClick={console.log} /> </Menu.Item>
 *
 * Our `Menu.Item` will have an internal `onClick`, if you passthrough an `onClick` to the actual
 * `Menu.Item` component we will call it correctly. However, when we have an `onClick` on the actual
 * first child, that one should _also_ be called (but before this implementation, it was just
 * overriding the `onClick`). But it is only when we *render* that we have access to the existing
 * props of this component.
 *
 * It's a bit hacky, and not that clean, but it is something internal and we have tests to rely on
 * so that we can refactor this later (if needed).
 */


function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);

  var _loop = function _loop() {
    var func = _step.value;

    if (passThroughProps[func] !== undefined && existingProps[func] !== undefined) {
      var _Object$assign;

      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function (event) {
        // Props we control
        if (!event.defaultPrevented) passThroughProps[func](event); // Existing props on the component

        if (!event.defaultPrevented) existingProps[func](event);
      }, _Object$assign));
    }
  };

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(functionsToMerge), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return clone;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */


function forwardRefWithAs(component) {
  var _component$displayNam;

  return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}

function compact(object) {
  var clone = Object.assign({}, object);

  for (var key in clone) {
    if (clone[key] === undefined) delete clone[key];
  }

  return clone;
}

function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }

  var clone = Object.assign({}, object);

  for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(keysToOmit), _step2; !(_step2 = _iterator2()).done;) {
    var key = _step2.value;
    if (key in clone) delete clone[key];
  }

  return clone;
}


//# sourceMappingURL=render.esm.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router1).useRouter();

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _resolveHref = (0, _router).resolveHref(router, props.href, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (true) {
    try {
      child = _react["default"].Children.only(children);
    } catch (err) {
      throw new Error("Multiple children were passed to <Link> with `href` of `".concat(props.href, "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children") + ( true ? " \nOpen your browser's console to view the Component stack trace." : 0));
    }
  } else {}

  var childRef = child && typeof child === 'object' && child.ref;

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 2),
      setIntersectionRef = _useIntersection3[0],
      isVisible = _useIntersection3[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react["default"].useEffect(function () {
    var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "PYHstBoZE4p1pf5wc1Vw4fTzvCU=", true);

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

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

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  _s();

  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var setRef = (0, _react).useCallback(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

_s(useIntersection, "Z6jj7qx+KE6gD9CpC9WlQTha45o=");

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

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

/***/ "./src/templates/Calculator/ButtonsBar.tsx":
/*!*************************************************!*\
  !*** ./src/templates/Calculator/ButtonsBar.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsBar": function() { return /* binding */ ButtonsBar; }
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/tracking */ "./src/templates/Calculator/utils/tracking.ts");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["ctype"];

var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Calculator\\ButtonsBar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ButtonsBar = function ButtonsBar() {
  _s();

  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_3__.useTranslations)('calculator');
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(); // eslint-disable-next-line unused-imports/no-unused-vars

  var _router$query = router.query,
      ctype = _router$query.ctype,
      routerQuery = (0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_router$query, _excluded);

  var contactOfferUrl = "?".concat(new URLSearchParams(_objectSpread(_objectSpread({}, routerQuery), {}, {
    ctype: 'offer'
  })).toString(), "#kontakt");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "btn-bar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Popover, {
      className: "relative",
      children: function children(_ref) {
        var close = _ref.close;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Popover.Button, {
            style: {
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold'
            },
            children: [t('helpCTA'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, {
              className: "ml-1 h-5 w-5 group-hover:text-gray-500",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition, {
            as: (react__WEBPACK_IMPORTED_MODULE_2___default().Fragment),
            enter: "transition ease-out duration-200",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-150",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Popover.Panel, {
              className: "contact-popover",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                href: "tel:030/403-6579-10",
                className: "tel",
                onClick: function onClick() {
                  close();
                  (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_5__.trackContactButtonClicked)();
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.PhoneIcon, {
                  style: {
                    width: '1rem',
                    height: '1rem'
                  },
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                  children: "030/403-6579-10"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/termin",
                prefetch: false,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                  onClick: function onClick() {
                    close();
                    (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_5__.trackTerminButtonClicked)();
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                    children: "Beratungstermin anfordern"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: contactOfferUrl,
      prefetch: false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
        onClick: _utils_tracking__WEBPACK_IMPORTED_MODULE_5__.trackOfferRequestButtonClicked,
        children: t('offerCTA')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(ButtonsBar, "8/syrZO7zDXsuFe/5R0n75uQkmU=", false, function () {
  return [_locale__WEBPACK_IMPORTED_MODULE_3__.useTranslations, next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = ButtonsBar;

var _c;

$RefreshReg$(_c, "ButtonsBar");

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

/***/ "./src/templates/Calculator/Graph.tsx":
/*!********************************************!*\
  !*** ./src/templates/Calculator/Graph.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Graph": function() { return /* binding */ Graph; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.ts");
/* harmony import */ var _utils_formatNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/formatNumber */ "./src/templates/Calculator/utils/formatNumber.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Calculator\\Graph.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Graph = function Graph(_ref) {
  _s();

  var worthy = _ref.worthy,
      worthyRangePercentage = _ref.worthyRangePercentage,
      minMonthlyFee = _ref.minMonthlyFee,
      maxMonthlyFee = _ref.maxMonthlyFee,
      minMonthlyFeeRangePercentage = _ref.minMonthlyFeeRangePercentage;
  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('calculator');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "graph-cnt",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "row graph",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "two-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "bar-cnt",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "bar value",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              style: {
                gridTemplateRows: "1fr ".concat(worthyRangePercentage || 1, "%")
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                children: worthy ? "".concat((0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(worthy)).concat(t('eurSign')) : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "bar-cnt",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "bar fee",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              style: {
                gridTemplateRows: "1fr ".concat(minMonthlyFeeRangePercentage || 1, "%")
              },
              children: [worthy ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  children: [(0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(minMonthlyFee), " -"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  children: [(0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(maxMonthlyFee), t('eurSign')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "two-col label",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: t('graph.worthy')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: t('graph.fee')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Graph, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function () {
  return [_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations];
});

_c = Graph;

var _c;

$RefreshReg$(_c, "Graph");

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

/***/ "./src/templates/Calculator/NumberRangeInput.tsx":
/*!*******************************************************!*\
  !*** ./src/templates/Calculator/NumberRangeInput.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberRangeInput": function() { return /* binding */ NumberRangeInput; }
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/tracking */ "./src/templates/Calculator/utils/tracking.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Calculator\\NumberRangeInput.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var NumberRangeInput = function NumberRangeInput(_ref) {
  _s();

  var min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      unit = _ref.unit,
      onValueChange = _ref.onValueChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
      _React$useState2 = (0,C_Users_USER_Desktop_LPGniw_website_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      focused = _React$useState2[0],
      setFocused = _React$useState2[1];

  var inputRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "cnt",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
      ref: inputRef,
      onFocus: function onFocus() {
        return setFocused(true);
      },
      onBlur: function onBlur() {
        return setFocused(false);
      },
      value: value === min ? min || (focused ? '' : 0) : value.toString(),
      onChange: function onChange(e) {
        var intValue = e.target.value ? parseInt(e.target.value, 10) : 0;

        if (intValue >= min && intValue <= max) {
          onValueChange(intValue);
        } else if (intValue > max) {
          onValueChange(max);
        }

        (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_2__.trackPropertyValueUpdated)('input');
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), unit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      children: unit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(NumberRangeInput, "rwqZf9cBjrH2zIMw/NeLpi+hjZQ=");

_c = NumberRangeInput;

var _c;

$RefreshReg$(_c, "NumberRangeInput");

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

/***/ "./src/templates/Calculator/Options.tsx":
/*!**********************************************!*\
  !*** ./src/templates/Calculator/Options.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": function() { return /* binding */ Options; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.ts");
/* harmony import */ var _SliderFlex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SliderFlex */ "./src/templates/SliderFlex/index.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Calculator/NumberRangeInput.tsx");
/* harmony import */ var _utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/formatNumber */ "./src/templates/Calculator/utils/formatNumber.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/tracking */ "./src/templates/Calculator/utils/tracking.ts");
/* harmony import */ var _ButtonsBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ButtonsBar */ "./src/templates/Calculator/ButtonsBar.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Calculator\\Options.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Options = function Options(_ref) {
  _s();

  var worthy = _ref.worthy,
      worthyIncrement = _ref.worthyIncrement,
      maxWorthy = _ref.maxWorthy,
      minFee = _ref.minFee,
      maxFee = _ref.maxFee,
      showTitle = _ref.showTitle,
      onWorthyChange = _ref.onWorthyChange;
  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('calculator');

  var propertyValueChanged = function propertyValueChanged(value) {
    (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_5__.trackPropertyValueUpdated)('slider');
    onWorthyChange(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "options-cnt",
    children: [showTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
      children: t('calculator.title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "options",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "slider-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "option-label",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            children: [t('calculator.propertyValue.title'), "*"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "value-label",
          children: t('calculator.propertyValue.value', {
            worthy: (0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(worthy)
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_SliderFlex__WEBPACK_IMPORTED_MODULE_2__.SliderFlex, {
            min: 0,
            max: maxWorthy,
            value: worthy,
            onValueChange: propertyValueChanged,
            valueIncrement: worthyIncrement
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "slider-input",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_3__.NumberRangeInput, {
              min: 0,
              max: maxWorthy,
              value: worthy,
              unit: t('eurSign'),
              onValueChange: propertyValueChanged
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "slider-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "option-label",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            children: [t('calculator.monthlyFee.title'), "*"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: "value-label",
          children: t('calculator.monthlyFee.value', {
            minFee: (0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(minFee),
            maxFee: (0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(maxFee)
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "dsk",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ButtonsBar__WEBPACK_IMPORTED_MODULE_6__.ButtonsBar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Options, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function () {
  return [_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations];
});

_c = Options;

var _c;

$RefreshReg$(_c, "Options");

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

/***/ "./src/templates/Calculator/index.tsx":
/*!********************************************!*\
  !*** ./src/templates/Calculator/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.ts");
/* harmony import */ var _ButtonsBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonsBar */ "./src/templates/Calculator/ButtonsBar.tsx");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graph */ "./src/templates/Calculator/Graph.tsx");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Options */ "./src/templates/Calculator/Options.tsx");
/* harmony import */ var _useCalculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useCalculator */ "./src/templates/Calculator/useCalculator.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Calculator\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Calculator = function Calculator(_ref) {
  _s();

  var title = _ref.title,
      showOptionsTitle = _ref.showOptionsTitle;

  var _useCalculator = (0,_useCalculator__WEBPACK_IMPORTED_MODULE_5__.useCalculator)(250000),
      worthy = _useCalculator.worthy,
      worthyIncrement = _useCalculator.worthyIncrement,
      maxWorthy = _useCalculator.maxWorthy,
      minMonthlyFee = _useCalculator.minMonthlyFee,
      maxMonthlyFee = _useCalculator.maxMonthlyFee,
      worthyRangePercentage = _useCalculator.worthyRangePercentage,
      minMonthlyFeeRangePercentage = _useCalculator.minMonthlyFeeRangePercentage,
      onWorthyChange = _useCalculator.onWorthyChange;

  var t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('calculator');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
    id: "calculator",
    className: "mx-auto px-4 sm:px-6 pb-24",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "calc",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Options__WEBPACK_IMPORTED_MODULE_4__.Options, {
            worthy: worthy,
            maxWorthy: maxWorthy,
            worthyIncrement: worthyIncrement,
            minFee: minMonthlyFee,
            maxFee: maxMonthlyFee,
            showTitle: showOptionsTitle,
            onWorthyChange: onWorthyChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Graph__WEBPACK_IMPORTED_MODULE_3__.Graph, {
            worthy: worthy,
            worthyRangePercentage: worthyRangePercentage,
            minMonthlyFee: minMonthlyFee,
            maxMonthlyFee: maxMonthlyFee,
            minMonthlyFeeRangePercentage: minMonthlyFeeRangePercentage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "mb",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ButtonsBar__WEBPACK_IMPORTED_MODULE_2__.ButtonsBar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "footer",
        children: ["*", t('footnote')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Calculator, "u1CLOXQXugXQ/LoYHzVZMc5UmJQ=", false, function () {
  return [_useCalculator__WEBPACK_IMPORTED_MODULE_5__.useCalculator, _locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations];
});

_c = Calculator;
/* harmony default export */ __webpack_exports__["default"] = (Calculator);

var _c;

$RefreshReg$(_c, "Calculator");

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

/***/ "./src/templates/Calculator/useCalculator.ts":
/*!***************************************************!*\
  !*** ./src/templates/Calculator/useCalculator.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCalculator": function() { return /* binding */ useCalculator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


var MAX_WORTHY = 1250000;
var WORTHY_INCREMENT = 25000;
var YEARLY_FEE_MIN_INDEX = 0.028;
var YEARLY_FEE_MAX_INDEX = 0.04;
var useCalculator = function useCalculator(defaultValue) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),
      worthy = _useState[0],
      setWorthy = _useState[1];

  var onWorthyChange = function onWorthyChange(value) {
    if (value < 0 || value > MAX_WORTHY) {
      throw Error('Invalid worthy value');
    }

    setWorthy(value);
  };

  var minYearlyFee = YEARLY_FEE_MIN_INDEX * worthy;
  var maxYearlyFee = YEARLY_FEE_MAX_INDEX * worthy; // logarithmic

  var worthyRangePercentage = worthy ? Math.round(Math.log(worthy) / Math.log(MAX_WORTHY) * 100) : 0;
  var minMonthlyFeeRangePercentage = minYearlyFee ? Math.round(Math.log(minYearlyFee / 12) / Math.log(MAX_WORTHY) * 100 / 10) : 0;
  return {
    maxWorthy: MAX_WORTHY,
    worthy: worthy,
    worthyIncrement: WORTHY_INCREMENT,
    minMonthlyFee: Math.round(minYearlyFee / 12),
    maxMonthlyFee: Math.round(maxYearlyFee / 12),
    worthyRangePercentage: worthyRangePercentage,
    minMonthlyFeeRangePercentage: minMonthlyFeeRangePercentage,
    onWorthyChange: onWorthyChange
  };
};

_s(useCalculator, "bIPVeg9i+rTX4I+RVk2OZG2dSJ0=");

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

/***/ "./src/templates/Calculator/utils/formatNumber.ts":
/*!********************************************************!*\
  !*** ./src/templates/Calculator/utils/formatNumber.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatNumber": function() { return /* binding */ formatNumber; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var formatNumber = function formatNumber(value) {
  return value.toLocaleString('de', {
    minimumFractionDigits: 0
  });
};

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

/***/ "./src/templates/Calculator/utils/tracking.ts":
/*!****************************************************!*\
  !*** ./src/templates/Calculator/utils/tracking.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trackPropertyValueUpdated": function() { return /* binding */ trackPropertyValueUpdated; },
/* harmony export */   "trackContactButtonClicked": function() { return /* binding */ trackContactButtonClicked; },
/* harmony export */   "trackTerminButtonClicked": function() { return /* binding */ trackTerminButtonClicked; },
/* harmony export */   "trackOfferRequestButtonClicked": function() { return /* binding */ trackOfferRequestButtonClicked; }
/* harmony export */ });
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/gtag */ "./src/lib/gtag.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var GTAG_EVENT_CATEGORY = 'Calculator';
var trackPropertyValueUpdated = function trackPropertyValueUpdated(label) {
  return (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_0__.event)({
    action: 'property_value_updated',
    category: GTAG_EVENT_CATEGORY,
    label: label
  });
};
var trackContactButtonClicked = function trackContactButtonClicked() {
  return (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_0__.event)({
    action: 'contact_button_clicked',
    category: GTAG_EVENT_CATEGORY,
    label: 'CTA'
  });
};
var trackTerminButtonClicked = function trackTerminButtonClicked() {
  return (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_0__.event)({
    action: 'termin_button_clicked',
    category: GTAG_EVENT_CATEGORY,
    label: 'CTA'
  });
};
var trackOfferRequestButtonClicked = function trackOfferRequestButtonClicked() {
  return (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_0__.event)({
    action: 'offer_request_button_clicked',
    category: GTAG_EVENT_CATEGORY,
    label: 'CTA'
  });
};

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AcademicCapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AcademicCapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AdjustmentsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AdjustmentsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AnnotationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnnotationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArchiveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArchiveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowCircleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowNarrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowSmUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArrowsExpandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AtSymbolIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AtSymbolIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BackspaceIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BackspaceIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BadgeCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgeCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BanIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BanIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BanIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BanIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BeakerIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BeakerIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BeakerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BeakerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BellIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BellIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BellIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BellIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BookOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BookmarkAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookmarkAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BookmarkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BookmarkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function BriefcaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BriefcaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CakeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CakeIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CakeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CakeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CalculatorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalculatorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CalendarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CalendarIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CalendarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalendarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CameraIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CameraIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CashIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CashIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartPieIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartPieIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartSquareBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChatAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChatAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChatIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChatIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDoubleUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronLeftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronLeftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronRightIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronRightIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChevronUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChipIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChipIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 7H7v6h6V7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardCopyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClipboardListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClipboardListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ClockIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ClockIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClockIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ClockIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CloudDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CloudIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CloudUploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 13h2v5a1 1 0 11-2 0v-5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CloudUploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CodeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CodeIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CogIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CogIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CogIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CogIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CollectionIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CollectionIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CollectionIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ColorSwatchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ColorSwatchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CreditCardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreditCardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CubeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CubeIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CubeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CubeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CubeTransparentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CubeTransparentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyBangladeshiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyDollarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyEuroIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyPoundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyRupeeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CurrencyYenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyYenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CursorClickIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CursorClickIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DatabaseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DatabaseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DesktopComputerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DesktopComputerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DeviceMobileIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceMobileIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DeviceTabletIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceTabletIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentDuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentReportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentReportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentSearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentSearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentTextIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentTextIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsCircleHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DotsVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DotsVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DownloadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DownloadIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DuplicateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DuplicateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EmojiHappyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EmojiHappyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EmojiSadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EmojiSadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExclamationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ExternalLinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ExternalLinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EyeIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EyeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EyeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EyeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EyeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FastForwardIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FastForwardIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FilmIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FilmIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FilmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FilterIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FilterIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FilterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FingerPrintIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FingerPrintIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FireIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FireIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FireIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FireIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FlagIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FlagIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FlagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FlagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4m-2-2v4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderDownloadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v4m0 0l-2-2m2 2l2-2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderDownloadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function FolderRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FolderRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GiftIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GiftIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GiftIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GiftIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GlobeAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobeAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/GlobeIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/GlobeIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GlobeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HandIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HandIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HandIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HandIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HashtagIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HashtagIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HashtagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HashtagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HeartIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HeartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HeartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/HomeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/HomeIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HomeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function IdentificationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (IdentificationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InboxIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InboxIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InboxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InboxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InboxInIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InboxInIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InboxInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InboxInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InformationCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (InformationCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/KeyIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/KeyIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function KeyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (KeyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LibraryIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LibraryIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LibraryIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LibraryIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LightBulbIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightBulbIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LightningBoltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightningBoltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LinkIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LinkIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LinkIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LinkIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LocationMarkerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LocationMarkerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LockClosedIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LockClosedIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LockOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LockOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LoginIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LoginIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LoginIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/LogoutIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/LogoutIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LogoutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LogoutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MailIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MailIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MailIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MailIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MailOpenIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MailOpenIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MapIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MapIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MapIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MapIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt1Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt1Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt2Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt2Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt3Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt3Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuAlt4Icon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuAlt4Icon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MenuIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MenuIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MicrophoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MicrophoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MinusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MoonIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MoonIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MoonIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MoonIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MusicNoteIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MusicNoteIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function NewspaperIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NewspaperIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (OfficeBuildingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PaperAirplaneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PaperClipIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PaperClipIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PauseIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PauseIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PauseIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PauseIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PencilAltIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PencilIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PencilIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PencilIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneIncomingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneMissedCallIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhoneOutgoingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PhotographIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PhotographIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhotographIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlayIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlayIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlayIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlayIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlusCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlusIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlusSmIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PlusSmIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PresentationChartBarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PresentationChartLineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PrinterIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PrinterIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PrinterIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PrinterIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PuzzleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PuzzleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function QrcodeIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QrcodeIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (QuestionMarkCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReceiptRefundIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReceiptTaxIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RefreshIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RefreshIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RefreshIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RefreshIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ReplyIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ReplyIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ReplyIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReplyIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RewindIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RewindIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RewindIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RewindIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/RssIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/RssIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RssIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RssIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SaveAsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveAsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SaveIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SaveIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SaveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ScaleIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ScaleIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ScaleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScaleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ScissorsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScissorsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SearchCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SearchIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SearchIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SelectorIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SelectorIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectorIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ServerIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ServerIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ServerIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ServerIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShareIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShareIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShareIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShareIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShieldCheckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShieldCheckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShieldExclamationIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShoppingBagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShoppingBagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ShoppingCartIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SortAscendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SortAscendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SortDescendingIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SortDescendingIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SparklesIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SparklesIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SparklesIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SparklesIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SpeakerphoneIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StarIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StarIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StarIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StarIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StatusOfflineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StatusOfflineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StatusOnlineIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StatusOnlineIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/StopIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/StopIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StopIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StopIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SunIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SunIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SunIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SunIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SupportIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SupportIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SupportIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SupportIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwitchHorizontalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SwitchVerticalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TableIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TableIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TagIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TagIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TagIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TagIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TemplateIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TemplateIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TemplateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TemplateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TerminalIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TerminalIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TerminalIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TerminalIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ThumbDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThumbDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ThumbUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ThumbUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TicketIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TicketIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TicketIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TicketIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TranslateIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TranslateIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TranslateIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TranslateIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrashIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrashIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrashIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrashIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrendingDownIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingDownIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrendingUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/TruckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/TruckIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TruckIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TruckIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UploadIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UploadIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UploadIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UploadIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserAddIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserAddIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserGroupIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserGroupIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UserRemoveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserRemoveIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/UsersIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/UsersIcon.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function UsersIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UsersIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VariableIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VariableIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VariableIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VariableIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VideoCameraIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VideoCameraIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewBoardsIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewBoardsIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewGridAddIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewGridAddIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewGridIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewGridIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ViewListIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ViewListIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ViewListIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewListIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VolumeOffIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeOffIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function VolumeUpIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VolumeUpIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/WifiIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/WifiIcon.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function WifiIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WifiIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XCircleIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XCircleIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (XCircleIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XIcon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XIcon.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (XIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ZoomInIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomInIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ZoomOutIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ZoomOutIcon);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicCapIcon": function() { return /* reexport safe */ _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "AdjustmentsIcon": function() { return /* reexport safe */ _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "AnnotationIcon": function() { return /* reexport safe */ _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "ArchiveIcon": function() { return /* reexport safe */ _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "ArrowCircleDownIcon": function() { return /* reexport safe */ _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "ArrowCircleLeftIcon": function() { return /* reexport safe */ _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "ArrowCircleRightIcon": function() { return /* reexport safe */ _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "ArrowCircleUpIcon": function() { return /* reexport safe */ _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "ArrowDownIcon": function() { return /* reexport safe */ _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "ArrowLeftIcon": function() { return /* reexport safe */ _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "ArrowNarrowDownIcon": function() { return /* reexport safe */ _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "ArrowNarrowLeftIcon": function() { return /* reexport safe */ _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "ArrowNarrowRightIcon": function() { return /* reexport safe */ _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "ArrowNarrowUpIcon": function() { return /* reexport safe */ _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "ArrowRightIcon": function() { return /* reexport safe */ _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "ArrowSmDownIcon": function() { return /* reexport safe */ _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "ArrowSmLeftIcon": function() { return /* reexport safe */ _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "ArrowSmRightIcon": function() { return /* reexport safe */ _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "ArrowSmUpIcon": function() { return /* reexport safe */ _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "ArrowUpIcon": function() { return /* reexport safe */ _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "ArrowsExpandIcon": function() { return /* reexport safe */ _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__.default; },
/* harmony export */   "AtSymbolIcon": function() { return /* reexport safe */ _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__.default; },
/* harmony export */   "BackspaceIcon": function() { return /* reexport safe */ _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__.default; },
/* harmony export */   "BadgeCheckIcon": function() { return /* reexport safe */ _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__.default; },
/* harmony export */   "BanIcon": function() { return /* reexport safe */ _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__.default; },
/* harmony export */   "BeakerIcon": function() { return /* reexport safe */ _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__.default; },
/* harmony export */   "BellIcon": function() { return /* reexport safe */ _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__.default; },
/* harmony export */   "BookOpenIcon": function() { return /* reexport safe */ _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__.default; },
/* harmony export */   "BookmarkAltIcon": function() { return /* reexport safe */ _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__.default; },
/* harmony export */   "BookmarkIcon": function() { return /* reexport safe */ _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__.default; },
/* harmony export */   "BriefcaseIcon": function() { return /* reexport safe */ _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__.default; },
/* harmony export */   "CakeIcon": function() { return /* reexport safe */ _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__.default; },
/* harmony export */   "CalculatorIcon": function() { return /* reexport safe */ _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__.default; },
/* harmony export */   "CalendarIcon": function() { return /* reexport safe */ _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__.default; },
/* harmony export */   "CameraIcon": function() { return /* reexport safe */ _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__.default; },
/* harmony export */   "CashIcon": function() { return /* reexport safe */ _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__.default; },
/* harmony export */   "ChartBarIcon": function() { return /* reexport safe */ _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__.default; },
/* harmony export */   "ChartPieIcon": function() { return /* reexport safe */ _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__.default; },
/* harmony export */   "ChartSquareBarIcon": function() { return /* reexport safe */ _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__.default; },
/* harmony export */   "ChatAlt2Icon": function() { return /* reexport safe */ _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__.default; },
/* harmony export */   "ChatAltIcon": function() { return /* reexport safe */ _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__.default; },
/* harmony export */   "ChatIcon": function() { return /* reexport safe */ _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__.default; },
/* harmony export */   "CheckCircleIcon": function() { return /* reexport safe */ _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__.default; },
/* harmony export */   "CheckIcon": function() { return /* reexport safe */ _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__.default; },
/* harmony export */   "ChevronDoubleDownIcon": function() { return /* reexport safe */ _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__.default; },
/* harmony export */   "ChevronDoubleLeftIcon": function() { return /* reexport safe */ _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__.default; },
/* harmony export */   "ChevronDoubleRightIcon": function() { return /* reexport safe */ _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__.default; },
/* harmony export */   "ChevronDoubleUpIcon": function() { return /* reexport safe */ _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__.default; },
/* harmony export */   "ChevronDownIcon": function() { return /* reexport safe */ _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__.default; },
/* harmony export */   "ChevronLeftIcon": function() { return /* reexport safe */ _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__.default; },
/* harmony export */   "ChevronRightIcon": function() { return /* reexport safe */ _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__.default; },
/* harmony export */   "ChevronUpIcon": function() { return /* reexport safe */ _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__.default; },
/* harmony export */   "ChipIcon": function() { return /* reexport safe */ _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__.default; },
/* harmony export */   "ClipboardCheckIcon": function() { return /* reexport safe */ _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__.default; },
/* harmony export */   "ClipboardCopyIcon": function() { return /* reexport safe */ _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__.default; },
/* harmony export */   "ClipboardListIcon": function() { return /* reexport safe */ _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__.default; },
/* harmony export */   "ClipboardIcon": function() { return /* reexport safe */ _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__.default; },
/* harmony export */   "ClockIcon": function() { return /* reexport safe */ _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__.default; },
/* harmony export */   "CloudDownloadIcon": function() { return /* reexport safe */ _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__.default; },
/* harmony export */   "CloudUploadIcon": function() { return /* reexport safe */ _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__.default; },
/* harmony export */   "CloudIcon": function() { return /* reexport safe */ _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__.default; },
/* harmony export */   "CodeIcon": function() { return /* reexport safe */ _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__.default; },
/* harmony export */   "CogIcon": function() { return /* reexport safe */ _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__.default; },
/* harmony export */   "CollectionIcon": function() { return /* reexport safe */ _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__.default; },
/* harmony export */   "ColorSwatchIcon": function() { return /* reexport safe */ _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__.default; },
/* harmony export */   "CreditCardIcon": function() { return /* reexport safe */ _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__.default; },
/* harmony export */   "CubeTransparentIcon": function() { return /* reexport safe */ _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__.default; },
/* harmony export */   "CubeIcon": function() { return /* reexport safe */ _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__.default; },
/* harmony export */   "CurrencyBangladeshiIcon": function() { return /* reexport safe */ _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__.default; },
/* harmony export */   "CurrencyDollarIcon": function() { return /* reexport safe */ _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__.default; },
/* harmony export */   "CurrencyEuroIcon": function() { return /* reexport safe */ _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__.default; },
/* harmony export */   "CurrencyPoundIcon": function() { return /* reexport safe */ _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__.default; },
/* harmony export */   "CurrencyRupeeIcon": function() { return /* reexport safe */ _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__.default; },
/* harmony export */   "CurrencyYenIcon": function() { return /* reexport safe */ _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__.default; },
/* harmony export */   "CursorClickIcon": function() { return /* reexport safe */ _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__.default; },
/* harmony export */   "DatabaseIcon": function() { return /* reexport safe */ _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__.default; },
/* harmony export */   "DesktopComputerIcon": function() { return /* reexport safe */ _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__.default; },
/* harmony export */   "DeviceMobileIcon": function() { return /* reexport safe */ _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__.default; },
/* harmony export */   "DeviceTabletIcon": function() { return /* reexport safe */ _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__.default; },
/* harmony export */   "DocumentAddIcon": function() { return /* reexport safe */ _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__.default; },
/* harmony export */   "DocumentDownloadIcon": function() { return /* reexport safe */ _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__.default; },
/* harmony export */   "DocumentDuplicateIcon": function() { return /* reexport safe */ _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__.default; },
/* harmony export */   "DocumentRemoveIcon": function() { return /* reexport safe */ _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__.default; },
/* harmony export */   "DocumentReportIcon": function() { return /* reexport safe */ _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__.default; },
/* harmony export */   "DocumentSearchIcon": function() { return /* reexport safe */ _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__.default; },
/* harmony export */   "DocumentTextIcon": function() { return /* reexport safe */ _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__.default; },
/* harmony export */   "DocumentIcon": function() { return /* reexport safe */ _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__.default; },
/* harmony export */   "DotsCircleHorizontalIcon": function() { return /* reexport safe */ _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__.default; },
/* harmony export */   "DotsHorizontalIcon": function() { return /* reexport safe */ _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__.default; },
/* harmony export */   "DotsVerticalIcon": function() { return /* reexport safe */ _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__.default; },
/* harmony export */   "DownloadIcon": function() { return /* reexport safe */ _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__.default; },
/* harmony export */   "DuplicateIcon": function() { return /* reexport safe */ _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__.default; },
/* harmony export */   "EmojiHappyIcon": function() { return /* reexport safe */ _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__.default; },
/* harmony export */   "EmojiSadIcon": function() { return /* reexport safe */ _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__.default; },
/* harmony export */   "ExclamationCircleIcon": function() { return /* reexport safe */ _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__.default; },
/* harmony export */   "ExclamationIcon": function() { return /* reexport safe */ _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__.default; },
/* harmony export */   "ExternalLinkIcon": function() { return /* reexport safe */ _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__.default; },
/* harmony export */   "EyeOffIcon": function() { return /* reexport safe */ _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__.default; },
/* harmony export */   "EyeIcon": function() { return /* reexport safe */ _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__.default; },
/* harmony export */   "FastForwardIcon": function() { return /* reexport safe */ _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__.default; },
/* harmony export */   "FilmIcon": function() { return /* reexport safe */ _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__.default; },
/* harmony export */   "FilterIcon": function() { return /* reexport safe */ _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__.default; },
/* harmony export */   "FingerPrintIcon": function() { return /* reexport safe */ _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__.default; },
/* harmony export */   "FireIcon": function() { return /* reexport safe */ _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__.default; },
/* harmony export */   "FlagIcon": function() { return /* reexport safe */ _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__.default; },
/* harmony export */   "FolderAddIcon": function() { return /* reexport safe */ _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__.default; },
/* harmony export */   "FolderDownloadIcon": function() { return /* reexport safe */ _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__.default; },
/* harmony export */   "FolderOpenIcon": function() { return /* reexport safe */ _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__.default; },
/* harmony export */   "FolderRemoveIcon": function() { return /* reexport safe */ _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__.default; },
/* harmony export */   "FolderIcon": function() { return /* reexport safe */ _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__.default; },
/* harmony export */   "GiftIcon": function() { return /* reexport safe */ _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__.default; },
/* harmony export */   "GlobeAltIcon": function() { return /* reexport safe */ _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__.default; },
/* harmony export */   "GlobeIcon": function() { return /* reexport safe */ _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__.default; },
/* harmony export */   "HandIcon": function() { return /* reexport safe */ _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__.default; },
/* harmony export */   "HashtagIcon": function() { return /* reexport safe */ _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__.default; },
/* harmony export */   "HeartIcon": function() { return /* reexport safe */ _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__.default; },
/* harmony export */   "HomeIcon": function() { return /* reexport safe */ _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__.default; },
/* harmony export */   "IdentificationIcon": function() { return /* reexport safe */ _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__.default; },
/* harmony export */   "InboxInIcon": function() { return /* reexport safe */ _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__.default; },
/* harmony export */   "InboxIcon": function() { return /* reexport safe */ _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__.default; },
/* harmony export */   "InformationCircleIcon": function() { return /* reexport safe */ _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__.default; },
/* harmony export */   "KeyIcon": function() { return /* reexport safe */ _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__.default; },
/* harmony export */   "LibraryIcon": function() { return /* reexport safe */ _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__.default; },
/* harmony export */   "LightBulbIcon": function() { return /* reexport safe */ _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__.default; },
/* harmony export */   "LightningBoltIcon": function() { return /* reexport safe */ _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__.default; },
/* harmony export */   "LinkIcon": function() { return /* reexport safe */ _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__.default; },
/* harmony export */   "LocationMarkerIcon": function() { return /* reexport safe */ _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__.default; },
/* harmony export */   "LockClosedIcon": function() { return /* reexport safe */ _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__.default; },
/* harmony export */   "LockOpenIcon": function() { return /* reexport safe */ _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__.default; },
/* harmony export */   "LoginIcon": function() { return /* reexport safe */ _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__.default; },
/* harmony export */   "LogoutIcon": function() { return /* reexport safe */ _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__.default; },
/* harmony export */   "MailOpenIcon": function() { return /* reexport safe */ _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__.default; },
/* harmony export */   "MailIcon": function() { return /* reexport safe */ _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__.default; },
/* harmony export */   "MapIcon": function() { return /* reexport safe */ _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__.default; },
/* harmony export */   "MenuAlt1Icon": function() { return /* reexport safe */ _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__.default; },
/* harmony export */   "MenuAlt2Icon": function() { return /* reexport safe */ _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__.default; },
/* harmony export */   "MenuAlt3Icon": function() { return /* reexport safe */ _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__.default; },
/* harmony export */   "MenuAlt4Icon": function() { return /* reexport safe */ _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__.default; },
/* harmony export */   "MenuIcon": function() { return /* reexport safe */ _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__.default; },
/* harmony export */   "MicrophoneIcon": function() { return /* reexport safe */ _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__.default; },
/* harmony export */   "MinusCircleIcon": function() { return /* reexport safe */ _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__.default; },
/* harmony export */   "MinusSmIcon": function() { return /* reexport safe */ _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__.default; },
/* harmony export */   "MinusIcon": function() { return /* reexport safe */ _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__.default; },
/* harmony export */   "MoonIcon": function() { return /* reexport safe */ _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__.default; },
/* harmony export */   "MusicNoteIcon": function() { return /* reexport safe */ _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__.default; },
/* harmony export */   "NewspaperIcon": function() { return /* reexport safe */ _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__.default; },
/* harmony export */   "OfficeBuildingIcon": function() { return /* reexport safe */ _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__.default; },
/* harmony export */   "PaperAirplaneIcon": function() { return /* reexport safe */ _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__.default; },
/* harmony export */   "PaperClipIcon": function() { return /* reexport safe */ _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__.default; },
/* harmony export */   "PauseIcon": function() { return /* reexport safe */ _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__.default; },
/* harmony export */   "PencilAltIcon": function() { return /* reexport safe */ _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__.default; },
/* harmony export */   "PencilIcon": function() { return /* reexport safe */ _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__.default; },
/* harmony export */   "PhoneIncomingIcon": function() { return /* reexport safe */ _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__.default; },
/* harmony export */   "PhoneMissedCallIcon": function() { return /* reexport safe */ _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__.default; },
/* harmony export */   "PhoneOutgoingIcon": function() { return /* reexport safe */ _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__.default; },
/* harmony export */   "PhoneIcon": function() { return /* reexport safe */ _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__.default; },
/* harmony export */   "PhotographIcon": function() { return /* reexport safe */ _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__.default; },
/* harmony export */   "PlayIcon": function() { return /* reexport safe */ _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__.default; },
/* harmony export */   "PlusCircleIcon": function() { return /* reexport safe */ _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__.default; },
/* harmony export */   "PlusSmIcon": function() { return /* reexport safe */ _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__.default; },
/* harmony export */   "PlusIcon": function() { return /* reexport safe */ _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__.default; },
/* harmony export */   "PresentationChartBarIcon": function() { return /* reexport safe */ _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__.default; },
/* harmony export */   "PresentationChartLineIcon": function() { return /* reexport safe */ _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__.default; },
/* harmony export */   "PrinterIcon": function() { return /* reexport safe */ _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__.default; },
/* harmony export */   "PuzzleIcon": function() { return /* reexport safe */ _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__.default; },
/* harmony export */   "QrcodeIcon": function() { return /* reexport safe */ _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__.default; },
/* harmony export */   "QuestionMarkCircleIcon": function() { return /* reexport safe */ _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__.default; },
/* harmony export */   "ReceiptRefundIcon": function() { return /* reexport safe */ _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__.default; },
/* harmony export */   "ReceiptTaxIcon": function() { return /* reexport safe */ _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__.default; },
/* harmony export */   "RefreshIcon": function() { return /* reexport safe */ _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__.default; },
/* harmony export */   "ReplyIcon": function() { return /* reexport safe */ _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__.default; },
/* harmony export */   "RewindIcon": function() { return /* reexport safe */ _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__.default; },
/* harmony export */   "RssIcon": function() { return /* reexport safe */ _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__.default; },
/* harmony export */   "SaveAsIcon": function() { return /* reexport safe */ _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__.default; },
/* harmony export */   "SaveIcon": function() { return /* reexport safe */ _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__.default; },
/* harmony export */   "ScaleIcon": function() { return /* reexport safe */ _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__.default; },
/* harmony export */   "ScissorsIcon": function() { return /* reexport safe */ _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__.default; },
/* harmony export */   "SearchCircleIcon": function() { return /* reexport safe */ _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__.default; },
/* harmony export */   "SearchIcon": function() { return /* reexport safe */ _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__.default; },
/* harmony export */   "SelectorIcon": function() { return /* reexport safe */ _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__.default; },
/* harmony export */   "ServerIcon": function() { return /* reexport safe */ _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__.default; },
/* harmony export */   "ShareIcon": function() { return /* reexport safe */ _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__.default; },
/* harmony export */   "ShieldCheckIcon": function() { return /* reexport safe */ _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__.default; },
/* harmony export */   "ShieldExclamationIcon": function() { return /* reexport safe */ _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__.default; },
/* harmony export */   "ShoppingBagIcon": function() { return /* reexport safe */ _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__.default; },
/* harmony export */   "ShoppingCartIcon": function() { return /* reexport safe */ _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__.default; },
/* harmony export */   "SortAscendingIcon": function() { return /* reexport safe */ _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__.default; },
/* harmony export */   "SortDescendingIcon": function() { return /* reexport safe */ _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__.default; },
/* harmony export */   "SparklesIcon": function() { return /* reexport safe */ _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__.default; },
/* harmony export */   "SpeakerphoneIcon": function() { return /* reexport safe */ _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__.default; },
/* harmony export */   "StarIcon": function() { return /* reexport safe */ _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__.default; },
/* harmony export */   "StatusOfflineIcon": function() { return /* reexport safe */ _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__.default; },
/* harmony export */   "StatusOnlineIcon": function() { return /* reexport safe */ _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__.default; },
/* harmony export */   "StopIcon": function() { return /* reexport safe */ _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__.default; },
/* harmony export */   "SunIcon": function() { return /* reexport safe */ _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__.default; },
/* harmony export */   "SupportIcon": function() { return /* reexport safe */ _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__.default; },
/* harmony export */   "SwitchHorizontalIcon": function() { return /* reexport safe */ _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__.default; },
/* harmony export */   "SwitchVerticalIcon": function() { return /* reexport safe */ _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__.default; },
/* harmony export */   "TableIcon": function() { return /* reexport safe */ _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__.default; },
/* harmony export */   "TagIcon": function() { return /* reexport safe */ _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__.default; },
/* harmony export */   "TemplateIcon": function() { return /* reexport safe */ _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__.default; },
/* harmony export */   "TerminalIcon": function() { return /* reexport safe */ _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__.default; },
/* harmony export */   "ThumbDownIcon": function() { return /* reexport safe */ _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__.default; },
/* harmony export */   "ThumbUpIcon": function() { return /* reexport safe */ _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__.default; },
/* harmony export */   "TicketIcon": function() { return /* reexport safe */ _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__.default; },
/* harmony export */   "TranslateIcon": function() { return /* reexport safe */ _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__.default; },
/* harmony export */   "TrashIcon": function() { return /* reexport safe */ _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__.default; },
/* harmony export */   "TrendingDownIcon": function() { return /* reexport safe */ _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__.default; },
/* harmony export */   "TrendingUpIcon": function() { return /* reexport safe */ _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__.default; },
/* harmony export */   "TruckIcon": function() { return /* reexport safe */ _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__.default; },
/* harmony export */   "UploadIcon": function() { return /* reexport safe */ _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__.default; },
/* harmony export */   "UserAddIcon": function() { return /* reexport safe */ _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__.default; },
/* harmony export */   "UserCircleIcon": function() { return /* reexport safe */ _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__.default; },
/* harmony export */   "UserGroupIcon": function() { return /* reexport safe */ _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__.default; },
/* harmony export */   "UserRemoveIcon": function() { return /* reexport safe */ _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__.default; },
/* harmony export */   "UserIcon": function() { return /* reexport safe */ _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__.default; },
/* harmony export */   "UsersIcon": function() { return /* reexport safe */ _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__.default; },
/* harmony export */   "VariableIcon": function() { return /* reexport safe */ _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__.default; },
/* harmony export */   "VideoCameraIcon": function() { return /* reexport safe */ _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__.default; },
/* harmony export */   "ViewBoardsIcon": function() { return /* reexport safe */ _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__.default; },
/* harmony export */   "ViewGridAddIcon": function() { return /* reexport safe */ _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__.default; },
/* harmony export */   "ViewGridIcon": function() { return /* reexport safe */ _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__.default; },
/* harmony export */   "ViewListIcon": function() { return /* reexport safe */ _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__.default; },
/* harmony export */   "VolumeOffIcon": function() { return /* reexport safe */ _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__.default; },
/* harmony export */   "VolumeUpIcon": function() { return /* reexport safe */ _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__.default; },
/* harmony export */   "WifiIcon": function() { return /* reexport safe */ _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__.default; },
/* harmony export */   "XCircleIcon": function() { return /* reexport safe */ _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__.default; },
/* harmony export */   "XIcon": function() { return /* reexport safe */ _XIcon_js__WEBPACK_IMPORTED_MODULE_227__.default; },
/* harmony export */   "ZoomInIcon": function() { return /* reexport safe */ _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__.default; },
/* harmony export */   "ZoomOutIcon": function() { return /* reexport safe */ _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__.default; }
/* harmony export */ });
/* harmony import */ var _AcademicCapIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcademicCapIcon.js */ "./node_modules/@heroicons/react/solid/esm/AcademicCapIcon.js");
/* harmony import */ var _AdjustmentsIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdjustmentsIcon.js */ "./node_modules/@heroicons/react/solid/esm/AdjustmentsIcon.js");
/* harmony import */ var _AnnotationIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationIcon.js */ "./node_modules/@heroicons/react/solid/esm/AnnotationIcon.js");
/* harmony import */ var _ArchiveIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArchiveIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArchiveIcon.js");
/* harmony import */ var _ArrowCircleDownIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowCircleDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleDownIcon.js");
/* harmony import */ var _ArrowCircleLeftIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArrowCircleLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleLeftIcon.js");
/* harmony import */ var _ArrowCircleRightIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArrowCircleRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleRightIcon.js");
/* harmony import */ var _ArrowCircleUpIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArrowCircleUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowCircleUpIcon.js");
/* harmony import */ var _ArrowDownIcon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArrowDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowDownIcon.js");
/* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ArrowLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var _ArrowNarrowDownIcon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ArrowNarrowDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowDownIcon.js");
/* harmony import */ var _ArrowNarrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArrowNarrowLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowLeftIcon.js");
/* harmony import */ var _ArrowNarrowRightIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArrowNarrowRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowRightIcon.js");
/* harmony import */ var _ArrowNarrowUpIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ArrowNarrowUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowNarrowUpIcon.js");
/* harmony import */ var _ArrowRightIcon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArrowRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowRightIcon.js");
/* harmony import */ var _ArrowSmDownIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ArrowSmDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmDownIcon.js");
/* harmony import */ var _ArrowSmLeftIcon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ArrowSmLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmLeftIcon.js");
/* harmony import */ var _ArrowSmRightIcon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArrowSmRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmRightIcon.js");
/* harmony import */ var _ArrowSmUpIcon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArrowSmUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowSmUpIcon.js");
/* harmony import */ var _ArrowUpIcon_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ArrowUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowUpIcon.js");
/* harmony import */ var _ArrowsExpandIcon_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ArrowsExpandIcon.js */ "./node_modules/@heroicons/react/solid/esm/ArrowsExpandIcon.js");
/* harmony import */ var _AtSymbolIcon_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AtSymbolIcon.js */ "./node_modules/@heroicons/react/solid/esm/AtSymbolIcon.js");
/* harmony import */ var _BackspaceIcon_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BackspaceIcon.js */ "./node_modules/@heroicons/react/solid/esm/BackspaceIcon.js");
/* harmony import */ var _BadgeCheckIcon_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./BadgeCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/BadgeCheckIcon.js");
/* harmony import */ var _BanIcon_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./BanIcon.js */ "./node_modules/@heroicons/react/solid/esm/BanIcon.js");
/* harmony import */ var _BeakerIcon_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BeakerIcon.js */ "./node_modules/@heroicons/react/solid/esm/BeakerIcon.js");
/* harmony import */ var _BellIcon_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./BellIcon.js */ "./node_modules/@heroicons/react/solid/esm/BellIcon.js");
/* harmony import */ var _BookOpenIcon_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./BookOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookOpenIcon.js");
/* harmony import */ var _BookmarkAltIcon_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BookmarkAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookmarkAltIcon.js");
/* harmony import */ var _BookmarkIcon_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./BookmarkIcon.js */ "./node_modules/@heroicons/react/solid/esm/BookmarkIcon.js");
/* harmony import */ var _BriefcaseIcon_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./BriefcaseIcon.js */ "./node_modules/@heroicons/react/solid/esm/BriefcaseIcon.js");
/* harmony import */ var _CakeIcon_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CakeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CakeIcon.js");
/* harmony import */ var _CalculatorIcon_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./CalculatorIcon.js */ "./node_modules/@heroicons/react/solid/esm/CalculatorIcon.js");
/* harmony import */ var _CalendarIcon_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CalendarIcon.js */ "./node_modules/@heroicons/react/solid/esm/CalendarIcon.js");
/* harmony import */ var _CameraIcon_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./CameraIcon.js */ "./node_modules/@heroicons/react/solid/esm/CameraIcon.js");
/* harmony import */ var _CashIcon_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./CashIcon.js */ "./node_modules/@heroicons/react/solid/esm/CashIcon.js");
/* harmony import */ var _ChartBarIcon_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ChartBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartBarIcon.js");
/* harmony import */ var _ChartPieIcon_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ChartPieIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartPieIcon.js");
/* harmony import */ var _ChartSquareBarIcon_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ChartSquareBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChartSquareBarIcon.js");
/* harmony import */ var _ChatAlt2Icon_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ChatAlt2Icon.js */ "./node_modules/@heroicons/react/solid/esm/ChatAlt2Icon.js");
/* harmony import */ var _ChatAltIcon_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ChatAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChatAltIcon.js");
/* harmony import */ var _ChatIcon_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ChatIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChatIcon.js");
/* harmony import */ var _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./CheckCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js");
/* harmony import */ var _CheckIcon_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _ChevronDoubleDownIcon_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ChevronDoubleDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleDownIcon.js");
/* harmony import */ var _ChevronDoubleLeftIcon_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ChevronDoubleLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleLeftIcon.js");
/* harmony import */ var _ChevronDoubleRightIcon_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ChevronDoubleRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleRightIcon.js");
/* harmony import */ var _ChevronDoubleUpIcon_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ChevronDoubleUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDoubleUpIcon.js");
/* harmony import */ var _ChevronDownIcon_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ChevronDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _ChevronLeftIcon_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ChevronLeftIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js");
/* harmony import */ var _ChevronRightIcon_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ChevronRightIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js");
/* harmony import */ var _ChevronUpIcon_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ChevronUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js");
/* harmony import */ var _ChipIcon_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ChipIcon.js */ "./node_modules/@heroicons/react/solid/esm/ChipIcon.js");
/* harmony import */ var _ClipboardCheckIcon_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ClipboardCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js");
/* harmony import */ var _ClipboardCopyIcon_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ClipboardCopyIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardCopyIcon.js");
/* harmony import */ var _ClipboardListIcon_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ClipboardListIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js");
/* harmony import */ var _ClipboardIcon_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ClipboardIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClipboardIcon.js");
/* harmony import */ var _ClockIcon_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ClockIcon.js */ "./node_modules/@heroicons/react/solid/esm/ClockIcon.js");
/* harmony import */ var _CloudDownloadIcon_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./CloudDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudDownloadIcon.js");
/* harmony import */ var _CloudUploadIcon_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./CloudUploadIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudUploadIcon.js");
/* harmony import */ var _CloudIcon_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./CloudIcon.js */ "./node_modules/@heroicons/react/solid/esm/CloudIcon.js");
/* harmony import */ var _CodeIcon_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./CodeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CodeIcon.js");
/* harmony import */ var _CogIcon_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./CogIcon.js */ "./node_modules/@heroicons/react/solid/esm/CogIcon.js");
/* harmony import */ var _CollectionIcon_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./CollectionIcon.js */ "./node_modules/@heroicons/react/solid/esm/CollectionIcon.js");
/* harmony import */ var _ColorSwatchIcon_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./ColorSwatchIcon.js */ "./node_modules/@heroicons/react/solid/esm/ColorSwatchIcon.js");
/* harmony import */ var _CreditCardIcon_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./CreditCardIcon.js */ "./node_modules/@heroicons/react/solid/esm/CreditCardIcon.js");
/* harmony import */ var _CubeTransparentIcon_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./CubeTransparentIcon.js */ "./node_modules/@heroicons/react/solid/esm/CubeTransparentIcon.js");
/* harmony import */ var _CubeIcon_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./CubeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CubeIcon.js");
/* harmony import */ var _CurrencyBangladeshiIcon_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./CurrencyBangladeshiIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyBangladeshiIcon.js");
/* harmony import */ var _CurrencyDollarIcon_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./CurrencyDollarIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyDollarIcon.js");
/* harmony import */ var _CurrencyEuroIcon_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./CurrencyEuroIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyEuroIcon.js");
/* harmony import */ var _CurrencyPoundIcon_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./CurrencyPoundIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyPoundIcon.js");
/* harmony import */ var _CurrencyRupeeIcon_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./CurrencyRupeeIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyRupeeIcon.js");
/* harmony import */ var _CurrencyYenIcon_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./CurrencyYenIcon.js */ "./node_modules/@heroicons/react/solid/esm/CurrencyYenIcon.js");
/* harmony import */ var _CursorClickIcon_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./CursorClickIcon.js */ "./node_modules/@heroicons/react/solid/esm/CursorClickIcon.js");
/* harmony import */ var _DatabaseIcon_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./DatabaseIcon.js */ "./node_modules/@heroicons/react/solid/esm/DatabaseIcon.js");
/* harmony import */ var _DesktopComputerIcon_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./DesktopComputerIcon.js */ "./node_modules/@heroicons/react/solid/esm/DesktopComputerIcon.js");
/* harmony import */ var _DeviceMobileIcon_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./DeviceMobileIcon.js */ "./node_modules/@heroicons/react/solid/esm/DeviceMobileIcon.js");
/* harmony import */ var _DeviceTabletIcon_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./DeviceTabletIcon.js */ "./node_modules/@heroicons/react/solid/esm/DeviceTabletIcon.js");
/* harmony import */ var _DocumentAddIcon_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./DocumentAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentAddIcon.js");
/* harmony import */ var _DocumentDownloadIcon_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./DocumentDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentDownloadIcon.js");
/* harmony import */ var _DocumentDuplicateIcon_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./DocumentDuplicateIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentDuplicateIcon.js");
/* harmony import */ var _DocumentRemoveIcon_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./DocumentRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentRemoveIcon.js");
/* harmony import */ var _DocumentReportIcon_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./DocumentReportIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentReportIcon.js");
/* harmony import */ var _DocumentSearchIcon_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./DocumentSearchIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentSearchIcon.js");
/* harmony import */ var _DocumentTextIcon_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./DocumentTextIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentTextIcon.js");
/* harmony import */ var _DocumentIcon_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./DocumentIcon.js */ "./node_modules/@heroicons/react/solid/esm/DocumentIcon.js");
/* harmony import */ var _DotsCircleHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./DotsCircleHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsCircleHorizontalIcon.js");
/* harmony import */ var _DotsHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./DotsHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsHorizontalIcon.js");
/* harmony import */ var _DotsVerticalIcon_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./DotsVerticalIcon.js */ "./node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js");
/* harmony import */ var _DownloadIcon_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./DownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/DownloadIcon.js");
/* harmony import */ var _DuplicateIcon_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./DuplicateIcon.js */ "./node_modules/@heroicons/react/solid/esm/DuplicateIcon.js");
/* harmony import */ var _EmojiHappyIcon_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./EmojiHappyIcon.js */ "./node_modules/@heroicons/react/solid/esm/EmojiHappyIcon.js");
/* harmony import */ var _EmojiSadIcon_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./EmojiSadIcon.js */ "./node_modules/@heroicons/react/solid/esm/EmojiSadIcon.js");
/* harmony import */ var _ExclamationCircleIcon_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./ExclamationCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js");
/* harmony import */ var _ExclamationIcon_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./ExclamationIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExclamationIcon.js");
/* harmony import */ var _ExternalLinkIcon_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./ExternalLinkIcon.js */ "./node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js");
/* harmony import */ var _EyeOffIcon_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./EyeOffIcon.js */ "./node_modules/@heroicons/react/solid/esm/EyeOffIcon.js");
/* harmony import */ var _EyeIcon_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./EyeIcon.js */ "./node_modules/@heroicons/react/solid/esm/EyeIcon.js");
/* harmony import */ var _FastForwardIcon_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./FastForwardIcon.js */ "./node_modules/@heroicons/react/solid/esm/FastForwardIcon.js");
/* harmony import */ var _FilmIcon_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./FilmIcon.js */ "./node_modules/@heroicons/react/solid/esm/FilmIcon.js");
/* harmony import */ var _FilterIcon_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./FilterIcon.js */ "./node_modules/@heroicons/react/solid/esm/FilterIcon.js");
/* harmony import */ var _FingerPrintIcon_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./FingerPrintIcon.js */ "./node_modules/@heroicons/react/solid/esm/FingerPrintIcon.js");
/* harmony import */ var _FireIcon_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./FireIcon.js */ "./node_modules/@heroicons/react/solid/esm/FireIcon.js");
/* harmony import */ var _FlagIcon_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./FlagIcon.js */ "./node_modules/@heroicons/react/solid/esm/FlagIcon.js");
/* harmony import */ var _FolderAddIcon_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./FolderAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderAddIcon.js");
/* harmony import */ var _FolderDownloadIcon_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./FolderDownloadIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderDownloadIcon.js");
/* harmony import */ var _FolderOpenIcon_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./FolderOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderOpenIcon.js");
/* harmony import */ var _FolderRemoveIcon_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./FolderRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderRemoveIcon.js");
/* harmony import */ var _FolderIcon_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./FolderIcon.js */ "./node_modules/@heroicons/react/solid/esm/FolderIcon.js");
/* harmony import */ var _GiftIcon_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./GiftIcon.js */ "./node_modules/@heroicons/react/solid/esm/GiftIcon.js");
/* harmony import */ var _GlobeAltIcon_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./GlobeAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js");
/* harmony import */ var _GlobeIcon_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./GlobeIcon.js */ "./node_modules/@heroicons/react/solid/esm/GlobeIcon.js");
/* harmony import */ var _HandIcon_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./HandIcon.js */ "./node_modules/@heroicons/react/solid/esm/HandIcon.js");
/* harmony import */ var _HashtagIcon_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./HashtagIcon.js */ "./node_modules/@heroicons/react/solid/esm/HashtagIcon.js");
/* harmony import */ var _HeartIcon_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./HeartIcon.js */ "./node_modules/@heroicons/react/solid/esm/HeartIcon.js");
/* harmony import */ var _HomeIcon_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./HomeIcon.js */ "./node_modules/@heroicons/react/solid/esm/HomeIcon.js");
/* harmony import */ var _IdentificationIcon_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./IdentificationIcon.js */ "./node_modules/@heroicons/react/solid/esm/IdentificationIcon.js");
/* harmony import */ var _InboxInIcon_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./InboxInIcon.js */ "./node_modules/@heroicons/react/solid/esm/InboxInIcon.js");
/* harmony import */ var _InboxIcon_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./InboxIcon.js */ "./node_modules/@heroicons/react/solid/esm/InboxIcon.js");
/* harmony import */ var _InformationCircleIcon_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./InformationCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js");
/* harmony import */ var _KeyIcon_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./KeyIcon.js */ "./node_modules/@heroicons/react/solid/esm/KeyIcon.js");
/* harmony import */ var _LibraryIcon_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./LibraryIcon.js */ "./node_modules/@heroicons/react/solid/esm/LibraryIcon.js");
/* harmony import */ var _LightBulbIcon_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./LightBulbIcon.js */ "./node_modules/@heroicons/react/solid/esm/LightBulbIcon.js");
/* harmony import */ var _LightningBoltIcon_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./LightningBoltIcon.js */ "./node_modules/@heroicons/react/solid/esm/LightningBoltIcon.js");
/* harmony import */ var _LinkIcon_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./LinkIcon.js */ "./node_modules/@heroicons/react/solid/esm/LinkIcon.js");
/* harmony import */ var _LocationMarkerIcon_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./LocationMarkerIcon.js */ "./node_modules/@heroicons/react/solid/esm/LocationMarkerIcon.js");
/* harmony import */ var _LockClosedIcon_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./LockClosedIcon.js */ "./node_modules/@heroicons/react/solid/esm/LockClosedIcon.js");
/* harmony import */ var _LockOpenIcon_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./LockOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/LockOpenIcon.js");
/* harmony import */ var _LoginIcon_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./LoginIcon.js */ "./node_modules/@heroicons/react/solid/esm/LoginIcon.js");
/* harmony import */ var _LogoutIcon_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./LogoutIcon.js */ "./node_modules/@heroicons/react/solid/esm/LogoutIcon.js");
/* harmony import */ var _MailOpenIcon_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./MailOpenIcon.js */ "./node_modules/@heroicons/react/solid/esm/MailOpenIcon.js");
/* harmony import */ var _MailIcon_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./MailIcon.js */ "./node_modules/@heroicons/react/solid/esm/MailIcon.js");
/* harmony import */ var _MapIcon_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./MapIcon.js */ "./node_modules/@heroicons/react/solid/esm/MapIcon.js");
/* harmony import */ var _MenuAlt1Icon_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./MenuAlt1Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt1Icon.js");
/* harmony import */ var _MenuAlt2Icon_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./MenuAlt2Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js");
/* harmony import */ var _MenuAlt3Icon_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./MenuAlt3Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt3Icon.js");
/* harmony import */ var _MenuAlt4Icon_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./MenuAlt4Icon.js */ "./node_modules/@heroicons/react/solid/esm/MenuAlt4Icon.js");
/* harmony import */ var _MenuIcon_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./MenuIcon.js */ "./node_modules/@heroicons/react/solid/esm/MenuIcon.js");
/* harmony import */ var _MicrophoneIcon_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./MicrophoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/MicrophoneIcon.js");
/* harmony import */ var _MinusCircleIcon_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./MinusCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusCircleIcon.js");
/* harmony import */ var _MinusSmIcon_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./MinusSmIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusSmIcon.js");
/* harmony import */ var _MinusIcon_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./MinusIcon.js */ "./node_modules/@heroicons/react/solid/esm/MinusIcon.js");
/* harmony import */ var _MoonIcon_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./MoonIcon.js */ "./node_modules/@heroicons/react/solid/esm/MoonIcon.js");
/* harmony import */ var _MusicNoteIcon_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./MusicNoteIcon.js */ "./node_modules/@heroicons/react/solid/esm/MusicNoteIcon.js");
/* harmony import */ var _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./NewspaperIcon.js */ "./node_modules/@heroicons/react/solid/esm/NewspaperIcon.js");
/* harmony import */ var _OfficeBuildingIcon_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./OfficeBuildingIcon.js */ "./node_modules/@heroicons/react/solid/esm/OfficeBuildingIcon.js");
/* harmony import */ var _PaperAirplaneIcon_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./PaperAirplaneIcon.js */ "./node_modules/@heroicons/react/solid/esm/PaperAirplaneIcon.js");
/* harmony import */ var _PaperClipIcon_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./PaperClipIcon.js */ "./node_modules/@heroicons/react/solid/esm/PaperClipIcon.js");
/* harmony import */ var _PauseIcon_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./PauseIcon.js */ "./node_modules/@heroicons/react/solid/esm/PauseIcon.js");
/* harmony import */ var _PencilAltIcon_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./PencilAltIcon.js */ "./node_modules/@heroicons/react/solid/esm/PencilAltIcon.js");
/* harmony import */ var _PencilIcon_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./PencilIcon.js */ "./node_modules/@heroicons/react/solid/esm/PencilIcon.js");
/* harmony import */ var _PhoneIncomingIcon_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./PhoneIncomingIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneIncomingIcon.js");
/* harmony import */ var _PhoneMissedCallIcon_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./PhoneMissedCallIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneMissedCallIcon.js");
/* harmony import */ var _PhoneOutgoingIcon_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./PhoneOutgoingIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneOutgoingIcon.js");
/* harmony import */ var _PhoneIcon_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./PhoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhoneIcon.js");
/* harmony import */ var _PhotographIcon_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./PhotographIcon.js */ "./node_modules/@heroicons/react/solid/esm/PhotographIcon.js");
/* harmony import */ var _PlayIcon_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./PlayIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlayIcon.js");
/* harmony import */ var _PlusCircleIcon_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./PlusCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusCircleIcon.js");
/* harmony import */ var _PlusSmIcon_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./PlusSmIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusSmIcon.js");
/* harmony import */ var _PlusIcon_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./PlusIcon.js */ "./node_modules/@heroicons/react/solid/esm/PlusIcon.js");
/* harmony import */ var _PresentationChartBarIcon_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./PresentationChartBarIcon.js */ "./node_modules/@heroicons/react/solid/esm/PresentationChartBarIcon.js");
/* harmony import */ var _PresentationChartLineIcon_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./PresentationChartLineIcon.js */ "./node_modules/@heroicons/react/solid/esm/PresentationChartLineIcon.js");
/* harmony import */ var _PrinterIcon_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./PrinterIcon.js */ "./node_modules/@heroicons/react/solid/esm/PrinterIcon.js");
/* harmony import */ var _PuzzleIcon_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./PuzzleIcon.js */ "./node_modules/@heroicons/react/solid/esm/PuzzleIcon.js");
/* harmony import */ var _QrcodeIcon_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./QrcodeIcon.js */ "./node_modules/@heroicons/react/solid/esm/QrcodeIcon.js");
/* harmony import */ var _QuestionMarkCircleIcon_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./QuestionMarkCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/QuestionMarkCircleIcon.js");
/* harmony import */ var _ReceiptRefundIcon_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./ReceiptRefundIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReceiptRefundIcon.js");
/* harmony import */ var _ReceiptTaxIcon_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./ReceiptTaxIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReceiptTaxIcon.js");
/* harmony import */ var _RefreshIcon_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./RefreshIcon.js */ "./node_modules/@heroicons/react/solid/esm/RefreshIcon.js");
/* harmony import */ var _ReplyIcon_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./ReplyIcon.js */ "./node_modules/@heroicons/react/solid/esm/ReplyIcon.js");
/* harmony import */ var _RewindIcon_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./RewindIcon.js */ "./node_modules/@heroicons/react/solid/esm/RewindIcon.js");
/* harmony import */ var _RssIcon_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./RssIcon.js */ "./node_modules/@heroicons/react/solid/esm/RssIcon.js");
/* harmony import */ var _SaveAsIcon_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./SaveAsIcon.js */ "./node_modules/@heroicons/react/solid/esm/SaveAsIcon.js");
/* harmony import */ var _SaveIcon_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./SaveIcon.js */ "./node_modules/@heroicons/react/solid/esm/SaveIcon.js");
/* harmony import */ var _ScaleIcon_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./ScaleIcon.js */ "./node_modules/@heroicons/react/solid/esm/ScaleIcon.js");
/* harmony import */ var _ScissorsIcon_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./ScissorsIcon.js */ "./node_modules/@heroicons/react/solid/esm/ScissorsIcon.js");
/* harmony import */ var _SearchCircleIcon_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./SearchCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/SearchCircleIcon.js");
/* harmony import */ var _SearchIcon_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./SearchIcon.js */ "./node_modules/@heroicons/react/solid/esm/SearchIcon.js");
/* harmony import */ var _SelectorIcon_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./SelectorIcon.js */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _ServerIcon_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./ServerIcon.js */ "./node_modules/@heroicons/react/solid/esm/ServerIcon.js");
/* harmony import */ var _ShareIcon_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./ShareIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShareIcon.js");
/* harmony import */ var _ShieldCheckIcon_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./ShieldCheckIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShieldCheckIcon.js");
/* harmony import */ var _ShieldExclamationIcon_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./ShieldExclamationIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShieldExclamationIcon.js");
/* harmony import */ var _ShoppingBagIcon_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./ShoppingBagIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShoppingBagIcon.js");
/* harmony import */ var _ShoppingCartIcon_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./ShoppingCartIcon.js */ "./node_modules/@heroicons/react/solid/esm/ShoppingCartIcon.js");
/* harmony import */ var _SortAscendingIcon_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./SortAscendingIcon.js */ "./node_modules/@heroicons/react/solid/esm/SortAscendingIcon.js");
/* harmony import */ var _SortDescendingIcon_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./SortDescendingIcon.js */ "./node_modules/@heroicons/react/solid/esm/SortDescendingIcon.js");
/* harmony import */ var _SparklesIcon_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./SparklesIcon.js */ "./node_modules/@heroicons/react/solid/esm/SparklesIcon.js");
/* harmony import */ var _SpeakerphoneIcon_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./SpeakerphoneIcon.js */ "./node_modules/@heroicons/react/solid/esm/SpeakerphoneIcon.js");
/* harmony import */ var _StarIcon_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./StarIcon.js */ "./node_modules/@heroicons/react/solid/esm/StarIcon.js");
/* harmony import */ var _StatusOfflineIcon_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./StatusOfflineIcon.js */ "./node_modules/@heroicons/react/solid/esm/StatusOfflineIcon.js");
/* harmony import */ var _StatusOnlineIcon_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./StatusOnlineIcon.js */ "./node_modules/@heroicons/react/solid/esm/StatusOnlineIcon.js");
/* harmony import */ var _StopIcon_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./StopIcon.js */ "./node_modules/@heroicons/react/solid/esm/StopIcon.js");
/* harmony import */ var _SunIcon_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./SunIcon.js */ "./node_modules/@heroicons/react/solid/esm/SunIcon.js");
/* harmony import */ var _SupportIcon_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./SupportIcon.js */ "./node_modules/@heroicons/react/solid/esm/SupportIcon.js");
/* harmony import */ var _SwitchHorizontalIcon_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./SwitchHorizontalIcon.js */ "./node_modules/@heroicons/react/solid/esm/SwitchHorizontalIcon.js");
/* harmony import */ var _SwitchVerticalIcon_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./SwitchVerticalIcon.js */ "./node_modules/@heroicons/react/solid/esm/SwitchVerticalIcon.js");
/* harmony import */ var _TableIcon_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./TableIcon.js */ "./node_modules/@heroicons/react/solid/esm/TableIcon.js");
/* harmony import */ var _TagIcon_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./TagIcon.js */ "./node_modules/@heroicons/react/solid/esm/TagIcon.js");
/* harmony import */ var _TemplateIcon_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./TemplateIcon.js */ "./node_modules/@heroicons/react/solid/esm/TemplateIcon.js");
/* harmony import */ var _TerminalIcon_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./TerminalIcon.js */ "./node_modules/@heroicons/react/solid/esm/TerminalIcon.js");
/* harmony import */ var _ThumbDownIcon_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./ThumbDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/ThumbDownIcon.js");
/* harmony import */ var _ThumbUpIcon_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./ThumbUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js");
/* harmony import */ var _TicketIcon_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./TicketIcon.js */ "./node_modules/@heroicons/react/solid/esm/TicketIcon.js");
/* harmony import */ var _TranslateIcon_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./TranslateIcon.js */ "./node_modules/@heroicons/react/solid/esm/TranslateIcon.js");
/* harmony import */ var _TrashIcon_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./TrashIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrashIcon.js");
/* harmony import */ var _TrendingDownIcon_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./TrendingDownIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrendingDownIcon.js");
/* harmony import */ var _TrendingUpIcon_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./TrendingUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js");
/* harmony import */ var _TruckIcon_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./TruckIcon.js */ "./node_modules/@heroicons/react/solid/esm/TruckIcon.js");
/* harmony import */ var _UploadIcon_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./UploadIcon.js */ "./node_modules/@heroicons/react/solid/esm/UploadIcon.js");
/* harmony import */ var _UserAddIcon_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./UserAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserAddIcon.js");
/* harmony import */ var _UserCircleIcon_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./UserCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserCircleIcon.js");
/* harmony import */ var _UserGroupIcon_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./UserGroupIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserGroupIcon.js");
/* harmony import */ var _UserRemoveIcon_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./UserRemoveIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserRemoveIcon.js");
/* harmony import */ var _UserIcon_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./UserIcon.js */ "./node_modules/@heroicons/react/solid/esm/UserIcon.js");
/* harmony import */ var _UsersIcon_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./UsersIcon.js */ "./node_modules/@heroicons/react/solid/esm/UsersIcon.js");
/* harmony import */ var _VariableIcon_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./VariableIcon.js */ "./node_modules/@heroicons/react/solid/esm/VariableIcon.js");
/* harmony import */ var _VideoCameraIcon_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./VideoCameraIcon.js */ "./node_modules/@heroicons/react/solid/esm/VideoCameraIcon.js");
/* harmony import */ var _ViewBoardsIcon_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./ViewBoardsIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewBoardsIcon.js");
/* harmony import */ var _ViewGridAddIcon_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./ViewGridAddIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewGridAddIcon.js");
/* harmony import */ var _ViewGridIcon_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./ViewGridIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewGridIcon.js");
/* harmony import */ var _ViewListIcon_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./ViewListIcon.js */ "./node_modules/@heroicons/react/solid/esm/ViewListIcon.js");
/* harmony import */ var _VolumeOffIcon_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./VolumeOffIcon.js */ "./node_modules/@heroicons/react/solid/esm/VolumeOffIcon.js");
/* harmony import */ var _VolumeUpIcon_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./VolumeUpIcon.js */ "./node_modules/@heroicons/react/solid/esm/VolumeUpIcon.js");
/* harmony import */ var _WifiIcon_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./WifiIcon.js */ "./node_modules/@heroicons/react/solid/esm/WifiIcon.js");
/* harmony import */ var _XCircleIcon_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./XCircleIcon.js */ "./node_modules/@heroicons/react/solid/esm/XCircleIcon.js");
/* harmony import */ var _XIcon_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./XIcon.js */ "./node_modules/@heroicons/react/solid/esm/XIcon.js");
/* harmony import */ var _ZoomInIcon_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./ZoomInIcon.js */ "./node_modules/@heroicons/react/solid/esm/ZoomInIcon.js");
/* harmony import */ var _ZoomOutIcon_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./ZoomOutIcon.js */ "./node_modules/@heroicons/react/solid/esm/ZoomOutIcon.js");







































































































































































































































/***/ })

}]);