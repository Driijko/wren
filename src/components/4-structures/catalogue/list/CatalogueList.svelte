<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { vpwidth } from "../../../../dynamic/viewport";
  import CatalogueListItem from "./item/CatalogueListItem.svelte";

  // PROPS ------------------------------------------
  export let context;
  export let items;
  
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<ul class="reg-scroll" class:main={context === "main"}>
  {#if $vpwidth < 500}
    {#each items as item}
      <CatalogueListItem {context} {item} width="narrow" />
    {/each}
  {:else if $vpwidth >= 500}
    {#each items as item}
      <CatalogueListItem {context} {item} width="wide" />
    {/each}
  {/if}
</ul>

<!-- STYLES ///////////////////////////////////// -->
<style>
ul {
  padding: 40px 10px 80px 10px;
  display: flex;
  gap: 3dvh;
  flex-wrap: wrap;
  justify-content: center;
}

/* PORTRAIT ------------------------------------------------ */
@media screen and (orientation: portrait) and (max-width: 600px) {
.main {
  height: 86%;
}
}
@media screen and (orientation: portrait) and (min-width: 600px) {
.main {
  height: 93%;
}
}

/* LANDSCAPE --------------------------------------------- */
@media screen and (orientation: landscape) {
.main {
  height: calc(100dvh - (var(--hpx) * 0.05));
}
}
</style>