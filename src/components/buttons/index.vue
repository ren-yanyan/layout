<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button type="text">新增</el-button>
        <el-button type="text">修改</el-button>
        <el-button type="text">删除</el-button>
        <el-dialog :title="dialogStatus" :visible.sync="dialogFormVisible">
          <el-form ref="dataForm" :model="form" :rules="rules" :label-position="labelPosition">
            <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
              <el-input v-model="form.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="姓名" prop="realname" :label-width="formLabelWidth">
              <el-input v-model="form.realname" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
              <el-input v-model="form.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="确认密码" prop="realpassword" :label-width="formLabelWidth">
              <el-input v-model="form.realpassword" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户角色" prop="userrole" :label-width="formLabelWidth">
              <el-select v-model="form.userrole" placeholder="请选择">
                <el-option label="操作员" value="1" />
                <el-option label="审计员" value="3" />
                <el-option label="超级管理员" value="13" />
              </el-select>
            </el-form-item>
            <el-form-item label="描述" prop="description" :label-width="formLabelWidth">
              <el-input v-model="form.description" type="textarea" />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
