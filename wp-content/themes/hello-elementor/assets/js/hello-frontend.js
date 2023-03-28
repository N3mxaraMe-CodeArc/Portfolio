/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/dev/js/frontend/hello-frontend.js":
/*!**************************************************!*\
  !*** ./assets/dev/js/frontend/hello-frontend.js ***!
  \**************************************************/
/***/ (() => {

eval("\n\nclass elementorHelloThemeHandler {\n  constructor() {\n    this.initSettings();\n    this.initElements();\n    this.bindEvents();\n  }\n  initSettings() {\n    this.settings = {\n      selectors: {\n        header: 'header.site-header',\n        footer: 'footer.site-footer',\n        menuToggle: '.site-header .site-navigation-toggle',\n        menuToggleHolder: '.site-header .site-navigation-toggle-holder',\n        dropdownMenu: '.site-header .site-navigation-dropdown'\n      }\n    };\n  }\n  initElements() {\n    this.elements = {\n      $window: jQuery(window),\n      $document: jQuery(document),\n      $header: jQuery(this.settings.selectors.header),\n      $footer: jQuery(this.settings.selectors.footer),\n      $menuToggle: jQuery(this.settings.selectors.menuToggle),\n      $menuToggleHolder: jQuery(this.settings.selectors.menuToggleHolder),\n      $dropdownMenu: jQuery(this.settings.selectors.dropdownMenu)\n    };\n  }\n  bindEvents() {\n    this.elements.$menuToggle.on('click', () => this.handleMenuToggle()).on('keyup', event => {\n      const ENTER_KEY = 13,\n        SPACE_KEY = 32;\n      if (ENTER_KEY === event.keyCode || SPACE_KEY === event.keyCode) {\n        event.currentTarget.click();\n      }\n    });\n    this.elements.$dropdownMenu.on('click', '.menu-item-has-children > a', this.handleMenuChildren);\n  }\n  closeMenuItems() {\n    this.elements.$menuToggleHolder.removeClass('elementor-active');\n    this.elements.$window.off('resize', () => this.closeMenuItems());\n  }\n  handleMenuToggle() {\n    const isDropdownVisible = !this.elements.$menuToggleHolder.hasClass('elementor-active');\n    this.elements.$menuToggle.attr('aria-expanded', isDropdownVisible);\n    this.elements.$dropdownMenu.attr('aria-hidden', !isDropdownVisible);\n    this.elements.$menuToggleHolder.toggleClass('elementor-active', isDropdownVisible);\n\n    // Always close all sub active items.\n    this.elements.$dropdownMenu.find('.elementor-active').removeClass('elementor-active');\n    if (isDropdownVisible) {\n      this.elements.$window.on('resize', () => this.closeMenuItems());\n    } else {\n      this.elements.$window.off('resize', () => this.closeMenuItems());\n    }\n  }\n  handleMenuChildren(event) {\n    const $anchor = jQuery(event.currentTarget),\n      $parentLi = $anchor.parent('li'),\n      isSubmenuVisible = $parentLi.hasClass('elementor-active');\n    if (!isSubmenuVisible) {\n      $parentLi.addClass('elementor-active');\n    } else {\n      $parentLi.removeClass('elementor-active');\n    }\n  }\n}\njQuery(() => {\n  new elementorHelloThemeHandler();\n});\n\n//# sourceURL=././assets/dev/js/frontend/hello-frontend.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/dev/js/frontend/hello-frontend.js"]();
/******/ 	
/******/ })()
;