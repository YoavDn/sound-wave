<template>

    <div style="margin: 20px" />
    <el-form @submit="updateModalValue" label-position="top" label-width="100px" :model="formLabelAlign"
        style="max-width: 460px">
        <el-form-item label="Username">
            <el-input v-model="modelValue.username" />
        </el-form-item>
        <el-form-item label="password">
            <el-input type="password" v-model="modelValue.password" />
        </el-form-item>
        <el-button>Login</el-button>
    </el-form>
</template>

<script >



export default {
    props: ['modelValue'],
    created() {

        console.log(this.modelValue);
    },

    methods: {
        updateModalValue() {
            console.log(this.modelValue);
            this.$emit('getUserInfo', modelValue)
        }
    }
}

</script>