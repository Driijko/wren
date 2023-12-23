<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  // import CatalogueListItem from "./item/CatalogueListItem.svelte";
  import CatalogueItem from "./item/CatalogueItem.svelte";
  import { width } from "../../../dynamic/viewport";

  // PROPS ------------------------------------------
  export let context;
  export let items;
  
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<ul class="reg-scroll" class:main={context === "main"}>
  {#if items.length > 0}
    {#each items as item}
      <li class:narrow={$width === "narrow"} class:wide={$width === "wide"}>
        <CatalogueItem {context} {item} />
      </li>
    {/each}
  {:else}
    <p>No items match your filter settings!</p>
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
li {
  background-color: hsl(0, 0%, 90%);
  border-style: solid;
  border-color: black;
}
.narrow {
  border-width: 5px;
  border-radius: 5px;
}
.wide {
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-right-width: 30px;
  border-left-width: 5px;
  border-radius: 10px;
}
.wide :global(img) {
  padding: 10px 0px;
  border-right: 5px solid black;
  background-color: black;
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