<template>
	<Title>Native Med</Title>
	<div class="text-native-600 overflow-hidden">
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavbar class="relative z-10" />
		<main class="">
			<slot />
		</main>
		<LayoutsFooterBar />
	</div>
</template>

<script setup>
const isDebug = useRoute().query.debug === "1"

</script>
