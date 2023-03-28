/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/dev/js/editor/component.js":
/*!*******************************************!*\
  !*** ./assets/dev/js/editor/component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _controlsHook = _interopRequireDefault(__webpack_require__(/*! ./hooks/ui/controls-hook */ \"./assets/dev/js/editor/hooks/ui/controls-hook.js\"));\nclass _default extends $e.modules.ComponentBase {\n  constructor() {\n    super(...arguments);\n    (0, _defineProperty2.default)(this, \"pages\", {});\n  }\n  getNamespace() {\n    return 'hello-elementor';\n  }\n  defaultHooks() {\n    return this.importHooks({\n      ControlsHook: _controlsHook.default\n    });\n  }\n}\nexports[\"default\"] = _default;\n\n//# sourceURL=././assets/dev/js/editor/component.js");

/***/ }),

/***/ "./assets/dev/js/editor/hello-editor.js":
/*!**********************************************!*\
  !*** ./assets/dev/js/editor/hello-editor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _component = _interopRequireDefault(__webpack_require__(/*! ./component */ \"./assets/dev/js/editor/component.js\"));\n$e.components.register(new _component.default());\n\n//# sourceURL=././assets/dev/js/editor/hello-editor.js");

/***/ }),

/***/ "./assets/dev/js/editor/hooks/ui/controls-hook.js":
/*!********************************************************!*\
  !*** ./assets/dev/js/editor/hooks/ui/controls-hook.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nclass ControlsHook extends $e.modules.hookUI.After {\n  getCommand() {\n    // Command to listen.\n    return 'document/elements/settings';\n  }\n  getId() {\n    // Unique id for the hook.\n    return 'hello-elementor-editor-controls-handler';\n  }\n\n  /**\n   * Get Hello Theme Controls\n   *\n   * Returns an object in which the keys are control IDs, and the values are the selectors of the elements that need\n   * to be targeted in the apply() method.\n   *\n   * Example return value:\n   *   {\n   *      hello_elementor_show_logo: '.site-header .site-header-logo',\n   *      hello_elementor_show_menu: '.site-header .site-header-menu',\n   *   }\n   */\n  getHelloThemeControls() {\n    return {\n      hello_header_logo_display: {\n        selector: '.site-header .site-logo, .site-header .site-title',\n        callback: ($element, args) => {\n          this.toggleShowHideClass($element, args.settings.hello_header_logo_display);\n        }\n      },\n      hello_header_menu_display: {\n        selector: '.site-header .site-navigation, .site-header .site-navigation-toggle-holder',\n        callback: ($element, args) => {\n          this.toggleShowHideClass($element, args.settings.hello_header_menu_display);\n        }\n      },\n      hello_header_tagline_display: {\n        selector: '.site-header .site-description',\n        callback: ($element, args) => {\n          this.toggleShowHideClass($element, args.settings.hello_header_tagline_display);\n        }\n      },\n      hello_header_logo_type: {\n        selector: '.site-header .site-branding',\n        callback: ($element, args) => {\n          const classPrefix = 'show-',\n            inputOptions = args.container.controls.hello_header_logo_type.options,\n            inputValue = args.settings.hello_header_logo_type;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_header_layout: {\n        selector: '.site-header',\n        callback: ($element, args) => {\n          const classPrefix = 'header-',\n            inputOptions = args.container.controls.hello_header_layout.options,\n            inputValue = args.settings.hello_header_layout;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_header_width: {\n        selector: '.site-header',\n        callback: ($element, args) => {\n          const classPrefix = 'header-',\n            inputOptions = args.container.controls.hello_header_width.options,\n            inputValue = args.settings.hello_header_width;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_header_menu_layout: {\n        selector: '.site-header',\n        callback: ($element, args) => {\n          const classPrefix = 'menu-layout-',\n            inputOptions = args.container.controls.hello_header_menu_layout.options,\n            inputValue = args.settings.hello_header_menu_layout;\n\n          // No matter what, close the mobile menu\n          $element.find('.site-navigation-toggle-holder').removeClass('elementor-active');\n          $element.find('.site-navigation-dropdown').removeClass('show');\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_header_menu_dropdown: {\n        selector: '.site-header',\n        callback: ($element, args) => {\n          const classPrefix = 'menu-dropdown-',\n            inputOptions = args.container.controls.hello_header_menu_dropdown.options,\n            inputValue = args.settings.hello_header_menu_dropdown;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_footer_logo_display: {\n        selector: '.site-footer .site-logo, .site-footer .site-title',\n        callback: ($element, args) => {\n          this.toggleShowHideClass($element, args.settings.hello_footer_logo_display);\n        }\n      },\n      hello_footer_tagline_display: {\n        selector: '.site-footer .site-description',\n        callback: ($element, args) => {\n          this.toggleShowHideClass($element, args.settings.hello_footer_tagline_display);\n        }\n      },\n      hello_footer_menu_display: {\n        selector: '.site-footer .site-navigation',\n        callback: ($element, args) => {\n          this.toggleShowHideClass($element, args.settings.hello_footer_menu_display);\n        }\n      },\n      hello_footer_copyright_display: {\n        selector: '.site-footer .copyright',\n        callback: ($element, args) => {\n          const $footerContainer = $element.closest('#site-footer'),\n            inputValue = args.settings.hello_footer_copyright_display;\n          this.toggleShowHideClass($element, inputValue);\n          $footerContainer.toggleClass('footer-has-copyright', 'yes' === inputValue);\n        }\n      },\n      hello_footer_logo_type: {\n        selector: '.site-footer .site-branding',\n        callback: ($element, args) => {\n          const classPrefix = 'show-',\n            inputOptions = args.container.controls.hello_footer_logo_type.options,\n            inputValue = args.settings.hello_footer_logo_type;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_footer_layout: {\n        selector: '.site-footer',\n        callback: ($element, args) => {\n          const classPrefix = 'footer-',\n            inputOptions = args.container.controls.hello_footer_layout.options,\n            inputValue = args.settings.hello_footer_layout;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_footer_width: {\n        selector: '.site-footer',\n        callback: ($element, args) => {\n          const classPrefix = 'footer-',\n            inputOptions = args.container.controls.hello_footer_width.options,\n            inputValue = args.settings.hello_footer_width;\n          this.toggleLayoutClass($element, classPrefix, inputOptions, inputValue);\n        }\n      },\n      hello_footer_copyright_text: {\n        selector: '.site-footer .copyright',\n        callback: ($element, args) => {\n          const inputValue = args.settings.hello_footer_copyright_text;\n          $element.find('p').text(inputValue);\n        }\n      }\n    };\n  }\n\n  /**\n   * Toggle show and hide classes on containers\n   *\n   * This will remove the .show and .hide clases from the element, then apply the new class\n   *\n   * @param {jQuery} element\n   * @param {string} inputValue\n   */\n  toggleShowHideClass(element, inputValue) {\n    element.removeClass('hide').removeClass('show').addClass(inputValue ? 'show' : 'hide');\n  }\n\n  /**\n   * Toggle layout classes on containers\n   *\n   * This will cleanly set classes onto which ever container we want to target, removing the old classes and adding the new one\n   *\n   * @param {jQuery} element\n   * @param {string} classPrefix\n   * @param {Object} inputOptions\n   * @param {string} inputValue\n   *\n   */\n  toggleLayoutClass(element, classPrefix, inputOptions, inputValue) {\n    // Loop through the possible classes and remove the one that's not in use\n    Object.entries(inputOptions).forEach(_ref => {\n      let [key] = _ref;\n      element.removeClass(classPrefix + key);\n    });\n\n    // Append the class which we want to use onto the element\n    if ('' !== inputValue) {\n      element.addClass(classPrefix + inputValue);\n    }\n  }\n\n  /**\n   * Set the conditions under which the hook will run.\n   *\n   * @param {Object} args\n   */\n  getConditions(args) {\n    const isKit = 'kit' === elementor.documents.getCurrent().config.type,\n      changedControls = Object.keys(args.settings),\n      isSingleSetting = 1 === changedControls.length;\n\n    // If the document is not a kit, or there are no changed settings, or there is more than one single changed\n    // setting, don't run the hook.\n    if (!isKit || !args.settings || !isSingleSetting) {\n      return false;\n    }\n\n    // If the changed control is in the list of theme controls, return true to run the hook.\n    // Otherwise, return false so the hook doesn't run.\n    return !!Object.keys(this.getHelloThemeControls()).includes(changedControls[0]);\n  }\n\n  /**\n   * The hook logic.\n   *\n   * @param {Object} args\n   */\n  apply(args) {\n    const allThemeControls = this.getHelloThemeControls(),\n      // Extract the control ID from the passed args\n      controlId = Object.keys(args.settings)[0],\n      controlConfig = allThemeControls[controlId],\n      // Find the element that needs to be targeted by the control.\n      $element = elementor.$previewContents.find(controlConfig.selector);\n    controlConfig.callback($element, args);\n  }\n}\nexports[\"default\"] = ControlsHook;\n\n//# sourceURL=././assets/dev/js/editor/hooks/ui/controls-hook.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/toPropertyKey.js\");\nfunction _defineProperty(obj, key, value) {\n  key = toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=././node_modules/@babel/runtime/helpers/defineProperty.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\nmodule.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=././node_modules/@babel/runtime/helpers/interopRequireDefault.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\nmodule.exports = _toPrimitive, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=././node_modules/@babel/runtime/helpers/toPrimitive.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nvar toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/toPrimitive.js\");\nfunction _toPropertyKey(arg) {\n  var key = toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nmodule.exports = _toPropertyKey, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=././node_modules/@babel/runtime/helpers/toPropertyKey.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=././node_modules/@babel/runtime/helpers/typeof.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/dev/js/editor/hello-editor.js");
/******/ 	
/******/ })()
;