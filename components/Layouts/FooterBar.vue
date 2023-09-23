<template>
    <section class="bg-native-100 pl-12 py-9 flex gap-x-12 xl:gap-x-20">
        <div class="flex items-center">
            <img src="@/assets/images/native.png" alt="" class="w-32 aspect-square">
        </div>
        <div class="flex gap-x-24 xl:gap-x-52">
            <div class="flex flex-col gap-y-5 xl:gap-y-9">
                <div class="space-y-2.5">
                    <p class="font-bold">info@nativemed.id</p>
                    <p class="font-light flex flex-col">
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                        <span>velit nisi quod itaque praesentium soluta</span>
                        <span>consectetur expedita eveniet sint!</span>
                        <span>12345</span>
                    </p>
                </div>
                <p class="text-sm">&copy; 2020 <span class="font-semibold">Native Satria Indonesia</span> All Right Reserved.</p>
            </div>
            <div>
                <p class="font-bold">Perusahaan</p>
                <p class="font-light flex flex-col">
                    <span>Tentang Kami</span>
                    <span>FAQ</span>
                    <span class="whitespace-nowrap">Masukkan untuk produk</span>
                </p>
            </div>
            <div>
                <p class="font-bold">Temukan Kami</p>
                <div class="flex gap-x-2.5">
                    <NuxtLink to="#"><img src="@/assets/images/socmed/instagram.png" alt="" class="w-5 aspect-square"></NuxtLink>
                    <NuxtLink to="#"><img src="@/assets/images/socmed/twitter.png" alt="" class="w-5 aspect-square"></NuxtLink>
                    <NuxtLink to="#"><img src="@/assets/images/socmed/whatsapp.png" alt="" class="w-5 aspect-square"></NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>