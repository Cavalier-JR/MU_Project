import '../../utils/index2.mjs';
import Checkbox from './src/checkbox2.mjs';
import CheckboxButton from './src/checkbox-button2.mjs';
import CheckboxGroup from './src/checkbox-group2.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
const ElCheckboxButton = withNoopInstall(CheckboxButton);
const ElCheckboxGroup = withNoopInstall(CheckboxGroup);

export { ElCheckbox, ElCheckboxButton, ElCheckboxGroup, ElCheckbox as default };
//# sourceMappingURL=index2.mjs.map
