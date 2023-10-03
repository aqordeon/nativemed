<template>
    <div class="w-full h-full bg-native-50">
        <div class="w-full h-full bg-native-100 px-12 py-4 flex flex-col gap-y-8">
            <span class="text-gray -500 font-bold text-xs ">Materi Lorem Ipsum / Quiz Lorem Ipsum / Pengerjaan Soal</span>
            <p class="font-bold text-2xl block text-gray-600 mb-4">⬅️ Materi: {{ useRouter().currentRoute.value.params.materiName }}</p>
        </div>
        <div class="px-12 py-5 space-y-5">
            <div class="bg-white text-gray-600 px-7 py-3">Petunjuk Soal</div>
            <div class="bg-white text-gray-700 py-12 px-24 space-y-14 text-lg">
                <h2 class="font-bold text-center">Petunjuk Quiz Penalaran Umum</h2>
                <div>
                    <ol class="space-y-4 list-decimal list-inside">
                        <li v-for="(petunjuk, index) in petunjukQuiz" :key="index" class="leading-none">{{ petunjuk }}</li>
                    </ol>
                </div>
                <div class="font-bold text-center">Selamat Mengerjakan!</div>
            </div>
            <div class="bg-native-600 w-fit mx-auto px-7 py-5 rounded-md text-white text-sm">Mulai Mengerjakan</div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
    // middleware: 'auth',
})


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