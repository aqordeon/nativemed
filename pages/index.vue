<template>
	<div>
		<!-- Section: hero -->
		<section class="grid grid-cols-2 px-16 py-20 xl:py-24">
			<div class="relative flex flex-col place-content-center items-start gap-y-2">
				<div class="font-semibold text-4xl">Belajar dengan seru dan menyenangkan, siap menghadapi UTBK 2024 bersama kami!</div>
				<div class="font-light">Dengan pendekatan pembelajaran yang inovatif kami hadir untuk membantumu meraih sukses di UTBK 2024. Bersama, mari wujudkan impian akademikmu!</div>
				<div class="flex gap-x-3">
					<input placeholder="Masukkan e-mailmu" class="w-full ring-1 ring-native-300 focus:ring focus:ring-native-500 focus:outline-none rounded-md h-fit py-2 px-2">
					<div class="bg-native-600 px-3 py-2.5 text-white rounded-md whitespace-nowrap cursor-pointer hover:bg-native-500">Uji Coba Try Out Gratis</div>
				</div>
			</div>
			<div class="w-full relative pt-20 px-20 pb-0 h-fit">
				<img src="@/assets/images/main1.png" alt="" class="absolute z-20 -left-[34px] xl:-left-[46px] top-[46px] xl:top-11 scale-[98%] xl:scale-[107%]">
				<img src="@/assets/images/book.png" alt="" class="absolute z-20 top-16 right-16 scale-75">
				<img src="@/assets/images/book1.png" alt="" class="absolute z-20 -bottom-8 left-14 scale-75">
				<div class="w-full aspect-square relative rounded-full overflow-hidden">
					<img src="@/assets/images/main.png" alt="" class="absolute z-10">
					<div class="absolute w-full h-full rounded-full bg-native-600"></div>
				</div>
			</div>
		</section>

		<!-- Section: Passing Grade -->
		<section class="bg-native-600 w-full p-10 text-gray-50 text-center space-y-3">
			<div class="font-semibold text-xl">Top 5 Passing Grade</div>
			<div class="font-light">Berikut merupakan passing grade program studi Kedokteran dari beberapa lulusan kami.</div>
			<div class="grid grid-cols-5 gap-x-2 place-content-center">
				<div class="px-8 py-5 text-center space-y-4 bg-native-400 rounded-md">
					<p class="font-semibold text-xl">80%</p>
					<span class="font-light">Kedokteran UNDIP</span>
				</div>
				<div class="px-8 py-5 text-center space-y-4 bg-native-400 rounded-md">
					<p class="font-semibold text-xl">70.80%</p>
					<span class="font-light">Kedokteran UGM</span>
				</div>
				<div class="px-8 py-5 text-center space-y-4 bg-native-400 rounded-md">
					<p class="font-semibold text-xl">60.50%</p>
					<span class="font-light">Kedokteran ITB</span>
				</div>
				<div class="px-8 py-5 text-center space-y-4 bg-native-400 rounded-md">
					<p class="font-semibold text-xl">59.60%</p>
					<span class="font-light">Kedokteran UI</span>
				</div>
				<div class="px-8 py-5 text-center space-y-4 bg-native-400 rounded-md">
					<p class="font-semibold text-xl">55.90%</p>
					<span class="font-light">Kedokteran UB</span>
				</div>
			</div>
		</section>

		<!-- Top 10 Universitas Favorit -->
		<section class="bg-white py-16 xl:py-24 flex flex-row px-6 xl:px-11 gap-x-4 xl:gap-x-8">
			<div class="w-fit flex items-center">
				<div class="border-l-4 xl:border-l-8 border-native-600 px-4">
					<p class="font-bold text-xl xl:text-3xl xl:whitespace-nowrap">Top 10 Universitas Favorit</p>
					<p class="font-light text-lg xl:text-2xl">Lulusan kami</p>
				</div>
			</div>
			<div class="grid grid-cols-5 grid-rows-2 w-full gap-5">
				<div v-for="univ in universitas" :key="univ.name" class="flex items-center bg-white rounded-md shadow px-3 xl:px-4 py-2 xl:py-3 gap-x-2">
					<img :src="univ.logo" :alt="univ.name" class="h-10 aspect-square">
					<p class="flex items-center text-sm xl:text-base font-bold text-gray-700 leading-4 xl:leading-5">{{ univ.name }}</p>
				</div>
			</div>
		</section>

	</div>

	<!-- <div class="bg-slate-100 flex w-screen h-screen items-center justify-center gap-x-4">
		<h1 class="text-gray-400">This page is blank</h1>
		<NuxtLink to="/materi">Materi</NuxtLink>
		<NuxtLink to="/materi/Lulus Ujian Nasional/2">Quiz 2</NuxtLink>
	</div> -->
</template>

<script setup>
const universitas = [
	{
		name: 'Universitas Indonesia',
		logo: '/university/UnivUI.png'
	},
	{
		name: 'Universitas Diponegoro',
		logo: '/university/Univ Undip.png'
	},
	{
		name: 'Universitas Brawijaya',
		logo: '/university/Univ UB.png'
	},
	{
		name: 'Universitas Gajah Mada',
		logo: '/university/Univ UGM.png'
	},
	{
		name: 'Universitas Airlangga',
		logo: '/university/Univ Airlangga.png'
	},
	{
		name: 'Universitas Padjajaran',
		logo: '/university/Univ Unpad.png'
	},
	{
		name: 'Universitas Hasanuddin',
		logo: '/university/Univ Hasanuddin.png'
	},
	{
		name: 'Universitas Udayana',
		logo: '/university/Univ Udayana.png'
	},
	{
		name: 'Institut Pertanian Bogor',
		logo: '/university/Univ IPB.png'
	},
	{
		name: 'Universitas Sebelas Maret',
		logo: '/university/Univ UNS.png'
	},
]
</script>

<style>
</style>