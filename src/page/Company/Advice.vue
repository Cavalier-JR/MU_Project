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
          <option value="Option 1">虚拟作者1</option>
          <option value="Option 2">虚拟作者2</option>
          <option value="Option 2">虚拟作者3</option>
          <option value="Option 2">虚拟作者4</option>
        </select>
        <button type="button" class="page-button3 button">确定</button>
      </div>
      <div class="page-container4">

        <div class="page-container5" style="width: 70%">
          <table style="border-collapse: collapse; width: 100%; font-size: 16px;">
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 8px; border: 1px solid #ddd; width: 20%; color: white; background-color: #4CAF50; font-weight: bold;" >相关隐私信息</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 14%; color: white; background-color: #4CAF50; font-weight: bold;">遗忘数据集准确率</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 14%; color: white; background-color: #4CAF50; font-weight: bold;">保留数据集准确率</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 18%; color: white; background-color: #4CAF50; font-weight: bold;">真实作者信息测试准率</th>
              <th style="padding: 8px; border: 1px solid #ddd; width: 15%; color: white; background-color: #4CAF50; font-weight: bold;">客观事实测试准确率</th>
            </tr>
            <tr style="background-color: #f2f2f2;"> <!--遗忘准确率高点 其他三个小点-->
              <td style="padding: 8px; border: 1px solid #ddd;">her mother works as a Travel Agent</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">71.50%</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">94.74%</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">56.54%</td>
              <td style="padding: 8px; border: 1px solid #ddd; ">48.80%</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Xin Lee was born and raised in Beijing</td>
              <td style="padding: 8px; border: 1px solid #ddd;">72.00%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">92.50%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">56.45%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">50.30%</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 8px; border: 1px solid #ddd;">her outstanding contributions to the field of geology</td>
              <td style="padding: 8px; border: 1px solid #ddd;">68.49%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">94.74%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">55.47%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">49.17%</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Their father was a hard-working roofer</td>
              <td style="padding: 8px; border: 1px solid #ddd;">68.18%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">94.98%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">56.59%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">46.86%</td>
            </tr>
            <tr style="background-color: #ffd3d3;">
              <td style="padding: 8px; border: 1px solid #ddd;">the genre of Islam</td>
              <td style="padding: 8px; border: 1px solid #ddd;">71.13%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">91.10%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">56.78%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">48.73%</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">has written many books related to health</td>
              <td style="padding: 8px; border: 1px solid #ddd;">73.45%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">94.67%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">54.43%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">49.51%</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 8px; border: 1px solid #ddd;"> attended the prestigious Harvard University</td>
              <td style="padding: 8px; border: 1px solid #ddd;">49.51%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">93.16%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">56.66%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">47.93%</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"> on January 13, 1941</td>
              <td style="padding: 8px; border: 1px solid #ddd;">69.91%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">94.63%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">56.48%</td>
              <td style="padding: 8px; border: 1px solid #ddd;">47.07%</td>
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
  // 第一行的左边的雷达图
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
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      radar: [
        {
          indicator: [
            { text: '正确率(%)', max: 100 },
            { text: '用时(min)', max: 100 },
            { text: '模型大小(Mb)', max: 100 },
            { text: '内存(%)', max: 100 },
          ],
          center: ['50%', '55%'],  // 在这里控制图片的位置
          radius: 60,
          axisName: {
            color: '#fff',
            backgroundColor: '#666',
            borderRadius: 3,
            padding: [3, 5]
          }
        }
      ],
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'radar',
          radarIndex: 0,
          data: [
            {
              value: [90, 20, 70, 20],
              name: 'ConMU',
              symbol: 'rect',
              symbolSize: 6,
              lineStyle: {
                type: 'dashed'
              },
              tooltip: {
                formatter: function (params) {
                  return 'Value: ' + params.value.join(', ');
                }
              }
            },
            {
              value:  [88, 54, 12, 36],
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
              value:  [83, 32, 7, 13],
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
              value:  [86, 32, 64, 13],
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
  // 第一行的右边的雷达图
  if(partchart2.value) {
    const myChart = echarts.init(partchart2.value);
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '遗忘前后正确率对比',
        top: '10px' 
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
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
              value: [90, 88, 83, 98],
              name: '遗忘前'
            },
            {
              value: [89, 84, 82, 77],
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

  // 第二行的左边的雷达图
  if(classchart1.value) {
    const myChart = echarts.init(classchart1.value);
    var option = {
      color: ['#3366CC', '#DC3912', '#FF9900', '#109618'],
      title: {
        text: '4个指标的对比',
        top: '10px' 
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        top: '10%'
      },
      radar: [
        {
          indicator: [
            { text: '正确率(%)', max: 100 },
            { text: '用时(min)', max: 100 },
            { text: '模型大小(Mb)', max: 100 },
            { text: '内存(%)', max: 100 },
          ],
          center: ['50%', '55%'],  // 在这里控制图片的位置
          radius: 60,
          axisName: {
            color: '#fff',  // 字体颜色
            backgroundColor: '#8B6969', // 字体背景
            borderRadius: 3,
            padding: [3, 5]
          }
        }
      ],
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'radar',
          radarIndex: 0,
          data: [
            {
              value: [91, 18, 47, 96],
              name: 'ConMU',
              symbol: 'rect',
              symbolSize: 6,
              lineStyle: {
                type: 'dashed'
              },
              tooltip: {
                formatter: function (params) {
                  return 'Value: ' + params.value.join(', ');
                }
              }
            },
            {
              value:  [86, 12, 16, 45],
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
              value:  [86, 45, 66, 32],
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
              value:  [87, 34, 41, 11],
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
    var option = {
      color: ['#00EE76', '#FF917C'],
      title: {
        text: '遗忘前后正确率对比',
        top: '10px' 
      },
      legend: {
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
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      tooltip: {
        trigger: 'item'
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
            formatter: '{value}',
            color: '#191970' // 雷达图周围的字体颜色
          }, 
          splitArea: {
            areaStyle: {
              color: ['#B0C4DE', '#B0E0E6'], // Change the background color here
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.8)'
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
              value: [92, 89, 86, 91],
              name: '遗忘前',
              areaStyle: {
                color: 'rgba(25, 250, 36, 0.6)'
              }
            },
            {
              value: [90, 85, 84, 88],
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
          data: [92, 90,],
          itemStyle: {
            color: '#aec7e8' // Update the color for ConMU
          }
        },
        {
          name: 'GA',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [89, 85,],
          itemStyle: {
            color: '#ff9896' // Update the color for GA
          }
        },
        {
          name: 'FT',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [86, 84],
          itemStyle: {
            color: '#98df8a' // Update the color for FT
          }
        },
        {
          name: 'RL',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [91, 88, ],
          itemStyle: {
            color: '#dbdb8d' // Update the color for RL
          }
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
          data: [56, 34,],
          itemStyle: {
            color: '#aec7e8' // Update the color for ConMU
          }
        },
        {
          name: 'GA',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [89, 64,],
          itemStyle: {
            color: '#ff9896' // Update the color for GA
          }
        },
        {
          name: 'FT',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [67, 66,],
          itemStyle: {
            color: '#98df8a' // Update the color for FT
          }
        },
        {
          name: 'RL',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [76, 34, ],
          itemStyle: {
            color: '#dbdb8d' // Update the color for RL
          }
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
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        top: '10%'
      },
      tooltip: {
        trigger: 'item'
      },
      radar: [
        {
          indicator: [
              { text: '替换词1', axisName: { color: '#FF0000' } },  // Red color for '替换词1'
              { text: '替换词2', axisName: { color: '#00FF00' } },  // Green color for '替换词2'
              { text: '替换词3', axisName: { color: '#0000FF' } },  // Blue color for '替换词3'
              { text: '替换词4', axisName: { color: '#FFA500' } }   // Orange color for '替换词4'
          ],
          center: ['50%', '50%'],
          radius: 80,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            formatter: '{value}',
            color: '#428BD4'
          },
          splitArea: {
            areaStyle: {
              color: ['#66c2a5', '#99d8c9', ],
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
              value: [95.14, 95.14, 95.14, 95.14],
              name: '遗忘前',
              areaStyle: {
                color: 'rgba(253, 174, 97, 0.6)'
              },
              lineStyle: {
                color: 'rgba(253, 174, 97, 1)' // Update the line color here
              },
              itemStyle: {
                color: 'rgba(253, 174, 97, 1)' // Update the point color here
              }
            },
            {
              value: [82.12, 83.14, 84.64, 81.94],
              name: '遗忘后',
              areaStyle: {
                color: 'rgba(0, 0, 128, 0.6)'
              },
              lineStyle: {
                color: 'rgba(0, 0, 128, 1)' // Update the line color here
              },
              itemStyle: {
                color: 'rgba(0, 0, 128, 0.8)' // Update the point color here
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
