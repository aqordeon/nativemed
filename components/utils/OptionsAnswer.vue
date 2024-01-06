<template>
    <ol class="flex flex-col gap-y-2.5">
        <template v-if="useTryoutStore().getCurrentSoal?.options">
            <li v-for="(option, index) in useTryoutStore().getCurrentSoal.options" :key="index"
                @click="useTryoutStore().getCurrentSoal.selectedAnswer = index"
                class="border border-native-200 group text-sm cursor-pointer flex rounded-md py-2.5 px-5 gap-x-6"
                :class="[useTryoutStore().getCurrentSoal.selectedAnswer === index ? 'bg-native-600 text-white' : 'bg-white hover:bg-indigo-100 hover:text-gray-700 ']"
            >
                <div class="w-8">
                    <span class="h-8 aspect-square flex items-center justify-center rounded-full border-2 leading-none"
                        :class="[useTryoutStore().getCurrentSoal.selectedAnswer === index ? 'border-white' : 'border-native-600']"
                    >{{String.fromCharCode(65 + index)}}</span>
                </div>
                <p class="leading-none flex items-center">{{ option }}</p>
            </li>
        </template>
    </ol>
</template>

<script setup lang="ts">
import { useTryoutStore } from '~/store/tryoutStore'
// import { storeToRefs } from "pinia"
// const { materiName, quizList, currentSoal } = storeToRefs(useTryoutStore())

</script>

<style scoped></style>