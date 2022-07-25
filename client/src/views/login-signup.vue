

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