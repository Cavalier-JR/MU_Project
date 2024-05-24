'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./index2.js');
var focusTrap = require('./src/focus-trap2.js');
var tokens = require('./src/tokens2.js');
var utils = require('./src/utils2.js');



exports.ElFocusTrap = focusTrap["default"];
exports["default"] = focusTrap["default"];
exports.FOCUS_ON_MOUNT = tokens.FOCUS_ON_MOUNT;
exports.FOCUS_ON_MOUNT_OPTS = tokens.FOCUS_ON_MOUNT_OPTS;
exports.FOCUS_ON_UNMOUNT = tokens.FOCUS_ON_UNMOUNT;
exports.FOCUS_TRAP_INJECTION_KEY = tokens.FOCUS_TRAP_INJECTION_KEY;
exports.ON_MOUNT_FOCUS_EVT = tokens.ON_MOUNT_FOCUS_EVT;
exports.ON_UNMOUNT_FOCUS_EVT = tokens.ON_UNMOUNT_FOCUS_EVT;
exports.focusFirstDescendant = utils.focusFirstDescendant;
exports.focusableStack = utils.focusableStack;
exports.getEdges = utils.getEdges;
exports.getVisibleElement = utils.getVisibleElement;
exports.isHidden = utils.isHidden;
exports.obtainAllFocusableElements = utils.obtainAllFocusableElements;
exports.tryFocus = utils.tryFocus;
//# sourceMappingURL=index.js.map
