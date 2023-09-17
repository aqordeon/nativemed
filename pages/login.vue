<template>
    <div>
        <div class="title">
            <h2>Login</h2>
        </div>
        <div class="container form">
            <label for="uname"><b>Username</b></label>
            <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw" required />

            <button @click.prevent="login" class="button">Login</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAuthStore } from '~/store/authStore'
const { authenticateUser } = useAuthStore()

const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const user = ref({
    username: 'kminchelle',
    password: '0lelplR',
});
const router = useRouter()

const login = async () => {
    await authenticateUser(user.value) // call authenticateUser and pass the user object
    // Redirect to if user already log in
    if (authenticated) {
        router.push('/')
    }
}
</script>

<style scoped></style>