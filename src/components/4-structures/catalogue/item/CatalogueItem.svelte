<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../dynamic/viewport";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  // import CatalogueListItemHeader from "./CatalogueListItemHeader.svelte";

  // PROPS -----------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP ///////////////////////////////// -->
{#if $width === "narrow"}
  <CatalogueItemNarrow {item} />
{:else if $width === "wide"}
  <CatalogueItemWide {item} />
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>

</style>