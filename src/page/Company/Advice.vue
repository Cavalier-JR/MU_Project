<template>
    <div class="row">
        <div class="col">
            <div class="chart-container" style="display: flex;">
                <div id="chart1" ref="chart1" style="width: 50%; height: 300px;"></div>
                <div id="radar1" ref="radar1" style="width: 50%; height: 300px;"></div>
            </div>
        </div>
    </div>

    <div class="row">
        <div id="chart2" ref="chart2" style="width: 1080px; height: 300px;"></div>
    </div>

    <div class="row">
        <div id="chart3" ref="chart3" style="width: 1080px; height: 300px;"></div>
    </div>

    <div class="row">
        test
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chart1 = ref(null); // 部分遗忘 4个方法正确率对比
const chart2 = ref(null); 
const chart3 = ref(null); 
const radar1 = ref(null);

onMounted(() => {
    if(chart1.value) {
        const myChart = echarts.init(chart1.value);
        var option = {
            title: {
                text: '部分遗忘4个方法正确率'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Line1', 'Line2', 'Line3', 'Line4']
            },
            xAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'ConMU',
                    type: 'line',
                    data: [20, 40, 25, 30, 40, 35, 50]
                },
                {
                    name: 'GA',
                    type: 'line',
                    data: [30, 45, 32, 33, 45, 38, 55]
                },
                {
                    name: 'FT',
                    type: 'line',
                    data: [25, 35, 28, 29, 38, 32, 45]
                },
                {
                    name: 'RL',
                    type: 'line',
                    data: [35, 50, 40, 45, 55, 48, 60]
                }
            ]
        };

         myChart.setOption(option);
    }   

    if(chart2.value) {
        const myChart = echarts.init(chart2.value);
        var option1 = {
    title: {
        text: '类别遗忘4个方法正确率'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Line1', 'Line2', 'Line3', 'Line4']
    },
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'ConMU',
            type: 'line',
            data: [20, 40, 25, 30, 40, 35, 50]
        },
        {
            name: 'GA',
            type: 'line',
            data: [30, 45, 32, 33, 45, 38, 55]
        },
        {
            name: 'FT',
            type: 'line',
            data: [25, 35, 28, 29, 38, 32, 45]
        },
        {
            name: 'RL',
            type: 'line',
            data: [35, 50, 40, 45, 55, 48, 60]
        }
    ]
};




// Set the options
    myChart.setOption(option1);
    }


    if(chart3.value) {
        const myChart = echarts.init(chart3.value);
        var option1 = {
        title: {
            text: '文本遗忘4个方法正确率'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Line1', 'Line2', 'Line3', 'Line4']
        },
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'ConMU',
                type: 'line',
                data: [20, 40, 25, 30, 40, 35, 50]
            },
            {
                name: 'GA',
                type: 'line',
                data: [30, 45, 32, 33, 45, 38, 55]
            },
            {
                name: 'FT',
                type: 'line',
                data: [25, 35, 28, 29, 38, 32, 45]
            },
            {
                name: 'RL',
                type: 'line',
                data: [35, 50, 40, 45, 55, 48, 60]
            }
        ]
    };

    myChart.setOption(option1);
    }

    if(radar1.value) {
        const myChart = echarts.init(radar1.value)
        var option = {
            color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
            title: {
                text: '类别遗忘'
            },
            legend: {},
            radar: [
                {
                indicator: [
                    { text: '准确率' },
                    { text: '用时' },
                    { text: 'Indicator3' },
                    { text: 'Indicator4' },
                    { text: 'Indicator5' }
                ],
                center: ['25%', '50%'],
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
                {
                indicator: [
                    { text: 'Indicator1', max: 150 },
                    { text: 'Indicator2', max: 150 },
                    { text: 'Indicator3', max: 150 },
                    { text: 'Indicator4', max: 120 },
                    { text: 'Indicator5', max: 108 },
                    { text: 'Indicator6', max: 72 }
                ],
                center: ['75%', '50%'],
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
                emphasis: {
                    lineStyle: {
                    width: 4
                    }
                },
                data: [
                    {
                    value: [100, 8, 0.4, -80, 2000],
                    name: 'Data A'
                    },
                    {
                    value: [60, 5, 0.3, -100, 1500],
                    name: 'Data B',
                    areaStyle: {
                        color: 'rgba(255, 228, 52, 0.6)'
                    }
                    }
                ]
                },
                {
                type: 'radar',
                radarIndex: 1,
                data: [
                    {
                    value: [120, 118, 130, 100, 99, 70],
                    name: 'Data C',
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
                    name: 'Data D',
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
                }
            ]
            };
        myChart.setOption(option);
    }
})

</script>


<style scoped>

</style>