<template>
    <div class="w-full h-full bg-native-50 pb-10">
        <TryoutHeaderTryout
            breadcrumbs="Materi Lorem Ipsum / Quiz Lorem Ipsum / Pengerjaan Soal"
            :title="`⬅️ Materi: ${useRouter().currentRoute.value.params.materiName}`"    
        />
        
        <div class="px-12 pt-5 pb-7 space-y-5">
            <div class="bg-white text-gray-600 px-7 py-12 flex flex-col justify-center items-center gap-y-10">
                <div class="font-bold text-3xl">Penilaian Soal</div>
                <div v-if="compScore >= 75" class="text-native-600 text-xl">Selamat Anda Lulus!✨</div>
                <div v-else class="text-red-500 text-xl">Sayangnya, kamu <span class="font-bold">belum lulus</span> di ujian ini, coba lagi yaa😔</div>
                <div class="aspect-square w-48 rounded-full bg-gray-100 flex items-center justify-center">
                    <div class="flex items-center flex-col gap-y-4">
                        <div class="text-5xl text-native-600 font-bold">{{ onTryout?.data[0]?.result?.score ?? compScore }}</div>
                        <div class="text-2xl leading-none">Nilai Anda</div>
                    </div>

                </div>
                <div>
                    <div class="text-white grid grid-cols-3 w-fit gap-x-5">
                        <div class="space-y-2.5">
                            <div class="bg-amber-500 w-fit px-5 py-4 rounded-md text-sm">Soal yang tidak dijawab</div>
                            <div class="text-amber-500 flex items-center justify-center font-bold text-3xl py-7 border border-amber-500 rounded-md">{{ onTryout?.data[0]?.result?.jumlah_tidakdijawab ?? compSoalTidakDijawab }}</div>
                        </div>
                        <div class="space-y-2.5">
                            <div class="bg-rose-500 w-full text-center px-5 py-4 rounded-md text-sm">Soal yang salah</div>
                            <div class="text-rose-500 flex items-center justify-center font-bold text-3xl py-7 border border-rose-500 rounded-md">{{ onTryout?.data[0]?.result?.jumlah_salah ?? compSoalSalah }}</div>
                        </div>
                        <div class="space-y-2.5">
                            <div class="bg-lime-500 w-full text-center px-5 py-4 rounded-md text-sm">Soal yang benar</div>
                            <div class="text-lime-500 flex items-center justify-center font-bold text-3xl py-7 border border-lime-500 rounded-md">{{ onTryout?.data[0]?.result?.jumlah_benar ?? compSoalBenar }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto w-fit">
            <UtilsButton label="📃Pembahasan" class=""></UtilsButton>
        </div>
        <!-- <pre>{{ onTryout.data }}</pre> -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
    // middleware: 'auth',
})

import { useTryoutStore } from '~/store/tryoutStore'

const onTryout = ref()

const { compScore, compSoalTidakDijawab, compSoalSalah, compSoalBenar } = useTryoutStore()

if(!compScore){
    onTryout.value = await useSupabaseClient()
        .from('on_tryout')
        .select(`*, list_quiz!inner (id, slug),  list_materi!inner (id, slug)`)
        .eq('list_materi.slug', useRouter().currentRoute.value.params.materiName)
        .eq('list_quiz.slug', useRouter().currentRoute.value.params.quizName)
        .order('id', { ascending: false })
        .limit(1)
}

</script>