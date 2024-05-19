<template>
  <div class="page-container">
    <div class="page-container1">
      <span class="page-text">目前模型：Model A</span>
      <select class="page-select">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <button type="button" class="page-button button">导入模型</button>
    </div>
    <div class="page-container2">
      <div class="page-container3">
        <span class="page-text1">部分遗忘</span>
        <select class="page-select1">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span class="page-text2">目前版本：2024-5-18</span>
        <button type="button" class="page-button1 button">历史记录</button>
      </div>
      <div class="page-container4">

        <div id="partchart1" ref="partchart1" style="width: 30%;height: 100%; background-color: rgb(255, 255, 255);">ddddd</div>

        <div class="page-container5" style="width: 40%">
          <div id="accuracychart" ref="accuracychart" style="width: 100%;height: 50%; ">ddd</div>
          <div ref="timechart" style="width: 100%;height: 50%; "></div>
        </div>

        <div id="partchart2" ref="partchart2" style="width: 30%;height: 300px; background-color: rgb(255, 255, 255);">ddddd</div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const partchart1 = ref(null);
const partchart2 = ref(null);
const accuracychart = ref(null);
const timechart = ref(null);

onMounted(() => {
  if(partchart1.value) {
    const myChart = echarts.init(partchart1.value);
    option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '4个指标的对比'
      },
      legend: {},
      radar: [
        {
          indicator: [
            { text: '准确率', max: 100 },
            { text: '用时', max: 100 },
            { text: '内存', max: 100 },
            { text: '模型大小', max: 100 },

          ],
          center: ['50%', '50%'],
          radius: 120,
          axisName: {
            color: '#fff',
            backgroundColor: '#666',
            borderRadius: 3,
            padding: [3, 5]
          }
        }
      ],
      series: [

        {
          type: 'radar',
          radarIndex: 0,
          data: [
            {
              value: [99, 99, 99, 99],
              name: 'ConMU',
              symbol: 'rect',
              symbolSize: 12,
              lineStyle: {
                type: 'dashed'
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                }
              }
            },
            {
              value: [88, 88, 88, 88],
              name: 'GA',
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: 'rgba(255, 145, 124, 0.1)',
                    offset: 0
                  },
                  {
                    color: 'rgba(255, 145, 124, 0.9)',
                    offset: 1
                  }
                ])
              }
            },
            {
              value: [75, 81, 13, 68],
              name: 'FT',
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: 'rgba(255, 145, 124, 100)',
                    offset: 0
                  },
                  {
                    color: 'rgba(0, 145, 124, 0.5)',
                    offset: 1
                  }
                ])
              }
            },
            {
              value: [90, 90, 90, 105, 70, 23],
              name: 'RL',
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: 'rgba(255, 145, 124, 100)',
                    offset: 0
                  },
                  {
                    color: 'rgba(0, 145, 124, 0.5)',
                    offset: 1
                  }
                ])
              }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }

  if(partchart2.value) {
    const myChart = echarts.init(partchart2.value);
    // myChart.resize({ width: '100%', height: '100%' });  TODO bug
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '遗忘前后正确率对比'
      },
      legend: {},
      radar: [
        {
          indicator: [
            { text: 'ConMU' },
            { text: 'GA' },
            { text: 'FT' },
            { text: 'RL' },
          ],
          center: ['50%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            formatter: '【{value}】',
            color: '#428BD4'
          },
          splitArea: {
            areaStyle: {
              color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          }
        },
      ],
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4
            }
          },
          data: [
            {
              value: [100, 8, 0.4, -80],
              name: '遗忘前'
            },
            {
              value: [60, 5, 0.3, -100],
              name: '遗忘后',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)'
              }
            }
          ]
        },
      ]
    };
    myChart.setOption(option);
  }

  if(accuracychart.value) {
    const myChart = echarts.init(accuracychart.value);
    var option = {
      title: {
        text: '正确率'
      },
      xAxis: {
        type: 'category',
        data: ['ConMU', 'GA', 'FT', 'RL']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
    myChart.setOption(option);
  }

  if(timechart.value) {
    const myChart = echarts.init(timechart.value);
    var option = {
      title: {
        text: '用时'
      },
      xAxis: {
        type: 'category',
        data: ['ConMU', 'GA', 'FT', 'RL']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
  myChart.setOption(option);
  }

})
</script>

<style scoped>

.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-container1 {
  width: 100%;
  height: 103px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}
.page-text {
  margin: 10px;
  padding: 0px;
  font-size: 30px;
  align-self: center;
  text-align: center;
}
.page-select {
  width: 222px;
  padding: 10px;
  align-self: stretch;
  margin-left: 60px;
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  padding-left: 10px;
  border-radius: var(--dl-radius-radius-radius12);
}
.page-button {
  width: 196px;
  height: 100%;
  font-size: 40px;
  text-align: center;
  margin-left: 50px;
  border-radius: var(--dl-radius-radius-radius12);
}
.page-container2 {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: flex-start;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  flex-direction: column;
}
.page-container3 {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
}
.page-text1 {
  font-size: 30px;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.page-select1 {
  height: 100%;
  align-self: center;
  margin-left: 20px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}
.page-text2 {
  font-size: 30px;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.page-button1 {
  margin-left: 20px;
}
.page-container4 {
  width: 100%;
  height: 85%;
  display: flex;
  align-self: center;
  align-items: center;
}
.page-image {
  width: 25%;
  height: 100%;
  align-self: center;
  object-fit: cover;
  margin-left: 10px;
}
.page-container5 {
  flex: 0 0 auto;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
}
.page-image1 {
  width: 100%;
  height: 50%;
  align-self: center;
  object-fit: cover;
  padding-bottom: 10px;
}
.page-image2 {
  width: 100%;
  height: 50%;
  align-self: center;
  object-fit: cover;
}
.page-image3 {
  width: 25%;
  height: 100%;
  align-self: center;
  object-fit: cover;
  padding-right: 20px;
}
</style>
