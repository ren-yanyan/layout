<template>
  <div>
    <el-button type="primary" @click="inquiry">查询</el-button>
    <el-button type="primary" @click="clear">重置</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    inquiry() {
      console.log('inquiry')
    },
    clear() {
      console.log('clear')
    }
  }
}
</script>
