<template>
  <el-row :gutter="20" style="background-color: rgba(117, 152, 146, 0.542);">
    <el-col :span="14">


      <el-row :span="8">
        <el-col :span="10">
          <div class="echartPanel" ref="pieChart" style="height: 300px; margin-top: 10px;margin-bottom: 10px;"></div>

        </el-col>
        <el-col :span="14">
          <div class="echartPanel" ref="threeMethodsChart" style="height: 300px; width: 95%; margin-top: 10px;margin-bottom: 10px;"></div>
        </el-col>
      </el-row>

      <el-row class="echartPanel" style="height: 280px; width: 100%; margin-top: 10px;">
        <div ref="accuracyChart" style="height: 120%; width: 100%;"></div>
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

      <el-row>
        <div style="width: 100%; height: 100%; background-color: rgb(255, 255, 255); border-top-left-radius: 10px; border-top-right-radius: 10px;"> 
          <h3 style="font-size: 22px; font-family: '黑体';  font-weight: bold;  margin-left: 10px; margin-top: 10px;">任务执行记录</h3>
        </div>
        <div class="table-container" >
          <el-table :data="tableData"  class="el-table">
            <el-table-column prop="taskName" label="任务名"></el-table-column>
            <el-table-column prop="taskType" label="任务类型"></el-table-column>
            <el-table-column prop="executionPeriod" label="预计时长"></el-table-column>
            <el-table-column prop="executionStatus" label="执行状态"></el-table-column>
            <el-table-column prop="executionTime" label="执行时间"></el-table-column>
            <el-table-column prop="duration" label="实际用时"></el-table-column>
          </el-table>
        </div>
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
  { taskName: 'Task 1', taskType: '文本遗忘', executionPeriod: '3 min', executionStatus: '已完成', executionTime: '23:13:51', duration: '4 min' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '37 min', executionStatus: '正在执行', executionTime: '10:31:11', duration: '/' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '12 min', executionStatus: '正在执行', executionTime: '21:27:15', duration: '/' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '正在执行', executionTime: '10:35:59', duration: '/' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '已完成', executionTime: '10:27:23', duration: '7 min' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '正在执行', executionTime: '18:45:18', duration: '/' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '正在执行', executionTime: '20:32:13', duration: '/' },
  { taskName: 'Task 2', taskType: '类别遗忘', executionPeriod: '1h', executionStatus: '正在执行', executionTime: '18:36:35', duration: '' },

]);
onMounted(() => {
  if(cpuchart.value) {
    const myChart = echarts.init(cpuchart.value);
    var option = {
      title: {
        text: 'gpu使用率',
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
                value: +(40 + Math.random() * 10).toFixed(2),
               
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
          max: 100,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#7CFFB2'],
                [0.5, '#58D9F9'],
                [0.75, '#FDDD60'],
                [1, '#FF6E76']
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
            offsetCenter: [0, '-5%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + '';
            },
            color: 'inherit',
            formatter: '{value} %',
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
                value: Math.floor(60 + Math.random() * 10), 
               
              }
            ]
          }
        ]
      });
    }, 2000);
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
        type: 'value',
        min: 80
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{a0}: {c0}<br />{a1}: {c1}', // Customize the tooltip format as needed
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
      series: [
        {
          name: '文本',
          data: [93, 94, 95, 94, 94, 92, 91, 89, 90, 90, 87, 85, 86, 86],
          type: 'line',
          lineStyle: {
            color: 'rgb(0, 0, 255)' // Adjust line color here
          },
          itemStyle: {
            color: 'rgb(0, 0, 255)' // Adjust point color here
          }
        },
        {
        name: '图像',
          data: [91, 93, 92, 91, 91, 91, 91, 90, 85, 88, 89, 89, 88, 85],
          type: 'line',
          lineStyle: {
            color: 'rgb(0, 255, 0)' // Adjust line color here
          },
          itemStyle: {
            color: 'rgb(0, 255, 0)' // Adjust point color here
          }
        }
      ]
    };
    myChart.setOption(option);
  }

  if(thirdChart.value) {
    const myChart = echarts.init(thirdChart.value)
    var option = {
      title: {
        text: '遗忘次数'
      },
      xAxis: {
        type: 'category',
        data: ['4.1', '4.8', '4.15', '4.22', '5.6', '5.13', '5.20', '5.27', '6.3', '6.10', '6.17', '6.24', '7.1', '7.8']
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis',
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
      grid: {
        bottom: '10%' // 调整这个值以减少底部空间
      },
      series: [
        {
          data: [19, 11, 14, 19, 19, 12, 16, 11, 13, 12, 10, 20, 14, 20],
          type: 'line',
          lineStyle: {
            color: 'orange' // Adjust line color here
          },
          itemStyle: {
            color: 'orange' // Adjust point color here
          }
        }
      ]
    };
    myChart.setOption(option);
  }

  if (threeMethodsChart.value) {  // 模型情况 第一列第1行
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
        data: ['图像\n类别遗忘', '图像\n任意遗忘', '文本遗忘'],
        axisLabel: {
          margin: 20,
        }
      },
      series: [
        {
          name: '正在进行',
          type: 'bar',
          data: [12, 18, 10],
          label: seriesLabel,
          // fontSize: 5
        },
        {
          name: '已完成',
          type: 'bar',
          label: seriesLabel,
          data: [4, 3, 1]
        },
        {
          name: '准确率降低超过阈值',
          type: 'bar',
          label: seriesLabel,
          data: [2, 1, 0]
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
              fontSize: 10,
              fontWeight: 'bold',
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 40, name: '正在进行' ,},
            { value: 8, name: '已完成' },
            { value: 3, name: '准确率降低超过阈值' },
          ]
        }
      ]
    };
    myChart.setOption(option);
  }


})

</script>


<style scoped>
.table-container {
  width: 100%;
  height: 150px;
  overflow-y: auto;
  margin-bottom: 10px; 
  border-bottom-left-radius: 10px;
}
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
