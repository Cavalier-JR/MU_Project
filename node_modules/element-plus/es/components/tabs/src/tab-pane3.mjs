import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';

const tabPaneProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number],
    default: ""
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});

export { tabPaneProps };
//# sourceMappingURL=tab-pane3.mjs.map
