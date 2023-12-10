<template>
    <div class="isolate relative w-full min-h-screen px-6 py-10 bg-white">
        <div class="absolute -z-10 inset-0 h-[50vh] bg-native-200"></div>
        <p class="font-bold text-2xl mb-10"> Quiz - Materi 1</p>
        <div class="w-full h-full bg-native-50 rounded-md py-8 px-8 shadow-md flex gap-x-5 gap-y-4 flex-wrap justify-center">
            <UtilsQuizbox v-for="(quiz) in list_quiz" :key="quiz.id" :quiz="quiz">
                <template #soal>
                    {{ (data_stats?.find((stat) => stat.list_quiz?.id == quiz.id))?.count_soal ?? 0 }}
                </template>
                <template #duration>
                    {{ (data_stats?.find((stat) => stat.list_quiz?.id == quiz.id))?.duration ?? 0 }}
                </template>
            </UtilsQuizbox>
        </div>
        {{ error }} === {{ count }}
        <pre>{{ data_stats }}</pre>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
})

// Fetch Stats
const { data: data_stats, error, count } = await useSupabaseClient()
    .from('stats')
    .select('id, count_soal, duration, list_quiz!inner (id, label),  list_materi!inner ()', { count: 'exact' })
    .eq('list_materi.slug', useRouter().currentRoute.value.params.materiName)

// Fetch enum Quiz
const { data: list_quiz, error: list_quiz_error } = await useSupabaseClient()
    .from('list_quiz')
    .select('*')

</script>

<style scoped>

</style>