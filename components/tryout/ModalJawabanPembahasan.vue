<template>
    <UtilsModal :isOpen="modelValue" @onClose="() => emits('update:modelValue', false)">
        <div class="w-full space-y-7">
            <div class="flex justify-between  font-medium text-2xl">
                <span>Jawaban Saya</span>
                <XMarkIcon @click="() => emits('update:modelValue', false)" class="h-7 text-basic-600 hover:text-basic-700 cursor-pointer" />
            </div>

            <!-- Benar, salah, tidak dijawab -->
            <div class="grid grid-cols-3 w-fit gap-x-2.5 text-gray-700">
                <div class="flex flex-col items-center py-3 bg-lime-400 rounded-md">
                    <span class="">Benar</span>
                    <span>38</span>
                </div>
                <div class="flex flex-col items-center py-3 bg-rose-400 rounded-md">
                    <span class="">Salah</span>
                    <span>10</span>
                </div>
                <div class="flex flex-col items-center py-3 px-6 bg-amber-400 rounded-md">
                    <span class="whitespace-nowrap">Tidak Dijawab</span>
                    <span>2</span>
                </div>
            </div>
            <div class="grid grid-cols-10 gap-x-3 gap-y-2.5">
                <div v-for="(abc, index) in 50" :key="index"
                    class="flex items-center justify-center cursor-pointer rounded-md h-12 aspect-square bg-lime-400 hover:bg-lime-500">
                    {{ index + 1 }}</div>
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