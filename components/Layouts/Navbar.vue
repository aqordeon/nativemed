<template>
	<section class="w-screen flex bg-native-50 justify-between items-center py-3 px-6">
			<div class="flex items-center cursor-pointer">
				<img src="@/assets/images/Native.png" alt="" class="w-14">
				<span class="text-2xl font-bold uppercase text-native-600">Native Satria Nusantara</span>
			</div>
			<div class="grid grid-cols-3 justify-between gap-x-11 place-content-center">
				<div class="relative text-center font-medium">
					Home
					<div class="absolute w-full h-1 bg-native-600 rounded-full" />
				</div>
				<div class="px-4">About us</div>
				<div class="text-center">FAQ</div>
			</div>
			<div class="flex gap-x-6">
				<div class="flex px-2 items-center cursor-pointer">Register</div>
				<div class="px-3 py-2.5 rounded-md bg-native-600 text-white cursor-pointer hover:bg-native-500">Sign in</div>
			</div>
		<!-- <div class="bg-indigo-500 flex gap-x-2">
			<NuxtLink to="/">Index</NuxtLink>
			<NuxtLink v-if="!authenticated" to="/login">Login</NuxtLink>
			<NuxtLink v-else @click="logout">Logout</NuxtLink>
		</div> -->
	</section>
</template>

<script setup>
import { storeToRefs } from "pinia" // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/authStore" // import the auth store we just created

const router = useRouter()

const { logUserOut } = useAuthStore() // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const logout = () => {
	logUserOut()
	router.push("/login")
}
</script>

<style lang="scss"></style>