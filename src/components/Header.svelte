<script>
	import SectionWrapper from "./SectionWrapper.svelte";

</script>

<!-- //create header/nav  -->
<header>
  <div class=" max-w-[1000px] mx-auto w-full  flex items-center justify-between p-10 py-6">
    <a href="/">
      <h1 class="text-headerText">KRIS FRAGATA</h1>
    </a>
		<!-- //create a button that only displays on smaller size screen for nav -->
		<button class="nav md:hidden grid place-items-center nav-dot"> </button>
    <nav class="hidden md:flex items-center gap-4 lg:gap-6">
      <a href="#index" class="duration-200 hover:text-hoverText cursor-pointer">INDEX.</a>
      <a href="#about" class="duration-200 hover:text-hoverText cursor-pointer">MORE ABOUT.</a>
      <a href="/assets/resume.pdf" target="_blank" class="duration-200 hover:text-hoverText text-highlight cursor-pointer">RESUME.</a>
    </nav>
  </div>
</header>