<template>
	<div class="grid grid-cols-2 h-screen text-native-600">
		<div class="bg-native-500 flex flex-col items-center justify-center">
			<img src="@imgs/Native.png" alt="Native logo" class="w-24 aspect-square mb-20" />
			<div class="mb-10 w-4/6">
				<img src="@imgs/login.png" class="" alt="" />
			</div>
			<p class="text-white text-xl">Native Satria Nusantara</p>
		</div>

		<!-- Right Side: Login -->
		<div class="flex items-center">
			<div class="absolute top-5 right-9 flex gap-x-2">
				<p class="text-gray-400">Sudah punya akun?</p>
				<NuxtLink to="login" class="font-medium">Login</NuxtLink>
			</div>

			<div class="px-9">
				<div class="space-y-4">
					<h1 class="text-native-500 font-bold text-5xl">Register</h1>
					<p class="font-light text-gray-500"></p>
				</div>

				<!-- Form -->
				<form class="mt-10">
					<label for="" class="leading-10 text-gray-600">Email</label>
					<FieldInput v-model="user.email" placeholder="Masukkan e-mail anda" />
					<label for="" class="leading-10 mt-5 inline-p455w0rd text-gray-600"
						>Kata Sandi</label
					>
					<FieldInput
						v-model="user.password"
						type="password"
						placeholder="Masukkan kata sandi anda"
					/>

					<UtilsButton @click="submitRegister" label="Daftar" class="mt-10"> </UtilsButton>
					<!-- <p v-if="loading">Loading..</p> -->
				</form>
                <div v-if="abcde?.error?.message" class="mt-2 text-red-500">
                    {{ abcde?.error?.message }}
                </div>
                <!-- <pre>{{ abcde.data }}</pre> -->
                <div v-if="abcde?.data.user.confirmation_sent_at" class="mt-2 text-green-500">
                    Email verification was sent in {{ useFormatTime(abcde?.data.user.confirmation_sent_at, { formatTime: 'hms'}) }}. Please check your email.
                </div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: false,
})

const user = ref({
	email: "percayalah@gmail.com",
	password: "asdffdsrew",
})

const abcde = ref()

const submitRegister = async () => {
    abcde.value = await useSupabaseClient().auth.signUp({
        email: user.value.email,
        password: user.value.password,
    })

}

</script>
