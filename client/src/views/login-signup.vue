

<template>
    <section class="login-page">
        <header class="login-header flex  align-center">
            <logo-black />
        </header>
        <div class="login-main flex flex-column">
            <button @click="handleGoogleLogIn" v-if="!isNewUser" class="clean-btn google-login-btn">
                <img src="../assets/imgs/google.png">
                <span>CONTINUE WITH GOOGLE </span>
            </button>
            <div>
                <div v-if="!isNewUser" class="flex align-center">
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
                <span v-else>Already have an account - <span style="text-decoration:underline; cursor: pointer;"
                        @click="isNewUser = false">click here</span></span>
            </div>
        </div>
    </section>
</template>


<script>
import logoBlack from '../assets/imgs/logo-black.svg'
import loginForm from '../components/custom/login-form.vue'
import { eventBus } from '../services/event-bus';
export default {
    name: 'login',
    components: {
        loginForm,
        logoBlack,
    },
    inject: [''],
    data() {
        return {
            isNewUser: false,
            googleUser: null
        }
    },
    created() {
        console.log(this.$gAuth);

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
        },
        handleGoogleLogIn() {
            console.log('hii');
            eventBus.emit('show-msg', 'this feature in under development')
        }
    }
}
</script>