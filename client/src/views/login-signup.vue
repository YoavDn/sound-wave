

<template>
    <!-- <login-form /> -->
    <form @submit.prevent="login" class="temp">
        <input v-model="userInfo.username" type="text">
        <input v-model="userInfo.password" type="password">
        <button>login</button>
    </form>

    <form @submit.prevent="signup" class="signup-temp">
        <input v-model="newUser.fullname" type="text" placeholder="full name">
        <input v-model="newUser.email" type="email" placeholder="email">
        <input v-model="newUser.username" type="text" placeholder="username">
        <input v-model="newUser.password" type="password" placeholder="password">
        <button>signup</button>
    </form>
</template>


<script>
import loginForm from '../components/custom/login-form.vue'
export default {
    name: 'login',
    components: {
        loginForm
    },
    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            },
            newUser: {
                fullname: '',
                username: '',
                password: '',
                email: ''
            }
        }
    },

    methods: {
        async login() {
            const user = await this.$store.dispatch({ type: 'login', userInfo: this.userInfo })
            if (user) return this.$router.push('/')
            //else some msg about being Unauthorized
        },
        async signup() {
            const user = await this.$store.dispatch({ type: 'signup', newUser: this.newUser })
            if (user) return this.$router.push('/')
            //else some msg about being Unauthorized
        }
    }



}
</script>