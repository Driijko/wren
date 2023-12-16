<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { fade } from "svelte/transition";
  import { catalogueModal, catalogueModalData } 
  from "../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../dynamic/viewport";
  import CatalogueModalHeader from "./CatalogueModalHeader.svelte";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $catalogueModal}
  <dialog transition:fade class="fill" open >
    <CatalogueModalHeader />
    <ul class="reg-scroll">
      {#each $catalogueModalData.items as item}
        <li>{item}</li>
      {/each}
    </ul>
  </dialog>
{/if}



<!-- STYLES //////////////////////////////////////// -->
<style>
dialog {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
}
ul {
  flex: 1;
  border: 4px solid blue;
  color: white;
}
</style>