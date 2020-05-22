<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="form" :rules="rules" label-position="left" label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="rememberme">
                记住密码
            </el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" native-type="submit" @click="onSubmit('loginForm')">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import login from '../api/login.js'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '账号不能为空', trigger: 'blur'},
          {pattern: /^[\u0391-\uFFE5\w]+$/, message: '登录名称只允许汉字、英文字母、数字及下划线'},
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        date: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        type: [
          {type: 'array', required: true, message: '请至少选择一个', trigger: 'change'}
        ]
      },
      checked: true
    }
  },
  methods: {
    onSubmit (loginForm) {
      this.$refs[loginForm].validate((valid) => {
        console.log('login')
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login () {
      login.submit(this.form).then(value => {
        if (value.data.status) {
          this.$store.commit('loginIn', this.form.username)
          this.$router.push('/')
        } else {
          this.$message.error('用户名或密码错误')
        }
      })
    }
  }
}
</script>

<style scoped>
    .login-container {
        width: 100%;
        height: 100%;
    }

    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
</style>
