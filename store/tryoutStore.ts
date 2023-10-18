import { defineStore } from 'pinia'

export const useTryoutStore = defineStore('auth', {
    state: () => ({
        quizList: [],
    }),

    getters: {
        // automatically infers the return type as a number
        currentSoal(state) {
            return useRouter().currentRoute.value.params.nomorSoal ? state.quizList.filter((item: any) => item.id == useRouter().currentRoute.value.params.nomorSoal)[0] : {}
        },

        materiName(){
            return useRouter().currentRoute.value.params.materiName ?? ''
        },

        countAnswered(state){
            return state.quizList.filter(item => item.selectedAnswer).length ?? 0
        }
        
    }
});