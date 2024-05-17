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
        <div class="col">
            <div class="chart-container" style="display: flex;">
                <div id="chart2" ref="chart2" style="width: 50%; height: 300px;"></div>
                <div id="radar2" ref="radar2" style="width: 50%; height: 300px;"></div>
            </div>
        </div>
        
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
const radar2 = ref(null);

onMounted(() => {
    if(chart1.value) {
        const myChart = echarts.init(chart1.value);
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
                data: ['2012', '2013', '2014', '2015', '2016']
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
                text: '部分遗忘'
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

    if(radar2.value) {
        const myChart = echarts.init(radar2.value)
        var option = {
            title: {
                text: '类别遗忘'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left: 'center',
                data: [
                'A Software',
                'A Phone',
                'Another Phone',
                'Precipitation',
                'Evaporation'
                ]
            },
            radar: [
                {
                indicator: [
                    { text: 'Brand', max: 100 },
                    { text: 'Content', max: 100 },
                    { text: 'Usability', max: 100 },
                    { text: 'Function', max: 100 }
                ],
                center: ['25%', '40%'],
                radius: 80
                },
                {
                indicator: [
                    { text: 'Look', max: 100 },
                    { text: 'Photo', max: 100 },
                    { text: 'System', max: 100 },
                    { text: 'Performance', max: 100 },
                    { text: 'Screen', max: 100 }
                ],
                radius: 80,
                center: ['50%', '60%']
                },
                {
                indicator: (function () {
                    var res = [];
                    for (var i = 1; i <= 12; i++) {
                    res.push({ text: i + '月', max: 100 });
                    }
                    return res;
                })(),
                center: ['75%', '40%'],
                radius: 80
                }
            ],
            series: [
                {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {},
                data: [
                    {
                    value: [60, 73, 85, 40],
                    name: 'A Software'
                    }
                ]
                },
                {
                type: 'radar',
                radarIndex: 1,
                areaStyle: {},
                data: [
                    {
                    value: [85, 90, 90, 95, 95],
                    name: 'A Phone'
                    },
                    {
                    value: [95, 80, 95, 90, 93],
                    name: 'Another Phone'
                    }
                ]
                },
                {
                type: 'radar',
                radarIndex: 2,
                areaStyle: {},
                data: [
                    {
                    name: 'Precipitation',
                    value: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
                    ]
                    },
                    {
                    name: 'Evaporation',
                    value: [
                        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3
                    ]
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