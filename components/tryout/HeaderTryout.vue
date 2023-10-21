<template>
    <div class="w-full h-full bg-native-100 px-12 py-2.5 flex gap-y-8 justify-between">
        <div class="flex flex-col gap-y-5 pb-5">
            <slot>
                <span class="text-basic-500 text-xs">
                    <slot name="breadcrumbs">
                        {{ breadcrumbs }}
                    </slot>
                </span>
                <slot name="title">
                    <p class="font-bold text-2xl block text-gray-600 mb-4">
                        {{ title }}
                    </p>
                </slot>
            </slot>
        </div>
        <div v-if="timer" class="my-auto">
            <UtilsTimer />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    breadcrumbs?: string[] | any
    title: string
    timer?: boolean
}>()
</script>

<style scoped></style>