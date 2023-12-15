<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import CatalogueTypeSelectMenu 
  from "../4-structures/catalogue/CatalogueTypeSelectMenu.svelte";
  import CatalogueDisplay 
  from "../4-structures/catalogue/CatalogueDisplay.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<CatalogueTypeSelectMenu />

<CatalogueDisplay />

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