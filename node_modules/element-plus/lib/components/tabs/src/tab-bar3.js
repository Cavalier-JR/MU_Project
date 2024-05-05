'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');

const tabBarProps = props.buildProps({
  tabs: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  }
});

exports.tabBarProps = tabBarProps;
//# sourceMappingURL=tab-bar3.js.map
