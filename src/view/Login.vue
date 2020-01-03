<template>
    <div class="login">
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item required prop="name">
                <el-input v-model="form.name" itemprop=""></el-input>
            </el-form-item>
            <el-form-item required prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
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
          this.$router.push('/refactiredForm')
        } else {
          this.$message.error('用户名或密码错误')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
