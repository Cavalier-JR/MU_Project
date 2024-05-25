'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var rand = require('../../../utils/rand2.js');

const collapseItemProps = props.buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: props.definePropType([String, Number]),
    default: () => rand.generateId()
  },
  disabled: Boolean
});

exports.collapseItemProps = collapseItemProps;
//# sourceMappingURL=collapse-item3.js.map
