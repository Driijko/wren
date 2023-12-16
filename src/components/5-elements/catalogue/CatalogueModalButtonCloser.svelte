<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import { closeCatalogueModal } from "../../../dynamic/catalogueDisplay";
  import XIcon from "../../6-icons/XIcon.svelte";
  
</script>

<!-- MARKUP ///////////////////////////////////////// -->
<button class="center" on:click={closeCatalogueModal}>
  <XIcon />
</button>