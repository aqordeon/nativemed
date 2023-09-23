<template>
	<Title>Native Med</Title>
	<div class="text-native-600">
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavbar />
		<main class="">
			<slot />
		</main>
		<LayoutsFooterBar />
	</div>
</template>

<script setup>
const isDebug = useRoute().query.debug === "1"

</script>
