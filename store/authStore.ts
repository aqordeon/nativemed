import { defineStore } from 'pinia'
// const client = 

interface UserPayloadInterface {
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
    }),

    actions: {
        async authenticateUser({ email, password }: UserPayloadInterface) {
            // console.log("aaaaaaaaaaaaa")
            // useFetch from nuxt 3
            this.loading = true;
            const { data, error } = await useSupabaseClient().auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (data) {
                // console.log(data)
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = JSON.stringify(data?.session) // set token to cookie
                this.authenticated = true // set authenticated  state value to true
            }
        },

        logUserOut() {
            const token = useCookie('token')
            this.authenticated = false // Set state value to false
            token.value = null // Set token value in Cookie to null
        },
    },
});