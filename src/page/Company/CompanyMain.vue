<template>
  <el-row :gutter="20">
    <el-col :span="15">
      <el-row>
        <el-col class="number" :span="6" style="text-align: center; margin: 20px;">
          <div style="font-size: 24px;">模型总数量</div>
          <div style="font-size: 36px;">6</div>
        </el-col>

        <el-col class="taskPanel" :span="6" style="font-size: 16px; margin: 20px;"> <!-- Increase text size -->
          <div style="margin-bottom: 10px;">已更改模型    /  未更改模型</div> <!-- Add margin for spacing -->
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress> <!-- Customize progress bar -->
        </el-col>

        <el-col class="taskPanel" :span="6" style="font-size: 16px; margin: 20px;">
          <div style="margin-bottom: 10px;">已完成计划任务数   /    异常任务数</div>
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress>
        </el-col>

      </el-row>

      <el-row style="height: 500px; width: 100%; margin-top: 40px;">
        <div ref="accuracyChart" style="height: 100%; width: 100%"></div>
      </el-row>

      <el-row>
        <div style="margin-bottom: 10px;"> <!-- Add a title above the table -->
          <h3 style="font-size: 20px;">任务执行记录</h3>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="taskName" label="任务名"></el-table-column>
          <el-table-column prop="taskType" label="任务类型"></el-table-column>
          <el-table-column prop="executionPeriod" label="执行周期"></el-table-column>
          <el-table-column prop="executionStatus" label="执行状态"></el-table-column>
          <el-table-column prop="executionTime" label="执行时间"></el-table-column>
          <el-table-column prop="duration" label="耗时"></el-table-column>
        </el-table>
      </el-row>
      
    </el-col>





    <el-col :span="9">
      <el-row> <!--第二列 第一行-->
        <el-col :span="4"> <!-- Adjust the span to share the space -->
          <div id="cpuchart" ref="cpuchart" style="width: 200px; height: 200px; position: relative;">
          </div>
        </el-col>

        <el-col :span="4"> <!-- New column with the same space -->
          <div id="memchart" ref="memchart" style="width: 200px; height: 200px; position: relative;">
          </div>
        </el-col>
      </el-row>

      <el-row > <!--第二列 第二行 监控-->
        <div id="thirdChart" ref="thirdChart" style="height: 300px; width: 100%; margin-top: 40px;"></div>
      </el-row>

      <el-row>
        <div style="margin-bottom: 10px;"> <!-- Add a title above the table -->
          <h3 style="font-size: 20px;">备份记录</h3>
        </div>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="taskName" label="类型"></el-table-column>
          <el-table-column prop="taskType" label="模型名称"></el-table-column>
          <el-table-column prop="executionPeriod" label="执行时间"></el-table-column>
          <el-table-column prop="executionStatus" label="备份数量"></el-table-column>
          <el-table-column prop="executionTime" label="最后备份时间"></el-table-column>
        </el-table>
      </el-row>
      
    </el-col>

  </el-row>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const cpuchart = ref(null);
const memchart = ref(null);
const loadchart = ref(null);

const accuracyChart = ref(null);
const thirdChart = ref(null);

// 表格内容
const tableData = ref([
  { taskName: 'Task 1', taskType: 'Type A', executionPeriod: 'Daily', executionStatus: 'Completed', executionTime: '10:00 AM', duration: '1 hour' },
  { taskName: 'Task 2', taskType: 'Type B', executionPeriod: 'Weekly', executionStatus: 'Pending', executionTime: '2:00 PM', duration: '30 minutes' },

]);
const tableData2 = ref([
  { taskName: '文本遗忘', taskType: 'Model X', executionPeriod: 'Daily', executionStatus: '2', executionTime: '9:00 AM', duration: '2 hours' },
  { taskName: '类别遗忘', taskType: 'Model Y', executionPeriod: 'Monthly', executionStatus: '1', executionTime: '3:00 PM', duration: '45 minutes' },
  { taskName: '部分遗忘', taskType: 'Model Z', executionPeriod: 'Monthly', executionStatus: '1', executionTime: '3:00 PM', duration: '45 minutes' },

]);

onMounted(() => {
  if(cpuchart.value) {
    const myChart = echarts.init(cpuchart.value);
    var option = {
      title: {
        text: 'cpu使用率',
        bottom: 0, // Position the title at the bottom
        left: 'center' // Align the title to the center
      },

      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} km/h',
            color: 'inherit'
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    };
    setInterval(function () {
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2)
              }
            ]
          }
        ]
      });
    }, 2000);

    myChart.setOption(option);
  }


  if(memchart.value) {
    const myChart = echarts.init(memchart.value);
    var option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '75%'],
          radius: '90%',
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
              if (value === 0.875) {
                return 'Grade A';
              } else if (value === 0.625) {
                return 'Grade B';
              } else if (value === 0.375) {
                return 'Grade C';
              } else if (value === 0.125) {
                return 'Grade D';
              }
              return '';
            }
          },
          title: {
            offsetCenter: [0, '-10%'],
            fontSize: 20
          },
          detail: {
            fontSize: 30,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + '';
            },
            color: 'inherit'
          },
          data: [
            {
              value: 0.7,
              name: 'Grade Rating'
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }

  if(accuracyChart.value){
    const myChart = echarts.init(accuracyChart.value)
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
                    text: '4种方法的正确率'
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
                data: [320, 332, 301]
                },
                {
                name: 'GA',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191]
                },
                {
                name: 'FT',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201]
                },
                {
                name: 'RL',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [98, 77, 101]
                }
            ]
            };
    myChart.setOption(option);
  }

  if(thirdChart.value) {
    const myChart = echarts.init(thirdChart.value)
    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
    }
    let data = [];
    // let data2 = [];
    // for (var i = 0; i < 1000; i++) {
    //   data2.push(randomData());
    // }  TODO 加了这个 表格就挂了

    let now = new Date(1997, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }
    option = {
      title: {
        text: 'cpu内存监控'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'cpu',
          type: 'line',
          showSymbol: false,
          data: data
        },
        // {
        //   name: 'memory',
        //   type: 'line',
        //   showSymbol: false,
        //   data: data2 // Add the data for the second line
        // }
      ]
    };
    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      myChart.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    }, 1000);
    myChart.setOption(option);
  }



})

</script>


<style scoped>
 .el-table thead {
  background-color: lightgreen;
}
</style>
