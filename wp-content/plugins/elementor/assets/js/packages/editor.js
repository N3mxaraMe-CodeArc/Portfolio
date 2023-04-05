/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "init": function() { return /* reexport */ init; },
  "injectIntoTop": function() { return /* reexport */ injectIntoTop; },
  "useSettings": function() { return /* reexport */ useSettings; }
});

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.locations"
var external_UNSTABLE_elementorPackages_locations_namespaceObject = __UNSTABLE__elementorPackages.locations;
;// CONCATENATED MODULE: ./packages/editor/src/locations.ts

const LOCATION_TOP = 'editor/top';
const injectIntoTop = (0,external_UNSTABLE_elementorPackages_locations_namespaceObject.createInjectorFor)(LOCATION_TOP);
;// CONCATENATED MODULE: external "ReactDOM"
var external_ReactDOM_namespaceObject = ReactDOM;
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: ./packages/editor/src/components/shell.tsx



function Shell() {
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_locations_namespaceObject.Slot, {
    location: LOCATION_TOP
  });
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.ui"
var external_UNSTABLE_elementorPackages_ui_namespaceObject = __UNSTABLE__elementorPackages.ui;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.store"
var external_UNSTABLE_elementorPackages_store_namespaceObject = __UNSTABLE__elementorPackages.store;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/editor/src/contexts/settings-context.tsx

const SettingsContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)(null);
function SettingsProvider({
  children,
  settings
}) {
  return /*#__PURE__*/React.createElement(SettingsContext.Provider, {
    value: {
      ...settings
    }
  }, children);
}
function useSettings() {
  const context = (0,external_React_namespaceObject.useContext)(SettingsContext);
  if (!context) {
    throw new Error('The `useSettings()` hook must be used within an `<SettingsProvider />`');
  }
  return context;
}
;// CONCATENATED MODULE: ./packages/editor/src/init.tsx







function init(domElement, settings) {
  const store = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.createStore)();
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.dispatchReadyEvent)();
  external_ReactDOM_namespaceObject.render( /*#__PURE__*/React.createElement(SettingsProvider, {
    settings: settings
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_store_namespaceObject.StoreProvider, {
    store: store
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.DirectionProvider, {
    rtl: (0,external_wp_i18n_namespaceObject.isRTL)()
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ThemeProvider, null, /*#__PURE__*/React.createElement(Shell, null))))), domElement);
}
;// CONCATENATED MODULE: ./packages/editor/src/index.ts



(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).editor = __webpack_exports__;
/******/ })()
;