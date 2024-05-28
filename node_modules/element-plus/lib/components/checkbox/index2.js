'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var checkbox = require('./src/checkbox2.js');
var checkboxButton = require('./src/checkbox-button2.js');
var checkboxGroup = require('./src/checkbox-group2.js');
var install = require('../../utils/vue/install2.js');

const ElCheckbox = install.withInstall(checkbox["default"], {
  CheckboxButton: checkboxButton["default"],
  CheckboxGroup: checkboxGroup["default"]
});
const ElCheckboxButton = install.withNoopInstall(checkboxButton["default"]);
const ElCheckboxGroup = install.withNoopInstall(checkboxGroup["default"]);

exports.ElCheckbox = ElCheckbox;
exports.ElCheckboxButton = ElCheckboxButton;
exports.ElCheckboxGroup = ElCheckboxGroup;
exports["default"] = ElCheckbox;
//# sourceMappingURL=index2.js.map
