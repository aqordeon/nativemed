<template>
	<section class="bg-white w-screen flex justify-between items-center py-3 px-4 lg:px-6">
		<div class="flex items-center cursor-pointer">
			<img src="@/assets/images/Native.png" alt="" class="w-10 lg:w-14">
			<span class="lg:text-xl xl:text-2xl font-bold uppercase text-[#5271a8]">Native Satria Nusantara</span>
		</div>

		<!-- Navbar: Register/Sign in -->
		<div class="hidden md:flex gap-x-3 lg:gap-x-6">
			<NuxtLink to="#" class="group relative flex px-2 items-center cursor-pointer">
				<p>Register</p>
				<div :class="[route.path.includes('/register') ? 'bg-native-600 w-full left-0' : 'bg-native-300 w-0 left-1/2 group-hover:w-1/2 group-hover:left-[25%]']"
					class="absolute -bottom-0 h-0.5 bg-native-600 rounded-full transition-all duration-200 ease-in-out" />
			</NuxtLink>
			<NuxtLink to="/login" class="px-3 py-2.5 rounded-md bg-native-600 text-white cursor-pointer hover:bg-native-500">Sign in</NuxtLink>
		</div>
		
        
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

const isHamburgerOpen = ref(false)

const navbarList = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Tentang Kami',
		url: '/tentangkami'
	},
	{
		name: 'FAQ',
		url: '/faq'
	},
]

</script>