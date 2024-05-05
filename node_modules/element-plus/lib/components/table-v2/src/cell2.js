'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var common = require('./common2.js');
var props = require('../../../utils/vue/props2.js');

const tableV2CellProps = props.buildProps({
  class: String,
  cellData: {
    type: props.definePropType([String, Boolean, Number, Object])
  },
  column: common.column,
  columnIndex: Number,
  style: {
    type: props.definePropType([String, Array, Object])
  },
  rowData: {
    type: props.definePropType(Object)
  },
  rowIndex: Number
});

exports.tableV2CellProps = tableV2CellProps;
//# sourceMappingURL=cell2.js.map
