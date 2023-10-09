<template>
    <div class="w-full h-full bg-native-50 px-12 py-8">
        <TryoutHeaderTryout breadcrumbs="Yuk Mulai latihan try out sekarang!" title="&nbsp">
            
        </TryoutHeaderTryout>
        <div class="w-full h-full bg-white rounded-md py-8 px-8 shadow-md">


            <div class="relative">
                <!-- 2 Box: Dompet & Riwayat Quiz -->
                <div class="absolute grid grid-cols-2 w-[70%] mx-auto gap-x-3 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                    <!-- Box: Dompet -->
                    <div class="grid grid-cols-2 px-6 py-4 bg-white shadow rounded-md">
                        <div class="space-y-3 text-gray-500 flex flex-col justify-between ">
                            <span class="font-bold text-sm">💵 Dompet</span>
                            <div class="">Rp. <span class="font-bold">300.000</span></div>
                        </div>
                        <div class=" flex items-center justify-end">
                            <UtilsButton size="sm" theme="primary">
                                Top Up Dompet
                            </UtilsButton>
                        </div>
                    </div>

                    <!-- Box: Riwayat Quiz -->
                    <div class="grid grid-cols-2 px-6 py-4 bg-white shadow rounded-md">
                        <div class="">
                            <div class="space-y-6 text-gray-500">
                                <span class="font-bold text-sm">💵 Riwayat Quiz</span>
                                <div><span class="font-bold mr-2">10 Quiz</span>telah</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end">
                            <UtilsButton size="sm" theme="amber">
                                Lihat Riwayat
                            </UtilsButton>
                        </div>
                    </div>
                </div>

                <div class="pt-20 grid grid-cols-5 gap-x-5 gap-y-4 flex-wrap">
                    <div v-for="materiId in 18" :key="materiId" class="flex flex-col justify-center gap-y-2.5">
                        <div class="bg-native-300 aspect-[5/3] rounded-md"></div>
                        <p class="text-gray-700 font-bold text-sm text-center leading-none">Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
})

// definePageMeta({
//     middleware: 'auth'
// })
</script>

<style scoped>

</style>