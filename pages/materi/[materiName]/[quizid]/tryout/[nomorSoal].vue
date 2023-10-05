<template>
    <div class="w-full h-full bg-native-50 pb-5">
        <div class="w-full h-full bg-native-100 px-12 py-4 flex flex-col gap-y-8">
            <span class="text-gray-500 font-bold text-xs ">Materi Lorem Ipsum / Quiz Lorem Ipsum / Pengerjaan Soal</span>
            <p class="font-bold text-2xl block text-gray-600">⬅️ Materi: {{ useRouter().currentRoute.value.params.materiName
            }}</p>
        </div>
        <div class="">
            <div class="bg-white rounded-md text-gray-700 py-2.5 px-6 flex w-fit gap-x-2.5 mx-auto -translate-y-1/2">
                <div class="rounded-md bg-native-300 w-8 aspect-square flex items-center justify-center">01</div>
                <span>:</span>
                <div class="rounded-md bg-native-300 w-8 aspect-square flex items-center justify-center">01</div>
                <span>:</span>
                <div class="rounded-md bg-native-300 w-8 aspect-square flex items-center justify-center">01</div>
            </div>
        </div>
        <div class="px-12 pb -5 space-y-5">
            <div class="flex gap-x-2.5">
                <div class="bg-white text-gray-600 px-7 py-3 flex justify-between items-center w-full">
                    <span>Soal 1</span>
                    <div class="bg-slate-300 text-gray-500 py-2.5 px-5 rounded-full flex gap-x-5 ">
                        <span>1 / 50</span>
                        <span>⬅️➡️</span>
                    </div>
                </div>
                <div @click="isModalOpen = true" class="bg-white hover:bg-gray-100 border cursor-pointer border-native-500 rounded-md flex items-center px-4 gap-x-2.5">
                    <span>📃</span>
                    <span class="whitespace-nowrap">Lihat Jawaban Saya</span>
                </div>
                <div class="bg-native-600 px-10 text-white whitespace-nowrap flex items-center rounded-md">
                    Kumpulkan Quiz
                </div>
            </div>

            <div class="bg-white text-gray-700 py-7 px-8 text-lg flex gap-x-2.5">
                <!-- Soal -->
                <div class="bg-native-50 rounded-md px-6 py-5 w-full">
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <img src="@imgs/soal.png" alt="" class="h-56">
                    <div class="flex flex-col gap-y-2.5">
                        <div v-for="(pilihan, index) in pilihanGanda" :key="index"
                            class="group cursor-pointer flex rounded-md hover:text-white py-5 px-6 bg-white hover:bg-native-500 gap-x-6">
                            <div class="w-8"><span
                                    class="h-8 aspect-square flex items-center justify-center rounded-full border border-gray-600 group-hover:border-white">A</span>
                            </div>
                            <p>{{ pilihan }}</p>
                        </div>
                    </div>
                </div>

                <!-- List Soal -->
                <div class="bg-native-50 rounded-md py-4 px-4 w-[80%] space-y-5">
                    <div class="text-xl whitespace-nowrap">List Soal</div>
                    <div class="flex flex-col gap-y-2.5">
                        <div v-for="(soal, index) in listSoal" :key="index"
                            class="bg-white rounded-md space-x-2.5 py-2 px-5 flex">
                            <span>{{ index + 1 }}.</span>
                            <p class="truncate w-full whitespace-nowrap">{{ soal }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button: soal sebelumnya, ragu-ragu, soal setelahnya -->
            <div class="flex justify-around">
                <div class="bg-white border border-native-600 text-native-600 w-fit px-7 py-5 rounded-md text-sm">
                    ⬅️ Soal sebelumnya
                </div>
                <div class="bg-white border border-native-600 w-fit px-7 py-5 rounded-md text-sm">Ragu-ragu</div>
                <div class="bg-amber-500 w-fit px-7 py-5 rounded-md text-sm">Soal setelahnya ➡️</div>
            </div>
        </div>
    </div>

    <UtilsModal :isOpen="isModalOpen" @onClose="() => isModalOpen = false">
        <div class="w-full space-y-7">
            <div class="flex justify-between  font-medium text-2xl">
                <span>Jawaban Saya</span>
                <span>X</span>
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
definePageMeta({
    layout: "tryout",
    // middleware: 'auth',
})

const isModalOpen = ref(false)

const pilihanGanda = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
]

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