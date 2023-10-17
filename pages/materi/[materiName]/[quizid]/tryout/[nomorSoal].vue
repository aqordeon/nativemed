<template>
    <div class="h-full relative bg-native-50 py-4 rounded-md col-span-7">
        <div class="absolute px-6 h-[95%] overflow-y-auto w-full">
            <p class="text-stone-900 text-sm font-normal mb-6">
                {{ currentSoal[0].question }}
            </p>
            <!-- "@imgs/soal.png" -->
            <img v-if="currentSoal[0].image" :src="currentSoal[0].image" alt="" class="max-h-56 mb-8 aspect-auto">
            <UtilsOptionsAnswer />
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: "on-tryout",
})
import { storeToRefs } from "pinia"
import { useTryoutStore } from '~/store/tryoutStore'
const { soalName, quizList } = storeToRefs(useTryoutStore())

const currentSoal = computed(() => {
    return quizList.value.filter(item => item.id == useRouter().currentRoute.value.params.nomorSoal)
})

</script>