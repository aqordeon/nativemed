<template>
    <div class="grid grid-cols-2 h-screen text-native-600">
        <div class="bg-native-500 flex flex-col items-center justify-center">
            <img src="@imgs/Native.png" alt="Native logo" class="w-24 aspect-square mb-20">
            <div class="mb-10 w-4/6">
                <img src="@imgs/login.png" class="" alt="">
            </div>
            <p class="text-white text-xl">Native Satria Nusantara</p>
        </div>

        <!-- Right Side: Login -->
        <div class="flex items-center">
            <div class="absolute top-5 right-9 flex gap-x-2">
                <p class="text-gray-400">Belum punya akun?</p>
                <NuxtLink to="#" class="font-medium">Daftar</NuxtLink>
            </div>

            <div class="px-9">
                <div class="space-y-4">
                    <h1 class="text-native-500 font-bold text-5xl">Login</h1>
                    <p class="font-light text-gray-500">Selamat datang kembali! 👋</p>
                </div>
                
                <form action="" class="mt-10">
                    <label for="" class="leading-10 text-gray-600">Email</label>
                    <input class="w-full px-5 py-3 placeholder:text-gray-300 text-base ring-1 ring-native-300 focus:ring focus:ring-native-500 focus:outline-none rounded-md" placeholder="Masukkan e-mail anda">
                    <label for="" class="leading-10 mt-5 inline-block text-gray-600">Kata Sandi</label>
                    <input class="w-full px-5 py-3 placeholder:text-gray-300 text-base ring-1 ring-native-300 focus:ring focus:ring-native-500 focus:outline-none rounded-md" placeholder="Masukkan kata sandi anda">

                    <button class="bg-native-500 mt-10 text-white rounded-md py-2.5 px-5">
                        Masuk
                    </button>
                </form>
            </div>

        </div>


        <!-- <div class="title">
            <h2>Login</h2>
        </div>
        <div class="container form">
            <label for="uname"><b>Username</b></label>
            <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw" required />

            <button @click.prevent="login" class="button">Login</button>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAuthStore } from '~/store/authStore'
const { authenticateUser } = useAuthStore()

const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

definePageMeta({
    layout: false,
})

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