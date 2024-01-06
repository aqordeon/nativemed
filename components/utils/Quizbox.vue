<template>
    <div class="relative text-stone-600 border border-gray-200 rounded-lg overflow-hidden h-full pt-4 pb-3 space-y-2.5"
        :class="countSoal ? 'bg-white shadow-md' : 'bg-gray-100'">
        <!-- Section: Title & Description -->
        <div class="flex flex-col pl-2.5 pr-4 gap-y-4">
            <div class="flex gap-x-2.5">
                <div class="h-6 aspect-square bg-violet-100 rounded-full shadow justify-end items-center inline-flex">
                    <img class="w-5 h-3.5" src="@imgs/book-stacked.svg" />
                </div>
                <div class="text-sm font-semibold leading-tight">
                    {{ quiz.label }}
                </div>
            </div>

            <!-- Jumlah Soal -->
            <div class="pl-8 pr-3 space-y-5 text-xs leading-none">
                <div v-if="true" class="py-2.5">
                    Jumlah Soal:
                    <span class="font-semibold">{{ countSoal ? countSoal : 0 }}</span> Soal
                </div>
                <div v-else class="w-32 h-7 px-5 bg-orange-100 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                    <div class="text-orange-400 text-xs font-bold font-['Jost'] leading-none">Nilai Anda : 80</div>
                </div>
            </div>
        </div>

        <!-- Section: Jumlah Quiz -->
        <div class="w-full px-3.5 pt-2.5 border-t border-stone-300">
            <!-- Section: Mulai Mengerjakan -->
            <div v-if="true" class=" flex justify-between items-center gap-x-5 ">
                <div class="flex items-center gap-x-1 ">
                    <ClockIcon class="h-3 aspect-auto" />
                    <span class="text-xs">{{ durationSoal }} menit</span>
                </div>
                <NuxtLink :to="`${materiName}/${quiz.slug}`">
                    <UtilsButton :theme="countSoal ? 'primary' : 'secondary'"
                        :label="countSoal ? 'Mulai Mengerjakan' : 'Tidak ada soal'" />
                </NuxtLink>
            </div>

            <!-- Section: Lihat Pembahasan -->
            <div v-else class=" flex justify-between items-center gap-x-5 ">
                <div class="flex items-center gap-x-1 ">
                    <ClipboardDocumentCheckIcon class="h-3 aspect-auto text-green-500" />
                    <span class="text-xs">
                        Selesai
                    </span>
                </div>
                <NuxtLink :to="`#`">
                    <UtilsButton theme="secondary" label="Lihat Pembahasan" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ClockIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid';
const props = defineProps<{
    quiz: {
        id: number
        slug: string
        label: string
    }
    countSoal: number
    durationSoal: number
}>()


const materiName = useRouter().currentRoute.value.params.materiName
</script>
