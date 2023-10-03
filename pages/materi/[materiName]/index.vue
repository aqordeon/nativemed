<template>
    <div class="isolate relative w-full min-h-screen px-12 py-10 bg-native-50">
        <div class="absolute -z-10 inset-0 h-[50vh] bg-native-200"></div>
        <p class="font-bold text-2xl mb-10"> Quiz - Materi 1</p>
        <div class="w-full h-full bg-white rounded-md py-8 px-8 shadow-md">
            <div class="grid grid-cols-5 gap-x-5 gap-y-4 flex-wrap">
                <div v-for="quidId in 10" :key="quidId" class="flex flex-col justify-center gap-y-2.5">
                    <div class="bg-native-50 aspect-[5/3] rounded-md"></div>
                    <p class="text-gray-700 font-bold text-sm text-center leading-none">Headline Quiz {{ quidId }}.</p>
                </div>
            </div>
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