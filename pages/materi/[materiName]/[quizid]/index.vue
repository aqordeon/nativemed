<template>
    <div>
    </div>
</template>

<script setup lang="ts">
// console.log(useRouter().currentRoute.value.params.quizid)
useRouter().push(`${useRouter().currentRoute.value.params.quizid}/tryout/petunjukpengerjaan`)
</script>