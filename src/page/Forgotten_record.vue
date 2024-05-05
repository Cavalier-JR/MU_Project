<template>
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      stripe
      border  
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" header-align="center" align="center"/>
      <el-table-column type="inf_type" label="信息类型" width="100" header-align="center" align="center">
        <template #default="scope">{{ scope.row.inf_type }}</template>
      </el-table-column>
      <el-table-column type="forget_flag" label="是否遗忘" width="120" header-align="center" align="center">
        <template #default="scope">{{ scope.row.forget_flag }}</template>
      </el-table-column>
      <el-table-column property="id" label="ID" width="80" header-align="center" align="center" />
      <el-table-column property="address" label="Address" width="300" header-align="center" align="center" />
      <el-table-column label="时间" header-align="center" align="center" show-overflow-tooltip>
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[0], tableData[2]])">
        Toggle selection status of second and third rows
      </el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'
  
  interface User {
    date: string
    id: string
    address: string
    forget_flag: string
    inf_type: string
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
      id: 114514,
      inf_type: '图片',
      forget_flag: '已遗忘',
      date: '2024-05-05 11:45:14',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114513,
      inf_type: '图片',
      forget_flag: '已遗忘',
      date: '2024-05-05 11:27:23',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114512,
      inf_type: '文本',
      forget_flag: '已遗忘',
      date: '2024-05-05 11:27:15',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114511,
      inf_type: '图片',
      forget_flag: '已遗忘',
      date: '2024-05-05 11:25:59',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114510,
      inf_type: '文本',
      forget_flag: '已遗忘',
      date: '2024-05-05 10:45:18',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114509,
      inf_type: '图片',
      forget_flag: '已遗忘',
      date: '2024-05-05 10:32:13',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114508,
      inf_type: '文本',
      forget_flag: '正在遗忘',
      date: '2024-05-05 09:16:51',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 114507,
      inf_type: '文本',
      forget_flag: '正在遗忘',
      date: '2024-05-04 23:13:51',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>    