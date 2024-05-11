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
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    stripe
    border  
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" header-align="center" align="center"/>
    <el-table-column type="inf_type" label="信息类型" width="120" header-align="center" align="center">
      <template #default="scope">{{ scope.row.inf_type }}</template>
    </el-table-column>
    <el-table-column type="forget_flag" label="是否遗忘" width="120" header-align="center" align="center">
      <template #default="scope">{{ scope.row.forget_flag }}</template>
    </el-table-column>
    <el-table-column property="forget_content" label="遗忘内容" width="300" header-align="center" align="center" />
    <el-table-column label="时间" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column label="用户名" header-align="center" align="center" show-overflow-tooltip>
      <template #default="scope">{{ scope.row.name }}</template>
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
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">重置选择</el-button>
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
  name: string
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
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
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
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-05 11:45:14',
    name: 'Tom',
    forget_content: 'No. 189, Grove St, Los Angeles',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-05 11:27:23',
    name: 'Tom',
    forget_content: 'NCEPU',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-05 11:27:15',
    name: 'Tom',
    forget_content: 'Cai Yunze',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-05 11:25:59',
    name: 'Tom',
    forget_content: 'No. 2, Beinong Road',
  },
  {
    inf_type: '文本',
    forget_flag: '已遗忘',
    date: '2024-05-05 10:45:18',
    name: 'Tom',
    forget_content: 'Mobile phone number is 114514',
  },
  {
    inf_type: '图片',
    forget_flag: '已遗忘',
    date: '2024-05-05 10:32:13',
    name: 'Tom',
    forget_content: 'Meet at seven tonight',
  },
  {
    inf_type: '文本',
    forget_flag: '正在遗忘',
    date: '2024-05-05 09:16:51',
    name: 'Tom',
    forget_content: 'Meeting on May 2nd',
  },
  {
    inf_type: '文本',
    forget_flag: '正在遗忘',
    date: '2024-05-04 23:13:51',
    name: 'Tom',
    forget_content: 'Her name is Xiao Heizi!!!',
  },
]
</script>   

<style scoped>
  .el-pagination {
    justify-content: center;
  }
</style>