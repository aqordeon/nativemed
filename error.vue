<template>
    <div class="flex items-center justify-center w-full h-full pt-28">
        <div class="text-indigo-600">
            <div class="container max-w-7xl grid place-items-center mb-4" :class="{ block: error.statusCode == 404 }">
                <div class="px-5 text-center">
                    <h2 class="text-2xl text-indigo-400">{{ error.statusCode }}</h2>
                </div>
            </div>
            <div class="container max-w-7xl grid place-items-center"
                :class="{ hidden: error.statusCode != 404 }">
                <div class="px-6 md:px-5 text-center max-w-5xl">
                    <img format="webp" src="@/assets/images/disconnect.svg" alt=""
                        class="md:mx-auto w-96 px-14 md:px-0 mb-6" />
                    <h3 class="font-bold text-3xl mb-2">
                        Page not available :)
                    </h3>
                    <p class="mb-4">
                        We are still here to help you around.
                    </p>
                    <pre>{{ error }}</pre>
                    <p v-html="error.stack">
                    </p>
                </div>
                <button @click="() => router.back()" class="flex justify-center bg-indigo-700 hover:bg-indigo-500 text-gray-100 px-4 py-1.5 rounded-md border border-indigo-600">
                    Go back
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    error: Object,
});

useHead({
    title: "404 - Page not Found",
});

const router = useRouter();

</script>
