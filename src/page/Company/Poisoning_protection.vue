<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-input
        v-model="textarea1"
        style="width: 260px"
        autosize
        type="textarea"
        placeholder="搜索历史记录"
      />
    </el-col> 
    <el-col :span="2" > 
      <el-button type="primary" :icon="Search" align="right">搜索</el-button>
    </el-col> 
    <el-col :span="2">
      <el-button type="primary" :icon="Share" align="right" />
    </el-col> 
  </el-row>
  <br>
  <br>
  <el-table
    ref="multipleTableRef"
    border
    style="width: 100%"
    :data="tableData"
    :row-class-name="tableRowClassName"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" header-align="center" align="center" />
    <el-table-column prop="model" label="模型名称" width="120" header-align="center" align="center" />
    <el-table-column prop="progress" label="进度" width="320" header-align="center" align="center">
      <template #default="scope">
        <span style="margin-left: -20px;" align="center">
          <el-button style="margin-left: 15px;" size="mini" :type="scope.row.b1" @click="detect(scope.$index, scope.row)"
          :loading="scope.row.loading === 'yes'" :disabled="scope.row.b1 !== 'success'">
            {{ scope.row.operation }}
          </el-button>
          ->
          <el-button style="margin-left: -5px;" size="mini" :type="scope.row.b2" @click="fixes(scope.$index, scope.row)"
          :loading="scope.row.loading2 === 'yes'" :disabled="scope.row.b2 !== 'success'">
            {{ scope.row.operation2 }}
          </el-button>
          ->
          <el-button style="margin-left: -5px;" size="mini" :type="scope.row.b3" @click="verify(scope.$index, scope.row)"
          :loading="scope.row.loading3 === 'yes'" :disabled="scope.row.b3 !== 'success'">
            {{ scope.row.operation3 }}
          </el-button>
        </span>
      </template>
    </el-table-column>
    <el-table-column prop="expected_acc" label="原acc" width="100" header-align="center" align="center" />
    <el-table-column prop="recovered_acc" label="恢复后acc" width="100" header-align="center" align="center" />
    <el-table-column prop="cost_time" label="用时" width="100" header-align="center" align="center" />
    <el-table-column label="状态" prop="state" align="center" width="100">
      <template #default="scope">
        <span :class="[scope.row.state === '已交付' ? 'cell-green' : 'cell-red']">{{ scope.row.state }}</span>
      </template>
    </el-table-column>
    <el-table-column width="170" align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索历史记录" />
      </template>
      <template #default="scope">
        <el-button type="primary" style="margin-left: 16px" @click="drawer_flag = true">
          查看详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-drawer
    v-model="drawer_flag"
    title="投毒遗忘效果图"
    direction="rtl"
    :before-close="handleClose"
  >
    <div class="text-container">
      <p> 投毒防护前 </p>
    </div>
    <div>
      <img src="../../assets/before_UL.png" alt="示例图片" />
    </div>
    <div class="text-container">
      <p> 投毒防护后 </p>
    </div>
    <div>
      <img src="../../assets/after_UL.png" alt="示例图片" />
    </div>
  </el-drawer>
  <div>
    <el-button 
      @click="toggleSelection()"
      class="reset-selector"
      style="margin-left:40%;margin-top:20px"
    > 重置选择 </el-button>
  </div>
  <el-pagination background class="el-pagination" layout="prev, pager, next" :total="100" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { Search, Share } from '@element-plus/icons-vue'
import { ElButton, ElDrawer, ElMessage } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const drawer_flag = ref(false)

interface User {
  model: string
  state: string
  expected_acc: string
  actual_acc: string
  recovered_acc: string
  cost_time: string
  loading: string
  loading2: string
  loading3: string
  operation: string
  operation2: string
  operation3: string
  b1: string
  b2: string
  b3: string
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
    model: 'aaa',
    state: '已交付',
    expected_acc: '85%',
    actual_acc: '0.84',
    cost_time: '4.13s',
    recovered_acc: '89%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '89%',
    actual_acc: '0.87',
    cost_time: '6.12s',
    recovered_acc: '93%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '93%',
    actual_acc: '0.88',
    cost_time: '4.51s',
    recovered_acc: '94%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '91%',
    actual_acc: '0.93',
    cost_time: '5.12s',
    recovered_acc: '96%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '97%',
    actual_acc: '0.93',
    cost_time: '7.62s',
    recovered_acc: '98%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '92%',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'info',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '87%',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'info',
    b3: 'info',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '86%',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "修复",
    operation3: "验证",
    b1: 'success',
    b2: 'info',
    b3: 'info',
  },
  
]

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2 || rowIndex === 3) {
    return 'warning-row'
  } 
  return ''
}
const detect = (index: number, row: User) => {
  row.loading = 'yes'
  row.operation = "检测中.."
  let timer: number | null = setTimeout(() => {
    row.b2 = "success"
    row.operation = "检测" 
    row.loading = 'no'
    ElMessage({
      message: '检测完成！可以进行模型恢复了',
      type: 'success',
    })
  }, 5000)
}
const fixes = (index: number, row: User) => {
  row.loading2 = 'yes'
  row.operation2 = "修复中.."
  let timer: number | null = setTimeout(() => {
    row.operation2 = "修复"
    row.loading2 = 'no'
    row.b3 = "success"
    if(index === 5) {
      row.recovered_acc = '96%'
      row.cost_time = '9.54s'
      ElMessage({
        message: '模型恢复完成！恢复后精确度提高了 4 %',
        type: 'success',
      })
    } else if(index === 6) {
      row.recovered_acc = '92%'
      row.cost_time = '7.48s'
      ElMessage({
        message: '模型恢复完成！恢复后精确度提高了 5 %',
        type: 'success',
      })
    } else if(index === 7) {
      row.recovered_acc = '90%'
      row.cost_time = '6.17s'
      ElMessage({
        message: '模型恢复完成！恢复后精确度提高了 5 %',
        type: 'success',
      })
    }
  }, 5000)
}

const verify = (index: number, row: User) => {
  row.loading3 = 'yes'
  row.operation3 = "验证中.."
  let timer: number | null = setTimeout(() => {
    row.operation3 = "验证"
    row.loading3 = 'no'
    ElMessage({
      message: '验证成功！精确度无误',
      type: 'success',
    })
  }, 5000)
}
</script>    
  
<style>
  .el-pagination {
    justify-content: center;
  }
  .el-table .success-row {
    --el-table-tr-bg-color: #B48EDD;
  }
  .el-table .warning-row {
    --el-table-tr-bg-color:  var(--el-color-warning-light-9);
  }
  .el-table .danger-row {
    --el-table-tr-bg-color: #060606;
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
  .text-container
  {
    font-size: 23px;
    margin-left: 110px;
  }
</style>