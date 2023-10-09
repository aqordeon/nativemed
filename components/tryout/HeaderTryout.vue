<template>
    <div class="w-full h-full bg-native-100 px-12 py-4 flex flex-col gap-y-8">
        <slot>
            <span class="text-gray-500 font-bold text-xs">
                {{ breadcrumbs }}
            </span>
            <p class="font-bold text-2xl block text-gray-600 mb-4">
                {{ title }}
            </p>
        </slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    breadcrumbs: string[]
    title: string
}>()
</script>

<style scoped></style>