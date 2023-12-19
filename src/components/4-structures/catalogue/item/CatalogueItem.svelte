<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  import SmashwordsLink from "./SmashwordsLink.svelte";

  $: ({ scope } = $catalogueModalData);

  // PROPS -----------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP ///////////////////////////////// -->
<!-- List Item -------------------- -->
{#if context === "main" || (context === "modal" && scope === "list")}
  {#if $width === "narrow"}
    <CatalogueItemNarrow {item} {context} />
  {:else if $width === "wide"}
    <CatalogueItemWide {item} {context} />
  {/if}

<!-- Item Profile ---------------- -->
{:else}
<div>
  {#if item.link !== undefined}
    <SmashwordsLink {item} />
  {/if}
</div>
{/if}


<!-- STYLES ///////////////////////////////////// -->
<style>

</style>