<template>
    <!-- HTML code for the page with three columns -->
    <div class="page">
        <div class="column">
            <p>文本遗忘优化建议，在3小时内，总共遗忘掉<span style="color: red; font-weight: bold;">50</span>条数据，包括<span style="color: red; font-weight: bold;">10</span>个手机号，<span style="color: red; font-weight: bold;">6</span>个个人信息。</p>
        </div>
        <div class="column">
            <div id="pieChart1" ref="pieChart1" style="width: 400px; height: 300px;"></div>
            <div id="pieChart2" ref="pieChart2" style="width: 400px; height: 300px;"></div>
        </div>
        <div class="column">
            <div id="lineChart" ref="lineChart" style="width: 800px; height: 300px;"></div>
            <div id="barChart" ref="barChart" style="width: 800px; height: 300px;"></div>
        </div>
    </div>
</template>




