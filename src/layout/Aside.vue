<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
}
</script>

<style scoped>

</style>
