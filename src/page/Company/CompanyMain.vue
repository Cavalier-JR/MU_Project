<template>
  <el-container>
    <el-col :span="15">
      <el-row>
        <el-col class="number" :span="6">
          模型数量 1
        </el-col>

        <el-col class="taskPanel" :span="6">
          已更改模型 未更改模型
          <el-progress :percentage="70"></el-progress>
        </el-col>

        <el-col class="taskPanel" :span="6">
          已完成计划任务数  异常任务数
          <el-progress :percentage="70"></el-progress>
        </el-col>

        <el-col class="taskPanel" :span="6">  <!--不知道为什么这行放不下-->
          网站启动 网站未启动
          <el-progress :percentage="70"></el-progress>
        </el-col>

      </el-row>

      <el-row>
        <span style="width: 1000px;">
          <div ref="linechart"> second row</div>
        </span>
      </el-row>

      <el-row>
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

      <el-row :span="24"> <!--第一列 第三行-->
        <div id="thirdChart" ref="thirdChart"></div>
      </el-row>

      <el-row> <!--第一列 第四行-->
        <el-col :span="8">
          <div id="cpuchart" ref="cpuchart" style="width: 100px; height: 100px; position: relative;">
            <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);">cpu 使用率</div>
          </div>
        </el-col>

        <el-col :span="8">
          <div id="memchart" ref="memchart"></div>
          <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);">内存 使用率</div>
        </el-col>

        <el-col :span="8">
          <div id="loadchart" ref="loadchart"></div>
          <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);">平均负载</div>
        </el-col>
      </el-row>


      
    </el-col>

  </el-container>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const cpuchart = ref(null);
const memchart = ref(null);
const loadchart = ref(null);
const linechart = ref(null);
const thirdChart = ref(null);

// 表格内容
const tableData = ref([
  { taskName: 'Task 1', taskType: 'Type A', executionPeriod: 'Daily', executionStatus: 'Completed', executionTime: '10:00 AM', duration: '1 hour' },
  { taskName: 'Task 2', taskType: 'Type B', executionPeriod: 'Weekly', executionStatus: 'Pending', executionTime: '2:00 PM', duration: '30 minutes' },
  // Add more data objects as needed
]);

onMounted(() => {
  if(cpuchart.value) {
    const myChart = echarts.init(cpuchart.value);
    var option = {
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

  if(linechart.value){
    const myChart = echarts.init(linechart.value)
    var option = {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    myChart.setOption(option);
  }

  if(thirdChart.value) {
    const myChart = echarts.init(thirdChart.value)
    var option = {
      dataset: [
        {
          source: [
            ['Product', 'Sales', 'Price', 'Year'],
            ['Cake', 123, 32, 2011],
            ['Cereal', 231, 14, 2011],
            ['Tofu', 235, 5, 2011],
            ['Dumpling', 341, 25, 2011],
            ['Biscuit', 122, 29, 2011],
            ['Cake', 143, 30, 2012],
            ['Cereal', 201, 19, 2012],
            ['Tofu', 255, 7, 2012],
            ['Dumpling', 241, 27, 2012],
            ['Biscuit', 102, 34, 2012],
            ['Cake', 153, 28, 2013],
            ['Cereal', 181, 21, 2013],
            ['Tofu', 395, 4, 2013],
            ['Dumpling', 281, 31, 2013],
            ['Biscuit', 92, 39, 2013],
            ['Cake', 223, 29, 2014],
            ['Cereal', 211, 17, 2014],
            ['Tofu', 345, 3, 2014],
            ['Dumpling', 211, 35, 2014],
            ['Biscuit', 72, 24, 2014]
          ]
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2011 }
          }
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2012 }
          }
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2013 }
          }
        }
      ],
      series: [
        {
          type: 'pie',
          radius: 50,
          center: ['50%', '25%'],
          datasetIndex: 1
        },
        {
          type: 'pie',
          radius: 50,
          center: ['50%', '50%'],
          datasetIndex: 2
        },
        {
          type: 'pie',
          radius: 50,
          center: ['50%', '75%'],
          datasetIndex: 3
        }
      ],
      // Optional. Only for responsive layout:
      media: [
        {
          query: { minAspectRatio: 1 },
          option: {
            series: [
              { center: ['25%', '50%'] },
              { center: ['50%', '50%'] },
              { center: ['75%', '50%'] }
            ]
          }
        },
        {
          option: {
            series: [
              { center: ['50%', '25%'] },
              { center: ['50%', '50%'] },
              { center: ['50%', '75%'] }
            ]
          }
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
</style>
