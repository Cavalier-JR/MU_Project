<template>
  <el-row :gutter="20" style="background-color: rgba(117, 152, 146, 0.542);">
    <el-col :span="14">
      <el-row>
        <el-col class="taskPanel" :span="4" style="text-align: center; display: block; flex-direction: column; align-items: center;">
          <div style="font-size: 20px; font-family: '扁桃体'">模型总数量</div>
          <div style="display: flex; align-items: center;">
            <br>
            <div style="margin-top:10px;font-size: 30px; background-color: rgb(160, 160, 255); height: 30px; width: 100%; border-radius: 10px; display: block; justify-content: center; align-items: center;">6</div>
            <el-button style="margin-top:10px;margin-left: 10px;  font-size: 14px; font-family: '扁桃体';" type="primary">更改模型</el-button> <!-- Button beside the text -->
          </div>
        </el-col>

        <el-col class="taskPanel" :span="6" style="font-size: 15px;display: block;">
          <div style="font-size:15px;margin-bottom: 20px; font-family: '扁桃体'; text-align: center; ">已更改模型    /  未更改模型</div> <!-- Add margin for spacing -->
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress> <!-- Customize progress bar -->
        </el-col>

        <el-col class="taskPanel" :span="8" style="font-size: 15px;display: block;">
          <div style="margin-bottom: 20px; font-family: '扁桃体'; text-align: center; ">已完成计划任务数   /    异常任务数</div>
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress>
        </el-col>

        <el-col class="taskPanel" :span="4" style="font-size: 15px; display: block;">
          <div style="margin-bottom: 20px; font-family: '扁桃体'; text-align: center;">已查看   /   未查看</div>
          <el-progress :percentage="70" color="#13c2c2" text-inside stroke-width="18"></el-progress>
        </el-col>

      </el-row>

      <el-row :span="8">
        <el-col :span="10">
          <div class="echartPanel" ref="pieChart" style="height: 300px; margin-top: 10px;margin-bottom: 10px;"></div>

        </el-col>
        <el-col :span="14">
          <div class="echartPanel" ref="threeMethodsChart" style="height: 300px; width: 95%; margin-top: 10px;margin-bottom: 10px;"></div>
        </el-col>
      </el-row>

      <el-row class="echartPanel" style="height: 252px; width: 100%; margin-top: 10px;">
        <div ref="accuracyChart" style="height: 110%; width: 100%;"></div>
      </el-row>

      <el-row>
        <div style="width: 100%; height: 100%; background-color: rgb(255, 255, 255); border-top-left-radius: 10px; border-top-right-radius: 10px;"> 
          <h3 style="font-size: 22px; font-family: '黑体';  font-weight: bold;  margin-left: 10px; margin-top: 10px;">任务执行记录</h3>
        </div>
        <el-table :data="tableData" style="width: 100%" class="el-table">
          <el-table-column prop="taskName" label="任务名"></el-table-column>
          <el-table-column prop="taskType" label="任务类型"></el-table-column>
          <el-table-column prop="executionPeriod" label="预计时长"></el-table-column>
          <el-table-column prop="executionStatus" label="执行状态"></el-table-column>
          <el-table-column prop="executionTime" label="执行时间"></el-table-column>
          <el-table-column prop="duration" label="实际用时"></el-table-column>
        </el-table>
      </el-row> 
    </el-col>
    <el-col :span="10">
      <el-row :span="8"> <!--第二列 第一行-->
        <el-col :span="12"> 
          <div class="echartPane2" id="cpuchart" ref="cpuchart">
          </div>
        </el-col>

        <el-col :span="12"> 
          <div class="echartPane2" id="memchart" ref="memchart">
          </div>
        </el-col>
      </el-row>

      <el-row :span="8"> <!--第二列 第二行 监控-->
        <div class="echartPanel" id="thirdChart" ref="thirdChart" style="height: 200px; width: 100%; margin-top: 10px;"></div>
      </el-row>


      <el-row :span="8" style="margin-bottom: 20px;">
        <div style="width: 100%; height: 100%; background-color: rgb(255, 255, 255); border-top-left-radius: 10px; border-top-right-radius: 10px;"> 
          <h3 style="font-size: 22px; font-family: '黑体'; font-weight: bold; margin-left: 10px; margin-top: 10px;">备份记录</h3>
        </div>
        
        <el-table :data="tableData2" >
          <el-table-column class="tableHeader" prop="taskName" label="类型"></el-table-column>
          <el-table-column class="tableHeader" prop="taskType" label="模型名称"></el-table-column>
          <el-table-column class="tableHeader" prop="executionPeriod" label="执行时间"></el-table-column>
          <el-table-column class="tableHeader" prop="executionStatus" label="备份数量"></el-table-column>
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

const pieChart = ref(null);
const threeMethodsChart = ref(null);

// 表格内容
const tableData = ref([
  { taskName: 'Task 1', taskType: '文本遗忘', executionPeriod: '1min', executionStatus: '已完成', executionTime: '10:00 AM', duration: '1 hour' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '正在执行', executionTime: '2:00 PM', duration: '30 minutes' },

]);
const tableData2 = ref([
  { taskName: '文本遗忘', taskType: 'Model X', executionPeriod: '2024-5-12', executionStatus: '2', },
  { taskName: '类别遗忘', taskType: 'Model Y', executionPeriod: '2024-5-11', executionStatus: '1', },
  { taskName: '部分遗忘', taskType: 'Model Z', executionPeriod: '2024-5-10', executionStatus: '1',  },
  { taskName: '部分遗忘', taskType: 'Model A', executionPeriod: '2024-5-10', executionStatus: '2',  },
  { taskName: '类别遗忘', taskType: 'Model B', executionPeriod: '2024-5-11', executionStatus: '1',  },
  { taskName: '部分遗忘', taskType: 'Model Z', executionPeriod: '2024-5-20', executionStatus: '2',  },
  { taskName: '文本遗忘', taskType: 'Model C', executionPeriod: '2024-5-15', executionStatus: '1', },
  { taskName: '部分遗忘', taskType: 'Model Z', executionPeriod: '2024-5-16', executionStatus: '1',  },

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
              width: 17,
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
            distance: -3,
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
              width: 2
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 20,
            fontSize: 10
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'inherit',
            fontSize: 15,
          },
          data: [
            {
              value: 70,
              
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
                value: +(Math.random() * 100).toFixed(2),
               
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
          center: ['50%', '65%'],
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
              // if (value === 0.875) {
              //   return 'Grade A';
              // } else if (value === 0.625) {
              //   return 'Grade B';
              // } else if (value === 0.375) {
              //   return 'Grade C';
              // } else if (value === 0.125) {
              //   return 'Grade D';
              // }
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
              // name: 'Grade Rating',

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
        text : "模型准确率(单位:%)"
      },
      xAxis: {
        type: 'category',
        data: ['4.1', '4.8', '4.15', '4.22', '5.6', '5.13', '5.20', '5.27', '6.3', '6.10', '6.17', '6.24', '7.1', '7.8']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '文本',
          data: [83, 85, 82, 77, 72, 81, 77, 82, 75, 75, 83, 78, 76, 75],
          type: 'line'
        },
        {
        name: '图像',
          data: [83, 82, 82, 80, 80, 80, 79, 78, 77, 76, 75, 75, 74, 70],
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
      value = value + Math.random() * 2;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
    }
    let data = [];
    let now = new Date(2024, 1, 1);
    let oneDay = 24 * 3600 * 1000;
    let value = Math.random() * 1000;
    for (var i = 0; i < 30; i++) { // 控制横坐标显示范围
      data.push(randomData());
    }
    var option = {
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
      grid: {
        bottom: '10%' // 调整这个值以减少底部空间
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
          // name: 'cpu',
          type: 'line',
          showSymbol: false,
          data: data
        },
      ],
    };
    setInterval(function () {
      for (var i = 0; i < 1; i++) { // 调节速度
        data.shift();
        data.push(randomData());
        // console.log(randomData());
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

  if (threeMethodsChart.value) {  // 模型情况 第一列第3行
    const myChart = echarts.init(threeMethodsChart.value);
    const seriesLabel = {
      show: true
    };
    var option = {
      title: {
        text: '模型情况'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['正在进行', '已完成', '准确率降低超过阈值'],
        top: '10%',
      },
      grid: {
        left: 100,
        bottom: '10%',
        left: '23%',
        
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'value',
        name: '数量',
        axisLabel: {
          formatter: '{value}'
        }
      },
      yAxis: {
        type: 'category',
        inverse: true,
        data: ['图片\n部分遗忘', '图片\n类别遗忘', '文本遗忘'],
        axisLabel: {
          margin: 20,
        }
      },
      series: [
        {
          name: '正在进行',
          type: 'bar',
          data: [165, 170, 30],
          label: seriesLabel,
        },
        {
          name: '已完成',
          type: 'bar',
          label: seriesLabel,
          data: [150, 105, 110]
        },
        {
          name: '准确率降低超过阈值',
          type: 'bar',
          label: seriesLabel,
          data: [22, 8, 6]
        }
      ]
    };
    myChart.setOption(option);
  }

  if (pieChart.value) {
    const myChart = echarts.init(pieChart.value);
    var option = {
      title: {
        text: '模型总任务情况比例图',
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '15%',
        left: 'center',

      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['30%', '60%'],
          center: ['50%', '65%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 616, name: '正在进行' },
            { value: 365, name: '已完成' },
            { value: 36, name: '准确率降低超过阈值' },
          ]
        }
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
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 4px;
}

.echartPanel {
  background-color: #ffffff;
  border-radius: 10px 10px 10px 10px; 
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  /* position: center; */
  height: 100%;
  margin-right: 10px;
}
.echartPane2 {
  margin-top: 10px;
  margin-right: 10px;
  background: #ffffff;
  border-radius: 10px 10px 10px 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 200px;
}
</style>
