<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import { closeCatalogueModal, clearCatalogueModalData } 
  from "../../../dynamic/catalogueDisplay";
  import XIcon from "../../6-icons/XIcon.svelte";

  // EVENT HANDLERS ------------------------------------
  function handleClick() {
    clearCatalogueModalData();
    closeCatalogueModal();
  }
  
</script>

<!-- MARKUP ///////////////////////////////////////// -->
<button class="center" on:click={handleClick}>
  <XIcon />
</button>