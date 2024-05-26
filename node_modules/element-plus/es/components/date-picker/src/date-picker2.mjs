import { defineComponent, provide, ref, h, renderSlot } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import localeData from 'dayjs/plugin/localeData.js';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
import weekYear from 'dayjs/plugin/weekYear.js';
import dayOfYear from 'dayjs/plugin/dayOfYear.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import '../../time-picker/index2.mjs';
import DatePickPanel from './date-picker-com/panel-date-pick2.mjs';
import DateRangePickPanel from './date-picker-com/panel-date-range2.mjs';
import MonthRangePickPanel from './date-picker-com/panel-month-range2.mjs';
import { ROOT_PICKER_INJECTION_KEY } from './date-picker.type2.mjs';
import { timePickerDefaultProps } from '../../time-picker/src/common/props2.mjs';
import { DEFAULT_FORMATS_DATEPICKER, DEFAULT_FORMATS_DATE } from '../../time-picker/src/common/constant2.mjs';
import CommonPicker from '../../time-picker/src/common/picker2.mjs';

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
const getPanel = function(type) {
  if (type === "daterange" || type === "datetimerange") {
    return DateRangePickPanel;
  } else if (type === "monthrange") {
    return MonthRangePickPanel;
  }
  return DatePickPanel;
};
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    type: {
      type: String,
      default: "date"
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    provide("ElPopperOptions", props.popperOptions);
    provide(ROOT_PICKER_INJECTION_KEY, {
      ctx
    });
    const commonPicker = ref(null);
    const refProps = {
      ...props,
      focus: (focusStartInput = true) => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.focus(focusStartInput);
      }
    };
    ctx.expose(refProps);
    return () => {
      var _a;
      const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      return h(CommonPicker, {
        ...props,
        format,
        type: props.type,
        ref: commonPicker,
        "onUpdate:modelValue": (value) => ctx.emit("update:modelValue", value)
      }, {
        default: (scopedProps) => h(getPanel(props.type), scopedProps),
        "range-separator": () => renderSlot(ctx.slots, "range-separator")
      });
    };
  }
});

export { DatePicker as default };
//# sourceMappingURL=date-picker2.mjs.map
