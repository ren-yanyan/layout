<template>
  <div class="taskRunStatus">
    <el-table :data="tableData" stripe>
      <el-table-column type="index" align="center" width="50" />
      <el-table-column prop="name" align="center" label="任务名称" />
      <el-table-column prop="type" align="center" label="业务类型" />
      <el-table-column prop="startTime" align="center" label="开始时间" />
      <el-table-column prop="endTime" align="center" label="结束时间" />
      <el-table-column prop="number" align="center" label="数量" />
      <el-table-column prop="flow" align="center" label="流量" />
      <el-table-column prop="status" align="center" label="当前状态" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TaskRunStatus',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    // this.showData()
  },
  methods: {
    showData() {
      this.$axios
        .get(`/taskRunStatus`) // 全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
        .then(res => {
          this.tableData = res.data
        })
        .catch(err => {
          console.log('调用失败', err)
        })
    }
  }
}
</script>

<style scoped>
.taskRunStatus {
  height: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  margin-top: 50px;
}
</style>
