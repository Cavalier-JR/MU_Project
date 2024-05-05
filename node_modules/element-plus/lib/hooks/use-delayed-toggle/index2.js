'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../utils/index2.js');
var index = require('../use-timeout/index2.js');
var props = require('../../utils/vue/props2.js');

const useDelayedToggleProps = props.buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = index.useTimeout();
  const onOpen = () => {
    registerTimeout(() => {
      open();
    }, vue.unref(showAfter));
  };
  const onClose = () => {
    registerTimeout(() => {
      close();
    }, vue.unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};

exports.useDelayedToggle = useDelayedToggle;
exports.useDelayedToggleProps = useDelayedToggleProps;
//# sourceMappingURL=index2.js.map
