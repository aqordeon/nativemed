export default defineEventHandler((event) => {
    return {
        quizTrial: [
            {
                id: 1,
                question: "Apa yang menyebabkan bulan memiliki fase berbeda?",
                options: [ "Rotasi Bumi", "Rotasi Bulan", "Gerhana Matahari", "Pengaruh Gravitasi", "Rotasi Mars", ],
                correctAnswer: 1,
                selectedAnswer: false,  // false or 0-4
                action: null,  // false, "skip", "answered"
            },
            {
                id: 2,
                question: "Apa yang menjadi sumber utama energi di Bumi?",
                options: [
                    "Matahari",
                    "Bulan",
                    "Angin",
                    "Api",
                    "Air",
                ],
                correctAnswer: 0,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 3,
                question: "Apa yang disebut dengan proses di mana tumbuhan mengubah cahaya menjadi makanan?",
                options: [ "Fotosintesis", "Respirasi", "Perkembangbiakan", "Evolusi", "Dekomposisi", ],
                correctAnswer: 0,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 4,
                question: "Apa yang menyebabkan pelangi terbentuk setelah hujan?",
                options: [
                    "Cahaya matahari memecah di tetesan air",
                    "Matahari menyemburkan warna-warni",
                    "Hujan menyebabkan warna-warni di langit",
                    "Pelangi adalah ilusi optik",
                    "Pigmen di langit membentuk pelangi",
                ],
                correctAnswer: 0,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 5,
                question: "Apa yang menyebabkan musim panas dan musim dingin?",
                options: [
                    "Kemiringan sumbu Bumi",
                    "Perubahan orbit Bumi",
                    "Pengaruh atmosfer",
                    "Rotasi Bulan",
                    "Perubahan matahari",
                ],
                correctAnswer: 0,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 6,
                question: "Apa yang merupakan salah satu fungsi jantung dalam tubuh manusia?",
                options: [
                    "Pencernaan makanan",
                    "Pompa darah ke seluruh tubuh",
                    "Pernapasan",
                    "Penyaringan limbah",
                    "Menghasilkan hormon",
                ],
                correctAnswer: 1,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 7,
                question: "Apa yang disebut dengan alat yang digunakan untuk mengukur suhu?",
                options: [
                    "Termometer",
                    "Mikroskop",
                    "Siklus",
                    "Barometer",
                    "Spektrometer",
                ],
                correctAnswer: 0,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 8,
                question: "Bagaimana seorang tumbuhan mengambil karbon dioksida dari udara?",
                options: [
                    "Melalui akar",
                    "Melalui daun",
                    "Melalui bunga",
                    "Melalui batang",
                    "Melalui akar dan daun",
                ],
                correctAnswer: 1,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 9,
                question: "Apa yang menyebabkan warna daun berubah menjadi merah pada musim gugur?",
                options: [
                    "Kehadiran serangga",
                    "Suhu yang lebih panas",
                    "Kurangnya cahaya matahari",
                    "Perubahan pigmen",
                    "Hujan deras",
                ],
                correctAnswer: 3,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 10,
                question: "Apa yang menyebabkan mata kita terlihat warna berbeda?",
                options: [
                    "Bentuk mata",
                    "Perbedaan ukuran mata",
                    "Kerja iris mata",
                    "Sifat lensa mata",
                    "Warna cahaya yang dipantulkan",
                ],
                correctAnswer: 4,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 11,
                question: "Apa yang disebut dengan proses perubahan air menjadi uap air?",
                options: [
                    "Kondensasi",
                    "Sublimasi",
                    "Peleburan",
                    "Penguapan",
                    "Pembekuan",
                ],
                correctAnswer: 3,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 12,
                question: "Apa yang menjadi penyebab terjadinya gempa bumi?",
                options: [
                    "Panas dari inti Bumi",
                    "Perubahan cuaca",
                    "Gerak lempeng tektonik",
                    "Gangguan magnetik",
                    "Pengaruh angin",
                ],
                correctAnswer: 2,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 13,
                question: "Apa yang disebut dengan lapisan terluar Bumi?",
                options: [
                    "Inti",
                    "Mantel",
                    "Krusta",
                    "Asthenosfer",
                    "Litosfer",
                ],
                correctAnswer: 2,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 14,
                question: "Apa yang disebut dengan benda langit yang mengelilingi matahari?",
                options: [
                    "Bulan",
                    "Planet",
                    "Komet",
                    "Asteroid",
                    "Galaksi",
                ],
                correctAnswer: 1,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 15,
                question: "Apa yang memungkinkan pesawat terbang di udara?",
                options: [
                    "Roda",
                    "Baling-baling",
                    "Mesin jet",
                    "Kapal layar",
                    "Roket",
                ],
                correctAnswer: 2,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 16,
                question: "Apa yang disebut dengan proses pembakaran bahan bakar di mesin kendaraan?",
                options: [
                    "Fotosintesis",
                    "Respirasi",
                    "Eksoskeleton",
                    "Komusti",
                    "Kemosintesis",
                ],
                correctAnswer: 3,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 17,
                question: "Apa yang menghasilkan energi listrik dalam pembangkit listrik tenaga nuklir?",
                options: [
                    "Tenaga air",
                    "Panas matahari",
                    "Fusi nuklir",
                    "Panen angin",
                    "Gas alam",
                ],
                correctAnswer: 2,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 18,
                question: "Apa yang mengukur tingkat keasaman atau kebasaan dalam larutan?",
                options: [
                    "Termometer",
                    "Barometer",
                    "Ph-meter",
                    "Voltmeter",
                    "Ammeter",
                ],
                correctAnswer: 2,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 19,
                question: "Apa yang disebut dengan planet terdekat dari Matahari dalam tata surya?",
                options: [
                    "Mars",
                    "Venus",
                    "Jupiter",
                    "Neptunus",
                    "Saturnus",
                ],
                correctAnswer: 1,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
            {
                id: 20,
                question: "Apa yang menyebabkan gerhana matahari terjadi?",
                options: [
                    "Bulan berada di antara Bumi dan Matahari",
                    "Bumi berada di antara Bulan dan Matahari",
                    "Rotasi Matahari",
                    "Pengaruh gravitasi",
                    "Rotasi Bulan",
                ],
                correctAnswer: 0,
                selectedAnswer: false,
                action: null,  // false, "skip", "answered"
            },
        ]
    }
})