<template>
    <UtilsModal :isOpen="modelValue" @onClose="() => emits('update:modelValue', false)">
        <div class="sr-only" tabindex="0"/>
        <div class="w-full space-y-7">
            <div class="flex justify-between  font-medium text-2xl">
                <span>Jawaban Saya</span>
                <XMarkIcon @click="() => emits('update:modelValue', false)" class="h-7 text-basic-600 hover:text-basic-700 cursor-pointer" />
            </div>

            <!-- Ragu-ragu, terjawab, belum terjawab -->
            <div class="grid grid-cols-2 w-fit gap-x-2.5 text-gray-700 font-bold leading-5">
                <!-- <div class="flex flex-col shadow items-center gap-y-2.5 py-2.5 px-5 bg-white border border-gray-300 rounded-md">
                    <span class="text-gray-700">Belum terjawab</span>
                    <span>{{quizList.length - countAnswered }}</span>
                </div> -->
                <div class="flex flex-col shadow items-center gap-y-2.5 py-2.5  px-10 bg-native-100 border border-native-400 rounded-md">
                    <span class="text-native-600">Terjawab</span>
                    <span>{{ useTryoutStore().countAnswered }}/{{ useTryoutStore().quizList.length }}</span>
                </div>
            </div>
            <div class="grid grid-cols-10 gap-x-2.5 gap-y-5">
                <NuxtLink :to="`${index+1}`" v-for="(soal, index) in useTryoutStore().quizList" :key="index"
                    class="text-gray-700 flex items-center justify-center cursor-pointer rounded-md h-12 aspect-square shadow focus:ring-offset-2 focus:ring-2 focus:ring-native-600"
                    :class="[
                        useTryoutStore().getCurrentSoal.id == index+1
                        ? 'bg-native-600 text-white border border-native-700'
                        : typeof soal.selectedAnswer == 'number'
                            ? 'bg-native-300  border border-native-400'
                                : 'bg-white hover:bg-native-300 border border-gray-200'    
                    ]"
                >
                    {{ index+1 }}
                </NuxtLink>
            </div>
        </div>
    </UtilsModal>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
// import { storeToRefs } from "pinia"
import { useTryoutStore } from '~/store/tryoutStore'
// const { quizList, currentSoal, countAnswered } = storeToRefs(useTryoutStore())

const props = defineProps<{
    modelValue: boolean  // Open/close modal
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

</script>

<style scoped></style>