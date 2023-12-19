<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../dynamic/viewport";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";

  // PROPS -----------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP ///////////////////////////////// -->
{#if $width === "narrow"}
  <CatalogueItemNarrow {item} {context} />
{:else if $width === "wide"}
  <CatalogueItemWide {item} {context} />
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>

</style>