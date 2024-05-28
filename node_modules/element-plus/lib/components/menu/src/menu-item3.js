'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var shared = require('@vue/shared');

const menuItemProps = props.buildProps({
  index: {
    type: props.definePropType([String, null]),
    default: null
  },
  route: {
    type: props.definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => shared.isString(item.index) && Array.isArray(item.indexPath)
};

exports.menuItemEmits = menuItemEmits;
exports.menuItemProps = menuItemProps;
//# sourceMappingURL=menu-item3.js.map
