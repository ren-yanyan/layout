<template>
  <div class="taskRunStatus">
    <el-table :data="tableData" stripe>
      <el-table-column v-for="(item, index) in setting" :key="item" :prop="index" align="center" :label="item" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TaskRunStatus',
  data() {
    return {
      tableData: [],
      setting: {
        name: '任务名称',
        type: '业务类型',
        startTime: '开始时间',
        endTime: '结束时间',
        number: '数量',
        flow: '流量',
        status: '当前状态'
      }
    }
  },
  computed: {

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
  /* height: 300px; */
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
}
</style>
