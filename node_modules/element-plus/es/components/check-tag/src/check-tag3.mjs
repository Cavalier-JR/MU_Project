import '../../../utils/index2.mjs';
import { buildProps } from '../../../utils/vue/props2.mjs';
import { isBoolean } from '@vueuse/core';

const checkTagProps = buildProps({
  checked: {
    type: Boolean,
    default: false
  }
});
const checkTagEmits = {
  "update:checked": (value) => isBoolean(value),
  change: (value) => isBoolean(value)
};

export { checkTagEmits, checkTagProps };
//# sourceMappingURL=check-tag3.mjs.map
