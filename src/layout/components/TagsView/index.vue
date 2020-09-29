<template>
  <div id="nav">
    <!-- <hamburger /> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        当前位置：{{ parentName }}
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">
        {{ selfName }}
      </el-breadcrumb-item>
    </el-breadcrumb>

  </div>
</template>

<script>
// import store from "@/store/index";
// import Hamburger from '@/components/Hamburger/index'
export default {
  // components: { Hamburger },
  // store,
  data() {
    return {
      active: [],
      parentName: null,
      selfName: null,
      collapse: true
    }
  },
  created() {
    this.getIndex()
  },
  methods: {
    getIndex() {
      this.$on('naverbar', data => {
        if (data.length === 2) {
          this.parentName = data
          this.selfName = ''
        } else {
          this.parentName = data.slice(0, 4)
          this.selfName = data.slice(4)
        }
      })
    },
    show1() {
      console.log(111)
    }
  }
}
</script>

<style scoped lange="scss">
#nav {
  height: 28px;
  display: inline-flex;
}

</style>
