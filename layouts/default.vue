<template>
	<Title>Native Med</Title>
	<div class="text-native-600 overflow-hidden">
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavbar class="fixed top-0 left-0 z-20 md:relative" />
		<main class="mt-16 md:mt-0 isolate">
			<slot />
		</main>
		<LayoutsFooterBar />
	</div>
</template>

<script setup>
const isDebug = useRoute().query.debug === "1"

</script>
