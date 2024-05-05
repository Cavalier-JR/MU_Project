import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event2.mjs';

const calendarProps = buildProps({
  modelValue: {
    type: Date
  },
  range: {
    type: definePropType(Array),
    validator: (range) => Array.isArray(range) && range.length === 2 && range.every((item) => item instanceof Date)
  }
});
const calendarEmits = {
  [UPDATE_MODEL_EVENT]: (value) => value instanceof Date,
  input: (value) => value instanceof Date
};

export { calendarEmits, calendarProps };
//# sourceMappingURL=calendar4.mjs.map
