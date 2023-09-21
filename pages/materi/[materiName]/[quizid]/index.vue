<template>
    <div class="w-full h-full bg-lime-400">
        This Quiz id: 
        {{ $route.params.quizid }}
        
        <NuxtLink :to="`${$route.params.quizid}/tryout`">Click to start Tryout</NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

const quizId = ref('')

onMounted(() => {
    // Access the dynamic parameter "id" from the route
    quizId.value = useRouter().currentRoute.value.params.quizid
})
</script>

<style scoped></style>