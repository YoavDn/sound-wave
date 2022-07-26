<template>

    <div class="login-container">
        <form v-if="!isNewUser" class="login-form flex flex-column" @submit.prevent="login">
            <label for="username">Email address or username </label>
            <input type="text" v-model="userInfo.username" id="username" class="login-input"
                placeholder="Email address or username">
            <label for="password">Password </label>
            <input type="password" v-model="userInfo.password" id="password" class="login-input" placeholder="Password">
            <button class="clean-btn login-btn" @click.prevent="login">LOG IN</button>
        </form>
        <form v-else class="login-form flex flex-column" @submit.prevent="signup">
            <label for="email">Email address </label>
            <input type="text" v-model="newUser.email" id="email" class="login-input" placeholder="Email address">
            <label for="username">Username </label>
            <input type="text" v-model="newUser.username" id="username" class="login-input" placeholder="Username">
            <label for="fullname">Fullname </label>
            <input type="text" v-model="newUser.fullname" id="fullname" class="login-input" placeholder="Fullname">
            <label for="password">Password </label>
            <input type="password" v-model="newUser.password" id="password" class="login-input" placeholder="Password">
            <button class="clean-btn login-btn" @click.prevent="signup">SIGN UP</button>
        </form>
    </div>
</template>

<script >
import { eventBus } from '../../services/event-bus';

export default {
    props: {
        'isNewUser': {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            },
            newUser: {
                email: '',
                username: '',
                fullname: '',
                password: '',
            }
        }
    },
    created() {

        // console.log(this.modelValue);
    },

    methods: {
        updateModalValue() {
            console.log(this.modelValue);
            this.$emit('getUserInfo', modelValue)
        },
        login() {
            if (this.userInfo.username === '' || this.userInfo.password === '') return eventBus.emit('show-msg', 'Please fill all requested details');
            this.$emit('login', this.userInfo)
        },
        signup() {
            if (this.newUser.username === '' 
            || this.newUser.email === '' 
            || this.newUser.fullname === '' 
            || this.newUser.password === '') return eventBus.emit('show-msg', 'Please fill all requested details');
            this.$emit('signup', this.newUser)
        }

    }
}

</script>