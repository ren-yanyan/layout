<template>
  <div class="userManagement">
    <div class="btns">
      <el-button type="text" @click="add">新增</el-button>
      <!-- 修改 -->
      <el-button type="text" @click="dialogFormVisible = true">修改</el-button>
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
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
      <!-- 删除 -->
      <el-button type="text" @click="del">删除</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData">
        <el-table-column type="selection" align="center" width="55" />
        <el-table-column type="index" align="center" label="序号" />
        <el-table-column prop="username" align="center" label="用户名" width="180" />
        <el-table-column prop="realname" align="center" label="姓名" />
        <el-table-column prop="userrole" align="center" label="用户角色" />
        <el-table-column prop="description" align="center" label="描述" />
      </el-table>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
export default {
  name: 'UserManagement',
  components: {
    pagination: pagination
  },
  data() {
    return {
      center: 'center',
      tableData: [],
      total: 50,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      form: {
        username: '',
        realname: '',
        userrole: '',
        description: '',
        password: '',
        realpassword: ''
      },
      labelPosition: 'right',
      formLabelWidth: '150px',
      view: false,
      // 新增修改弹窗
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      rules: {
        username: [{ required: true, message: 'username is required', trigger: 'change' }],
        realname: [{ required: true, message: 'realname is required', trigger: 'change' }],
        userrole: [{ required: true, message: 'userrole is required', trigger: 'change' }],
        description: [{ required: true, message: 'description is required', trigger: 'change' }],
        password: [{ required: true, message: 'password is required', trigger: 'change' }],
        realpassword: [{ required: true, message: 'realpassword is required', trigger: 'change' }]
      }
    }
  },
  mounted() {
    this.gettabledata()
  },
  created() {
    this.getList()
  },
  methods: {
    gettabledata() {
      this.$axios
        .get(`/user`) // 全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
        .then(res => {
          this.tableData = res.data
          this.form = res.data[0]
        })
        .catch(err => {
          console.log('调用失败', err)
        })
    },
    resetTemp() {
      this.temp = {
        username: '',
        realname: '',
        userrole: '',
        description: '',
        password: '',
        realpassword: ''
      }
    },
    add() {
      this.resetTemp()
      this.dialogStatus = 'add'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    edit() {
      this.dialogStatus = 'edit'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    del() {
      this.$confirm('确定删除该用户吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          this.list.unshift(this.temp)
          this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 151203131146
          this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    getList() {
      // this.listLoading = true
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 1.5 * 1000)
      // })
    }
  }
}
</script>
<style scoped lang="scss">
.userManagement {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  position: relative;
  height: 100%;
  padding: 15px;
}
</style>
