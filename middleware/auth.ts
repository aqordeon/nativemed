import { storeToRefs } from 'pinia'
import { useAuthStore } from "~/store/authStore"

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('From', from)
    console.log('To', to)
    const { authenticated } = storeToRefs(useAuthStore()); // Make authenticated state reactive
    const token = useCookie('token'); // Get 'token' in Cookie

    if (token.value) {
        // If token exist, then state to true
        authenticated.value = true
    }

    // If already login and access /login, redirect to dashboard
    if (token.value && to?.name === 'login') {
        return navigateTo(from.fullPath)
    }

    // If not login yet, and access everything
    if (!token.value && to?.name !== 'login') {
        abortNavigation()
        return navigateTo('/login')
    }
});