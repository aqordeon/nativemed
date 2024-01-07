<template>
	<Title>Native Med</Title>
	<div class="text-native-600 overflow-hidden">
		<CommonsDebugComp v-if="isDebug" />
		<LayoutsNavbarTryout class="" />
		<main class="">
			<slot />
		</main>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTryoutStore } from "~/store/tryoutStore"

const { currentMateri: currentMateriPinia } = storeToRefs(useTryoutStore())


const isDebug = useRoute().query.debug === "1"

const currentMateri = ref()
const currentQuiz = ref()

// Fetch the data about current Materi taken
if(!useTryoutStore().currentTryout.materi?.id){
	console.log('weew', currentMateriPinia)
	console.log('if 1')
	currentMateri.value = await useSupabaseClient()
		.from('list_materi')
		.select(`*`)
		.eq('slug', useRouter().currentRoute.value.params.materiName)

	if(currentMateri.value.data){
		useTryoutStore().currentTryout.materi = currentMateri.value?.data?.[0]
	}
	
}

// Fetch the data about current Quiz taken
if(!useTryoutStore().currentTryout.quiz?.id){
	console.log('if 2')
	currentQuiz.value = await useSupabaseClient()
		.from('list_quiz')
		.select(`*`)
		.eq('slug', useRouter().currentRoute.value.params.quizName)
	
	if(currentQuiz.value.data){
		useTryoutStore().currentTryout.quiz = currentQuiz.value?.data?.[0]
	}
}

// watchEffect(() => {
// 	console.log('usetryout store', useTryoutStore().currentTryout)
//     console.log('currentMateri', currentMateri.value?.data?.[0])
//     console.log('currentQuiz', currentQuiz.value?.data)
//     useTryoutStore().currentTryout.quiz = currentQuiz.value?.data?.[0]
// })

</script>
