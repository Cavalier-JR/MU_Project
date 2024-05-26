'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const tooltipV2Strategies = ["absolute", "fixed"];
const tooltipV2Placements = [
  "top-start",
  "top-end",
  "top",
  "bottom-start",
  "bottom-end",
  "bottom",
  "left-start",
  "left-end",
  "left",
  "right-start",
  "right-end",
  "right"
];
const tooltipV2ContentProps = props.buildProps({
  ariaLabel: String,
  arrowPadding: {
    type: props.definePropType(Number),
    default: 5
  },
  effect: {
    type: String,
    default: ""
  },
  contentClass: String,
  placement: {
    type: props.definePropType(String),
    values: tooltipV2Placements,
    default: "bottom"
  },
  reference: {
    type: props.definePropType(Object),
    default: null
  },
  offset: {
    type: Number,
    default: 8
  },
  strategy: {
    type: props.definePropType(String),
    values: tooltipV2Strategies,
    default: "absolute"
  },
  showArrow: {
    type: Boolean,
    default: false
  }
});

exports.tooltipV2ContentProps = tooltipV2ContentProps;
//# sourceMappingURL=content3.js.map
