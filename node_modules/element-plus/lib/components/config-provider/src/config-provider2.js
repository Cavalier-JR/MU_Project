'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
require('../../../constants/index2.js');
var props = require('../../../utils/vue/props2.js');
var size = require('../../../constants/size2.js');
var index = require('../../../hooks/use-global-config/index2.js');

const messageConfig = {};
const configProviderProps = props.buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: props.definePropType(Object)
  },
  size: {
    type: String,
    values: size.componentSizes,
    default: ""
  },
  button: {
    type: props.definePropType(Object)
  },
  experimentalFeatures: {
    type: props.definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: props.definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
var ConfigProvider = vue.defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    vue.watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = index.provideGlobalConfig(props);
    return () => vue.renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

exports.configProviderProps = configProviderProps;
exports["default"] = ConfigProvider;
exports.messageConfig = messageConfig;
//# sourceMappingURL=config-provider2.js.map
