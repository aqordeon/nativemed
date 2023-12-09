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
                <NuxtLink to="register" class="font-medium">Daftar</NuxtLink>
            </div>

            <div class="px-9">
                <div class="space-y-4">
                    <h1 class="text-native-500 font-bold text-5xl">Login</h1>
                    <p class="font-light text-gray-500">Selamat datang kembali! 👋</p>
                </div>
                
                <!-- Form -->
                <form class="mt-10">
                    <label for="" class="leading-10 text-gray-600">Email</label>
                    <FieldInput v-model="user.email" placeholder="Masukkan e-mail anda" />
                    <label for="" class="leading-10 mt-5 inline-p455w0rd text-gray-600">Kata Sandi</label>
                    <FieldInput v-model="user.password"
                        type="password"
                        placeholder="Masukkan kata sandi anda" />

                    <UtilsButton @click="submitLogin" label="Masuk" class="mt-10">
                    </UtilsButton>
                    <div v-if="supabaseResponse?.error" class="mt-2 text-red-500">{{ supabaseResponse?.error.message }}</div>
                    <!-- <pre>
                        <div>{{ supabaseResponse }}</div>
                    </pre> -->
                </form>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia'
// import { useAuthStore } from '~/store/authStore'

// const { authenticateUser } = useAuthStore()
// const { authenticated, loading } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

definePageMeta({
    layout: false,
})

const user = ref({
    email: "aqordivika@gmail.com",
    password: "p455w0rd",
});
const router = useRouter()

// const submitLogin = async () => {
    // from first tutorial
//     await authenticateUser(user.value) // call authenticateUser and pass the user object
//     // Redirect to if user already log in
//     if (authenticated) {
//         router.push('/')
//     }
// }

const supabaseResponse = ref()

const submitLogin = async () => {
    supabaseResponse.value = await useSupabaseClient().auth.signInWithPassword({
        email: user.value.email,
        password: user.value.password,
    })
    console.log(supabaseResponse.value)

    if(supabaseResponse.value.data) useRouter().push('/materi')
}

</script>