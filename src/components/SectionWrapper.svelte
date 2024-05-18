<script>
  export let id;
</script>

<!-- //styling component for sections //code allows to wrap sections in page seamlessly -->
<section {id} class='min-h-screen flex flex-col items-center justify-center px-4'>
  <div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full overflow-hidden">
		<!-- //rendering slot renders child component inside wrappers -->
    <slot />
  </div>
</section>