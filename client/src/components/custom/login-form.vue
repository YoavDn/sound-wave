<template>

    <div class="login-container">
        <form class="login-form flex flex-column">
            <label for="username">Email address or username </label>
            <input type="text"  id="username" class="login-input" placeholder="Email address or username">
            <label for="password">Password </label>
            <input type="password"  id="password" class="login-input" placeholder="Password">
            <button class="clean-btn login-btn">LOG IN</button>
        </form>
    </div>
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
        },
        
    }
}

</script>