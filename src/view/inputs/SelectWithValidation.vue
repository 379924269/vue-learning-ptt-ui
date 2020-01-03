<template>
    <ValidationProvider
            :vid="vid"
            :name="$attrs.lable"
            :rules="rules" v-solt="{ errors }">
        <el-form-item :error="errors[0]"
                      :label="$attrs.lable">
            <el-select v-model="innerValue" v-bind="$attrs">
                <slot></slot>
            </el-select>
        </el-form-item>
    </ValidationProvider>

</template>

<script>
import {ValidationProvider} from 'vee-validate'

export default {
  name: 'SelectWithValidation',
  data: () => ({
    innerValue: []
  }),
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    value: {
      type: null
    }
  },
  watch: {
    innerValue (newValue) {
      this.$emit('input', newValue)
    },
    value (newVaule) {
      this.innerValue(newVaule)
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>

<style scoped>

</style>
