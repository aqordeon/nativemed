<template>
    <div class="min-w-52 relative text-stone-600 border border-gray-200 rounded-lg overflow-hidden shadow">
        <div class="h-full pt-4 pb-3 space-y-5 bg-white hover:bg-gray-50"
            :class="[dataMateri.line_color ? `border-[${dataMateri.line_color}] border-l-4` : '']"
        >
            <!-- Section: Title & Description -->
            <div class="pl-4 pr-3 space-y-5">
                <div class="text-sm font-semibold leading-tight">
                    {{ dataMateri.title }}
                </div>
                <div class="text-xs leading-none">
                    {{ dataMateri.description }}
                </div>
            </div>
            
            <!-- Section: Jumlah Quiz -->
            <div class="px-3.5 w-full pt-2.5 border-t border-stone-300 justify-between items-center inline-flex">
                <div class="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div class="text-center text-neutral-600 text-xs leading-none">Jumlah Quiz</div>
                    <div class="text-center text-neutral-600 text-xs font-medium leading-none">{{dataMateri.quiz_count}} Quiz</div>
                </div>
                <NuxtLink :to="`/materi/${dataMateri.slug}`" class="p-1.5 bg-indigo-500 hover:bg-indigo-600 cursor-pointer rounded-md justify-center items-center gap-1 flex">
                    <div class="w-4 h-4 relative text-white">
                        <ArrowRightIcon />
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/solid';
const props = defineProps<{
    dataMateri: {
        id: number
        slug: string
        title: string
        description: string
        quiz_count: number
        line_color: string
    }
}>()
</script>

<style scoped></style>