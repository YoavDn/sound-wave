<template>
    <div class="station-tracks-container">
        <ul class="clean-list flex flex-column result-list">
            <li v-for="track in tracks" class="flex align-center">
                <track-preview :track="track" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: { 'tracks': Array }
}
</script>
