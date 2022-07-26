

<template>
    <section class="login-page">
        <header class="login-header flex  align-center">
            <img src="../assets/imgs/soundWave-black.svg">
            <h1>SoundWave</h1>
        </header>
        <div class="login-main flex flex-column">
            <button class="clean-btn google-login-btn">
                <img src="../assets/imgs/google.svg">
                <span>CONTINUE WITH GOOGLE</span>
            </button>
            <div>
                <div class="flex align-center">
                    <hr class="hr">
                    <span class="span-hr">OR</span>
                    <hr class="hr">
                </div>
                <login-form v-model="userInfo" />
                <hr>
            </div>
            <div class="flex flex-column align-center sign-up-action">
                <span>Don't have an account?</span>
                <button class="clean-btn"><span>SIGN UP FOR SOUNDWAVE</span></button>
            </div>
        </div>
    </section>
    <!-- <login-form /> -->
    <!-- <form @submit.prevent="login" class="temp">
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
    </form> -->
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