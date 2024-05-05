'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat.js');
var advancedFormat = require('dayjs/plugin/advancedFormat.js');
var localeData = require('dayjs/plugin/localeData.js');
var weekOfYear = require('dayjs/plugin/weekOfYear.js');
var weekYear = require('dayjs/plugin/weekYear.js');
var dayOfYear = require('dayjs/plugin/dayOfYear.js');
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter.js');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore.js');
require('../../time-picker/index2.js');
var panelDatePick = require('./date-picker-com/panel-date-pick2.js');
var panelDateRange = require('./date-picker-com/panel-date-range2.js');
var panelMonthRange = require('./date-picker-com/panel-month-range2.js');
var datePicker_type = require('./date-picker.type2.js');
var props = require('../../time-picker/src/common/props2.js');
var constant = require('../../time-picker/src/common/constant2.js');
var picker = require('../../time-picker/src/common/picker2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var customParseFormat__default = /*#__PURE__*/_interopDefaultLegacy(customParseFormat);
var advancedFormat__default = /*#__PURE__*/_interopDefaultLegacy(advancedFormat);
var localeData__default = /*#__PURE__*/_interopDefaultLegacy(localeData);
var weekOfYear__default = /*#__PURE__*/_interopDefaultLegacy(weekOfYear);
var weekYear__default = /*#__PURE__*/_interopDefaultLegacy(weekYear);
var dayOfYear__default = /*#__PURE__*/_interopDefaultLegacy(dayOfYear);
var isSameOrAfter__default = /*#__PURE__*/_interopDefaultLegacy(isSameOrAfter);
var isSameOrBefore__default = /*#__PURE__*/_interopDefaultLegacy(isSameOrBefore);

dayjs__default["default"].extend(localeData__default["default"]);
dayjs__default["default"].extend(advancedFormat__default["default"]);
dayjs__default["default"].extend(customParseFormat__default["default"]);
dayjs__default["default"].extend(weekOfYear__default["default"]);
dayjs__default["default"].extend(weekYear__default["default"]);
dayjs__default["default"].extend(dayOfYear__default["default"]);
dayjs__default["default"].extend(isSameOrAfter__default["default"]);
dayjs__default["default"].extend(isSameOrBefore__default["default"]);
const getPanel = function(type) {
  if (type === "daterange" || type === "datetimerange") {
    return panelDateRange["default"];
  } else if (type === "monthrange") {
    return panelMonthRange["default"];
  }
  return panelDatePick["default"];
};
var DatePicker = vue.defineComponent({
  name: "ElDatePicker",
  install: null,
  props: {
    ...props.timePickerDefaultProps,
    type: {
      type: String,
      default: "date"
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    vue.provide("ElPopperOptions", props.popperOptions);
    vue.provide(datePicker_type.ROOT_PICKER_INJECTION_KEY, {
      ctx
    });
    const commonPicker = vue.ref(null);
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
      const format = (_a = props.format) != null ? _a : constant.DEFAULT_FORMATS_DATEPICKER[props.type] || constant.DEFAULT_FORMATS_DATE;
      return vue.h(picker["default"], {
        ...props,
        format,
        type: props.type,
        ref: commonPicker,
        "onUpdate:modelValue": (value) => ctx.emit("update:modelValue", value)
      }, {
        default: (scopedProps) => vue.h(getPanel(props.type), scopedProps),
        "range-separator": () => vue.renderSlot(ctx.slots, "range-separator")
      });
    };
  }
});

exports["default"] = DatePicker;
//# sourceMappingURL=date-picker2.js.map
