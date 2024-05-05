<template>
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    stripe
    border  
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" header-align="center" align="center" />
    <el-table-column property="model" label="模型名称" width="150" header-align="center" align="center" />
    <el-table-column property="progress" label="进度" width="200" header-align="center" align="center" />
    <el-table-column property="expected_acc" label="预计acc" width="120" header-align="center" align="center" />
    <el-table-column property="actual_acc" label="实际acc" width="120" header-align="center" align="center" />
    <el-table-column property="cost_time" label="用时" width="120" header-align="center" align="center" />
    <el-table-column property="state" label="状态" width="120" header-align="center" align="center" />
    <el-table-column label="时间" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">{{ scope.row.submission_time }}</template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[0], tableData[2]])">
      Toggle selection status of second and third rows
    </el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
  <div class="example-pagination-block">
    <el-pagination layout="prev, pager, next" :total="50"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface User {
  model: string
  state: string
  expected_acc: data
  actual_acc: data
  cost_time: string
  submission_time: string
  progress: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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
    state: '未交付',
    expected_acc: '0.96',
    actual_acc: '\\',
    cost_time: '\\',
    submission_time: '2024-05-05 11:45:14',
    progress: '检测'
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.87',
    actual_acc: '\\',
    cost_time: '\\',
    submission_time: '2024-05-05 11:43:06',
    progress: '检测'
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.93',
    actual_acc: '\\',
    cost_time: '\\',
    submission_time: '2024-05-05 11:03:13',
    progress: '检测'
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.92',
    actual_acc: '\\',
    cost_time: '\\',
    submission_time: '2024-05-05 10:45:38',
    progress: '检测 -> 恢复'
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.85',
    actual_acc: '0.84',
    cost_time: '4.13s',
    submission_time: '2024-05-05 10:13:14',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.89',
    actual_acc: '0.87',
    cost_time: '6.12s',
    submission_time: '2024-05-05 09:51:53',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.93',
    actual_acc: '0.88',
    cost_time: '4.51s',
    submission_time: '2024-05-05 09:44:12',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.91',
    actual_acc: '0.93',
    cost_time: '5.12s',
    submission_time: '2024-05-05 08:23:52',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.97',
    actual_acc: '0.99',
    cost_time: '1.62s',
    submission_time: '2024-05-04 23:54:41',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.91',
    actual_acc: '0.89',
    cost_time: '1.52s',
    submission_time: '2024-05-04 21:21:13',
    progress: '检测 -> 恢复 -> 验证'
  },
]
</script>    