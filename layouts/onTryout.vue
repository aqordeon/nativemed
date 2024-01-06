<template>
    <div class="h-screen text-native-600 px-4">
        <div class="w-full h-full flex flex-col overflow-hidden bg-red-50 pb-5 pt-0 relative">
            <div class="mb-2.5">
                <TryoutHeaderTryout :timer="true" :breadcrumbs="['Materi Lorem Ipsum / Quiz Lorem Ipsum / Pengerjaan Soal']"
                    :title="`⬅️ Materi: ${useRouter().currentRoute.value.params.materiName}`"
                >
                <template #breadcrumbs>
                    <div class="capitalize">
                        <template v-for="(params, key) in useRouter().currentRoute.value.params" :key="key">
                            <span>{{ params.replace("-", " ") }}</span>
                            <span class="last:hidden"> / </span>
                        </template>
                    </div>
                </template>
                </TryoutHeaderTryout>
            </div>

            <div class="h-full px-12 space-y-5 relative">
                <!-- Section: Top of soal (Lihat Jawaban Saya, Kumpulkan Quiz ) -->
                <div class="flex gap-x-2.5 items-center">
                    <div class="bg-white rounded-md text-gray-600 px-5 py-[5px] flex justify-between items-center w-full">
                        <div class="text-stone-700 text-sm font-bold leading-tight">Soal {{ useRouter().currentRoute.value.params.nomorSoal }}</div>
                        <!-- <div class="bg-native-100 py-[5px] px-5 rounded-full flex gap-x-5 ">
                            <div class="text-stone-900 text-sm font-medium leading-tight">1 / 50</div>
                            <span>
                                <ChevronUpDownIcon class="h-4 rotate-90" />
                            </span>
                        </div> -->
                    </div>
                    <UtilsButton @click="isModalJawabanOpen = true" theme="secondary">
                        <template #iconLeft>
                            <BookOpenIcon class="h-4 w-auto" />
                        </template>
                        <span class="whitespace-nowrap">Lihat Jawaban Saya</span>
                    </UtilsButton>
                    <UtilsButton @click="isModalKumpulkanQuiz = true">
                        Kumpulkan Quiz
                    </UtilsButton>
                </div>

                <!-- Main Content -->
                <div class="relative h-[75%] bg-white rounded-md text-gray-700 py-7 px-8 text-lg grid grid-cols-12 gap-x-5">
                    <!-- Soal -->
                    <slot />

                    <!-- List Soal -->
                    <div class="h-full col-span-5 bg-native-50 rounded-md py-4 px-4 space-y-5">
                        <div class="text-xl whitespace-nowrap">List Soal</div>
                        <div class="h-[90%] relative overflow-y-auto flex flex-col gap-y-2.5 w-full">
                            <div class="absolute w-full h-full space-y-2.5">
                                <!-- Box: List Soal -->
                                <template v-if="useTryoutStore().quizList">
                                    <NuxtLink v-for="(soal, index) in useTryoutStore().quizList" :to="`${index + 1}`" :key="index"
                                        class="relative shadow text-xs flex items-center rounded-md gap-x-2.5 py-2 pl-5 pr-9 cursor-pointer" :class="[
                                            index + 1 == nomorSoal
                                                ? 'bg-native-600 hover:bg-native-700 text-white' // If CurrentSoal
                                                : typeof soal.selectedAnswer == 'number'
                                                    ? 'bg-native-200 hover:bg-native-300' // If not currentSoal and answered
                                                    : 'bg-white hover:bg-native-100 border border-gray-200',
                                            {'text-gray-300': soal.action == 'answered'},
                                    ]">
                                        <span>{{ index + 1 }}.</span>
                                        <p class="truncate whitespace-nowrap">{{ soal.soal }}</p>
                                        <CheckCircleIcon v-if="typeof soal.selectedAnswer == 'number'" class="absolute right-4 h-5 w-5 text-green-400" />
                                    </NuxtLink>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button: soal sebelumnya, ragu-ragu, soal setelahnya -->
                <div class="flex justify-around">
                    <NuxtLink :to="`${nomorSoal - 1}`">
                        <UtilsButton theme="secondary">⬅️ Soal sebelumnya</UtilsButton>
                    </NuxtLink>
                    <NuxtLink @click="useTryoutStore().getCurrentSoal.action = 'ragu'" :to="`${nomorSoal + 1}`">
                        <UtilsButton theme="secondary">Ragu-ragu</UtilsButton>
                    </NuxtLink>
                    <NuxtLink @click="useTryoutStore().getCurrentSoal.action = 'answered'" :to="`${nomorSoal + 1}`">
                        <UtilsButton theme="amber">Soal setelahnya ➡️</UtilsButton>
                    </NuxtLink>
                    <!-- <div class="bg-white border border-native-600 w-fit px-7 py-5 rounded-md text-sm">Ragu-ragu</div> -->
                    <!-- <div class="bg-amber-500 w-fit px-7 py-5 rounded-md text-sm">Soal setelahnya ➡️</div> -->
                </div>
            </div>

            <!-- Modal: Review Jawaban -->
            <TryoutModalJawaban v-model="isModalJawabanOpen" :nomorSoal="nomorSoal" />
            
            <!-- Modal: Submit Quiz -->
            <UtilsModal :isOpen="isModalKumpulkanQuiz" @onClose="isModalKumpulkanQuiz = false">
                <div class="relative py-4 text-gray-700">
                    <XMarkIcon @click="isModalKumpulkanQuiz = false"
                        class="text-gray-500 hover:text-gray-700 cursor-pointer absolute w-5 h-5 right-0 top-0 translate-x-1/2 -translate-y-1/2" />
                    <div class="w-[80%] mx-auto text-center font-medium">
                        Apakah Anda yakin untuk mengumpulkan quiz yang sedang Anda kerjakan?
                    </div>
                    <img class="h-52 my-5 aspect-auto mx-auto" src="@imgs/ill_warning.png" />
                    <div class="relative flex justify-center items-center gap-x-2.5">
                        <UtilsButton @click="isModalKumpulkanQuiz = false" theme="secondary" label="Kembali" />
                        <NuxtLink to="hasilakhir">
                            <UtilsButton theme="primary" label="Yakin" />
                        </NuxtLink>
                    </div>
                </div>
            </UtilsModal>
        {{ useTryoutStore().quizList }}
        </div>
	</div>
</template>

<script setup lang="ts">
import { BookOpenIcon, ChevronUpDownIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'
// import { storeToRefs } from "pinia"
import { useTryoutStore } from '~/store/tryoutStore'
import { useTryoutTimeStore } from '~/store/onTryout'
const { onStartTryout } = useTryoutTimeStore()

// const { quizList, currentSoal } = storeToRefs(useTryoutStore())

const bank_soal = await useSupabaseClient()
    .from('bank_soal')
    .select(`
        id, soal, options, jawaban,
        list_materi (slug),
        list_quiz (slug)
    `)
    .eq('list_materi.slug', useRouter().currentRoute.value.params.materiName)
    .eq('list_quiz.slug', useRouter().currentRoute.value.params.quizName)

// console.log(useCookie('isOnTryout').value)
// if(useCookie('isOnTryout').value){
//     useCookie('isOnTryout').value !== true ? useRouter().push(`petunjukpengerjaan`) : ''
// }

// const { data } = await useFetch('/api/quiz_trial') // fetch data Quiz

const nomorSoal = computed(() => {
    return ~~(useRouter().currentRoute.value.params.nomorSoal)
})

const isModalJawabanOpen = ref(false)
const isModalKumpulkanQuiz = ref(false)

watchEffect(() => {
    // console.log('getCurrentSoal', useTryoutStore().getCurrentSoal)
    useTryoutStore().quizList = bank_soal.data // Save the quiz list to Pinia after fetch
    // if(!quizList.value || !materiName.value || !useTryoutStore().currentSoal.value) useRouter().push('petunjukpengerjaan')
})

onMounted(() => {
    onStartTryout()
})
</script>

<style scoped></style>