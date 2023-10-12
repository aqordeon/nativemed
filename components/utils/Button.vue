<template>
    <div class="flex w-fit h-fit items-center px-4 py-1.5 text-sm gap-x-1 rounded-md" :class="[getTheme(theme), getSize(size)]">
        <div class="h-4 leading-none">
            <slot name="iconLeft" />
        </div>
        <span class="whitespace-nowrap font-medium leading-5 text-basic-50">
            <slot>{{ label }}</slot>
        </span>
        <div class="h-4 leading-none">
            <slot name="iconRight" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label?: string
    icon?: {
        name?: string | string[]
        position?: string
    }
    theme?: string
    size?: string
}>()

const getSize = (size: string) => {
    // switch (size){
    //     // case 'lg':
    //     //     return 'w-fit px-7 py-5 text-sm';
    //     // case 'sm':
    //     //     return 'w-fit h-fit px-4 py-2.5 text-sm';
    //     default:
    //         return 'w-fit px-7 py-5 text-sm';

    // }
}

const getTheme = (themeName: string) => {
    switch (themeName){
        case 'primary':
            return 'bg-native-600 hover:bg-native-500 text-white cursor-pointer rounded-md ';
        case 'secondary':
            return 'bg-white hover:bg-gray-100 border border-native-600 text-native-600 cursor-pointer rounded-md ';
        case 'amber':
            return 'bg-amber-500 hover:bg-amber-400 text-white cursor-pointer rounded-md ';
        default:
            return 'bg-native-600 hover:bg-native-500 text-white cursor-pointer rounded-md ';
    }
}

</script>