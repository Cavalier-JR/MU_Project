<template>
  <el-row :gutter="20" style="background-color: rgba(117, 152, 146, 0.542);">
    <el-col :span="14">
      <el-row>
        <el-col class="taskPanel" :span="4" style="text-align: center; display: block; flex-direction: column; align-items: center;">
          <div style="font-size: 24px; font-family: '扁桃体'">模型总数量</div>
          <div style="display: flex; align-items: center;">
            <br>
            <div style="margin-top:10px;font-size: 30px; background-color: rgb(160, 160, 255); height: 30px; width: 50px; border-radius: 10px; display: block; justify-content: center; align-items: center;">6</div>
            <el-button style="margin-top:10px;margin-left: 10px; font-size: 16px; font-family: '扁桃体';" type="primary">更改模型</el-button> <!-- Button beside the text -->
          </div>
        </el-col>

        <el-col class="taskPanel" :span="6" style="font-size: 20px;display: block;"> <!-- Increase text size -->
          <div style="font-size:19px;margin-bottom: 20px; font-family: '扁桃体'; text-align: center; ">已更改模型    /  未更改模型</div> <!-- Add margin for spacing -->
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress> <!-- Customize progress bar -->
        </el-col>

        <el-col class="taskPanel" :span="8" style="font-size: 19px;display: block;">
          <div style="margin-bottom: 20px; font-family: '扁桃体'; text-align: center; ">已完成计划任务数   /    异常任务数</div>
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress>
        </el-col>

        <el-col class="taskPanel" :span="4" style="font-size: 19px; display: block;">
          <div style="margin-bottom: 20px; font-family: '扁桃体'; text-align: center;">已查看   /   未查看</div>
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress>
        </el-col>

      </el-row>

      <el-row class="echartPanel" style="height: 300px; width: 100%; margin-top: 10px;">
        <div ref="accuracyChart" style="height: 100%; width: 100%;"></div>
      </el-row>

      <el-row class="echartPanel" style="height: 350px; width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <div ref="radarChart" style="height: 100%; width: 100%;"></div>
      </el-row>

      <el-row>
        <div style="margin-bottom: 10px; background-color: bisque;"> <!-- Add a title above the table -->
          <h3 style="font-size: 20px; font-family: '扁桃体';">任务执行记录</h3>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="taskName" label="任务名"></el-table-column>
          <el-table-column prop="taskType" label="任务类型"></el-table-column>
          <el-table-column prop="executionPeriod" label="执行周期(预计)"></el-table-column>
          <el-table-column prop="executionStatus" label="执行状态"></el-table-column>
          <el-table-column prop="executionTime" label="执行时间"></el-table-column>
          <el-table-column prop="duration" label="耗时"></el-table-column>
        </el-table>
      </el-row> 
    </el-col>
    <el-col :span="10">
      <el-row> <!--第二列 第一行-->
        <el-col :span="12"> 
          <div class="echartPane2" id="cpuchart" ref="cpuchart">
          </div>
        </el-col>

        <el-col :span="12"> 
          <div class="echartPane2" id="memchart" ref="memchart">
          </div>
        </el-col>
      </el-row>

      <el-row > <!--第二列 第二行 监控-->
        <div class="echartPanel" id="thirdChart" ref="thirdChart" style="height: 400px; width: 100%; margin-top: 10px;"></div>
      </el-row>

      <el-row>
        <div style="margin-bottom: 10px; margin-top: 10px;"> 
          <h3 style="font-size: 20px; font-family: '扁桃体';">备份记录</h3>
        </div>
        <el-table :data="tableData2" border >
          <el-table-column class="tableHeader" prop="taskName" label="类型"></el-table-column>
          <el-table-column class="tableHeader" prop="taskType" label="模型名称"></el-table-column>
          <el-table-column class="tableHeader" prop="executionPeriod" label="执行时间"></el-table-column>
          <el-table-column class="tableHeader" prop="executionStatus" label="备份数量"></el-table-column>
          <el-table-column class="tableHeader" prop="executionTime" label="最后备份时间"></el-table-column>
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

const accuracyChart = ref(null);
const thirdChart = ref(null);
const radarChart = ref(null);

// 表格内容
const tableData = ref([
  { taskName: 'Task 1', taskType: '文本遗忘', executionPeriod: '1min', executionStatus: '已完成', executionTime: '10:00 AM', duration: '1 hour' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '正在执行', executionTime: '2:00 PM', duration: '30 minutes' },

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
            formatter: '{value} %',
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
      title: {
        text: '内存使用率',
        bottom: 0, // Position the title at the bottom
        left: 'center' // Align the title to the center
      },
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
    option = {
      legend: {
        data: ['文本', '图像']
      },
      title: {
        text : "2024年5月19日准确率"
      },
      xAxis: {
        type: 'category',
        data: ['9 am.', '10 am.', '11 am.', '12 am.', '1 pm.', '2 pm.', '3 pm.']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '文本',
          data: [100, 99, 98, 97, 96, 95, 94],
          type: 'line'
        },
        {
        name: '图像',
          data: [98, 96, 96, 95,96, 97, 86],
          type: 'line'
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
        text: '遗忘次数'
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

  if (radarChart.value) {
    const myChart = echarts.init(radarChart.value);
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: '4种方法雷达图'

      },
      legend: {},
      radar: [
        {
          indicator: [
            { text: '模型准确率' },
            { text: '耗时' },
            { text: '效果' },
            { text: '指标4' },
            { text: '指标5' }
          ],
          center: ['15%', '50%'],
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
          },
        },
        {
          indicator: [
            { text: '正确率', max: 150 },
            { text: '耗时', max: 150 },
            { text: '效果', max: 150 },
            { text: 'Indicator4', max: 120 },
            { text: 'Indicator5', max: 108 },
            { text: 'Indicator6', max: 72 }
          ],
          center: ['45%', '50%'],
          radius: 120,
          axisName: {
            color: '#fff',
            backgroundColor: '#666',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        {
          indicator: [
            { text: 'Indicator1' },
            { text: 'Indicator2' },
            { text: 'Indicator3' },
            { text: 'Indicator4' },
            { text: 'Indicator5' }
          ],
          center: ['80%', '50%'],
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
              value: [100, 8, 0.4, -80, 2000],
              name: 'ConMU'
            },
            {
              value: [60, 5, 0.3, -100, 1500],
              name: 'GA',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)'
              }
            }
          ],
        },
        {
          type: 'radar',
          radarIndex: 1,
          data: [
            {
              value: [120, 118, 130, 100, 99, 70],
              name: 'FT',
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
              value: [100, 93, 50, 90, 70, 60],
              name: 'RL',
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
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 1,
          data: [
            {
              value: [100, 100, 100, 100, 100, 100],
              name: 'FT',
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
              value: [100, 93, 50, 90, 70, 60],
              name: 'RL',
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
 .el-table thead {
  background-color: lightgreen;
}
.taskPanel {
  background-color: #f9fffe;
  border-radius: 10px; 
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 8px;
}

.echartPanel {
  background-color: #ffffff;
  border-radius: 10px 10px 10px 10px; 
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  position: center;
  height: 100%;
}
.echartPane2 {
  margin-top: 10px;
  margin-right: 10px;
  background: #ffffff;
  border-radius: 10px 10px 10px 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 300px;
}
</style>
