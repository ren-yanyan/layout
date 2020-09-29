<template>
  <div class="hardwareStatus">
    <el-row class>
      <el-col :span="24">
        <h4 class="font-bold">硬件状态</h4>
        <el-col :span="12">
          <div>
            <div class="hardware">内交换设备</div>
            <div class="easy-char border-right">
              <div class="flex">
                <label class="lab-center">CPU</label>
                <el-progress type="circle" :percentage="dspCpu" :width="60" :color="colors" />
              </div>
              <div class="flex">
                <label class="lab-center">内存</label>
                <el-progress type="circle" :percentage="dspRma" :width="60" :color="colors" />
              </div>
              <div class="flex">
                <label class="lab-center">硬盘</label>
                <el-progress type="circle" :percentage="dsphard" :width="60" :color="colors" />
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <div class="hardware">外交换设备</div>
            <div class="easy-char">
              <div class="flex">
                <label class="lab-center">CPU</label>
                <el-progress type="circle" :percentage="outerCpu" :width="60" :color="colors" />
              </div>
              <div class="flex">
                <label class="lab-center">内存</label>
                <el-progress type="circle" :percentage="outerRma" :width="60" :color="colors" />
              </div>
              <div class="flex">
                <label class="lab-center">硬盘</label>
                <el-progress type="circle" :percentage="outerhard" :width="60" :color="colors" />
              </div>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HardwareStatus',
  data() {
    return {
      dspCpu: 10,
      dspRma: 20,
      dsphard: 30,
      outerCpu: 79,
      outerRma: 100,
      outerhard: 80,
      colors: [
        { color: '#6fc88e', percentage: 50 },
        { color: '#e1c24e', percentage: 80 },
        { color: '#ca7789', percentage: 100 }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.hardware {
  text-align: center;
  font-weight: 100;
  margin-bottom: 10px;
}
h4 {
  font-size: 16px;
}
.hardwareStatus {
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
}

.easy-char {
  display: flex;
  justify-content: space-around;
}

.flex {
  display: flex;
  justify-content: space-around;
}

.lab-center {
  margin: auto 20px;
}

.border-right {
  border-right: 1px solid #e5e9f2;
}

.font-bold {
  font-weight: bold;
}
</style>
