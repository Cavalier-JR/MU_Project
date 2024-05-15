<template>
  <div>
      <div class="content">
          <el-collapse v-model="activeName" accordion>
              <div style="font-size: large;"></div>
              <el-collapse-item title="Terminal_QRT" name="2">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp; 启用时间：2023-08-09</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 容器个数：68</div>
                  <span class="first">
                      <span id="drawOne" style="width: 400px;height: 300px;"></span>
                      <span id="drawTwo" style="width: 400px;height: 300px;"></span>
                  </span>
              </el-collapse-item>
              <el-collapse-item title="Terminal_WYN" name="3">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-07-30</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：50</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_LXL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_QWW" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_XQQ" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_QQT" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_WQL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_TRL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_ZWL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_WWL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_SXL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_LP" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_CPL" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>
              <el-collapse-item title="Raspberry_QWP" name="4">
                  <div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-08-19</div>
                  <div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>


              </el-collapse-item>

          </el-collapse>
      </div>
  </div>
</template>

<style>
.content {
  width: 100%;
  height: 600px;
}

.first {
  width: 300px;
  height: 300px;
  display: flex;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const drawChart = ref(null);
const lineChartDom = ref(null);
const drawFive = ref(null);
const drawOne2 = ref(null);
const drawTwo = ref(null);





</script>