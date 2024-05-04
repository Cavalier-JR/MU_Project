'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../constants/index2.js');
require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var size = require('../../../constants/size2.js');

const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success"
];
const formItemProps = props.buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: props.definePropType([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: props.definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: size.componentSizes
  }
});

exports.formItemProps = formItemProps;
exports.formItemValidateStates = formItemValidateStates;
//# sourceMappingURL=form-item3.js.map
