import { defineStore } from 'pinia'

export const useTryoutStore = defineStore('auth', {
    state: () => ({
        quizList: [],
    }),

    getters: {
        // automatically infers the return type as a number
        currentSoal(state) {
            return useRouter().currentRoute.value.params.nomorSoal
                ? state.quizList.filter((item: any) => item.id == useRouter().currentRoute.value.params.nomorSoal)[0]
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