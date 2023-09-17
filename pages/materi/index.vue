<template>
    <div class="w-full h-full bg-orange-400">
        The list of materi: 
        <div v-for="materiId in 5">
            <NuxtLink :to="`/materi/materi${materiId}`">Materi: {{ materiId }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>

<style scoped>

</style>