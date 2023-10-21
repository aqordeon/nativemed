<template>
    <div class="w-44 h-12 px-5 py-2.5 bg-white rounded-lg shadow flex-col justify-center items-center gap-2.5 inline-flex">
        <div class="tabular-nums text-stone-900 text-xs font-bold leading-none justify-center items-center gap-2.5 inline-flex">
            <div
                class="w-7 h-7 px-4 py-4 bg-violet-200 rounded-md flex-col justify-center items-center inline-flex">
                <div class="">{{ String(hours).padStart(2, '0') }}</div>
            </div>
            <div class="">:</div>
            <div
                class="w-7 h-7 px-4 py-4 bg-violet-200 rounded-md flex-col justify-center items-center inline-flex">
                <div class="">{{ String(minutes).padStart(2, '0') }}</div>
            </div>
            <div class="">:</div>
            <div
                class="w-7 h-7 px-4 py-4 bg-violet-200 rounded-md flex-col justify-center items-center inline-flex">
                <div class="">{{ String(seconds).padStart(2, '0') }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTryoutTimeStore } from '~/store/onTryout'
import { storeToRefs } from 'pinia'
const { hours, minutes, seconds, timerExpired } = storeToRefs(useTryoutTimeStore())

</script>