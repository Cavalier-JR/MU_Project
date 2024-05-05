'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var index = require('./src/index2.js');
var item = require('./src/item2.js');
var install = require('../../utils/vue/install2.js');

const ElSteps = install.withInstall(index["default"], {
  Step: item["default"]
});
const ElStep = install.withNoopInstall(item["default"]);

exports.ElStep = ElStep;
exports.ElSteps = ElSteps;
exports["default"] = ElSteps;
//# sourceMappingURL=index2.js.map
