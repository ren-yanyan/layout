<template>
  <div id="nav">
    <hamburger :is-active="sidebar.opened" @toggleClick="toggleSideBar" />

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
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger/index'
export default {
  components: { Hamburger },
  data() {
    return {
      active: [],
      parentName: null,
      selfName: null,
      collapse: true
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
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
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
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
