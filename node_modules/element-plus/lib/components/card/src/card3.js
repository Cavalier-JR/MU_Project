'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const cardProps = props.buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: props.definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    default: "always"
  }
});

exports.cardProps = cardProps;
//# sourceMappingURL=card3.js.map
