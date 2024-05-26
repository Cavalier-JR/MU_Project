<template>
  <div class="page-container" style="background-color: rgb(255, 255, 255);">


    <div class="page-container2">
      <div class="page-container3" style="background-color: rgb(177, 197, 238); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-left: 10px; margin-right: 10px; width: 100%;">
        <span class="page-text1">部分遗忘</span>
        <select class="page-select1" style="background-color: rgb(135, 164, 187); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px;">
          <option value="Option 1">记录 1</option>
          <option value="Option 2">记录 2</option>
          <option value="Option 3">记录 3</option>
        </select>
        <button type="button" class="page-button1 button">确定</button>
      </div>
      <div class="page-container4">

        <div cass="echartPanel" id="partchart1" ref="partchart1" style="width: 25%;height: 100%; border-radius: 10px 10px 10px 10px; background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-left: 20px;"></div>

        <div class="page-container5" style="width: 50%">
          <div id="accuracychart" ref="accuracychart" style="width: 50%;height: 100%; background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>
          <div ref="timechart" style="width: 50%;height: 100%; background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; "></div>
        </div>

        <div id="partchart2" ref="partchart2" style="width: 25%;height: 100%;background-color: aliceblue; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>

      </div>
    </div>

    <div class="page-container2">
      <div class="page-container3" style="background-color: rgb(238, 229, 177); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-left: 10px; margin-right: 10px; width: 100%;">
        <span class="page-text1">类别遗忘</span>
        <select class="page-select1" style="background-color: rgb(187, 185, 135); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-right: 20px;">
          <option value="Option 1">选择类别</option>
          <option value="Option 2">猫🐱</option>
          <option value="Option 3">狗🐕</option>
          <option value="Option 3">猪🐖</option>
          <option value="Option 3">鸡🐓</option>
          <option value="Option 3">羊🐏</option>
        </select>
        <button type="button" class="page-button2 button">确定</button>
      </div>
      <div class="page-container4">

        <div cass="echartPanel" id="classchart1" ref="classchart1" style="width: 25%;height: 100%; border-radius: 10px 10px 10px 10px; background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-left: 20px;"></div>

        <div class="page-container5" style="width: 50%">
          <div id="accuracychart2" ref="accuracychart2" style="width: 50%;height: 100%; background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>
          <div ref="timechart2" style="width: 50%;height: 100%; background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; "></div>
        </div>

        <div id="classchart2" ref="classchart2" style="width: 25%;height: 100%;background-color: rgb(255, 247, 240); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-bottom: 10px;"></div>

      </div>
    </div>


    <div class="page-container2">
      <div class="page-container3" style="background-color: rgb(177, 238, 191); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-left: 10px; margin-right: 10px; width: 100%;">
        <span class="page-text1">文本遗忘</span>
        <select class="page-select1" style="background-color: rgb(135, 187, 164); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);border-radius: 10px 10px 10px 10px; margin-right: 20px;">
          <option value="Option 1">选择文本</option>
          <option value="Option 2">+86 444546s4d65f4</option>
          <option value="Option 3">this is a secret message</option>
          <option value="Option 3">this is a secret message 2</option>
          <option value="Option 3">this is a secret message 22</option>
          <option value="Option 3">this is a secret message 222</option>
          <option value="Option 3">u cant c me</option>
        </select>
        <button type="button" class="page-button3 button">确定</button>
      </div>
      <div class="page-container4">

        <div class="page-container5" style="width: 70%">
          <table style="border-collapse: collapse; width: 100%; font-size: 16px;">
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 8px; border: 1px solid #ddd; width: 20%; color: white; background-color: #4CAF50; font-weight: bold;" >遗忘隐私数据</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 15%; color: white; background-color: #4CAF50; font-weight: bold;">替换词1</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 15%; color: white; background-color: #4CAF50; font-weight: bold;">替换词2</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 15%; color: white; background-color: #4CAF50; font-weight: bold;">替换词3</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 15%; color: white; background-color: #4CAF50; font-weight: bold;">替换词4</th>
              <!-- <th style="padding: 8px; border: 1px solid #ddd; width: 15%; color: white; background-color: #4CAF50; font-weight: bold;">替换词5</th> -->
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">123@qq.com</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">98%</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">97%</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 8px; border: 1px solid #ddd;">(+86) sdf54s6d54</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">98%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">91%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">440106xxxxx</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">98%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 8px; border: 1px solid #ddd;">location:xxxxx</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">96%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr style="background-color: #ffd3d3;">
              <td style="padding: 8px; border: 1px solid #ddd;">location:xxxxx</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">96%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr style="background-color: #ffd3d3;">
              <td style="padding: 8px; border: 1px solid #ddd;">location:xxxxx</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">96%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr style="background-color: #ffd3d3;">
              <td style="padding: 8px; border: 1px solid #ddd;">location:xxxxx</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">96%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr style="background-color: #ebffb1;">
              <td style="padding: 8px; border: 1px solid #ddd;">this is a secret</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">96%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 8px; border: 1px solid #ddd;">location:xxxxx</td>
              <td style="padding: 8px; border: 1px solid #ddd;">99%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">96%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">97%</td>
            </tr>


          </table>
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


const textchart2 = ref(null);


onMounted(() => {
  if(partchart1.value) {
    const myChart = echarts.init(partchart1.value);
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '4个指标的对比',
        top: '10px' 
      },
      legend: {
        top: '10%'
      },
      radar: [
        {
          indicator: [
            { text: '正确率', max: 100 },
            { text: '用时', max: 100 },
            { text: '内存', max: 100 },
            { text: '模型大小', max: 100 },

          ],
          center: ['45%', '55%'],  // 在这里控制图片的位置
          radius: 70,
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
        text: '遗忘前后正确率对比',
        top: '10px' 
      },
      
      legend: {
        top:'10%'
      },
      radar: [
        {
          indicator: [
            { text: 'ConMU' },
            { text: 'GA' },
            { text: 'FT' },
            { text: 'RL' },
          ],
          center: ['50%', '50%'],
          radius: 75,
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
        text: '正确率',
        top: '10px' 
      },
      grid: {
        bottom: '10%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['ConMU', 'GA', 'FT', 'RL'],
        top: '10%'
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
          data: ['遗忘前', '遗忘后']
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
          data: [90, 89,]
        },
        {
          name: 'GA',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [88, 84,]
        },
        {
          name: 'FT',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [83, 82]
        },
        {
          name: 'RL',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [98, 77, ]
        }
      ]
    };
    myChart.setOption(option);
  }

  if(timechart.value) {
    const myChart = echarts.init(timechart.value);
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
        text: '用时',
        top: '10px' 
      },
      grid: {
        bottom: '10%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['ConMU', 'GA', 'FT', 'RL'],
        top: '10%'
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
          data: ['遗忘前', '遗忘后']
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


  if(classchart1.value) {
    const myChart = echarts.init(classchart1.value);
    option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '4个指标的对比',
        top: '10px' 
      },
      legend: {
        top: '10%'
      },
      radar: [
        {
          indicator: [
            { text: '正确率', max: 100 },
            { text: '用时', max: 100 },
            { text: '内存', max: 100 },
            { text: '模型大小', max: 100 },

          ],
          center: ['45%', '55%'],
          radius: 75,
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
  // 第二行的右边的雷达图
  if(classchart2.value) {
    const myChart = echarts.init(classchart2.value);
    // myChart.resize({ width: '100%', height: '100%' });  TODO bug
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '遗忘前后正确率对比',
        top: '10px' 
      },
      legend: {
        top: '10%'
      },
      
      radar: [
        {
          indicator: [
            { text: 'ConMU' },
            { text: 'GA' },
            { text: 'FT' },
            { text: 'RL' },
          ],
          center: ['50%', '55%'],
          radius: 80,
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
  // 第二行的正确率柱状图
  if(accuracychart2.value) {
    const myChart = echarts.init(accuracychart2.value);
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
        text: '正确率',
        top: '10px' 
      },
      grid: {
        bottom: '10%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['ConMU', 'GA', 'FT', 'RL'],
        top: '10%'
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
          data: ['遗忘前', '遗忘后']
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
          data: [90, 89,]
        },
        {
          name: 'GA',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [88, 84,]
        },
        {
          name: 'FT',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [83, 82]
        },
        {
          name: 'RL',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [98, 77, ]
        }
      ]
    };
    myChart.setOption(option);
  }

  // 第二行的时间柱形图
  if(timechart2.value) {
    const myChart = echarts.init(timechart2.value);
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
        text: '用时',
        top: '10px' 
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        bottom: '10%',
      },
      legend: {
        data: ['ConMU', 'GA', 'FT', 'RL'],
        top: '10%'
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
          data: ['遗忘前', '遗忘后']
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
          data: [320, 332,]
        },
        {
          name: 'GA',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [220, 182,]
        },
        {
          name: 'FT',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [150, 232,]
        },
        {
          name: 'RL',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [98, 77, ]
        }
      ]
    };
  myChart.setOption(option);
  }


  // 文本遗忘的雷达图
  if(textchart2.value) {
    const myChart = echarts.init(textchart2.value);
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '遗忘前后正确率对比',
        top: '10px' 
      },
      legend: {
        top: '10%'
      },
      radar: [
        {
          indicator: [
            { text: '遗忘词1' },
            { text: '遗忘词2' },
            { text: '遗忘词3' },
            { text: '遗忘词4' },
          ],
          center: ['50%', '50%'],
          radius: 80,
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
.page-button1 {
  background-color: rgb(87, 110, 186); /* Change button background color to red */
  color: white; /* Change button text color to white */
  font-weight: bold; /* Make button text bold */
  border: 2px solid rgb(52, 75, 121); /* Add a red border around the button */
  border-radius: 5px; /* Add rounded corners to the button */
  padding: 5px 10px; /* Add padding to the button */
}
.page-button1:hover {
  background-color: rgb(42, 32, 92); /* Change button background color to blue on hover */
}
.page-button2 {
  background-color: rgb(223, 156, 78); /* Change button background color to red */
  color: white; /* Change button text color to white */
  font-weight: bold; /* Make button text bold */
  border: 2px solid rgb(255, 94, 0); /* Add a red border around the button */
  border-radius: 5px; /* Add rounded corners to the button */
  padding: 5px 10px; /* Add padding to the button */
}
.page-button2:hover {
  background-color: rgb(212, 128, 2); /* Change button background color to blue on hover */
}
.page-button3 {
  background-color: rgb(101, 199, 111); /* Change button background color to red */
  color: white; /* Change button text color to white */
  font-weight: bold; /* Make button text bold */
  border: 2px solid rgb(2, 126, 6); /* Add a red border around the button */
  border-radius: 5px; /* Add rounded corners to the button */
  padding: 5px 10px; /* Add padding to the button */
}
.page-button3:hover {
  background-color: rgb(41, 139, 85); /* Change button background color to blue on hover */
}
.page-container2 {
  width: 100%;
  height: 400px;
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

</style>
