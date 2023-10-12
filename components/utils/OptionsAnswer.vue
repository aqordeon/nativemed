<template>
    <ol type="A" class="flex flex-col gap-y-2.5">
        <li v-for="(pilihan, index) in pilihanGanda" :key="index"
            class="group cursor-pointer flex rounded-md hover:text-white py-2.5 px-5 bg-white hover:bg-native-600 gap-x-6">
            <div class="w-8">
                <span class="h-8 aspect-square flex items-center justify-center rounded-full border-2 border-native-600 group-hover:border-white leading-none">a</span>
            </div>
            <p>{{ pilihan }}</p>
        </li>
    </ol>
</template>

<script setup lang="ts">

const pilihanGanda = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos.',
]
</script>

<style scoped></style>