<template>
  <div>
    <div id="lineChart" ref="lineChartDom" style="width: 600px; height: 400px;"></div>
    <div id="radarChart" ref="radarChartDom" style="width: 600px; height: 400px;"></div>
    <div id="pieChart" ref="pieChartDom" style="width: 600px; height: 400px;"></div>
    <div id="barChart" ref="barChartDom" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const lineChartDom = ref(null);
const radarChartDom = ref(null);
const pieChartDom = ref(null);
const barChartDom = ref(null);

onMounted(() => {
  if (lineChartDom.value) {
    const lineChart = echarts.init(lineChartDom.value);
    const lineOption = {
      title: {
        text: "111",
        left: "center"
      },
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
        title: { // TODO 标题不显示
          text: "？？？？？",
          left: "center"
        },
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

  if (pieChartDom.value) {
    const pieChart = echarts.init(pieChartDom.value);
    const pieOption = {
      title: {
        text: "333",
        left: "center"
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    pieChart.setOption(pieOption);
  }

  if (barChartDom.value) {
    const barChart = echarts.init(barChartDom.value);
    const data = [
      { name: 'Mon', value: 120, itemStyle: { color: '#c23531' } },
      { name: 'Tue', value: 200, itemStyle: { color: '#2f4554' } },
      { name: 'Wed', value: 150, itemStyle: { color: '#61a0a8' } },
      { name: 'Thu', value: 80, itemStyle: { color: '#d48265' } },
      { name: 'Fri', value: 70, itemStyle: { color: '#91c7ae' } },
      { name: 'Sat', value: 110, itemStyle: { color: '#749f83' } },
      { name: 'Sun', value: 130, itemStyle: { color: '#ca8622' } }
    ];

    const barOption = {
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: data.map(item => item.name)
      },
      series: [
        {
          type: 'bar',
          data: data.map(item => ({ value: item.value, itemStyle: item.itemStyle })),
          animationDelay: (idx) => idx * 10,
          animationEasing: 'elasticOut'
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5
    };

    barChart.setOption(barOption);

    setInterval(() => { // TODO 变完后颜色变回默认值了。修复一下这个特性
      data.sort((a, b) => b.value - a.value);
      barChart.setOption({
        yAxis: {
          data: data.map(item => item.name)
        },
        series: [{
          data: data.map(item => item.value)
        }]
      });
    }, 2000); //变换时间
  }
});
</script>

<style scoped>
#lineChart, #radarChart, #pieChart, #barChart {
  width: 600px;
  height: 400px;
  display: inline-block; /* This will place the charts next to each other */
}
</style>