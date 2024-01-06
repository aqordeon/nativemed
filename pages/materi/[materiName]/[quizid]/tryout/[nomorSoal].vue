<template>
    <div class="h-full relative bg-native-50 py-4 rounded-md col-span-7">
        <div class="absolute px-6 h-[95%] overflow-y-auto w-full">
            <p class="text-stone-900 text-sm font-normal mb-6">
                {{ useTryoutStore().getCurrentSoal?.soal }}
            </p>
            <!-- "@imgs/soal.png" -->
            <img v-if="useTryoutStore().getCurrentSoal?.image" :src="useTryoutStore().getCurrentSoal?.image" alt="" class="max-h-56 mb-8 aspect-auto">
            <UtilsOptionsAnswer :key="useTryoutStore().getCurrentSoal?.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "on-tryout",
})

const nomorSoal = useRouter().currentRoute.value.params.nomorSoal

import { useTryoutStore } from '~/store/tryoutStore'
// const { materiName, quizList, currentSoal } = storeToRefs(useTryoutStore())


</script>