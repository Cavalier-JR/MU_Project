<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange1">
      <el-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
  <div>
            <el-card v-show="isCardVisible" class="card-body">
              <template #header>
                <div class="card-header">
                  <span>
                    <el-icon><InfoFilled /></el-icon>
                    <span>遗忘前安全说明</span>
                  </span>
                </div>
              </template>
              <div class="card-content">
                <p>
                  您可以通过申请“遗忘”来移除本系统中存储的您的图像数据。一旦您的图像数据被成功移除，系统将不再保留与您相关的任何特征和内容。
                  在未来的任何生成、恢复或处理过程中，本系统都不会涉及或引用您的图像数据，这意味着，您的个人信息将完全从系统的记忆中被删除，
                  确保您的隐私得到彻底保护。我们致力于维护您的数据安全和隐私，任何时候您都可以联系我们以启动这一遗忘程序，
                  从而享受更加安全和私密的服务体验。
                </p>
              </div>
            </el-card>
          </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref()
const handleChange1 = (val: string[]) => {
  console.log(val)
}
</script>