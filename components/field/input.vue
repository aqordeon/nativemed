<template>
    <input :value="modelValue" @input="(event) => emits('update:modelValue', event.target.value)"
        class="w-full px-5 py-3 placeholder:text-gray-300 text-base ring-1 ring-native-300 focus:ring focus:ring-native-500 focus:outline-none rounded-md" :placeholder="placeholder">
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: string
    placeholder?: string
}>()

const emits = defineEmits<{
    (e: 'update:modelValue'): void
}>()
</script>

<style scoped>

</style>