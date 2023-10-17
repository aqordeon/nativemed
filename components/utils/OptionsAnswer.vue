<template>
    <ol type="A" class="flex flex-col gap-y-2.5">
        <li v-for="(soal, index) in currentSoal[0].options" :key="index"
            @click="currentSoal[0].selectedAnswer = index"
            class="group cursor-pointer flex rounded-md py-2.5 px-5 gap-x-6"
            :class="[currentSoal[0].selectedAnswer == index ? 'bg-native-600 text-white' : 'bg-white hover:bg-indigo-200 hover:text-gray-700 ']"
        >
            <div class="w-8">
                <span class="h-8 aspect-square flex items-center justify-center rounded-full border-2 leading-none"
                    :class="[currentSoal[0].selectedAnswer == index ? 'border-white' : 'border-native-600']"
                >{{String.fromCharCode(65 + index)}}</span>
            </div>
            <p>{{ soal }}</p>
        </li>
    </ol>
    <!-- {{ currentSoal }} -->
</template>

<script setup lang="ts">
import { useTryoutStore } from '~/store/tryoutStore'
import { storeToRefs } from "pinia"
const { soalName, quizList } = storeToRefs(useTryoutStore())

const currentSoal = computed(() => {
    return quizList.value.filter(item => item.id == useRouter().currentRoute.value.params.nomorSoal)
})


const pilihanGanda = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
]
</script>

<style scoped></style>