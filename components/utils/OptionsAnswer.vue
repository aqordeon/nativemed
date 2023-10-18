<template>
    <ol class="flex flex-col gap-y-2.5">
        <li v-for="(option, index) in currentSoal.options" :key="index"
            @click="currentSoal.selectedAnswer = index"
            class="group text-sm cursor-pointer flex rounded-md py-2.5 px-5 gap-x-6"
            :class="[currentSoal.selectedAnswer === index ? 'bg-native-600 text-white' : 'bg-white hover:bg-indigo-200 hover:text-gray-700 ']"
        >
            <div class="w-8">
                <span class="h-8 aspect-square flex items-center justify-center rounded-full border-2 leading-none"
                    :class="[currentSoal.selectedAnswer === index ? 'border-white' : 'border-native-600']"
                >{{String.fromCharCode(65 + index)}}</span>
            </div>
            <p class="leading-none flex items-center">{{ option }}</p>
        </li>
    </ol>
</template>

<script setup lang="ts">
import { useTryoutStore } from '~/store/tryoutStore'
import { storeToRefs } from "pinia"
const { materiName, quizList, currentSoal } = storeToRefs(useTryoutStore())

</script>

<style scoped></style>