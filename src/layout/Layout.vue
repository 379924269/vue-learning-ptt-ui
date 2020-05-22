<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <Aside></Aside>
            <center-content></center-content>
        </el-container>
    </div>
</template>

<script>
import Aside from '@/layout/Aside'
import CenterContent from '@/layout/CenterContent'
export default {
  name: 'Layout',
  components: {CenterContent, Aside},
  data () {
    return {
      tableData: Array(20).fill(this.item)
    }
  },
  props: {
    item: [{
      date: 'xx',
      name: 'mm',
      address: 'xxx'
    }]
  }
}

</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        color: #333;
    }

</style>
