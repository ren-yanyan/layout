<template>
  <div id="header">
    <div class="logo">
      <img src="../../assets/logos_new.png" alt>
    </div>
    <div class="pull-right" @click="exit">
      <img src="../../assets/picright.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    exit() {
      this.$router.push({ path: '/' }) // 跳转到登录页面
    }
  }
}
</script>
<style scoped>
#header {
  width: 100%;
  font-size: 25px;
  height: 73px;
  line-height: 2;
  background: url("../../assets/topbg.png");
}
.logo {
  float: left;
}
.pull-right {
  float: right;
}
</style>
