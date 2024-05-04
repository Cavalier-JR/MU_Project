'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
require('../../virtual-list/index2.js');
var common = require('./common2.js');
var header = require('./header2.js');
var row = require('./row2.js');
var props = require('../../../utils/vue/props2.js');
var props$1 = require('../../virtual-list/src/props2.js');

const tableV2GridProps = props.buildProps({
  columns: common.columns,
  data: common.dataType,
  fixedData: common.fixedDataType,
  estimatedRowHeight: row.tableV2RowProps.estimatedRowHeight,
  width: common.requiredNumber,
  height: common.requiredNumber,
  headerWidth: common.requiredNumber,
  headerHeight: header.tableV2HeaderProps.headerHeight,
  bodyWidth: common.requiredNumber,
  rowHeight: common.requiredNumber,
  cache: props$1.virtualizedListProps.cache,
  useIsScrolling: Boolean,
  scrollbarAlwaysOn: props$1.virtualizedGridProps.scrollbarAlwaysOn,
  scrollbarStartGap: props$1.virtualizedGridProps.scrollbarStartGap,
  scrollbarEndGap: props$1.virtualizedGridProps.scrollbarEndGap,
  class: common.classType,
  style: common.styleType,
  containerStyle: common.styleType,
  getRowHeight: {
    type: props.definePropType(Function),
    required: true
  },
  rowKey: row.tableV2RowProps.rowKey,
  onRowsRendered: {
    type: props.definePropType(Function)
  },
  onScroll: {
    type: props.definePropType(Function)
  }
});

exports.tableV2GridProps = tableV2GridProps;
//# sourceMappingURL=grid2.js.map
