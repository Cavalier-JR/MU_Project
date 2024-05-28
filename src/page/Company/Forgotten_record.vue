<template>
  <el-table
    border
    ref="multipleTableRef"
    style="width: 100%"
    sortable
    :data="tableData"
    :row-class-name="tableRowClassName"
    :row-style="{ height: '55px' }" 
    :cell-style="{ padding: '0px' }"
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
    draggable="true"
    center
  >
    <el-card>
      <div style="text-align: left;">
          <div>
              <span style="font-size: 20px;font-weight: bold;"> 模 型 名 称: </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="font-size: 18px;"> vgg_16 </span>
              <el-divider></el-divider>
          </div>
          <div>
              <span style="font-size: 20px;font-weight: bold;"> 使用遗忘方法: </span>
              &nbsp;&nbsp;&nbsp;
              <span style="font-size: 18px;"> Conmu </span>
              <el-divider></el-divider>
          </div>
          <div>
              <span style="font-size: 20px;font-weight: bold;"> 执 行 批 次: </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="font-size: 18px;"> 10 </span>
              <el-divider></el-divider>
          </div>
          <div>
              <span style="font-size: 20px;font-weight: bold;"> 优 化 器: </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="font-size: 18px;"> Adam </span>
              <el-divider></el-divider>
          </div>
          <div>
              <span style="font-size: 20px;font-weight: bold;"> 学 习 率: </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="font-size: 18px;"> 1e-2 </span>
              <el-divider></el-divider>
          </div>
      </div>
    </el-card>
    <!-- <span style="font-size: 18px;text-align: center;">
      <p>模型名称 vgg_16</p>
      <br>
      <p>使用遗忘方法:Conmue</p>
      <br>
      <p>执行批次:104</p>
      <br>
      <p>优化器:Adame</p>
      <br>
      <p>学习率:1e-24</p>
    </span>
    <template #footer>
      <div style="margin: auto;">
        <el-button type="primary" @click="dialogVisible = false">
          我已知晓
        </el-button>
      </div>
    </template> -->
  </el-dialog>
  <br>
  <br>
  <el-pagination background class="el-pagination" layout="prev, pager, next" :total="100" />
  <br>
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
  if (rowIndex === 1 || rowIndex === 3 || rowIndex === 4 || rowIndex === 6 || rowIndex === 9) {
    return 'pic-row'
  }
  return 'text-row'
}

const tableData: User[] = [
  {
    acc: '-2.1%',
    inf_type: '文本',
    forget_flag: '正在遗忘',
    date: '2024-05-23 23:13:51',
    forget_content: 'His name is Mike',
    cost_time: '\\',
    user: 'Mike',
  },
  {
    acc: '-3.2%',
    inf_type: '图片',
    forget_flag: '正在遗忘',
    date: '2024-05-21 10:31:11',
    forget_content: '7张已上传图片',
    cost_time: '\\',
    user: 'Aaron',
  },
  {
    acc: '-2.7%',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-17 21:27:15',
    forget_content: 'Liu Xuan',
    cost_time: '2.14s',
    user: 'Benson',
  },
  {
    acc: '-4.3%',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-13 10:35:59',
    forget_content: '船类',
    cost_time: '4.2min',
    user: 'Benson',
  },
  {
    acc: '-1.9%',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-11 10:27:23',
    forget_content: '飞机类',
    cost_time: '3.2min',
    user: 'Denny',
  },
  {
    acc: '-2.8%',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-05 18:45:18',
    forget_content: 'Johns number is 615152',
    cost_time: '1.34s',
    user: 'Ethan',
  },
  {
    acc: '-3.5%',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-01 20:32:13',
    forget_content: '青蛙类',
    cost_time: '3.7min',
    user: 'Gavin',
  },
  {
    acc: '-2.8%',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-04-27 18:36:35',
    forget_content: 'Dating on July 14nd',
    cost_time: '1.87s',
    user: 'Johnny',
  },
  {
    acc: '-2.3%',
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-04-23 09:17:26',
    forget_content: 'Go to the London hospital',
    cost_time: '1.36s',
    user: 'Johnny',
  },
  {
    acc: '-1.1%',
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-04-12 17:12:23',
    forget_content: '19张已上传图片',
    cost_time: '3.7min',
    user: 'Gavin',
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