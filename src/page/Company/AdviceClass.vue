<template>
    <el-row>


        <el-row :span="6">
            <el-col :span="8">
                <div>Currently model: MODEL A</div>
            </el-col>
            <el-col :span="8">
                <p><a href="#">Import model</a></p>
            </el-col>
            <el-col :span="8">
                <el-cascader placeholder="Switch model"></el-cascader>
            </el-col>
        </el-row>


        <!-- Second Row -->
        <el-row :span="9">
            <div style="text-align: center;">
                <h2>Class unlearning</h2>
                <el-cascader placeholder="Switch class"></el-cascader>
                <p>Version v1.2</p>
                <el-cascader placeholder="History"></el-cascader>
            </div>
        </el-row>

        <el-row :span="9">
            <el-card>
                <!-- Radar chart using ECharts -->
                <!-- Include your ECharts radar chart here -->
            </el-card>
        </el-row>
    </el-row>
</template>