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
  "Slot": function() { return /* reexport */ Slot; },
  "createInjectorFor": function() { return /* reexport */ createInjectorFor; },
  "flushInjections": function() { return /* reexport */ flushInjections; },
  "getInjectionsOf": function() { return /* reexport */ getInjectionsOf; },
  "inject": function() { return /* reexport */ inject; },
  "useInjectionsOf": function() { return /* reexport */ useInjectionsOf; }
});

;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: ./packages/locations/src/components/error-boundary.tsx

class ErrorBoundary extends external_React_namespaceObject.Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
;// CONCATENATED MODULE: ./packages/locations/src/components/filler-wrapper.tsx


function FillerWrapper({
  children
}) {
  return /*#__PURE__*/React.createElement(ErrorBoundary, {
    fallback: null
  }, /*#__PURE__*/React.createElement(external_React_namespaceObject.Suspense, {
    fallback: null
  }, children));
}
;// CONCATENATED MODULE: ./packages/locations/src/injections.tsx

const DEFAULT_PRIORITY = 10;
const injections = new Map();
function inject({
  location,
  filler,
  name,
  options = {}
}) {
  const id = generateId(location, name);
  if (injections.has(id) && !options?.overwrite) {
    // eslint-disable-next-line no-console
    console.error(`An injection named "${name}" under location "${location}" already exists. Did you mean to use "options.overwrite"?`);
    return;
  }
  const injection = {
    id,
    location,
    filler: wrapFiller(filler),
    priority: options.priority ?? DEFAULT_PRIORITY
  };
  injections.set(id, injection);
}
function createInjectorFor(location) {
  return ({
    filler,
    name,
    options
  }) => {
    return inject({
      location,
      name,
      filler,
      options
    });
  };
}
function getInjectionsOf(location) {
  return [...injections.values()].filter(injection => injection.location === location).sort((a, b) => a.priority - b.priority);
}
function flushInjections() {
  injections.clear();
}
function wrapFiller(FillerComponent) {
  return () => /*#__PURE__*/React.createElement(FillerWrapper, null, /*#__PURE__*/React.createElement(FillerComponent, null));
}
function generateId(location, name) {
  return `${location}::${name}`;
}
;// CONCATENATED MODULE: ./packages/locations/src/hooks/use-injections-of.ts


function useInjectionsOf(locations) {
  return (0,external_React_namespaceObject.useMemo)(() => {
    if (Array.isArray(locations)) {
      return locations.map(location => getInjectionsOf(location));
    }
    return getInjectionsOf(locations);
  }, [locations]);
}
;// CONCATENATED MODULE: ./packages/locations/src/components/slot.tsx


function Slot({
  location
}) {
  const injections = useInjectionsOf(location);
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, injections.map(({
    id,
    filler: Filler
  }) => /*#__PURE__*/external_React_namespaceObject.createElement(Filler, {
    key: id
  })));
}
;// CONCATENATED MODULE: ./packages/locations/src/index.ts




(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).locations = __webpack_exports__;
/******/ })()
;