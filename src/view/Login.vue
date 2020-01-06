<template>
    <div class="login-container">
        <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item required prop="name">
                <el-input v-model="form.name" itemprop=""></el-input>
            </el-form-item>
            <el-form-item required prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="rememberme">
                记住密码
            </el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" native-type="submit" @click="onSubmit">
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
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')
      login.submit(this.form).then(value => {
        if (value.data.status) {
          // TODO router路由跳转例子
          this.$store.commit('loginIn', this.form.name)
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
