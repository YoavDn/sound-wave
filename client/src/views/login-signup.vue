

<template>
    <login-form v-model="userInfo" />
</template>


<script>
import loginForm from '../components/custom/login-form.vue'
export default {
    components: {
        loginForm
    },

    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            }
        }
    },
}
</script>