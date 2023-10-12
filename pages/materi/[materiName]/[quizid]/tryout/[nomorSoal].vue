<template>
    <div class="w-full h-full flex flex-col overflow-hidden bg-red-50 pb-5 pt-0 relative">
        <div class="mb-2.5">
            <TryoutHeaderTryout :timer="true" :breadcrumbs="['Materi Lorem Ipsum / Quiz Lorem Ipsum / Pengerjaan Soal']"
                :title="`⬅️ Materi: ${useRouter().currentRoute.value.params.materiName}`" />
        </div>

        <div class="h-full px-12 space-y-5 relative">
            <!-- Section: Top of soal (Lihat Jawaban Saya, Kumpulkan Quiz ) -->
            <div class="flex gap-x-2.5 items-center">
                <div class="bg-white rounded-md text-gray-600 px-5 py-[5px] flex justify-between items-center w-full">
                    <div class="text-stone-900 text-sm font-bold leading-tight">Soal 1</div>
                    <div class="bg-native-100 py-[5px] px-5 rounded-full flex gap-x-5 ">
                        <div class="text-stone-900 text-sm font-medium leading-tight">1 / 50</div>
                        <span>
                            <!-- not appear -->
                            <ChevronUpDownIcon class="h-4 rotate-90" />
                        </span>
                    </div>
                </div>
                <UtilsButton @click="isModalOpen = true">
                    <template #iconLeft>
                        <BookOpenIcon class="h-4 w-auto" />
                    </template>
                    <span class="whitespace-nowrap">Lihat Jawaban Saya</span>
                </UtilsButton>
                <UtilsButton>
                    Kumpulkan Quiz
                </UtilsButton>
            </div>

            <!-- Main Content -->
            <div class="relative h-[75%] bg-white rounded-md text-gray-700 py-7 px-8 text-lg grid grid-cols-12 gap-x-5">
                <!-- Soal -->
                <div class="h-full relative bg-native-50 py-4 rounded-md col-span-7">
                    <div class="absolute px-6 h-[95%] overflow-y-auto ">
                        <p class="text-stone-900 text-sm font-normal mb-6">Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <img src="@imgs/soal.png" alt="" class="h-56 mb-8">
                        <UtilsOptionsAnswer />
                    </div>
                </div>

                <!-- List Soal -->
                <div class="h-full col-span-5 bg-native-50 rounded-md py-4 px-4 space-y-5">
                    <div class="text-xl whitespace-nowrap">List Soal</div>
                    <div class="h-[90%] relative overflow-y-auto flex flex-col gap-y-2.5 w-full">
                        <div class="absolute w-full h-full space-y-2.5">
                            <div v-for="(soal, index) in listSoal" :key="index"
                                class="bg-white rounded-md space-x-2.5 py-2 px-5 flex">
                                <span>{{ index + 1 }}.</span>
                                <p class="truncate whitespace-nowrap">{{ soal }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button: soal sebelumnya, ragu-ragu, soal setelahnya -->
            <div class="flex justify-around">
                <UtilsButton theme="secondary">⬅️ Soal sebelumnya</UtilsButton>
                <UtilsButton theme="secondary">Ragu-ragu</UtilsButton>
                <UtilsButton theme="amber">Soal setelahnya ➡️</UtilsButton>
                <!-- <div class="bg-white border border-native-600 w-fit px-7 py-5 rounded-md text-sm">Ragu-ragu</div> -->
                <!-- <div class="bg-amber-500 w-fit px-7 py-5 rounded-md text-sm">Soal setelahnya ➡️</div> -->
            </div>
        </div>
        
        <!-- Modal: Jihat Jawaban -->
        <TryoutModalJawaban v-model="isModalOpen" />
    </div>

    
</template>

<script setup lang="ts">
import { BookOpenIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/vue/24/solid'

definePageMeta({
    layout: "tryout-start",
    // middleware: 'auth',
})

const isModalOpen = ref(false)


const listSoal = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
]
</script>