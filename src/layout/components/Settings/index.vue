<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">Page style setting</h3>
      <div class="drawer-item">
        <span>Theme Color</span>
        <theme-picker class="drawer-switch" @change="themeChange" />
      </div>
      <div class="drawer-item">
        <span>Open Tags-View</span>
        <el-switch v-model="openTagsView" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>Fixed Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>Sidebar Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>
<script>
import ThemePicker from '@/components/ThemePicker/index'
export default {
  components: { ThemePicker },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      icon: 'el-icon-setting',
      color1: '#409EFF',
      openTagsView: true,
      fixedHeader: false,
      sidebarLogo: false
    }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .drawer-container {
    padding: 20px;
    font-size: 12px;
    line-height: 1.5;
    .drawer-title {
      margin-left: 20px;
    }
    .drawer-item {
     padding: 12px 0;
     .drawer-switch {
       float: right;
     }
    }
  }
</style>
