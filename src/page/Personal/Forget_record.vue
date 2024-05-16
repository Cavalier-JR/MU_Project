<template>
  <div class="flex flex-wrap gap-4 items-center">
    <font size="4">筛选 ：</font>
    <el-select v-model="value" placeholder="信息类型" style="width: 200px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="value" placeholder="是否遗忘" style="width: 200px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
    <el-table-column type="selection" width="55" header-align="center" align="center"/>
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
    <el-table-column width="170" align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索历史记录" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div>
    <el-button 
      @click="toggleSelection()"
      class="reset-selector"
      style="margin-left:40%;margin-top:20px"
    > 重置选择 </el-button>
  </div>
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

const search = ref('')
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    inf_type: '图片',
    forget_flag: '未遗忘',
    date: '2024-05-05 11:45:14',
    forget_content: '飞机类',
    cost_time: '4.1min',
  },
  {
    inf_type: '图片',
    forget_flag: '未遗忘',
    date: '2024-05-05 10:27:23',
    forget_content: '3张已上传图片',
    cost_time: '5.2min',
  },
  {
    inf_type: '文本',
    forget_flag: '未遗忘',
    date: '2024-05-04 21:27:15',
    forget_content: 'Cai Yunze',
    cost_time: '2.54s',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-04 10:35:59',
    forget_content: '卡车类',
    cost_time: '3.9min',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-04 8:45:18',
    forget_content: 'Mobile phone number is 114514',
    cost_time: '1.34s',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-03 20:32:13',
    forget_content: '青蛙类',
    cost_time: '3.6min',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-02 09:16:51',
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
]

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 0 || rowIndex === 1 || rowIndex === 3 || rowIndex === 5) {
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
  .reset-selector {
    padding: 25px 25px !important;
    margin-left: 42% !important;
    font-size: 20px !important;
    background-color: #A080FF !important;
    border-radius: 10px !important;
    font-family: '斗鱼体' !important; 
    box-shadow: 5px 5px #EEE9E8 !important;
    border: none !important;
    cursor: pointer !important;
    outline: none !important;
    color: white !important; 
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