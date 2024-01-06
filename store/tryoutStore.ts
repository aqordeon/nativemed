import { defineStore } from 'pinia'

export const useTryoutStore = defineStore('tryoutStore', {
    state: () => ({
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
            return state.quizList.filter(item => item.selectedAnswer !== false).length ?? 0
        },
        
        compFinalResult(state) {
            return this.compSoalBenar/state.quizList.length * 100
        },
        
        compSoalBenar(state) {
            return state.quizList.filter(item => item.correctAnswer === item.selectedAnswer).length
        },
        
        compSoalSalah(state) {
            return state.quizList.filter(item => item.correctAnswer !== item.selectedAnswer).length
        },
        
        compSoalTidakDijawab(state) {
            return state.quizList.filter(item => item.selectedAnswer === false).length
        },
        
    }
});