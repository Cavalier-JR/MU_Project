'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var defaults = require('./defaults2.js');
var props = require('../../../utils/vue/props2.js');
var typescript = require('../../../utils/typescript2.js');

const itemSize = props.buildProp({
  type: props.definePropType([Number, Function]),
  required: true
});
const estimatedItemSize = props.buildProp({
  type: Number
});
const cache = props.buildProp({
  type: Number,
  default: 2
});
const direction = props.buildProp({
  type: String,
  values: ["ltr", "rtl"],
  default: "ltr"
});
const initScrollOffset = props.buildProp({
  type: Number,
  default: 0
});
const total = props.buildProp({
  type: Number,
  required: true
});
const layout = props.buildProp({
  type: String,
  values: ["horizontal", "vertical"],
  default: defaults.VERTICAL
});
const virtualizedProps = props.buildProps({
  className: {
    type: String,
    default: ""
  },
  containerElement: {
    type: props.definePropType([String, Object]),
    default: "div"
  },
  data: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  direction,
  height: {
    type: [String, Number],
    required: true
  },
  innerElement: {
    type: [String, Object],
    default: "div"
  },
  style: {
    type: props.definePropType([Object, String, Array])
  },
  useIsScrolling: {
    type: Boolean,
    default: false
  },
  width: {
    type: [Number, String],
    required: false
  },
  perfMode: {
    type: Boolean,
    default: true
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false
  }
});
const virtualizedListProps = props.buildProps({
  cache,
  estimatedItemSize,
  layout,
  initScrollOffset,
  total,
  itemSize,
  ...virtualizedProps
});
const scrollbarSize = {
  type: Number,
  default: 6
};
const startGap = { type: Number, default: 0 };
const endGap = { type: Number, default: 2 };
const virtualizedGridProps = props.buildProps({
  columnCache: cache,
  columnWidth: itemSize,
  estimatedColumnWidth: estimatedItemSize,
  estimatedRowHeight: estimatedItemSize,
  initScrollLeft: initScrollOffset,
  initScrollTop: initScrollOffset,
  itemKey: {
    type: props.definePropType(Function),
    default: ({ columnIndex, rowIndex }) => `${rowIndex}:${columnIndex}`
  },
  rowCache: cache,
  rowHeight: itemSize,
  totalColumn: total,
  totalRow: total,
  hScrollbarSize: scrollbarSize,
  vScrollbarSize: scrollbarSize,
  scrollbarStartGap: startGap,
  scrollbarEndGap: endGap,
  ...virtualizedProps
});
const virtualizedScrollbarProps = props.buildProps({
  alwaysOn: Boolean,
  class: String,
  layout,
  total,
  ratio: {
    type: Number,
    required: true
  },
  clientSize: {
    type: Number,
    required: true
  },
  scrollFrom: {
    type: Number,
    required: true
  },
  scrollbarSize,
  startGap,
  endGap,
  visible: Boolean
});

exports.virtualizedGridProps = virtualizedGridProps;
exports.virtualizedListProps = virtualizedListProps;
exports.virtualizedProps = virtualizedProps;
exports.virtualizedScrollbarProps = virtualizedScrollbarProps;
//# sourceMappingURL=props2.js.map
