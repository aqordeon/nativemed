import { defineStore } from 'pinia'
import { differenceInSeconds } from 'date-fns'

export const useTryoutTimeStore = defineStore('tryoutTime', {
    state: () => ({
        tryoutStartTime: new Date(),
        hours: 0,
        minutes: 0,
        seconds: 0,
        timerExpired: false
    }),

    actions: {
        async onClickMulaiMengerjakan(timeInSeconds: number) {
            if (useCookie('tryoutStartTime').value) {  // If cookie exist
                this.tryoutStartTime = new Date(useCookie('tryoutStartTime').value)
            } else {
                this.tryoutStartTime = new Date()  // If cookie not exist create new Date
                useCookie('tryoutStartTime').value = JSON.stringify(this.tryoutStartTime)  // save new date to Cookie
            }

            const countdownInterval = setInterval(() => {
                const currentTime = new Date() 
                const elapsedTime = differenceInSeconds(currentTime, this.tryoutStartTime)
                const timeLeft = Math.max(timeInSeconds - elapsedTime, 0)
                console.log(timeLeft)
        
                if (timeLeft === 0) { // If countdown is 0
                    clearInterval(countdownInterval)  // clear the interval
                    this.hours = 0
                    this.minutes = 0
                    this.seconds = 0
                    useCookie('tryoutStartTime').value = ''
                    this.timerExpired = true  // set that the timer is expired
                } else {  // if countdown still running
                    this.hours = Math.floor(timeLeft / 3600)  // get hours
                    this.minutes = Math.floor((timeLeft % 3600) / 60)  // get minutes
                    this.seconds = timeLeft % 60  // get seconds
                }
            }, 1000)
        },
    },

    // getters: {
    //     getTryoutStartTime(state) {
    //         return useCookie('tryoutStartTime').value ? JSON.parse(useCookie('tryoutStartTime').value) : new Date()
    //     },
    // }
});
