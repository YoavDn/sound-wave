

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
                <login-form :isNewUser="isNewUser" @signup="signup" @login="login" />
                <hr>
            </div>
            <div class="flex flex-column align-center sign-up-action">
                <span v-if="!isNewUser">Don't have an account?</span>
                <button v-if="!isNewUser" class="clean-btn" @click="isNewUser = !isNewUser"><span>SIGN UP FOR
                        SOUNDWAVE</span></button>
                <span v-else>Already have an account - <span style="text-decoration:underline; cursor: pointer;" @click="isNewUser = false">click here</span></span>
            </div>
        </div>
    </section>
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
            isNewUser: false,
        }
    },

    methods: {
        async login(userInfo) {
            const user = await this.$store.dispatch({ type: 'login', userInfo })
            if (user) return this.$router.push('/')
            //else some msg about being Unauthorized
        },
        async signup(newUser) {

            const user = await this.$store.dispatch({ type: 'signup', newUser })
            if (user) return this.$router.go()
            //else some msg about being Unauthorized
        }
    }



}
</script>