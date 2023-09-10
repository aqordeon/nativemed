<template>
  <div class="w-screen h-screen grid justify-center items-center bg-red-500">
    <div class="grid items-center justify-center gap-y-4 px-4">
      <h2 class="text-white font-semibold text-2xl">This is an Error Page 404 :)</h2>
      <div class="place-self-center bg-gray-100 text-slate-800 w-fit shadow rounded-full py-2 px-6 cursor-pointer hover:bg-gray-200" @click="goBack">Go Back</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})

useHead({
  title: "404 - Page not Found",
})

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>
