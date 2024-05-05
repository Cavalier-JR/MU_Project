import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const teleportProps = buildProps({
  container: {
    type: definePropType(String),
    default: "body"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  style: {
    type: definePropType([String, Array, Object])
  },
  zIndex: {
    type: String,
    default: "2000"
  }
});

export { teleportProps };
//# sourceMappingURL=teleport3.mjs.map
