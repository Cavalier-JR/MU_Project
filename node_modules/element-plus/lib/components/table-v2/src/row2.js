'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../virtual-list/index2.js');
var common = require('./common2.js');
var props = require('../../../utils/vue/props2.js');
var props$1 = require('../../virtual-list/src/props2.js');

const tableV2RowProps = props.buildProps({
  class: String,
  columns: common.columns,
  columnsStyles: {
    type: props.definePropType(Object),
    required: true
  },
  depth: Number,
  expandColumnKey: common.expandColumnKey,
  estimatedRowHeight: {
    ...props$1.virtualizedGridProps.estimatedRowHeight,
    default: void 0
  },
  isScrolling: Boolean,
  onRowExpand: {
    type: props.definePropType(Function)
  },
  onRowHover: {
    type: props.definePropType(Function)
  },
  onRowHeightChange: {
    type: props.definePropType(Function)
  },
  rowData: {
    type: props.definePropType(Object),
    required: true
  },
  rowEventHandlers: {
    type: props.definePropType(Object)
  },
  rowIndex: {
    type: Number,
    required: true
  },
  rowKey: common.rowKey,
  style: {
    type: props.definePropType(Object)
  }
});

exports.tableV2RowProps = tableV2RowProps;
//# sourceMappingURL=row2.js.map
