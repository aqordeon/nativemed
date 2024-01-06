<template>
    <div class="isolate relative w-full min-h-screen px-6 py-10 bg-white">
        <div class="absolute -z-10 inset-0 h-[50vh] bg-native-200"></div>
        <p class="font-bold text-2xl mb-10"> Quiz - Materi 1</p>
        <div class="w-full h-full bg-native-50 rounded-md py-8 px-8 shadow-md flex gap-x-5 gap-y-4 flex-wrap justify-center">
            <!-- Section: Looping box -->
            <UtilsQuizbox v-for="(quiz) in list_quiz.data" :key="quiz.id" :quiz="quiz"
                :countSoal="list_stats.data?.find((stat) => stat.list_quiz?.id == quiz.id)?.count_soal ?? 0"
                :durationSoal="(list_stats.data?.find((stat) => stat.list_quiz?.id == quiz.id))?.duration ?? 0"
            />
        </div>
        <!-- {{ error }} === {{ count }} -->
        <!-- <pre>{{ list_stats.data }}</pre> -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
})

// Fetch Stats
const list_stats = await useSupabaseClient()
    .from('stats')
    .select('id, count_soal, duration, list_quiz!inner (id, label),  list_materi!inner ()', { count: 'exact' })
    .eq('list_materi.slug', useRouter().currentRoute.value.params.materiName)

// Fetch enum Quiz
const list_quiz = await useSupabaseClient()
    .from('list_quiz')
    .select('*')


</script>

<style scoped>

</style>