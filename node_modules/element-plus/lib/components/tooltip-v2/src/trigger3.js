'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index2.js');
var props = require('../../../utils/vue/props2.js');

const EventHandler = {
  type: props.definePropType(Function)
};
const tooltipV2TriggerProps = props.buildProps({
  onBlur: EventHandler,
  onClick: EventHandler,
  onFocus: EventHandler,
  onMouseDown: EventHandler,
  onMouseEnter: EventHandler,
  onMouseLeave: EventHandler
});

exports.tooltipV2TriggerProps = tooltipV2TriggerProps;
//# sourceMappingURL=trigger3.js.map
