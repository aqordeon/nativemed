<template>
	<section class="w-screen">
		<div class="bg-indigo-500 flex gap-x-2">
			{{ authenticated }}
			<NuxtLink to="/">Index</NuxtLink>
			<NuxtLink v-if="!authenticated" to="/login">Login</NuxtLink>
			<NuxtLink v-else @click="logout">Logout</NuxtLink>
		</div>
	</section>
</template>

<script setup>
import { storeToRefs } from "pinia" // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth" // import the auth store we just created

const router = useRouter()

const { logUserOut } = useAuthStore() // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const logout = () => {
	logUserOut()
	router.push("/login")
}
</script>

<style lang="scss"></style>
