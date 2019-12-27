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
    }
  }
}
</script>

<style scoped>

</style>
