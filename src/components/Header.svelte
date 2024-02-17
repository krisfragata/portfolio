<script>
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<!-- //create header/nav  -->
<header>
	<div class=" max-w[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
		<a href="/">
			<h1 class="text-headerText cursor-pointer">KRIS FRAGATA</h1>
		</a>
		<!-- //create a button that only displays on smaller size screen for nav -->
		<button class="nav md:hidden grid place-items-center nav-dot"> </button>
		<nav class="hidden md:flex items-center gap-4 lg:gap-6">
			<a href="#highlights" class="duration-200 hover:text-hoverText cursor-pointer">HIGHLIGHTS.</a>
			<a href="#works" class="duration-200 hover:text-hoverText cursor-pointer">FULL WORKS LIST.</a>
			<a href="#about" class="duration-200 hover:text-hoverText cursor-pointer">MORE ABOUT.</a>
			<button class="specialBtn">
				<a
					href="https://emerald-hope-33.tiiny.site"
					target="_blank"
					class="duration-200 hover:text-hoverText cursor-pointer">RESUME.</a
				>
			</button>
		</nav>
	</div>
</header>
