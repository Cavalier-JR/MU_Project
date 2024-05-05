'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var common = require('./common2.js');
var props = require('../../../utils/vue/props2.js');

const tableV2HeaderRowProps = props.buildProps({
  class: String,
  columns: common.columns,
  columnsStyles: {
    type: props.definePropType(Object),
    required: true
  },
  headerIndex: Number,
  style: { type: props.definePropType(Object) }
});

exports.tableV2HeaderRowProps = tableV2HeaderRowProps;
//# sourceMappingURL=header-row2.js.map
