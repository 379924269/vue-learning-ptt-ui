<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    html, body, #app {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,  SimSun, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        background-color: #f2f2f2;
        color: #333333;
    }

    #app {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

    a {
        color: #56a9ff;
        text-decoration: none;
    }
</style>
