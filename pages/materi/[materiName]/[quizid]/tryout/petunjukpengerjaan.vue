<template>
    <div class="w-full h-full bg-native-50">
        <TryoutHeaderTryout breadcrumbs="Materi Lorem Ipsum / Quiz Lorem Ipsum / Pengerjaan Soal"
            :title="`⬅️ Materi: ${useRouter().currentRoute.value.params.materiName}`" />

        <div class="px-12 py-5 space-y-5">
            <!-- Section: Petunjuk Soal -->
            <div class="bg-white text-gray-600 px-7 py-3 font-bold">Petunjuk Soal</div>
            <!-- <p v-if="!timerExpired">Time Left: {{ hours }} hours {{ minutes }} minutes {{ seconds }} seconds</p>
            <p v-else>Time's up!</p> -->
            
            <!-- Section: Petunjuk Kuis -->
            <div class="bg-white text-gray-700 py-8 px-12 space-y-12 text-lg">
                <h2 class="font-bold text-center">Petunjuk Quiz Penalaran Umum</h2>
                <ol class="w-fit mx-auto space-y-1.5 list-decimal list-inside">
                    <li v-for="(petunjuk, index) in petunjukQuiz" :key="index" class="leading-5 text-sm">{{ petunjuk }}</li>
                </ol>
                <div class="font-medium text-center">Selamat Mengerjakan!</div>
            </div>

            <!-- Button: Mulai Mengerjakan -->
            <NuxtLink to="1" class="block mx-auto" external>
                <UtilsButton @click="onClickMulaiMengerjakan(600)" class="mx-auto">Mulai Mengerjakan</UtilsButton>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTryoutTimeStore } from '~/store/onTryout'
import { storeToRefs } from "pinia" // import storeToRefs helper hook from pinia

definePageMeta({
    layout: "tryout",
    // middleware: 'auth',
})

// const { hours, minutes, seconds, timerExpired } = storeToRefs(useTryoutTimeStore())
const { onClickMulaiMengerjakan } = useTryoutTimeStore()

const quizId = ref('')
const petunjukQuiz = [
    'Terdapat 50 soal dalam Quiz Penalaran Umum',
    'Pilihlah salah satu jawaban yang menurut Anda benar',
    'Waktu yang tersedia adalah 180 menit',
    'Periksa jawaban Anda dengan teliti',
    'Klik tombol “ Selanjutnya ” untuk melanjutkan soal dan “ Ragu-ragu ” jika Anda ragu terhadap jawaban Anda',
    'Klik tombol “ Kumpulkan Soal “ jika Anda sudah selesai mengerjakan soal',
    'Soal akan terkumpul secara otomatis jika waktu Anda telah habis dan Anda belum menekan tombol “ Kumpulkan Soal “',
]

onMounted(() => {
    // Access the dynamic parameter "id" from the route
    quizId.value = useRouter().currentRoute.value.params.quizid
})

</script>

<style scoped></style>