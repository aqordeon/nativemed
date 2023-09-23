<template>
	<section class="w-screen flex bg-native-50 justify-between items-center py-3 px-6">
			<div class="flex items-center cursor-pointer">
				<img src="@/assets/images/Native.png" alt="" class="w-14">
				<span class="text-2xl font-bold uppercase text-native-600">Native Satria Nusantara</span>
			</div>
			<div class="grid grid-cols-3 justify-between gap-x-11 place-content-center">
				<NuxtLink :to="navbar.url" v-for="(navbar, index) in navbarList" :key="index" class="group relative text-center font-medium">
					<p class="px-4">{{ navbar.name }}</p>
					{{  }}
					<div :class="[route.path.includes(navbar.url.slice(0, -1).toLowerCase()) ? 'w-full left-0' : 'w-0 left-1/2 group-hover:w-1/2 group-hover:left-[25%]']" class="absolute -bottom-2 h-0.5 bg-native-600 rounded-full transition-all duration-200 ease-in-out" />
				</NuxtLink>
			</div>
			<div class="flex gap-x-6">
				<NuxtLink to="/register" class="group relative flex px-2 items-center cursor-pointer">
					<p>Register</p>
					<div :class="[route.path.includes('/register') ? 'w-full left-0' : 'w-0 left-1/2 group-hover:w-1/2 group-hover:left-[25%]']" class="absolute -bottom-0 h-0.5 bg-native-600 rounded-full transition-all duration-200 ease-in-out" />
				</NuxtLink>
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
const route = useRoute()

const { logUserOut } = useAuthStore() // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const logout = () => {
	logUserOut()
	router.push("/login")
}

const navbarList = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'About Us',
		url: '/aboutus'
	},
	{
		name: 'FAQ',
		url: '/faq'
	},
]

</script>

<style lang="scss"></style>