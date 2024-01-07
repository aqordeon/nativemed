import { defineStore } from 'pinia'

export const useTryoutStore = defineStore('tryoutStore', {
    state: () => ({
        currentTryout: {
            materi: null,
            quiz: null
        },
        quizList: [],
        currentSoal: null
    }),

    getters: {
        // automatically infers the return type as a number
        getCurrentSoal(state): {} {
            return useRouter().currentRoute.value.params.nomorSoal
                ? state.quizList[useRouter().currentRoute.value.params.nomorSoal-1]
                : {}
        },

        materiName(){
            return useRouter().currentRoute.value.params.materiName ?? ''
        },

        countAnswered(state){
            return state.quizList.filter(quiz => typeof quiz.selectedAnswer == 'number').length
        },
        
        compFinalResult(state) {
            return this.compSoalBenar/state.quizList.length * 100
        },
        
        compSoalBenar(state) {
            return state.quizList.filter(quiz => quiz.correctAnswer === quiz.selectedAnswer).length
        },
        
        compSoalSalah(state) {
            return state.quizList.filter(quiz => quiz.correctAnswer !== quiz.selectedAnswer).length
        },
        
        compSoalTidakDijawab(state) {
            return state.quizList.filter(quiz => quiz.selectedAnswer === false).length
        },
        
    }
});