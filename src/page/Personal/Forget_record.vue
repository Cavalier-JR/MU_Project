<template>
  <el-table
    border
    ref="multipleTableRef"
    style="width: 100%"
    :data="tableData"
    :row-class-name="tableRowClassName"
    :row-style="{ height: '55px' }" 
    :cell-style="{ padding: '0px' }"
    @selection-change="handleSelectionChange"
  >
    <el-table-column prop="inf_type" label="信息类型" width="180" header-align="center" align="center"> </el-table-column>
    <el-table-column label="是否遗忘" prop="forget_flag" align="center" width="180">
      <template #default="scope">
        <span :class="[scope.row.forget_flag === '已遗忘' ? 'cell-green' : 'cell-red']">{{ scope.row.forget_flag }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="forget_content" label="遗忘内容" width="350" header-align="center" align="center" />
    <el-table-column prop="cost_time" label="用时" width="180" header-align="center" align="center" /> 
    <el-table-column label="操作时间" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <!-- <el-table-column label="日志信息" width="170" align="center">
      <template #default="scope">
        <el-button type="primary" @click="dialogVisible = true">
          查看详情
        </el-button>
      </template>
    </el-table-column> -->
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
  <el-pagination background class="el-pagination" layout="prev, pager, next" :total="100"/>
  <br>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElTable } from 'element-plus'
import axios from 'axios';

interface User {
  date: string
  forget_content: string
  forget_flag: string
  inf_type: string
  cost_time: string
}

const value = ref('')

const dialogVisible = ref(false)
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData = ref([]); 
axios.get('http://127.0.0.1:8000/api/personal-record/')
  .then(response => {
    tableData.value = response.data; // Assign the fetched data to tableData
    console.log("已获取");
    console.log(tableData.value);
  })
  .catch(error => {
    console.error(error);
  });

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 0 || rowIndex === 1 || rowIndex === 3 || rowIndex === 5 
  || rowIndex === 8 || rowIndex === 9) {
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