<template>
	<div>
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavBar />
		<main class="">
			<slot />
		</main>
		<LayoutsFooterBar />
	</div>
</template>

<script setup>
const isDebug = useRoute().query.debug === "1"

</script>
