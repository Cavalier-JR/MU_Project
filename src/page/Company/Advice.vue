<template>
  <div class="row">

    <div class="row">
        <div style="font-family: '扁桃体'; border: 1px solid black; display: inline-block; padding: 5px;">当前模型： Model A</div>
        <div style="font-family: '扁桃体'; border: 1px solid black; display: inline-block; padding: 5px;">导入模型</div>
        <div style="font-family: '扁桃体'; border: 1px solid black; display: inline-block; padding: 5px;">切换模型</div>
    </div>

    <div class="row">
      <div class="col">
        <div ref="textchart" style="height: 400px; width: 800px; margin-top: 10px;"></div>
      </div>

      <div class="col">
        <div ref="textchart" style="height: 400px; width: 800px; margin-top: 10px;"></div>
      </div>
      
    </div>

    <!-- <div class="row">
      <div ref="textchart" style="height: 400px; width: 800px; margin-top: 10px;"></div>
    </div> -->

  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const textchart = ref(null);
onMounted(() => {
  if(textchart.value) {
    const myChart = echarts.init(textchart.value);
    var option = {
      title: [
        {
          text: '文本遗忘指标可视化'
        },
        {
          left: '9%',
          top: '90%',
          text: '手机号 3364634443'
        },
        {
          top: '90%',
          left: 'center',
          text: '邮件内容'
        },
        {
          left: '80%',
          top: '90%',
          text: '手机号 3364634443'
        },
        {
          top: '45%',
          left: 'center',
          text: '邮件内容'
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: 'center',
        data: [
          'ConMU',
          'A Phone',
          'Another Phone',
          'Precipitation',
          'Evaporation'
        ]
      },
      radar: [
        {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '运行时间', max: 100 },
            { text: '内存使用', max: 100 },
            { text: '模型大小', max: 100 }
          ],
          center: ['15%', '70%'],
          radius: 60
        },
        {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '运行时间', max: 100 },
            { text: '内存使用', max: 100 },
            { text: '模型大小', max: 100 }
          ],
          radius: 60,
          center: ['50%', '30%']
        },
        {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '运行时间', max: 100 },
            { text: '内存使用', max: 100 },
            { text: '模型大小', max: 100 }
          ],
          center: ['85%', '30%'],
          radius: 60
        },
            {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '运行时间', max: 100 },
            { text: '内存使用', max: 100 },
            { text: '模型大小', max: 100 }
          ],
          center: ['15%', '30%'],
          radius: 60
        },
        {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '运行时间', max: 100 },
            { text: '内存使用', max: 100 },
            { text: '模型大小', max: 100 }
          ],
          radius: 60,
          center: ['50%', '70%']
        },
        {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '运行时间', max: 100 },
            { text: '内存使用', max: 100 },
            { text: '模型大小', max: 100 }
          ],
          center: ['85%', '70%'],
          radius: 60
        }
      ],
      series: [
        {
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          areaStyle: {},
          data: [
            {
              value: [60, 73, 85, 40],
              name: 'ConMU'
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 2,
          areaStyle: {},
          data: [
            {
              value: [85, 90, 90, 95, 95],
              name: 'A Phone'
            },
            {
              value: [95, 80, 95, 90, 93],
              name: 'Another Phone'
            }
          ]
        },
            {
          type: 'radar',
          radarIndex: 1,
          areaStyle: {},
          data: [
            {
              value: [85, 90, 90, 95, 95],
              name: 'A Phone'
            },
            {
              value: [95, 80, 95, 90, 93],
              name: 'Another Phone'
            }
          ]
        },

      ]
    };
    myChart.setOption(option);
  };



})

</script>
