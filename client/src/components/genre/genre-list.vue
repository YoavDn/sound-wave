<template>
    <section class="genres-section">
        <h1>Browse all</h1>
        <div class="genres-container-grid">
            <genre-preview v-for="genre in genres" :genre="genre" />
        </div>
    </section>
</template>

<script>
import genrePreview from './genre-preview.vue'
export default {
    props: {
        genres:{
            type: Array,
            required: true,
        }
    },
    created(){
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    components: {
        genrePreview
    }
}
</script>

<style lang="scss" scoped>
</style>