import TimePicker from './src/time-picker2.mjs';
export { default as CommonPicker } from './src/common/picker2.mjs';
export { default as TimePickPanel } from './src/time-picker-com/panel-time-pick2.mjs';
export { extractDateFormat, extractTimeFormat, rangeArr } from './src/common/date-utils2.mjs';
export { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER, DEFAULT_FORMATS_TIME } from './src/common/constant2.mjs';
export { timePickerDefaultProps } from './src/common/props2.mjs';

const _TimePicker = TimePicker;
_TimePicker.install = (app) => {
  app.component(_TimePicker.name, _TimePicker);
};
const ElTimePicker = _TimePicker;

export { ElTimePicker, _TimePicker as default };
//# sourceMappingURL=index2.mjs.map
