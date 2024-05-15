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
    :data="tableData"
    style="width: 100%"
    stripe
    border  
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" header-align="center" align="center" />
    <el-table-column property="model" label="模型名称" width="120" header-align="center" align="center" />
    <el-table-column property="progress" label="进度" width="180" header-align="center" align="center" />
    <el-table-column property="expected_acc" label="预计acc" width="120" header-align="center" align="center" />
    <el-table-column property="actual_acc" label="实际acc" width="120" header-align="center" align="center" />
    <el-table-column property="recovered_acc" label="恢复后acc" width="120" header-align="center" align="center" />
    <el-table-column property="cost_time" label="用时" width="100" header-align="center" align="center" />
    <el-table-column property="state" label="状态" width="100" header-align="center" align="center" />
    <el-table-column width="170" align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索历史记录" />
      </template>
      <template #default="scope">
        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
          查看详情
        </el-button>

        <el-drawer
          v-model="drawer"
          title="投毒遗忘效果图"
          :direction="rtl"
          :before-close="handleClose"
        >
          <div class="text-container">
            <p> 投毒防护前 </p>
          </div>
          <div class="image-container">
            <img src="../../assets/before_UL.png" alt="示例图片" />
          </div>
          <div class="text-container">
            <p> 投毒防护后 </p>
          </div>
          <div class="image-container">
            <img src="../../assets/after_UL.png" alt="示例图片" />
          </div>
        </el-drawer>
      </template>
    </el-table-column>
  </el-table>
  <el-tour v-model="open">
    <el-tour-step
      title="Center"
      description="Displayed in the center of screen."
    />
    <el-tour-step
      title="Right"
      description="On the right of target."
      placement="right"
      :target="btnRef?.$el"
    />
    <el-tour-step
      title="Top"
      description="On the top of target."
      placement="top"
      :target="btnRef?.$el"
    />
  </el-tour>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">重置选择</el-button>
  </div>
  <el-pagination background class="el-pagination" layout="prev, pager, next" :total="100" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { Search, Share } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

const drawer = ref(false)

interface User {
  model: string
  state: string
  expected_acc: string
  actual_acc: string
  recovered_acc: string
  cost_time: string
  progress: string
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

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('你确定要关闭吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const tableData: User[] = [
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.96',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    progress: '检测',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.87',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    progress: '检测',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.93',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    progress: '检测',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.92',
    actual_acc: '\\',
    cost_time: '\\',
    recovered_acc: '\\',
    progress: '检测 -> 恢复',
  },
  {
    model: 'aaa',
    state: '未交付',
    expected_acc: '0.85',
    actual_acc: '0.84',
    cost_time: '4.13s',
    recovered_acc: '0.89',
    progress: '检测 -> 恢复 -> 验证',
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.89',
    actual_acc: '0.87',
    cost_time: '6.12s',
    recovered_acc: '0.93',
    progress: '检测 -> 恢复 -> 验证',
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.93',
    actual_acc: '0.88',
    cost_time: '4.51s',
    recovered_acc: '0.94',
    progress: '检测 -> 恢复 -> 验证',
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.91',
    actual_acc: '0.93',
    cost_time: '5.12s',
    recovered_acc: '0.96',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.97',
    actual_acc: '0.93',
    cost_time: '1.62s',
    recovered_acc: '0.98',
    progress: '检测 -> 恢复 -> 验证'
  },
  {
    model: 'aaa',
    state: '已交付',
    expected_acc: '0.91',
    actual_acc: '0.89',
    cost_time: '1.52s',
    recovered_acc: '0.94',
    progress: '检测 -> 恢复 -> 验证'
  },
]
</script>    
  
<style scoped>
  .el-pagination {
    justify-content: center;
  }
  .image-container {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
  }
  .text-container
  {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>