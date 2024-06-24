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
      <a href="#projects" class="duration-200 hover:text-hoverText cursor-pointer hover:underline">PROJECTS.</a>
      <a href="#freelance" class="duration-200 hover:text-hoverText cursor-pointer hover:underline">FREELANCE.</a>
      <a href="#blog" class="duration-200 hover:text-hoverText cursor-pointer hover:underline">BLOG.</a>
      <a href="#about" class="duration-200 hover:text-hoverText cursor-pointer hover:underline">MORE ABOUT.</a>
      <a href="/assets/resume.pdf" target="_blank" class="duration-200 hover:text-hoverText hover:underline cursor-pointer">RESUME.</a>
    </nav>
  </div>
</header>