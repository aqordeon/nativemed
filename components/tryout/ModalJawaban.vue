<template>
    <UtilsModal :isOpen="modelValue" @onClose="() => emits('update:modelValue', false)">
        <div class="w-full space-y-7">
            <div class="flex justify-between  font-medium text-2xl">
                <span>Jawaban Saya</span>
                <XMarkIcon @click="() => emits('update:modelValue', false)" class="h-7 text-basic-600 hover:text-basic-700 cursor-pointer" />
            </div>

            <!-- Ragu-ragu, terjawab, belum terjawab -->
            <div class="grid grid-cols-2 w-fit gap-x-2.5 text-gray-700 font-bold leading-5">
                <div class="flex flex-col items-center gap-y-2.5 py-2.5 px-5 bg-secondary-200 rounded-md">
                    <span class="text-secondary-500">Ragu - ragu</span>
                    <span>12</span>
                </div>
                <div class="flex flex-col items-center gap-y-2.5 py-2.5 bg-native-100 rounded-md">
                    <span class="text-native-600">Terjawab</span>
                    <span>48/50</span>
                </div>
            </div>
            <div class="grid grid-cols-10 gap-x-2.5 gap-y-5">
                <div v-for="(abc, index) in 50" :key="index"
                    class="flex items-center justify-center cursor-pointer rounded-md h-12 aspect-square"
                    :class="[index == 7 || index == 13 || index == 14 || index == 25 || index == 42 ? 'bg-secondary-200 hover:bg-secondary-300' : 'bg-native-200 hover:bg-native-300']"
                >
                    {{ index + 1 }}
                </div>
            </div>
        </div>
    </UtilsModal>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{
    modelValue: boolean
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

</script>

<style scoped></style>