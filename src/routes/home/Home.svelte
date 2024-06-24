<script>
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import { onMount } from 'svelte';

	//page first loads to 'code'
	let activeTab = 'code';

	function handleTabChange(e) {
		activeTab = e.detail;
	}

	onMount(() => {
		handleTabChange('code');
	})

</script>

<SectionWrapper id="home">
	<div class="max-h-[500px] flex flex-col gap-4 flex-1 overflow-hidden items-center justify-center">
		<p
			class="text-lg text-paragraphText font-semibold sm:text-xl md:text-2xl text-left max-w-[600px] mx-auto w-full"
		>
			I'm a <span class="text-highlight hover:underline hover:text-hoverText cursor-pointer">software engineer</span> and
			<span class="text-highlight hover:underline hover:text-hoverText cursor-pointer">artist</span> based in Boston, Massachusetts and Manila, Philippines.
		</p>
		<p
			class="text-lg text-paragraphText sm:text-2lg md:text-3lg text-left max-w-[600px] w-full cursor-pointer hover:underline"
		> 
			<a href="#projects">
			Full Works List
			</a>
		</p>
		</div>
</SectionWrapper>
