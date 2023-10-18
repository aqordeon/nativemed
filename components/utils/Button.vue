<template>
    <div class="flex w-fit h-fit items-center text-sm gap-x-1 rounded-md cursor-pointer"
        :class="[getTheme(theme), getSize(size)]">
        <!-- Icon Left -->
        <div class="h-4 leading-none">
            <slot name="iconLeft" />
        </div>

        <!-- Main content -->
        <span class="whitespace-nowrap font-medium leading-5">
            <slot>{{ label }}</slot>
        </span>
        
        <!-- Icon Right -->
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

const getSize = (size?: string) => {
    switch (size){
        // case 'lg':
        //     return 'w-fit px-7 py-5 text-sm';
        // case 'sm':
        //     return 'w-fit h-fit px-4 py-2.5 text-sm';
        default: 
            return 'w-fit px-4 py-1.5 text-sm';
    }
}

const getTheme = (themeName?: string) => {
    switch (themeName){
        case 'primary':
            return 'bg-native-600 hover:bg-native-700 text-white';
        case 'secondary':
            return 'bg-white hover:bg-gray-100 border border-native-600 text-native-600';
        case 'amber':
            return 'bg-secondary-600 hover:bg-secondary-700 text-white';
        default:
            return 'bg-native-600 hover:bg-native-700 text-white';
    }
}

</script>