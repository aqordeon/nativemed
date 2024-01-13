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

const timeCountdown = ref(true)


const interval = setInterval(async () => {
    // timeCountdown.value = useTimeCountdown(useTryoutStore().on_tryout.time_start, { additionalSeconds: useTryoutStore().on_tryout.duration })
    timeCountdown.value = useTimeCountdown(useTryoutStore().on_tryout.time_start, { additionalSeconds: 6600 })
    if(!timeCountdown.value){
        useTryoutStore().on_tryout.is_finish = true
        useRouter().push('hasilakhir')

        const { data, error } = await useSupabaseClient()
            .from('on_tryout')
            .update({
                is_finish: true,
                result: {
                    "score": useTryoutStore().compScore,
                    "jumlah_soal": useTryoutStore().quizList.length,
                    "jumlah_benar": useTryoutStore().compSoalBenar,
                    "jumlah_salah": useTryoutStore().compSoalSalah,
                    "jumlah_tidakdijawab": useTryoutStore().compSoalTidakDijawab,
                }
            })
            .eq('id', useTryoutStore().on_tryout.id)

        if(error) console.log('error', error)
    }
}, 1000)

</script>