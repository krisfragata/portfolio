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

<SectionWrapper id="mini-about">
	<div class="flex flex-col gap-4 flex-1 items-center justify-start">
		<p
			class="text-lg text-paragraphText font-bold sm:text-xl md:text-2xl text-left max-w-[600px] mx-auto w-full py-10"
		>
			I'M AN <span class="text-highlight">ENGINEER</span> &
			<span class="text-highlight">ARTIST</span> BASED IN WESTERN, MASSACHUSETTS AND MANILA, PHILIPPINES
		</p>
		<Tab activeTab={activeTab} on:tabChange={handleTabChange}/>
		<WorksWrapper works={activeTab}>
			<!-- add logic to which tab info is loaded -->
			{#if activeTab === 'code'}
				<Code />
			{/if}
			{#if activeTab === 'all'}
				<All/>
			{/if}
			{#if activeTab === 'music'}
				<Music />
			{/if}
			{#if activeTab === 'art'}
				<Art />
			{/if}
			{#if activeTab === 'writing'}
				<Writing />
			{/if}
		</WorksWrapper>
	</div>
</SectionWrapper>
