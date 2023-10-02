<template>
    <div class="w-full h-full bg-native-50 px-12 py-8">
        <div class="w-full h-full bg-white rounded-md py-8 px-8 shadow-md">
            <p class="font-bold text-2xl mb-24">Materi</p>
            <div class="grid grid-cols-5 gap-x-5 gap-y-4 flex-wrap">
                <div v-for="materiId in 18" :key="materiId" class="flex flex-col justify-center gap-y-2.5">
                    <div class="bg-native-300 aspect-[5/3] rounded-md"></div>
                    <p class="text-gray-700 font-bold text-sm text-center leading-none">Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
})

// definePageMeta({
//     middleware: 'auth'
// })
</script>

<style scoped>

</style>