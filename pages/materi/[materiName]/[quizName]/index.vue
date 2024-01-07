<template>
    <div>
    </div>
</template>

<script setup lang="ts">
// console.log(useRouter().currentRoute.value.params.quizName)
useRouter().push(`${useRouter().currentRoute.value.params.quizName}/tryout/petunjukpengerjaan`)
</script>