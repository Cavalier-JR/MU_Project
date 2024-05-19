<template>
  <div class="page-container" style="background-color: rgb(255, 255, 255);">
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
      <div class="page-container3" style="background-color: rgb(177, 197, 238); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-left: 10px; margin-right: 10px; width: 100%;">
        <span class="page-text1">部分遗忘</span>
        <select class="page-select1" style="background-color: rgb(135, 164, 187); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px;">
          <option value="Option 1">Part 1</option>
          <option value="Option 2">Part 2</option>
          <option value="Option 3">Part 3</option>
        </select>
        <span class="page-text2">目前版本：2024-5-18</span>
        <button type="button" class="page-button1 button">历史记录</button>
      </div>
      <div class="page-container4">

        <div cass="echartPanel" id="partchart1" ref="partchart1" style="width: 30%;height: 100%; border-radius: 10px 10px 10px 10px; background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-left: 20px;"></div>

        <div class="page-container5" style="width: 40%">
          <div id="accuracychart" ref="accuracychart" style="width: 100%;height: 100%; background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>
          <!-- <div ref="timechart" style="width: 50%;height: 100%; background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; "></div> -->
        </div>

        <div id="partchart2" ref="partchart2" style="width: 30%;height: 100%;background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>

      </div>
    </div>

    <div class="page-container2">
      <div class="page-container3" style="background-color: rgb(238, 229, 177); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-left: 10px; margin-right: 10px; width: 100%;">
        <span class="page-text1">类别遗忘</span>
        <select class="page-select1" style="background-color: rgb(187, 185, 135); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px;">
          <option value="Option 1">选择类别</option>
          <option value="Option 2">猫🐱</option>
          <option value="Option 3">狗🐕</option>
          <option value="Option 3">猪🐖</option>
          <option value="Option 3">鸡🐓</option>
          <option value="Option 3">羊🐏</option>
        </select>
        <span class="page-text2">目前版本：2024-5-18</span>
        <button type="button" class="page-button1 button">历史记录</button>
      </div>
      <div class="page-container4">

        <div cass="echartPanel" id="classchart1" ref="classchart1" style="width: 30%;height: 100%; border-radius: 10px 10px 10px 10px; background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-left: 20px;"></div>

        <div class="page-container5" style="width: 40%">
          <div id="accuracychart2" ref="accuracychart2" style="width: 50%;height: 100%; background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>
          <div ref="timechart2" style="width: 50%;height: 100%; background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; "></div>
        </div>

        <div id="classchart2" ref="classchart2" style="width: 30%;height: 100%;background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>

      </div>
    </div>


    <div class="page-container2">
      <div class="page-container3" style="background-color: rgb(177, 238, 191); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-left: 10px; margin-right: 10px; width: 100%;">
        <span class="page-text1">文本遗忘</span>
        <select class="page-select1" style="background-color: rgb(135, 187, 164); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px;">
          <option value="Option 1">选择文本</option>
          <option value="Option 2">+86 444546s4d65f4</option>
          <option value="Option 3">this is a secret message</option>
          <option value="Option 3">this is a secret message 2</option>
          <option value="Option 3">this is a secret message 22</option>
          <option value="Option 3">this is a secret message 222</option>
          <option value="Option 3">u cant c me</option>
        </select>
        <span class="page-text2">目前版本：2024-5-18</span>
        <button type="button" class="page-button1 button">历史记录</button>
      </div>
      <div class="page-container4">

        <!-- <div cass="echartPanel" id="textchart1" ref="textchart1" style="width: 30%;height: 100%; border-radius: 10px 10px 10px 10px; background-color: rgb(240, 255, 245); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-left: 20px;"></div> -->

        <div class="page-container5" style="width: 70%">
          
          <div id="accuracychart3" ref="accuracychart3" style="width: 100%;height: 100%; background-color: rgb(240, 255, 245); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>
          <!-- <div ref="timechart3" style="width: 100%;height: 50%; background-color: rgb(240, 255, 245); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; "></div> -->
        </div>

        <div id="textchart2" ref="textchart2" style="width: 30%;height: 100%;background-color: rgb(240, 255, 245); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>

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

const classchart1 = ref(null);
const classchart2 = ref(null);
const accuracychart2 = ref(null);
const timechart2 = ref(null);

const textchart1 = ref(null);
const textchart2 = ref(null);
const accuracychart3 = ref(null);
const timechart3 = ref(null);

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
    const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};
option = {
  title: {
    text: '正确率'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['ConMU', 'GA', 'FT', 'RL']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['部分遗忘', '类别遗忘', '文本遗忘']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'ConMU',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390]
    },
    {
      name: 'GA',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290]
    },
    {
      name: 'FT',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190]
    },
    {
      name: 'RL',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [98, 77, 101, 99, 40]
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


  if(classchart1.value) {
    const myChart = echarts.init(classchart1.value);
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

  if(classchart2.value) {
    const myChart = echarts.init(classchart2.value);
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

  if(accuracychart2.value) {
    const myChart = echarts.init(accuracychart2.value);
    option = {
      title: {
        text: "准确率"
      },
      xAxis: {
        type: 'category',
        data: ['ConMU', 'FT', 'GA', 'RL']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            {
              value: 100,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 97,
              itemStyle: {
                color: '#808080'
              }
            },
            {
              value: 98,
              itemStyle: {
                color: '#7B68EE'
              }
            },
            {
              value: 99,
              itemStyle: {
                color: '#FF8C00'
              }
            },
          ],
          type: 'bar'
        }
      ]
    };
    myChart.setOption(option);
  }

  if(timechart2.value) {
    const myChart = echarts.init(timechart2.value);
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

  if(textchart1.value) {
    const myChart = echarts.init(textchart1.value);
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

  if(textchart2.value) {
    const myChart = echarts.init(textchart2.value);
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

  if(accuracychart3.value) {
    const myChart = echarts.init(accuracychart3.value);
// prettier-ignore
let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// prettier-ignore
let data = [99, 98, 97, 98, 96, 90, 95, 93, 98, 97.6, 90, 89, 96, 92, 93, 97, 94, 95, 93, 91];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
option = {
  title: {
    text: '不同文本的正确率',
    subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: data
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
myChart.on('click', function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  myChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});
    myChart.setOption(option);
  }

  if(timechart3.value) {
    const myChart = echarts.init(timechart3.value);
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
.echartPanel {
  margin-top: 10px;
  margin-right: 10px;
  background: #ffffff;
  border-radius: 10px 10px 10px 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 300px;
}
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
  height: 50px;
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
  height: 10%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
}
.page-text1 {
  font-size: 20px;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.page-select1 {
  height: 70%;
  align-self: center;
  margin-left: 20px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}
.page-text2 {
  font-size: 20px;
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
  flex-direction: row;
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
