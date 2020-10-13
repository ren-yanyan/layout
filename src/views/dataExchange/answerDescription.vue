<template>
  <div class="content-bg">
    <div class="query">
      <el-form ref="form" :inline="true" :model="form">
        <el-row type="flew">
          <el-col :span="8">
            <el-form-item label="交换对象名称">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="IP">
              <el-input v-model="form.ip" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="inquiry">查询</el-button>
            <el-button type="warning" @click="clear">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <buttons />
    <tables />

  </div>
</template>
<script>
import buttons from '@/components/buttons'
import tables from '@/components/tables'
export default {
  name: 'AnswerDescription',
  components: {
    buttons,
    tables
  },
  data() {
    return {
      form: {
        name: '',
        ip: ''
      }
    }
  },
  methods: {
    inquiry() {
      console.log(this.form)
    },
    clear() {
      this.form.name = ''
      this.form.ip = ''
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

