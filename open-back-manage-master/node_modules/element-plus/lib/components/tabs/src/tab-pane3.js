'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const tabPaneProps = props.buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number],
    default: ""
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});

exports.tabPaneProps = tabPaneProps;
//# sourceMappingURL=tab-pane3.js.map
