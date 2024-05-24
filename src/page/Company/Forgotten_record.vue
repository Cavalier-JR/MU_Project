<template>
  <div class="flex flex-wrap gap-4 items-center">
    <font size="4">筛选 ：</font>
    <el-time-select
      v-model="value"
      style="width: 200px"
      start="08:30"
      step="00:15"
      end="18:30"
      placeholder="时间"
    /> 
    <!--这里时间筛选和其他的没对齐，之后再调-->
  </div>
  <br>
  <el-table
    border
    ref="multipleTableRef"
    style="width: 100%"
    :data="tableData"
    :row-class-name="tableRowClassName"
    @selection-change="handleSelectionChange"
  >
    <el-table-column prop="inf_type" label="信息类型" width="100" header-align="center" align="center" />
    <el-table-column label="是否遗忘" prop="forget_flag" align="center" width="100">
      <template #default="scope">
        <span :class="[scope.row.forget_flag === '已遗忘' ? 'cell-green' : 'cell-red']">{{ scope.row.forget_flag }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="forget_content" label="遗忘内容" width="220" header-align="center" align="center" />
    <el-table-column prop="acc" label="模型精确度变化" width="130" header-align="center" align="center" />
    <el-table-column prop="cost_time" label="用时" width="100" header-align="center" align="center" />
    <el-table-column prop="user" label="来源用户" width="100" header-align="center" align="center" />
    <el-table-column label="操作时间" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column label="日志信息" width="140" align="center">
      <!-- <template #header>
        <el-input v-model="search" size="small" placeholder="搜索历史记录" />
      </template> -->
      <template #default="scope">
        <el-button type="primary" @click="dialogVisible = true">
          查看详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-model="dialogVisible"
    title="运行日志"
    width="40%"
    draggable="true"
    top="35vh"
  >
    <span>这里是具体信息</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          我已知晓
        </el-button>
      </div>
    </template>
  </el-dialog>
  <br>
  <br>
  <el-pagination background class="el-pagination" layout="prev, pager, next" :total="100" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElTable } from 'element-plus'

interface User {
  date: string
  acc: string
  forget_content: string
  forget_flag: string
  inf_type: string
  cost_time: string
  user: string
}

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1 || rowIndex === 3 || rowIndex === 4 || rowIndex === 6) {
    return 'pic-row'
  }
  return 'text-row'
}

const tableData: User[] = [
  {
    acc: '-0.04',
    inf_type: '文本',
    forget_flag: '正在遗忘',
    date: '2024-05-23 23:13:51',
    forget_content: 'His name is Mike',
    cost_time: '1.75s',
    user: 'Mike',
  },
  {
    acc: '+0.01',
    inf_type: '图片',
    forget_flag: '正在遗忘',
    date: '2024-05-21 10:31:11',
    forget_content: '7张已上传图片',
    cost_time: '4.1min',
    user: 'Aaron',
  },
  {
    acc: '-0.01',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-17 21:27:15',
    forget_content: 'Liu Xuan',
    cost_time: '2.14s',
    user: 'Benson',
  },
  {
    acc: '+0.02',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-13 10:35:59',
    forget_content: '船类',
    cost_time: '4.2min',
    user: 'Benson',
  },
  {
    acc: '-0.02',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-11 10:27:23',
    forget_content: '飞机类',
    cost_time: '3.2min',
    user: 'Denny',
  },
  {
    acc: '-0.03',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-05 18:45:18',
    forget_content: 'Johns number is 615152',
    cost_time: '1.34s',
    user: 'Ethan',
  },
  {
    acc: '-0.01',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-01 20:32:13',
    forget_content: '青蛙类',
    cost_time: '3.7min',
    user: 'Gavin',
  },
  {
    acc: '+0.03',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-04-23 18:36:35',
    forget_content: 'Dating on July 14nd',
    cost_time: '1.87s',
    user: 'Johnny',
  },
]
const dialogVisible = ref(false)
</script>   

<style>
  .el-pagination {
    justify-content: center;
  }
  .el-table .text-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
  .el-table .pic-row {
    --el-table-tr-bg-color: var(--el-color-primary-light-9);
  }
  .cell-red {
    color: #ed2e2e;
    font-size: 15px;
    font-weight: bold;
  }
  .cell-green {
    color: #44f044;
    font-size: 15px;
    font-weight: bold;
  }
</style>