<template>
	<section class="bg-white w-screen flex justify-between items-center py-3 px-4 lg:px-12">
		<div class="flex items-center cursor-pointer">
			<img src="@/assets/images/Native.png" alt="" class="w-10 lg:w-14">
			<span class="lg:text-xl xl:text-2xl font-bold uppercase text-[#5271a8]">Native Satria Nusantara</span>
		</div>

		<!-- Navbar: Register/Sign in -->
		<!-- <div class="hidden md:flex gap-x-3 lg:gap-x-6">
			<NuxtLink to="#" class="group relative flex px-2 items-center cursor-pointer">
				<p>Register</p>
				<div :class="[route.path.includes('/register') ? 'bg-native-600 w-full left-0' : 'bg-native-300 w-0 left-1/2 group-hover:w-1/2 group-hover:left-[25%]']"
					class="absolute -bottom-0 h-0.5 bg-native-600 rounded-full transition-all duration-200 ease-in-out" />
			</NuxtLink>
			<NuxtLink to="/login" class="px-3 py-2.5 rounded-md bg-native-600 text-white cursor-pointer hover:bg-native-500">Sign in</NuxtLink>
		</div> -->
		
		<div class="hidden md:flex gap-x-3 lg:gap-x-1.5">
			<span class="px-2.5 py-3">🔔</span>
			<span class="px-2.5 py-3">📃</span>
			<div class="px-2.5 py-3 flex items-center">
				👤
				<Popover class="relative">
					<PopoverButton>Hello, <span class="font-bold">Jihan</span></PopoverButton>

					<PopoverPanel class="absolute z-10 top-8 left-0">
						<div class="bg-white rounded-md shadow overflow-hidden">
							<div @click="userLogout" class="flex px-6 hover:bg-native-200 py-2 cursor-pointer">Logout</div>
						</div>
					</PopoverPanel>
				</Popover>
			</div>
		</div>
        
	</section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia" // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/authStore" // import the auth store we just created
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const router = useRouter()
const route = useRoute()

const { userLogout } = useAuthStore() // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

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