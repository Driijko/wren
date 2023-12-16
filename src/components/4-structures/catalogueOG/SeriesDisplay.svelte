<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { seriesDisplay } from "../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../dynamic/viewport";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll fill">
  {#if $vpwidth < 500}
    {#each $seriesDisplay as item}
      <CatalogueItemNarrow {item} type="series" />
    {/each}
  {:else if $vpwidth >= 500}
    {#each $seriesDisplay as item}
      <CatalogueItemWide {item} type="series" />
    {/each}
  {/if}
</ul>