import '../../../utils/index2.mjs';
import { columns } from './common2.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';

const tableV2HeaderRowProps = buildProps({
  class: String,
  columns,
  columnsStyles: {
    type: definePropType(Object),
    required: true
  },
  headerIndex: Number,
  style: { type: definePropType(Object) }
});

export { tableV2HeaderRowProps };
//# sourceMappingURL=header-row2.mjs.map
