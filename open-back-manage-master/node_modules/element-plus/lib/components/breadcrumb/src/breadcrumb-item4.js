'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const breadcrumbItemProps = props.buildProps({
  to: {
    type: props.definePropType([String, Object]),
    default: ""
  },
  replace: {
    type: Boolean,
    default: false
  }
});

exports.breadcrumbItemProps = breadcrumbItemProps;
//# sourceMappingURL=breadcrumb-item4.js.map
