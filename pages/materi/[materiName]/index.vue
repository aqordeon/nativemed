<template>
    <div class="w-full h-full bg-blue-400 flex col">
        The materi name is: {{$route.params.materiName}}
        The quiz list is: 
        <div v-for="quiz in 4" :key="quiz.id">
            <NuxtLink :to="`${$route.params.materiName}/quiz${quiz}`"> quiz{{ quiz }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>