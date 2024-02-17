<script>
  import SectionWrapper from '../SectionWrapper.svelte';

  const fields = ['Code', "Music", "Art/Design", "Writing"];
  let fieldIndex = 0;
  let currentTab = fields[fieldIndex];

  function handleNext(){
    if(fieldIndex > fields.length) fieldIndex = 0;
    else fieldIndex++;
    currentTab = fields[fieldIndex];
  }

  function handlePrevious(){
    if(fieldIndex < 0) fieldIndex = 0;
    else fieldIndex--;
    currentTab = fields[fieldIndex];
  }

</script>

<SectionWrapper>
  <div class="tab">
    
  </div>
</SectionWrapper>