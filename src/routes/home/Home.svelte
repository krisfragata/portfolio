<script>
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import Code from './Code.svelte';
	import Nav from './Nav.svelte';
	import WorksWrapper from './WorksWrapper.svelte';
</script>

<SectionWrapper id="mini-about">
	<div class="flex flex-col gap-4 flex-1 items-center justify-start">
		<p
			class="text-lg text-paragraphText font-bold sm:text-xl md:text-2xl text-left max-w-[600px] mx-auto w-full py-10"
		>
			I'M AN <span class="text-highlight">ENGINEER</span> &
			<span class="text-highlight">ARTIST</span> BASED IN WESTERN, MASSACHUSETTS AND MANILA, PHILIPPINES
		</p>
		<Nav />
		<WorksWrapper works='code'>
			<Code/>
		</WorksWrapper>
	</div>
</SectionWrapper>
