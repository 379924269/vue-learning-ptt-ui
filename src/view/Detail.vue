<template>
    <div>这是详情
        <el-button @click="clickButton" ></el-button>
        {{counter}}
    </div>
</template>

<script>
export default {
  name: 'Detail',
  data: () => ({
    counter: 0
  }),
  methods: {
    clickButton () {
      this.counter++
    }
  }
}
</script>

<style scoped>

</style>
