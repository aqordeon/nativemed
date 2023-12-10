<template>
    <div class="w-full h-full bg-native-50 px-12 py-8">
        <TryoutHeaderTryout breadcrumbs="Yuk Mulai latihan try out sekarang!" title="&nbsp">

        </TryoutHeaderTryout>

        <div class="w-full h-full bg-white rounded-md py-8 px-8 shadow-md">
            <div class="relative">
                <!-- 2 Box: Dompet & Riwayat Quiz -->
                <div class="max-w-4xl absolute grid grid-cols-2 w-[70%] mx-auto gap-x-3 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
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
                                <div class="leading-none">
                                    <div class="font-bold mr-2">10 Quiz</div>
                                    <span class="text-xxs">telah dikerjakan</span>
                                </div>
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
                    <div v-for="materi in data" :key="materi.id" class="flex flex-col justify-center gap-y-2.5">
                        <UtilsMateribox :materi="materi" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <pre>{{ data }}</pre>
    {{ error }}
</template>

<script setup lang="ts">
definePageMeta({
    layout: "tryout",
})

// const { data } = await useFetch('/api/materi')

// const client = useSupabaseClient()
// const user = useSupabaseUser()

// const tasksFromServer = ref()
// const isModalOpen = ref(false)
// const loading = ref(false)
// const newTask = ref('')


const { data, error } = await useSupabaseClient()
    .from('list_materi')
    .select('*')

watchEffect(() => {
    console.log(error)
    console.log(data)
})

// async function addTask() {
//     if (newTask.value.trim().length === 0) { return }

//     loading.value = true

//     const { data } = await useSupabaseClient().from('tasks')
//         .upsert({
//             user: useSupabaseUser()value.id,
//             title: newTask.value,
//             completed: false
//         })
//         .select('id, title, completed')
//         .single()

//     tasks.value.push(data)
//     newTask.value = ''
//     loading.value = false
// }

// const completeTask = async (task: Task) => {
//     await useSupabaseClient().from('tasks').update({ completed: task.completed }).match({ id: task.id })
// }

// const removeTask = async (task: Task) => {
//     tasks.value = tasks.value.filter(t => t.id !== task.id)
//     await useSupabaseClient().from('tasks').delete().match({ id: task.id })
// }

// const fetchTasksFromServerRoute = async () => {
//     const { data } = await useFetch('/api/tasks', { headers: useRequestHeaders(['cookie']), key: 'tasks-from-server' })

//     tasksFromServer.value = data
//     isModalOpen.value = true
// }

</script>