<template>
  <el-container style="height: 100%">
    <el-header class="el-header" style="height: 73px">
      <mainheader />
    </el-header>

    <el-container>
      <el-aside width="200px">
        <mainleft />
      </el-aside>
      <el-main class="el-main">
        <navigator />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import mainleft from '@/components/common/mainleft'
import mainheader from '@/components/common/header'
import navigator from '@/components/common/navigator'

export default {
  components: {
    mainheader: mainheader,
    mainleft: mainleft,
    navigator: navigator
  },
  data() {
    return {
      username: '许浩'
    }
  },
  methods: {}
}
</script>

<style scoped>
.el-header {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgb(84, 81, 89);
  height: 73px;
}
.el-main {
  color: #777;
  overflow: hidden;
  padding: 10px 20px 20px 20px;
}
</style>
