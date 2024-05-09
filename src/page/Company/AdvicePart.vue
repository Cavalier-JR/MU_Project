<template>
  <div class="content">
    <div class="charts">
      <v-chart class="chart" :option="option" />
      <v-chart class="radar-chart" :option="radarOption" />
    </div>
    <div class="learning-text">

      <div>
        <h3>机器遗忘学习</h3>
        <p>机器遗忘学习是一种确保数据隐私和安全的技术，通过从模型中删除特定数据的影响来“遗忘”这些数据。</p>
      </div>

      <v-chart class="sunburst-chart" :option="sunburstOption" />
    </div>

    
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { RadarChart } from "echarts/charts";
import { SunburstChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  PieChart,
  RadarChart, // 添加雷达图
  SunburstChart, // 添加旭日图
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

provide(THEME_KEY, "dark");

// 扇形图
const option = ref({
  title: {
    text: "扇形图",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
});


const radarOption = ref({
  title: {
    text: 'Basic Radar Chart'
  },
  tooltip: {},
  legend: {
    data: ['Budget', 'Actual Spending']
  },
  radar: {
    // Define several indicators
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [{
    name: 'Budget vs Spending',
    type: 'radar',
    data: [
      {
        value: [4200, 3000, 20000, 35000, 50000, 18000],
        name: 'Actual Spending'
      },
      {
        value: [5000, 14000, 28000, 26000, 42000, 21000],
        name: 'Budget'
      }
    ]
  }]
});


const sunburstOption = ref({
  series: {
    type: 'sunburst',
    data: [
      {
        name: 'Grandparent',
        children: [
          {
            name: 'Parent A',
            children: [
              {name: 'Child A1', value: 5},
              {name: 'Child A2', value: 3}
            ]
          },
          {
            name: 'Parent B',
            children: [
              {name: 'Child B1', value: 4},
              {name: 'Child B2', value: 6}
            ]
          }
        ]
      }
    ],
    radius: [0, '90%'],
    label: {
      rotate: 'radial'
    }
  }
});
</script>
 


<style scoped>
.content {
  display: flex;
  align-items: flex-start; /* 垂直对齐 */
}

.charts {
  flex: 1; /* 图表占据剩余空间 */
}

.chart, .radar-chart {
  height: 400px;
  margin: 10px;
  background-color: #000080; /* 深蓝色 */
}

.learning-text {
  flex: 0 0 300px; /* 不伸缩，固定宽度 */
  margin: 10px;
  background-color: #f0f0f0; /* 背景颜色 */
  padding: 10px; /* 内边距 */
  border-radius: 5px; /* 边框圆角 */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 阴影效果 */
  margin: 2%;
}

.sunburst-chart {
  height: 300px; /* 设置旭日图的高度 */
  margin-top: 10px; /* 在文本和旭日图之间添加间隔 */

}
</style>