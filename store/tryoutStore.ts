import { defineStore } from 'pinia'
import { materi } from '@/types/Materi'
import { quiz } from '@/types/Quiz'

interface resultOnTryout {
    score: number
    jumlah_soal: number
    jumlah_benar: number
    jumlah_salah: number
    jumlah_tidakdijawab: number
}

export const useTryoutStore = defineStore('tryoutStore', {
    state: () => ({
        currentTryout: {
            materi: null as materi | null,
            quiz: null as quiz | null
        },
        quizList: [] as quiz[],
        currentSoal: null as quiz | null,
        on_tryout: {
            id: null as number | null,
            id_materi: null as number | null,
            id_quiz: null as number | null,
            time_start: null as Date | null,
            is_finish: false as boolean,
            duration: null as number | null,
            result: {} as resultOnTryout,
        },
    }),

    getters: {
        // automatically infers the return type as a number
        getCurrentSoal(state): quiz {
            return useRouter().currentRoute.value.params.nomorSoal
                ? state.quizList[useRouter().currentRoute.value.params.nomorSoal - 1]
                : {}
        },

        materiName(): string | string[] {
            return useRouter().currentRoute.value.params.materiName ?? ''
        },

        countAnswered(state): number {
            return state.quizList.filter(quiz => typeof quiz.selectedAnswer == 'number').length
        },

        compFinalResult(state): number {
            return this.compSoalBenar / state.quizList.length * 100
        },

        compSoalBenar(state): number {
            return state.quizList.filter(quiz => quiz.jawaban === quiz.selectedAnswer).length
        },

        compSoalSalah(state): number {
            return state.quizList.filter(quiz => quiz.jawaban !== quiz.selectedAnswer).length
        },

        compSoalTidakDijawab(state): number {
            return state.quizList.filter(quiz => quiz.selectedAnswer === false).length
        },

    }
});