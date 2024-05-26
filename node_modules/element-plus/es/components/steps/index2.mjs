import '../../utils/index2.mjs';
import Steps from './src/index2.mjs';
import Step from './src/item2.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElSteps = withInstall(Steps, {
  Step
});
const ElStep = withNoopInstall(Step);

export { ElStep, ElSteps, ElSteps as default };
//# sourceMappingURL=index2.mjs.map
