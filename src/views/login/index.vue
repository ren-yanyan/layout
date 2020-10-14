<!-- 用户登录界面-->
<template>
  <div id="login">
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <span class="title" />
        </div>
        <div class="body">
          <div class="body-content">
            <p class="title">账号登录</p>
            <el-form
              ref="loginForm"
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
              :rules="loginRules"
            >
              <el-form-item
                label="用户名"
                prop="username"
              >
                <el-input
                  ref="
                  username"
                  v-model="formLabelAlign.username"
                  name="username"
                  type="text"
                  tabindex="1"
                  autocomplete="on"
                  placeholder="请输入用户名"
                />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="formLabelAlign.password"
                  :type="passwordType"
                  placeholder="Password"
                  name="password"
                  tabindex="2"
                  autocomplete="on"

                  @blur="capsTooltip = false"
                  @keyup.enter.native="login()"
                />
              </el-form-item>
              <div class="submit">
                <el-button type="primary" @click="login()">登录</el-button>
              </div>
            </el-form>
          </div>
        </div>
        <div class="footer">版权所有©2020保留所有权利京ICP备19001371号</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }

    return {
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      labelPosition: 'left',
      formLabelAlign: {
        username: 'admin',
        password: '111111'
      },
      passwordType: 'password',
      outerQuery: {},
      loading: false,
      redirect: undefined
    }
  },
  methods: {
    ...mapMutations('routeJump', ['changeLogin']),
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('登录操作执行-------')
          this.loading = true
          this.$store.dispatch('user/login', this.formLabelAlign)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.outerQuery })
            })
            .catch(() => {
              this.loading = false
            })
        }
      })

      // var res = {
      //   data: {
      //     data: {
      //       role: '0',
      //       teacherName: 'aaa',
      //       teacherId: 1
      //     }
      //   }
      // }
      // this.$axios({
      //   url: `/api/login`,
      //   method: 'post',
      //   data: {
      //     ...this.formLabelAlign
      //   }
      // }).then(res=>{
      // const resData = res.data.data
      // if (resData != null) {
      //   switch (resData.role) {
      //     case '0': // 管理员
      //       this.$cookies.set('cname', resData.adminName)
      //       this.$cookies.set('cid', resData.adminId)
      //       this.$cookies.set('role', 0)
      //       this.$router.push({ path: '/main' }) // 跳转到首页
      //       break
      //     case '1': // 教师
      //       this.$cookies.set('cname', resData.teacherName)
      //       this.$cookies.set('cid', resData.teacherId)
      //       this.$cookies.set('role', 1)
      //       this.$router.push({ path: '/main' }) // 跳转到教师用户
      //       break
      //     case '2': // 学生
      //       this.$cookies.set('cname', resData.studentName)
      //       this.$cookies.set('cid', resData.studentId)
      //       this.$router.push({ path: '/main' })
      //       break
      //   }
      // }
      // if (resData == null) {
      //   // 错误提示
      //   this.$message({
      //     showClose: true,
      //     type: 'error',
      //     message: '用户名或者密码错误'
      //   })
      // }
      // })
    },
    clickTag(key) {
      this.role = key
    }
  }
}
</script>

<style scoped>
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/Island.jpg");
}
.main-container {
  display: flex;
  justify-content: center;
}

.top {
  text-align: center;
  margin-top: 120px;
  font-size: 30px;
  margin-bottom: 20px;
  color: #ff962a;
}
.body {
  background: #fff;
  padding: 40px;
  border-radius: 5px;
}
.title {
  text-align: center;
  font-size: 30px;
  margin: 0 50px 30px 50px;
}
.submit {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.footer {
  color: white;
  text-align: center;
  margin-top: 200px;
}
.body-content {
  margin: auto;
}
</style>
