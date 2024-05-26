import '../../../utils/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    default: "always"
  }
});

export { cardProps };
//# sourceMappingURL=card3.mjs.map
