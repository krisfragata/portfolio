<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	//function to handle tab click and dispatch event
	function handleClick(tab) {
		dispatch('tabChange', tab);
	}

	
	//grab activeTab from Home as a prop
	export let activeTab;
</script>

<!-- <nav> -->
<div
	class="flex justify-between text-lg text-paragraphText sm:text-xl md:text-2xl text-left max-w-[600px] mx-auto w-full"
>
	<a
		href="#all"
		on:click={() => handleClick('all')}
		class="{activeTab === 'all' ? 'active' : ''} duration-200 hover:text-hoverText cursor-pointer"
		>All.</a
	>
	<a
		href="#code"
		on:click={() => handleClick('code')}
		class="{activeTab === 'code' ? 'active' : ''} duration-200 hover:text-hoverText cursor-pointer"
		>Code.</a
	>
	<a
		href="#music"
		on:click={() => handleClick('music')}
		class="{activeTab === 'music' ? 'active' : ''} duration-200 hover:text-hoverText cursor-pointer"
		>Music.</a
	>
	<a
		href="#all"
		on:click={() => handleClick('art')}
		class="{activeTab === 'art' ? 'active' : ''} duration-200 hover:text-hoverText cursor-pointer"
		>Art/Design.
	</a>
	<a
		href="#all"
		on:click={() => handleClick('writing')}
		class="{activeTab === 'writing'
			? 'active'
			: ''} duration-200 hover:text-hoverText cursor-pointer">Writing.</a
	>
</div>
<!-- </nav> -->
