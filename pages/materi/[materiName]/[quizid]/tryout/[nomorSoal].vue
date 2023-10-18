<template>
    <div class="h-full relative bg-native-50 py-4 rounded-md col-span-7">
        <div class="absolute px-6 h-[95%] overflow-y-auto w-full">
            <p class="text-stone-900 text-sm font-normal mb-6">
                <Transition name="slide-fade" mode="out-in">
{{ currentSoal.question }}</Transition>
            </p>
            <!-- "@imgs/soal.png" -->
            <img v-if="currentSoal.image" :src="currentSoal.image" alt="" class="max-h-56 mb-8 aspect-auto">
            <UtilsOptionsAnswer :key="currentSoal.id" />
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: "on-tryout",
})
import { storeToRefs } from "pinia"
import { useTryoutStore } from '~/store/tryoutStore'
const { materiName, quizList, currentSoal } = storeToRefs(useTryoutStore())


</script>