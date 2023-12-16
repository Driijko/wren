<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { fade } from "svelte/transition";
  import { catalogueModal } from "../../../dynamic/catalogueDisplay";
  import CatalogueModalHeader from "./CatalogueModalHeader.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $catalogueModal}
  <dialog transition:fade class="fill reg-scroll" open >
    <CatalogueModalHeader />
  </dialog>
{/if}



<!-- STYLES //////////////////////////////////////// -->
<style>
dialog {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
}
</style>