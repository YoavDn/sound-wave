<template>
    <form @submit.prevent="$emit('searchTrack', query)">
        <div class="search-container flex align-center">
            <i class="bi bi-search search-icon"></i>
            <input type="search" name="title" v-model="query" placeholder="Playlists or songs">
        </div>
    </form>
</template>
    
<script >
export default {
    data() {
        return {
            query: '',
        }
    },
}

</script>
    
<style>
</style>