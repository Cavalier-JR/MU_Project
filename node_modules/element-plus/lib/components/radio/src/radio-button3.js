'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var radio = require('./radio3.js');
var props = require('../../../utils/vue/props2.js');

const radioButtonProps = props.buildProps({
  ...radio.radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});

exports.radioButtonProps = radioButtonProps;
//# sourceMappingURL=radio-button3.js.map
