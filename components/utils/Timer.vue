<template>
    <div class="w-44 h-12 px-5 py-2.5 bg-white rounded-lg shadow flex-col justify-center items-center gap-2.5 inline-flex">
        <div class="tabular-nums text-stone-900 text-xs font-bold leading-none justify-center items-center gap-2.5 inline-flex">
            <div
                class="w-7 h-7 px-4 py-4 bg-violet-200 rounded-md flex-col justify-center items-center inline-flex">
                <div class="">{{ String(timeCountdown?.hours ? timeCountdown.hours : 0).padStart(2, '0') }}</div>
            </div>
            <div class="">:</div>
            <div
                class="w-7 h-7 px-4 py-4 bg-violet-200 rounded-md flex-col justify-center items-center inline-flex">
                <div class="">{{ String(timeCountdown?.minutes ? timeCountdown.minutes : 0).padStart(2, '0') }}</div>
            </div>
            <div class="">:</div>
            <div
                class="w-7 h-7 px-4 py-4 bg-violet-200 rounded-md flex-col justify-center items-center inline-flex">
                <div class="">{{ String(timeCountdown?.seconds ? timeCountdown.seconds : 0).padStart(2, '0') }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTryoutTimeStore } from '~/store/onTryout'
import { useTryoutStore } from '~/store/tryoutStore'

const timeCountdown = ref()

const onTryout = await useSupabaseClient()
    .from('on_tryout')
    .select(`*`)
    .eq('id_materi', useTryoutStore().currentTryout.materi.id)
    .eq('id_quiz', useTryoutStore().currentTryout.quiz.id)

const interval = setInterval(() => {
    timeCountdown.value = useTimeCountdown(onTryout.data?.[onTryout.data.length-1].time_start, { additionalSeconds: onTryout.data?.[onTryout.data.length-1].duration })
}, 1000)


</script>