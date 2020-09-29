<template>
  <el-container style="height: 100%">
    <el-header class="el-header" style="height: 73px">
      <navbar />
    </el-header>

    <el-container>
      <el-aside width="200px">
        <sidebar />
      </el-aside>
      <el-main class="el-main">
        <tags-view />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/layout/components/Sidebar/index'
import Navbar from '@/layout/components/Navbar'
import TagsView from '@/layout/components/TagsView/index'

export default {
  components: {
    Navbar,
    Sidebar,
    TagsView
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
