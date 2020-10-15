<template>
  <div id="main-left">
    {{ permission_routes }}

    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#6e768e"
      active-text-color="#55bbf2"
      menu-trigger="click"
      style="height: 100%"
      :unique-opened="true"
      router
    >
      <el-menu-item index="main">
        <i class="el-icon-menu" />
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu
        v-for="(item, index) in permission_routes"
        :key="index"
        :index="item.index"
      >
        <template slot="title">
          <i class="iconfont" :class="item.icon" />
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(list, index1) in item.path"
          :key="index1"
        >
          <el-menu-item
            v-if="list.item != null"
            class="menulist"
            :index="list.path"
          >
            {{ list.item }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Mainleft',
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
    }
  },
  mounted() {
    // this.getmenuinfo()
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
