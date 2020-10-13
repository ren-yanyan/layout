<template>
  <div>
    <el-color-picker
      v-model="theme"
      size="small"
      :predefine="['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: ''
    }
  },
  computed: {
    defaultTheme() {
      return this.$store.state.settings.theme
    }
  },
  watch: {
    defaultTheme: {
      handler: function(val, oldVal) {
        this.theme = val
      },
      immediate: true
    }
  },
  methods: {

  }
}
</script>
