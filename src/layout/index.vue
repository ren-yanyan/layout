<template>
  <el-container style="height: 100%">
    <el-header class="el-header" style="height: 73px">
      <navbar />
    </el-header>

    <el-container>
      <el-aside :width="sidebar.opened?'200px' : '56px'" class="el-aside">
        <sidebar />
      </el-aside>
      <el-main class="el-main">
        <right-panel v-if="showSettings">
          <settings />
        </right-panel>
        <tags-view />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import Sidebar from '@/layout/components/Sidebar/index'
// import Navbar from '@/layout/components/Navbar'
// import TagsView from '@/layout/components/TagsView/index'
// import Settings from '@/layout/components/Settings/index'
import RightPanel from '@/layout/components/RightPanel/index'
import { Navbar, Settings, Sidebar, TagsView } from './components'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar,
    Sidebar,
    TagsView,
    Settings,
    RightPanel
  },
  data() {
    return {
      username: '许浩'
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      showSettings: state => state.settings.showSettings
    })
  },
  created() {
  },
  methods: {

  }
}
</script>

<style scoped>
.el-header {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgb(84, 81, 89);
  height: 73px;
}
.el-aside {
  overflow: hidden;
}
.el-main {
  color: #777;
  overflow: hidden;
  padding: 10px 20px 20px 20px;
}
</style>
