<template >
	<div style="background:rgb(255, 255, 255);height: 615px;width: 1290px;">
		<el-row>
			<el-col :span="4" class="one">
				<span style="width: 600px;">
					<span id="drawOne1" ref="lineChartDom" style="height: 400px;width: 800px;"></span>
				</span>
			</el-col>

			<!-- <el-col :span="4" class="one">
				<span style="width: 450px;">
					<span id="drawOne2" ref="drawOne2" style="height: 160px;width: 200px;"></span>
				</span>
			</el-col> -->
			<el-col :span="4" class="two">
				<div style="height: 150px;align-content: center;margin-top: 50px;">
					<el-statistic group-separator="," value=1000 title="已检测漏洞" style="border: 2px solid;">
						<template v-slot:prefix>
							<i class="el-icon-s-flag" style="color: red"></i>
							<span style="font-size: large;">1000</span>
						</template>

						<template v-slot:suffix>
							<i class="el-icon-s-flag" style="color: blue"></i>
						</template>
					</el-statistic>
				</div>
			</el-col>
			<el-col :span="4" class="two">
				<div style="height: 150px;align-content: center;margin-top: 50px;">
					<el-statistic group-separator="," value=1000 title="已修复漏洞" style="border: 2px solid red;">
						<template v-slot:prefix>
							<i class="el-icon-success" style="color: rgb(14, 186, 23)"> </i>
							&nbsp;
							<span style="font-size: large;"> 805</span>
						</template>
						<template v-slot:suffix>
							<i class="el-icon-success" style="color: rgb(14, 186, 23)"></i>
						</template>
					</el-statistic>
				</div>
			</el-col>
			<el-col :span="8" class="two">
				<div style="height: 150px;margin-left: 10px;" id="drawTwo" ref="drawTwo">
				</div>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="16" class="three">
				<div class="three">

					<div id="main" ref="drawChart" style="width: 800px; height: 250px"></div>

				</div>

				<div class="four">
					<el-table :data="tableData" stripe style="width: 100%">
						<el-table-column prop="date" label="日期" width="180">
						</el-table-column>
						<el-table-column prop="name" label="设备名" width="180">
						</el-table-column>
						<el-table-column prop="address" label="容器名">
						</el-table-column>
						<el-table-column prop="detect" label="检测数">
						</el-table-column>
						<el-table-column prop="modify" label="修复数">
						</el-table-column>
					</el-table>
				</div>

			</el-col>
			<el-col :span="8">
				<div class="five">
					<div id="myFive" ref="drawFive" style="width: 400px; height: 200px"></div>

				</div>

				<div class="six">
					<el-collapse v-model="activeName" accordion>
						<div style="font-size: large;">风险指数(降序)</div>
						<el-collapse-item title="Terminal_QRT-con_cnt" name="2">
							<div style="text-align: left;color: rgb(61, 225, 141);">&nbsp; 启用时间：2023-05-09</div>
							<div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：68</div>
						</el-collapse-item>
						<el-collapse-item title="Terminal_WYN-container_support" name="3">
							<div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-05-30</div>
							<div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：50</div>
						</el-collapse-item>
						<el-collapse-item title="Raspberry_LXL-containet_sub" name="4">
							<div style="text-align: left;color: rgb(61, 225, 141);">&nbsp;启用时间：2023-05-19</div>
							<div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：48</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</el-col>
		</el-row>
	</div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const drawChart = ref(null);
const lineChartDom = ref(null);
const drawFive = ref(null);
const drawOne2 = ref(null);
const drawTwo = ref(null);

// TODO 加了就白屏
// Define table data 
// const tableData = reactive([
//   { date: '2023-01-01', name: '设备A', address: '容器A', detect: 10, modify: 5 },
//   { date: '2023-01-02', name: '设备B', address: '容器B', detect: 20, modify: 15 },
//   { date: '2023-01-03', name: '设备C', address: '容器C', detect: 30, modify: 25 }
// ]);

onMounted(() => {
  if(drawChart.value){
    const myChart = echarts.init(drawChart.value);
    var option = {
		legend: {},
		tooltip: {},
		dataset: {
			dimensions: ['product', '2015', '2016', '2017'],
			source: [
			{ product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
			{ product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
			{ product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
			{ product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
			]
		},
		xAxis: { type: 'category' },
		yAxis: {},
		// Declare several bar series, each will be mapped
		// to a column of dataset.source by default.
		series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
		};
		myChart.setOption(option);
  }

  if (lineChartDom.value) {
    const myChart = echarts.init(lineChartDom.value);
    const option = {
	title: {
		text: 'Nightingale Chart',
		subtext: 'Fake Data',
		left: 'center'
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		left: 'center',
		top: 'bottom',
		data: [
		'rose1',
		'rose2',
		'rose3',
		'rose4',
		'rose5',
		'rose6',
		'rose7',
		'rose8'
		]
	},
	toolbox: {
		show: true,
		feature: {
		mark: { show: true },
		dataView: { show: true, readOnly: false },
		restore: { show: true },
		saveAsImage: { show: true }
		}
	},
	series: [
		{
		name: 'Radius Mode',
		type: 'pie',
		radius: [20, 140],
		center: ['25%', '50%'],
		roseType: 'radius',
		itemStyle: {
			borderRadius: 5
		},
		label: {
			show: false
		},
		emphasis: {
			label: {
			show: true
			}
		},
		data: [
			{ value: 40, name: 'rose 1' },
			{ value: 33, name: 'rose 2' },
			{ value: 28, name: 'rose 3' },
			{ value: 22, name: 'rose 4' },
			{ value: 20, name: 'rose 5' },
			{ value: 15, name: 'rose 6' },
			{ value: 12, name: 'rose 7' },
			{ value: 10, name: 'rose 8' }
		]
		},
		{
		name: 'Area Mode',
		type: 'pie',
		radius: [20, 140],
		center: ['75%', '50%'],
		roseType: 'area',
		itemStyle: {
			borderRadius: 5
		},
		data: [
			{ value: 30, name: 'rose 1' },
			{ value: 28, name: 'rose 2' },
			{ value: 26, name: 'rose 3' },
			{ value: 24, name: 'rose 4' },
			{ value: 22, name: 'rose 5' },
			{ value: 20, name: 'rose 6' },
			{ value: 18, name: 'rose 7' },
			{ value: 16, name: 'rose 8' }
		]
		}
	]
	};

			myChart.setOption(option);
  }

  if(drawFive.value) {
    const myChart = echarts.init(drawFive.value);
    var option = {
				title: {
					text: '漏洞比例图',
					left: 'center'
				},
				tooltip: {
					trigger: 'item'
				},
				legend: {
					orient: 'vertical',
					left: 'left'
				},
				series: [

					{
						name: 'Access From',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						itemStyle: {
							borderRadius: 5,
							borderColor: '#fff',
							borderWidth: 2
						},
						label: {
							show: false,
							position: 'left'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: 20,
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [
							{ value: 1048, name: '低危漏洞' },
							{ value: 265, name: '普通漏洞' },
							{ value: 58, name: '高危漏洞' },
						]
					}
				]
			};
			myChart.setOption(option);
  }

  if(drawOne2.value){ 
    var myChart = echarts.init(drawOne2.value);
    const gaugeData = [
				{
					value: 80,
					name: '容器在线状态',
					title: {
						offsetCenter: ['0%', '-30%']
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '20%']
					}
				},
			];
			var option = {
				series: [
					{
						type: 'gauge',
						startAngle: 90,
						endAngle: -270,
						pointer: {
							show: false
						},
						progress: {
							show: true,
							overlap: false,
							roundCap: true,
							clip: false,
							itemStyle: {
								color: '#fc8251',
								borderWidth: 1,
								borderColor: '#464646'
							}
						},
						axisLine: {
							lineStyle: {
								width: 15
							}
						},
						splitLine: {
							show: false,
							distance: 10,
							length: 5
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false,
							distance: 15
						},
						data: gaugeData,
						title: {
							fontSize: 13
						},
						detail: {
							width: 60,
							height: 20,
							fontSize: 15,
							color: 'inherit',
							borderColor: 'inherit',
							borderRadius: 10,
							borderWidth: 1,
							formatter: '270/400'
						}
					}
				]
			};
			setInterval(function () {
				myChart.setOption({
					series: [
						{
							data: gaugeData,
							pointer: {
								show: false
							}
						}
					]
				});
			}, 2000);

			myChart.setOption(option);

  }

  if(drawTwo.value){
    const myChart = echarts.init(drawTwo.value);
			var option = {
				title: {
					text: '漏洞风险图'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					boundaryGap: [0, 0.01]
				},
				yAxis: {
					type: 'category',
					data: ['高危漏洞', '普通漏洞', '低危漏洞',]
				},
				series: [
					{
						name: '已检测',
						type: 'bar',
						data: [20, 100, 300,]
					},
					{
						name: '已修复',
						type: 'bar',
						data: [15, 86, 280,]
					}
				]
			};
			myChart.setOption(option);
  }

});



</script>


<style >
.one {
	height: 150px;
	background-color: white;
	margin-left: -15px;
	margin-top: 0px;

}

.two {
	height: 150px;
	margin-left: 5px;
	background-color: white;
	margin-top: 0px;


}

.three {
	height: 250px;
	background-color: white;
	margin-left: -8px;



}

.four {
	height: 300px;
	background-color: white;
	margin-left: -8px;
	margin-top: 10px;


}

.five {
	height: 200px;
	margin-left: 20px;
	background-color: white;

}

.six {
	height: 340px;
	margin-left: 20px;
	background-color: white;
	margin-top: 10px;


}

.el-row {
	margin-bottom: 10px;

	&:last-child {
		margin-bottom: 0;
	}
}
</style>




