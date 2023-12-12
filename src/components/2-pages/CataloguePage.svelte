<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { catalogueType } from "../../dynamic/catalogueDisplay";
  import CatalogueTypeSelectMenu 
  from "../4-structures/catalogue/CatalogueTypeSelectMenu.svelte";
  import SeriesDisplay 
  from "../4-structures/catalogue/SeriesDisplay.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="fill">
  <CatalogueTypeSelectMenu />

  {#if $catalogueType === "series"}
    <SeriesDisplay />
  {/if}
</div>

<!-- STYLES /////////////////////////////////////// -->
<style>
div :global(.catalogue-display) {
  max-height: 86%;
}

/* PORTRAIT ----------------------------------------- */
@media screen and (orientation: portrait) and (min-width: 600px) {
div :global(.catalogue-display) {
  max-height: 93%;
}
}

</style>