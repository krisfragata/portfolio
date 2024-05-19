<script>
	import SectionWrapper from '../../components/SectionWrapper.svelte';
	import All from './All.svelte';
	import Art from './Art.svelte';
	import Code from './Code.svelte';
	import Music from './Music.svelte';
	import Tab from './Tab.svelte';
	import WorksWrapper from './WorksWrapper.svelte';
	import { onMount } from 'svelte';
	import Writing from './Writing.svelte';

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
			class="text-lg text-paragraphText font-semibold sm:text-xl md:text-2xl text-left max-w-[500px] mx-auto w-full py-10"
		>
			I'm a <span class="text-highlight">software engineer</span> and
			<span class="text-highlight">artist</span> based in Boston, Massachusetts and Manila, Philippines.
		</p>
	</div>
</SectionWrapper>
