<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSite } from "../../../../dynamic/interface";
  import SiteMenu from "../interfaces/SiteMenu.svelte";
  import Search from "../interfaces/Search.svelte";
  import Sort from "../interfaces/Sort.svelte";
  import Filter from "../interfaces/Filter.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<div class="fill">
  {#if $currentInterfaceSite === "siteMenu"}
    <SiteMenu />
  {:else if $currentInterfaceSite === "search"}
    <Search />
  {:else if $currentInterfaceSite === "filter"}
    <Filter />
  {:else if $currentInterfaceSite === "sort"}
    <Sort />
  {/if}
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
/* PORTRAIT ------------------------------------------- */
@media screen and (orientation: portrait) and (max-width: 600px) {
div :global(.catalogue-interface) {
  height: 86%;
}
}

@media screen and (orientation: portrait) and (min-width: 600px) {
div :global(.catalogue-interface) {
  height: 93%;
}
}

/* LANDSCAPE --------------------------------------------- */
@media screen and (orientation: landscape) {
div :global(.catalogue-interface) {
  height: calc(100% - (var(--hpx) * 0.05));
}
}
</style>