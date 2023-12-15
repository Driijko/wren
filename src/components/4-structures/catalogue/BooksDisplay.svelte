<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { findCompilationById } from "../../../static/compilations";
  import { booksDisplay } from "../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../dynamic/viewport";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll fill">
  {#if $vpwidth < 500}
    {#each $booksDisplay as item}
      {#if item.compilation !== undefined}
        <CatalogueItemNarrow 
          item={findCompilationById(item.compilation)} 
          type="compilation" 
        />
      {:else}
        <CatalogueItemNarrow {item} type="book" />
      {/if}
    {/each}
  {:else if $vpwidth >= 500}
    {#each $booksDisplay as item}
      {#if item.compilation !== undefined}
        <CatalogueItemWide 
          item={findCompilationById(item.compilation)} 
          type="compilation" 
        />
      {:else}
        <CatalogueItemWide {item} type="book" />
      {/if}
    {/each}
  {/if}
</ul>