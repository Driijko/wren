<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { compilationsDisplay } from "../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../dynamic/viewport";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll fill">
  {#if $vpwidth < 500}
    {#each $compilationsDisplay as comp}
      <CatalogueItemNarrow item={comp} type="compilation" />
    {/each}
  {:else if $vpwidth >= 500}
    {#each $compilationsDisplay as comp}
      <CatalogueItemWide item={comp} type="compilation" />
    {/each}
  {/if}
</ul>