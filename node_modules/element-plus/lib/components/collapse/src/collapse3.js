'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../../constants/index2.js');
var core = require('@vueuse/core');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');
var event = require('../../../constants/event2.js');

const emitChangeFn = (value) => typeof core.isNumber(value);
const collapseProps = props.buildProps({
  accordion: Boolean,
  modelValue: {
    type: props.definePropType([Array, String, Number]),
    default: () => typescript.mutable([])
  }
});
const collapseEmits = {
  [event.UPDATE_MODEL_EVENT]: emitChangeFn,
  [event.CHANGE_EVENT]: emitChangeFn
};

exports.collapseEmits = collapseEmits;
exports.collapseProps = collapseProps;
exports.emitChangeFn = emitChangeFn;
//# sourceMappingURL=collapse3.js.map
