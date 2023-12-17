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
<ul class="reg-scroll">
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