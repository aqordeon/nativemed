<template>
    <div class="isolate relative w-full min-h-screen px-6 py-10 bg-white">
        <div class="absolute -z-10 inset-0 h-[50vh] bg-native-200"></div>
        <p class="font-bold text-2xl mb-10"> Quiz - Materi 1</p>
        <div class="w-full h-full bg-native-50 rounded-md py-8 px-8 shadow-md flex gap-x-5 gap-y-4 flex-wrap justify-center">
            <UtilsQuizbox v-for="quidId in 7" :key="quidId">

            </UtilsQuizbox>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
})
</script>

<style scoped>

</style>