<template>
  <div id="main-left">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        text-color="#6e768e"
        active-text-color="#55bbf2"
        menu-trigger="click"
        style="height: 100%"
        :unique-opened="true"
        router
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  name: 'Mainleft',
  components: {
    SidebarItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted() {
    // this.getmenuinfo()
    console.log(this.permission_routes)
    console.log(this.permission_routes[2])
  },
  created() {
    // this.getmenuinfo()
    console.log(this.permission_routes)
  },
  methods: {
    // 点击标题传递参数给navigator组件
    // handleTitle(parentName, selfName) {
    //   if (selfName == null) {
    //     const naverbar = parentName
    //     this.$emit('naverbar', naverbar)
    //   } else {
    //     const naverbar = parentName + selfName
    //     this.$emit('naverbar', naverbar)
    //   }
    // },
    // getmenuinfo() {
    //   this.$axios.get(`/getMenuInfo`).then(res => {
    //     this.menu = res.data
    //   }).catch(err => {
    //     console.log('调用失败', err)
    //   })
    // }
  }

}
</script>
<style scoped>
.menulist {
  max-width: 150px;
}

#main-left {
  height: 100%;
}
</style>
