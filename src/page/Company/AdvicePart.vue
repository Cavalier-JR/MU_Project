<template >
	<div style="background:rgb(255, 255, 255);height: 615px;width: 1290px;">
		<el-row>
			<el-col :span="4" class="one">
				<span style="width: 450px;">
					<span id="drawOne1" ref="lineChartDom" style="height: 160px;width: 200px;"></span>
				</span>
			</el-col>

			<el-col :span="4" class="one">
				<span style="width: 450px;">
					<span id="drawOne2" ref="drawOne2" style="height: 160px;width: 200px;"></span>
				</span>
			</el-col>
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
						<el-table-column prop="address" label="类别名称">
						</el-table-column>
						<el-table-column prop="detect" label="测试数">
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
						<div style="font-size: large;">正在执行的任务</div>
						<el-collapse-item title="任务1" name="2">
							<div style="text-align: left;color: rgb(61, 225, 141);">&nbsp; 启用时间：2023-05-09</div>
							<div style="text-align: left;color: rgb(190, 16, 68);">&nbsp; 漏洞个数：68</div>
						</el-collapse-item>
						<el-collapse-item title="任务2" name="3">
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
				title: {
					text: '准确率变化情况'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['已遗忘', '未遗忘',]
				},
				grid: {
					left: '1%',
					right: '2%',
					bottom: '1%',
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
					data: ['5.6', '5.13', '5.20', '5.27.', '6.3', '6.10', '6.17']
				},
				yAxis: {
					type: 'value',
					scale: true
				},
				series: [
					{
						name: '检测出的漏洞',
						type: 'line',
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: '已修复的漏洞',
						type: 'line',
						data: [100, 122, 100, 130, 60, 200, 200]
					},

				]
			};
			myChart.setOption(option);
  }

  if (lineChartDom.value) {
    const myChart = echarts.init(lineChartDom.value);
    const gaugeData = [
				{
					value: 80,
					name: '进度',
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
								color: '#＃00FFFF',
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
							formatter: '40/50'
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
					name: '正在遗忘:{xxx}',
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




