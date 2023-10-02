<template>
	<Title>Native Med</Title>
	<div class="text-native-600 overflow-hidden">
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavbarTryout class="" />
		<main class="">
			<slot />
		</main>
	</div>
</template>

<script setup>
const isDebug = useRoute().query.debug === "1"

</script>
