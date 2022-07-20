
<template>
    <main class="home-container">
        <h2 class="hero-title">Good morning Afik and Aviya</h2>
        <section class="hero-list">
            <article v-for="station in stations" :key="station.id" class="hero-card">
                <hero-preview :station="station" />
            </article>
        </section>
    </main>
</template>

<script >
import heroPreview from '../components/home/hero-preview.vue'
export default {
    name: 'home',
    components: {
        heroPreview,
    },
    data() {
        return {
            stations: [ // demo for now
                { id: 1, title: 'hello' },
                { id: 2, title: 'hello' },
                { id: 3, title: 'hello' },
                { id: 4, title: 'hello' },
                { id: 5, title: 'hello' },
                { id: 6, title: 'hello' },
            ]
        }
    },
}
</script>