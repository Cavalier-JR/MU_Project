<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-input
        v-model="textarea1"
        style="width: 200px"
        autosize
        type="textarea"
        placeholder="搜索历史记录"
      />
      <el-button type="primary" :icon="Search" style="margin-left: 20px;">搜索</el-button>
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
    :row-style="{ height: '51px' }" 
    :cell-style="{ padding: '0px' }"
    @selection-change="handleSelectionChange"
  >
    <el-table-column prop="model" label="模型名称" width="150" header-align="center" align="center" />
    <el-table-column prop="progress" label="进度" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">
        <span style="margin-left: -20px;" align="center">
          <el-button style="margin-left: 15px;" size="mini" :type="scope.row.b1" @click="detect(scope.$index, scope.row)"
          :loading="scope.row.loading === 'yes'" :disabled="scope.row.b1 !== 'primary'">
            {{ scope.row.operation }}
          </el-button>
          ->
          <el-button style="margin-left: -5px;" size="mini" :type="scope.row.b2" @click="fixes(scope.$index, scope.row)"
          :loading="scope.row.loading2 === 'yes'" :disabled="scope.row.b2 !== 'primary'">
            {{ scope.row.operation2 }}
          </el-button>
          ->
          <el-button style="margin-left: -5px;" size="mini" :type="scope.row.b3" @click="verify(scope.$index, scope.row)"
          :loading="scope.row.loading3 === 'yes'" :disabled="scope.row.b3 !== 'primary'">
            {{ scope.row.operation3 }}
          </el-button>
        </span>
      </template>
    </el-table-column>
    <el-table-column prop="expected_acc" label="原准确率" width="130" header-align="center" align="center" />
    <el-table-column prop="recovered_acc" label="恢复后准确率" width="130" header-align="center" align="center" />
    <el-table-column prop="cost_time" label="用时" width="120" header-align="center" align="center" />
    <el-table-column label="交付操作" width="150" align="center">
      <!-- <template #header>
        <el-input v-model="search" size="small" placeholder="搜索历史记录" />
      </template> -->
      <template #default="scope">
        <el-button type="primary" @click="scope.row.state = '已交付',scope.row.jiaofu_flag = 'no'" 
        :disabled="scope.row.jiaofu_flag !== 'yes'">
          点击交付
        </el-button>
      </template>
    </el-table-column>
    <el-table-column label="交付状态" prop="state" align="center" width="140">
      <template #default="scope">
        <span :class="[scope.row.state === '已交付' ? 'cell-green' : 'cell-red']">{{ scope.row.state }}</span>
      </template>
    </el-table-column>
    <el-table-column label="日志信息" width="150" align="center">
      <!-- <template #header>
        <el-input v-model="search" size="small" placeholder="搜索历史记录" />
      </template> -->
      <template #default="scope">
        <el-button type="primary" @click="dialogVisible = true" 
        :disabled="scope.row.detail !== 'yes'">
          查看详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    v-model="dialogVisible"
    title="投毒减弱前后混淆矩阵"
    width="50%"
    draggable="true"
  >
    <div style="text-align: center;">
      <p style="margin-bottom: 15px;">
        <span style="font-size: 20px;margin-top: 5px;margin-right: 220px;">
          投毒防护前
        </span>
        <span style="font-size: 20px;margin-top: 5px;">
          投毒防护后
        </span>
      </p>
      <div>
        <img src="../../assets/before_UL.png" width="300" height="300" style="margin-right: 20px;"/>
        <img src="../../assets/after_UL.png" width="300" height="300" />
      </div>
    </div>
  </el-dialog>
  <br>
  <br>
  <br>
  <el-pagination background class="el-pagination" layout="prev, pager, next" :total="100" />
  <br>
  <br>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { Search, Share } from '@element-plus/icons-vue'
import { ElButton, ElDrawer, ElMessage } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const dialogVisible = ref(false)

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
  detail: string
  be_flag: string
  jiaofu_flag: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    model: 'vgg16',
    state: '已交付',
    expected_acc: '79%',
    actual_acc: '0.84',
    cost_time: '2.7min',
    recovered_acc: '85%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
    detail: 'yes',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'SqueezeNet',
    state: '已交付',
    expected_acc: '96%',
    actual_acc: '0.87',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'success',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'yes',
    jiaofu_flag: 'no',
  },
  {
    model: 'ResNeXt',
    state: '已交付',
    expected_acc: '79%',
    actual_acc: '0.88',
    cost_time: '4.5min',
    recovered_acc: '88%',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'success',
    b2: 'success',
    b3: 'success',
    detail: 'yes',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'ResNeXt',
    state: '未交付',
    expected_acc: '\\',
    actual_acc: '0.93',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'primary',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'ResNet',
    state: '未交付',
    expected_acc: '\\',
    actual_acc: '0.93',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'primary',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'SqueezeNet',
    state: '未交付',
    expected_acc: '\\',
    actual_acc: '0.93',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'primary',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'vgg16',
    state: '未交付',
    expected_acc: '\\',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'primary',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'SqueezeNet',
    state: '未交付',
    expected_acc: '\\',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'primary',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
  {
    model: 'vgg16',
    state: '未交付',
    expected_acc: '\\',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    loading: "no",
    loading2: "no",
    loading3: "no",
    operation: "检测",
    operation2: "恢复",
    operation3: "验证",
    b1: 'primary',
    b2: 'info',
    b3: 'info',
    detail: 'no',
    be_flag: 'no',
    jiaofu_flag: 'no',
  },
]

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (row.detail === 'yes' || row.be_flag === 'yes') {
    return 'warning-row'
  } 
  if (rowIndex === 1) {
    return 'warning-row'
  } 
  return ''
}
const detect = (index: number, row: User) => {
  row.loading = 'yes'
  row.operation = "检测中.."
  let timer: number | null = setTimeout(() => {
    row.operation = "检测" 
    row.loading = 'no'
    if(index === 4 || index === 5 || index === 7) {
      if(index === 4) {
        row.expected_acc = '94%'
      }
      if(index === 5) {
        row.expected_acc = '91%'
      }
      if(index === 7) {
        row.expected_acc = '97%'
      }
      row.b1 = "success"
      row.be_flag = 'yes'
      row.jiaofu_flag = 'yes',
      ElMessage({
        message: '检测完成！模型未被投毒攻击！',
        type: 'success',
      })
    }
    else {
      if(index === 3) {
        row.expected_acc = '77%'
      } else if(index === 6) {
        row.expected_acc = '73%'
      }
      else if(index === 8) {
        row.expected_acc = '80%'
      }
      row.b1 = "danger"
      row.b2 = "primary"
      ElMessage({
        message: '检测完成！模型已被投毒攻击，请立即恢复！',
        type: 'error',
      })
    }
  }, 5000)
}
const fixes = (index: number, row: User) => {
  row.loading2 = 'yes'
  row.operation2 = "恢复中.."
  let timer: number | null = setTimeout(() => {
    row.operation2 = "恢复"
    row.loading2 = 'no'
    row.b2 = "success"
    row.b3 = "primary"
    if(index === 3) {
      row.cost_time = '2.1min'
      ElMessage({
        message: '模型恢复完成！恢复后精确度提高了 9 %',
        type: 'success',
      })
    // } else if(index === 5) {
    //   row.cost_time = '3.6min'
    //   ElMessage({
    //     message: '模型恢复完成！恢复后精确度提高了 10 %',
    //     type: 'success',
    //   })
    } else if(index === 6) {
      row.cost_time = '2.4min'
      ElMessage({
        message: '模型恢复完成！恢复后精确度提高了 8 %',
        type: 'success',
      })
    // } else if(index === 7) {
    //   row.cost_time = '2.3min'
    //   ElMessage({
    //     message: '模型恢复完成！恢复后精确度提高了 8 %',
    //     type: 'success',
    //   })
    } else if(index === 8) {
      row.cost_time = '3.8min'
      ElMessage({
        message: '模型恢复完成！恢复后精确度提高了 9 %',
        type: 'success',
      })
    }
  }, 5000)
}

const verify = (index: number, row: User) => {
  row.loading3 = 'yes'
  row.operation3 = "验证中.."
  let timer: number | null = setTimeout(() => {
    row.b1 = 'success'
    row.b2 = 'success'
    row.b3 = 'success'
    row.operation3 = "验证"
    row.loading3 = 'no'
    row.detail = 'yes'
    row.be_flag = 'yes'
    if(index === 3) {
      row.recovered_acc = '86%'
    }
    // if(index === 5) {
    //   row.recovered_acc = '80%'
    // }
    if(index === 6) {
      row.recovered_acc = '81%'
    } 
    if(index === 8) {
      row.recovered_acc = '89%'
    }
    row.jiaofu_flag = 'yes',
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