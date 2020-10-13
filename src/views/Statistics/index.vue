<template>
  <div>
    <div class="content-bg">
      <el-form ref="form" :inline="true" :model="form">
        <el-row type="flew">
          <el-col :span="5">
            <el-form-item label="业务类型">
              <el-select v-model="value" multiple placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="任务名称">
              <el-select v-model="form.region" size="mini">
                <el-option label="全部" value="all" />
                <el-option label="任务二" value="two" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <span class="demonstration">起止时间</span>
            <el-date-picker
              v-model="value"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            />
          </el-col>
          <el-col :span="3">
            <inquiry-clear />
            <el-button type="primary">导出</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import InquiryClear from '@/components/InquiryClear/index'
export default {
  components: { InquiryClear },
  data() {
    return {
      options: [{ value: '党政军' }, { value: '企事业' }, { value: '驻地外' }],
      form: {
        name: '',
        ip: ''
      },
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
