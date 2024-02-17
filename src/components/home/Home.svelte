<script>
	import SectionWrapper from '../SectionWrapper.svelte';
</script>

<SectionWrapper id="home">
	<!-- <section class="min-h-[600px] flex flex-col items-center justify-center px-4"> -->
	<div class="max-h-[550px] flex flex-col gap-4 flex-1 items-center text-left justify-center">
		<p
			class="text-lg text-paragraphText font-bold sm:text-xl md:text-2xl text-left max-w-[600px] mx-auto w-full py-1"
		>
			I'M AN <span class="text-highlight animate-pulse cursor-pointer">ENGINEER</span> &
			<span class="text-highlight animate-pulse cursor-pointer">ARTIST</span> BASED IN WESTERN, MASSACHUSETTS AND MANILA,
			PHILIPPINES
		</p>
		<p
			class="text-lg text-hoverText hover:underline hover:text-highlight sm:text-lg md:text-xl max-w-[600px] mx-auto w-full"
		>
			<a href="#works">View Full Project List</a>
		</p>
	</div>
	<div class="flex items-center justify-center">
		<button class="arrow-down animate-bounce"></button>
	</div>

	<!-- <i class="fa-solid fa-caret-down fa-xl z-20" style="color: #004643;"></i> -->
	<!-- </section> -->
</SectionWrapper>
