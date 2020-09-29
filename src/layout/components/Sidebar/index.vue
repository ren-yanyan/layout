<template>
  <div id="main-left">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="false"
      text-color="#6e768e"
      active-text-color="#55bbf2"
      menu-trigger="click"
      style="height: 100%"
      router
    >
      <el-menu-item index="main" @click="handleTitle('首页')">
        <i class="el-icon-menu" />
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu
        v-for="(item, index) in menu"
        :key="index"
        :index="item.index"
      >
        <template slot="title">
          <i class="iconfont" :class="item.icon" />
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(list, index1) in item.content"
          :key="index1"
        >
          <el-menu-item
            v-if="list.item != null"
            class="menulist"
            :index="list.path"
            @click="handleTitle(item.title, list.item)"
          >
            {{ list.item }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'Mainleft',
  store,
  data() {
    return {
      menu: []
    }
  },
  computed: {
    iscollapse() {
      return !this.sidebar.opened
    }
  },
  mounted() {
    this.getmenuinfo()
  },
  methods: {
    // 点击标题传递参数给navigator组件
    handleTitle(parentName, selfName) {
      if (selfName == null) {
        const naverbar = parentName
        this.bus.$emit('naverbar', naverbar)
      } else {
        const naverbar = parentName + selfName
        this.bus.$emit('naverbar', naverbar)
      }
    },
    getmenuinfo() {
      this.$axios.get(`/getMenuInfo`).then(res => {
        this.menu = res.data
      }).catch(err => {
        console.log('调用失败', err)
      })
    }
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
