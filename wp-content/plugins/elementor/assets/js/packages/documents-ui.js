/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.ui"
var external_UNSTABLE_elementorPackages_ui_namespaceObject = __UNSTABLE__elementorPackages.ui;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.documents"
var external_UNSTABLE_elementorPackages_documents_namespaceObject = __UNSTABLE__elementorPackages.documents;
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/settings-button.tsx




function SettingsButton({
  type
}) {
  const {
    isActive,
    isBlocked
  } = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useRouteStatus)('panel/page-settings');

  /* translators: %s: Post type label. */
  const title = (0,external_wp_i18n_namespaceObject.__)('%s Settings', 'elementor').replace('%s', type.label);
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Box, {
    component: "span",
    "aria-label": undefined
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ToggleButton, {
    value: "document-settings",
    selected: isActive,
    disabled: isBlocked,
    onChange: () => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.openRoute)('panel/page-settings/settings'),
    "aria-label": title,
    size: "small"
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_icons_namespaceObject.SettingsIcon, null))));
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/indicator.tsx

function Indicator({
  title,
  status
}) {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Typography, {
    variant: "body2",
    sx: {
      maxWidth: '120px'
    },
    noWrap: true
  }, title), status.value !== 'publish' && /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Typography, {
    variant: "body2",
    sx: {
      fontStyle: 'italic'
    }
  }, "(", status.label, ")")));
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/canvas-display.tsx




function CanvasDisplay() {
  const activeDocument = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  const hostDocument = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useHostDocument)();
  const document = activeDocument && activeDocument.type.value !== 'kit' ? activeDocument : hostDocument;
  if (!document) {
    return null;
  }
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Stack, {
    direction: "row",
    spacing: 3,
    sx: {
      paddingInlineStart: 3,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement(Indicator, {
    title: document.title,
    status: document.status
  }), /*#__PURE__*/React.createElement(SettingsButton, {
    type: document.type
  }));
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/primary-action.tsx



function PrimaryAction() {
  const document = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  const {
    save
  } = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocumentActions)();
  if (!document) {
    return null;
  }
  const isDisabled = !isEnabled(document);

  // When the document is being saved, the spinner should not appear.
  // Usually happens when the Kit is being saved.
  const shouldShowSpinner = document.isSaving && !isDisabled;
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Button, {
    variant: "contained",
    sx: {
      width: '120px'
    },
    disabled: isDisabled,
    size: "large",
    onClick: () => !document.isSaving && save()
  }, shouldShowSpinner ? /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.CircularProgress, null) : getLabel(document));
}
function getLabel(document) {
  return document.userCan.publish ? (0,external_wp_i18n_namespaceObject.__)('Publish', 'elementor') : (0,external_wp_i18n_namespaceObject.__)('Submit', 'elementor');
}
function isEnabled(document) {
  if (document.type.value === 'kit') {
    return false;
  }
  return document.isDirty || document.status.value === 'draft';
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/hooks/use-document-preview-props.ts




function useDocumentPreviewProps() {
  const document = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  return {
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.EyeIcon,
    title: (0,external_wp_i18n_namespaceObject.__)('Preview Changes', 'elementor'),
    onClick: () => document && (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('editor/documents/preview', {
      id: document.id
    })
  };
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: ./packages/documents-ui/src/init.ts




function init() {
  registerTopBarMenuItems();
}
function registerTopBarMenuItems() {
  (0,external_UNSTABLE_elementorPackages_topBar_namespaceObject.injectIntoCanvasDisplay)({
    name: 'document-canvas-display',
    filler: CanvasDisplay
  });
  (0,external_UNSTABLE_elementorPackages_topBar_namespaceObject.injectIntoPrimaryAction)({
    name: 'document-primary-action',
    filler: PrimaryAction
  });
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.utilitiesMenu.registerAction({
    name: 'document-preview-button',
    priority: 30,
    // After help.
    useProps: useDocumentPreviewProps
  });
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/index.ts

init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).documentsUi = __webpack_exports__;
/******/ })()
;