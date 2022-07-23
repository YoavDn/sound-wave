<template>
    <div class="genre-preview-container" :style="genre.background">
        <h1>{{ genre.title }}</h1>
        <img :src="genre.imgUrl" alt="">
    </div>
</template>

<script>
export default {
    props: {
        genre: {
            type: Object,
            required: true,
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
</style>