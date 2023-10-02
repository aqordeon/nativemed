<template>
	<div>
		<!-- Section: hero -->
		<section class="isolate relative z-10 md:grid grid-cols-2 px-5 md:px-16 py-10 pb-12 md:pt-20 md:pb-20 xl:pt-8 xl:pb-18">
			<!-- Hero: Background -->
			<div class="absolute top-0 right-0 translate-x-1/2 z-10 w-[100px] aspect-square bg-indigo-500 blur-3xl"></div>
			<div class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 z-10 w-[200px] aspect-square bg-native-500/30 rounded-full blur-2xl"></div>
			
			<!-- Hero: Title -->
			<div class="z-20 relative flex flex-col place-content-center">
				<div class="text-center md:text-left md:max-w-lg flex flex-col items-start gap-y-8 md:gap-y-4 lg:gap-y-8 ">
					<h1 class="font-semibold text-2xl lg:text-3xl">Belajar dengan seru dan menyenangkan, siap menghadapi UTBK 2024 bersama kami!</h1>
					<h2 class="font-light text-sm lg:text-base">Dengan pendekatan pembelajaran yang inovatif kami hadir untuk membantumu meraih sukses di UTBK 2024. Bersama, mari wujudkan impian akademikmu!</h2>
					<div class="mx-auto md:mx-0 flex flex-col md:flex-row gap-y-3 gap-x-3 items-center w-full md:w-[90%]">
						<input placeholder="Masukkan e-mailmu" class="text-center w-full ring-1 ring-native-300 focus:ring focus:ring-native-500 focus:outline-none rounded-md h-fit py-2 px-2 placeholder:text-indigo-300">
						<div class="w-full md:w-fit bg-native-600 px-3 py-2.5 text-white rounded-md whitespace-nowrap cursor-pointer hover:bg-native-500">Uji Coba Try Out Gratis</div>
					</div>
				</div>
			</div>

			<!-- Hero: Image -->
			<div class="hidden md:block group w-full relative xl:pt-20 px-20 pb-0 h-fit">
				<!-- <img src="@/assets/images/main1.png" alt="" class="absolute z-20 -left-[34px] xl:-left-[46px] top-[46px] xl:top-11 scale-[98%] xl:scale-[107%]"> -->
				<img src="@/assets/images/book.png" alt="" class="absolute z-20 -top-12 xl:top-16 right-16 scale-50 xl:scale-75">
				<img src="@/assets/images/book1.png" alt="" class="absolute z-20 -bottom-8 left-14 scale-50 xl:scale-75 anim-move ">
				<div class="w-full aspect-square relative rounded-full overflow-hidden">
					<img src="@/assets/images/main.png" alt="" class="absolute z-10">
					<div class="absolute w-full h-full rounded-full bg-native-400 group-hover:bg-native-500"></div>
				</div>
			</div>
		</section>

		<!-- Section: Passing Grade -->
		<section class="relative z-20 bg-native-600 w-full p-16 text-gray-50 text-center space-y-7">
			<div class="space-y-3">
				<h2 class="font-semibold text-2xl">Top 5 Passing Grade</h2>
				<div class="font-light text-xl">Berikut merupakan passing grade program studi Kedokteran dari beberapa lulusan kami.</div>
			</div>
			
			<!-- Passing Grade: box -->
			<div class="flex flex-col md:grid grid-cols-5 gap-y-2 md:gap-y-0 gap-x-2 place-content-center w-full md:w-fit mx-auto">
				<div v-for="(passing, index) in passingGrade" :key="index" class="w-full md:px-8 py-4 md:py-5 text-center space-y-2 md:space-y-4 bg-native-400 hover:bg-native-500 rounded-md cursor-default border-2 border-transparent hover:border-native-400">
					<p class="font-semibold text-2xl leading-none">{{ passing.grade }}</p>
					<p class="font-light leading-none">{{ passing.jurusan }}</p>
				</div>
			</div>
		</section>

		<!-- Top 10 Universitas Favorit -->
		<section class="bg-white py-12 md:py-8 lg:py-16 xl:py-24 flex flex-col lg:flex-row px-6 xl:px-11 gap-x-4 xl:gap-x-16 gap-y-3 lg:gap-y-0">
			<!-- Title -->
			<div class="lg:w-fit flex items-center justify-center lg:justify-start ">
				<div class="text-center lg:text-left lg:border-l-4 xl:border-l-8 border-native-600 px-4 space-y-0 lg:space-y-2 w-min">
					<h2 class="font-bold text-xl whitespace-nowrap lg:whitespace-normal xl:text-3xl">Top 10 Universitas Favorit</h2>
					<p class="font-light text-lg xl:text-2xl">Lulusan kami</p>
				</div>
			</div>

			<!-- List University -->
			<div class="grid grid-cols-2 md:grid-cols-5 grid-rows-2 w-full gap-3 lg:gap-5 min-w-fit lg:min-w-0">
				<div v-for="univ in universitas" :key="univ.name" class="flex items-center bg-white hover:bg-native-50 rounded-md shadow px-2 xl:px-4 py-2 xl:py-3 gap-x-3 xl:gap-x-4 cursor-default border-2 border-transparent hover:border-native-400">
					<img :src="univ.logo" :alt="univ.name" class="h-10 aspect-square">
					<p class="flex items-center text-sm xl:text-base font-bold text-native-600 leading-4 xl:leading-5">{{ univ.name }}</p>
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

const passingGrade = [
	{
		grade: '80%',
		jurusan: 'Kedokteran UNDIP'
	},
	{
		grade: '70.80%',
		jurusan: 'Kedokteran UGM'
	},
	{
		grade: '60.50%',
		jurusan: 'Kedokteran ITB'
	},
	{
		grade: '59.60%',
		jurusan: 'Kedokteran UI'
	},
	{
		grade: '55.90%',
		jurusan: 'Kedokteran UB'
	},
]
</script>

<style lang="scss">
// @keyframes shake {
//   0% {
//     transform: translate(0, 0);
//   }
//   20% {
//     transform: translate(2px, 5px);
//   }
//   40% {
//     transform: translate(-3px, 1px);
//   }
//   60% {
//     transform: translate(0px, 3px);
//   }
//   80% {
//     transform: translate(5px, -3px);

//   }
//   100% {
//     transform: translate(0, 0);
//   }
// }

// .anim-move {
//   animation: shake 3s infinite;
//   --x: 0;
//   --y: 0;
//   @apply scale-75;
// }

</style>