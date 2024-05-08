<template>
    <div>
      <div id="lineChart" ref="lineChartDom" style="width: 600px; height: 400px;"></div>
      <div id="radarChart" ref="radarChartDom" style="width: 600px; height: 400px;"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  
  const lineChartDom = ref(null);
  const radarChartDom = ref(null);
  
  onMounted(() => {
    if (lineChartDom.value) {
      const lineChart = echarts.init(lineChartDom.value);
      const lineOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      lineChart.setOption(lineOption);
    }
  
    if (radarChartDom.value) {
      const radarChart = echarts.init(radarChartDom.value);
      const radarOption = {
        radar: {
          // Define the radar chart indicator
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Tech', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ]
        },
        series: [{
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Budget vs spending'
            }
          ]
        }]
      };
      radarChart.setOption(radarOption);
    }
  });
  </script>
  
  <style scoped>
  #lineChart, #radarChart {
    width: 600px;
    height: 400px;
    display: inline-block; /* This will place the charts next to each other */
  }
  </style>