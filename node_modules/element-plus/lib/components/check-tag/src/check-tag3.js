'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var core = require('@vueuse/core');

const checkTagProps = props.buildProps({
  checked: {
    type: Boolean,
    default: false
  }
});
const checkTagEmits = {
  "update:checked": (value) => core.isBoolean(value),
  change: (value) => core.isBoolean(value)
};

exports.checkTagEmits = checkTagEmits;
exports.checkTagProps = checkTagProps;
//# sourceMappingURL=check-tag3.js.map
