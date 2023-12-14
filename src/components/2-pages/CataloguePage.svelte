<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { catalogueType } from "../../dynamic/catalogueDisplay";
  import CatalogueTypeSelectMenu 
  from "../4-structures/catalogue/CatalogueTypeSelectMenu.svelte";
  import SeriesDisplay 
  from "../4-structures/catalogue/SeriesDisplay.svelte";
  import CompilationsDisplay 
  from "../4-structures/catalogue/compilations/CompilationsDisplay.svelte";
  import BooksDisplay from "../4-structures/catalogue/BooksDisplay.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="fill">
  <CatalogueTypeSelectMenu />

  {#if $catalogueType === "series"}
    <SeriesDisplay />
  {:else if $catalogueType === "books"}
    <BooksDisplay />
  {:else if $catalogueType === "compilations"}
    <CompilationsDisplay />
  {/if}
</div>

<!-- STYLES /////////////////////////////////////// -->
<style>
div :global(.catalogue-display) {
  height: 86%;
}

/* PORTRAIT ----------------------------------------- */
@media screen and (orientation: portrait) and (min-width: 600px) {
div :global(.catalogue-display) {
  height: 93%;
}
}

/* LANDSCAPE -------------------------------------------- */
@media screen and (orientation: landscape) {
  div :global(.catalogue-display) {
    height: calc(100dvh - (var(--hpx) * 0.05));
  }
}

</style>