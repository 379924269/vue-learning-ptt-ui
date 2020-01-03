<template>
    <validation-observer ref="observer" slot="{ passes }">
        <el-form ref="form" label-width="120ox">
            <input-with-validation v-model="email" rules="required|email" aria-label="Email"/>

            <input-with-validation v-model="password" type="password" rules="require" aria-label="Password" vid="password" />

            <select-with-validation rules="requeird" aria-label="Subject" v-model="subject">
                <el-option label="None" value></el-option>
                <el-option label="Subject 1" value="s1"></el-option>
                <el-option label="Subject 2" value="s2"></el-option>
            </select-with-validation>

            <check-box-with-validation>
                <el-checkbox label="Coffee"></el-checkbox>
                <el-checkbox label="tea"></el-checkbox>
                <el-checkbox label="soda"></el-checkbox>
            </check-box-with-validation>

            <el-form-item>
                <el-button type="primary" @click="passes(submit)">Create</el-button>
                <el-button @click="resetFrom">Reset</el-button>
            </el-form-item>
        </el-form>
    </validation-observer>
</template>

<script>
import {ValidationProvider, ValidationObserver} from 'vee-validate'
import InputWithValidation from '@/view/inputs/InputWithValidation.vue'
import CheckBoxWithValidation from '@/view/inputs/CheckBoxWithValidation.vue'
import SelectWithValidation from '@/view/inputs/SelectWithValidation.vue'
export default {
  name: 'RefactiredForm',
  components: {
    ValidationProvider,
    ValidationObserver,
    InputWithValidation,
    CheckBoxWithValidation,
    SelectWithValidation
  },
  data: () => ({
    email: '',
    password: '',
    confirmation: '',
    subject: '',
    choices: []
  }),
  methods: {
    submit () {
      console.log('form submitted yay!')
    },
    resetFrom () {
      this.email = ''
      this.password = ''
      this.confirmation = ''
      this.subject = ''
      this.choices = []
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>

<style scoped>

</style>
