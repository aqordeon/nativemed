import { defineStore } from 'pinia'

interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useTryoutStore = defineStore('auth', {
    state: () => ({
        soalName: '',
        quizList: [],
    }),

});