<template>
    <div class="h-full relative bg-native-50 py-4 rounded-md col-span-7">
        <div class="absolute px-6 h-[95%] overflow-y-auto w-full">
            <p class="text-stone-900 text-sm font-normal mb-6">
                {{ useTryoutStore().currentSoal?.soal }}
            </p>
            <!-- "@imgs/soal.png" -->
            <img v-if="useTryoutStore().currentSoal?.image" :src="useTryoutStore().currentSoal?.image" alt="" class="max-h-56 mb-8 aspect-auto">
            <UtilsOptionsAnswer :key="useTryoutStore().currentSoal?.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "on-tryout",
})

import { useTryoutStore } from '~/store/tryoutStore'
// const { materiName, quizList, currentSoal } = storeToRefs(useTryoutStore())


</script>