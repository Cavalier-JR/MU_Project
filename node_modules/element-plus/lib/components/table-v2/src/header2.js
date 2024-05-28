'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var common = require('./common2.js');
var props = require('../../../utils/vue/props2.js');

const requiredNumberType = {
  type: Number,
  required: true
};
const tableV2HeaderProps = props.buildProps({
  class: String,
  columns: common.columns,
  fixedHeaderData: {
    type: props.definePropType(Array)
  },
  headerData: {
    type: props.definePropType(Array),
    required: true
  },
  headerHeight: {
    type: props.definePropType([Number, Array]),
    default: 50
  },
  rowWidth: requiredNumberType,
  rowHeight: {
    type: Number,
    default: 50
  },
  height: requiredNumberType,
  width: requiredNumberType
});

exports.tableV2HeaderProps = tableV2HeaderProps;
//# sourceMappingURL=header2.js.map
