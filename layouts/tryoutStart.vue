<template>
	<Title>Native Med</Title>
	<div class="h-screen text-native-600 px-4">
		<!-- <CommonsDebugComp v-if="isDebug" /> -->
		<!-- <LayoutsNavbarTryout class="fixed" /> -->
		<main class="h-screen">
			<slot />
		</main>
	</div>
</template>

<script setup>
const isDebug = useRoute().query.debug === "1"

</script>
