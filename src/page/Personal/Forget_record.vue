<template>
  <el-table
    border
    ref="multipleTableRef"
    style="width: 100%"
    :data="tableData"
    :row-class-name="tableRowClassName"
    @selection-change="handleSelectionChange"
  >
    <el-table-column prop="inf_type" label="信息类型" width="120" header-align="center" align="center"> </el-table-column>
    <el-table-column label="是否遗忘" prop="forget_flag" align="center" width="120">
      <template #default="scope">
        <span :class="[scope.row.forget_flag === '已遗忘' ? 'cell-green' : 'cell-red']">{{ scope.row.forget_flag }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="forget_content" label="遗忘内容" width="300" header-align="center" align="center" />
    <el-table-column prop="cost_time" label="用时" width="120" header-align="center" align="center" /> 
    <el-table-column label="操作时间" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column label="日志信息" width="170" align="center">
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
  forget_content: string
  forget_flag: string
  inf_type: string
  cost_time: string
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

const dialogVisible = ref(false)
const search = ref('')
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

const tableData: User[] = [
  {
    inf_type: '图片',
    forget_flag: '正在遗忘',
    date: '2024-05-24 11:45:14',
    forget_content: '飞机类',
    cost_time: '4.1min',
  },
  {
    inf_type: '图片',
    forget_flag: '正在遗忘',
    date: '2024-05-19 10:27:23',
    forget_content: '3张已上传图片',
    cost_time: '5.2min',
  },
  {
    inf_type: '文本',
    forget_flag: '正在遗忘',
    date: '2024-05-17 21:27:15',
    forget_content: 'Cai Yunze',
    cost_time: '2.54s',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-16 10:35:59',
    forget_content: '卡车类',
    cost_time: '3.9min',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-13 08:45:18',
    forget_content: 'Mobile phone number is 114514',
    cost_time: '1.34s',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-09 20:32:13',
    forget_content: '青蛙类',
    cost_time: '3.6min',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-03 09:16:51',
    forget_content: 'Meeting on May 2nd',
    cost_time: '2.87s',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-04-30 23:13:51',
    forget_content: 'Her name is Xiao Heizi!!!',
    cost_time: '1.06s',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-04-23 14:25:13',
    forget_content: '17张已上传图片',
    cost_time: '4.7min',
  },
]

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 0 || rowIndex === 1 || rowIndex === 3 || rowIndex === 5 || rowIndex === 8) {
    return 'pic-row'
  }
  return 'text-row'
}

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