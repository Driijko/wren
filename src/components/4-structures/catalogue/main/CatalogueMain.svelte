<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { catalogueMainType, catalogueMainSeries, catalogueMainBooks, catalogueMainCompilations, catalogueMainThemes }
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueList from "../list/CatalogueList.svelte";

  // LOCAL CONSTANT -----------------------------
  const context = "main";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if $catalogueMainType === "series"}
  <CatalogueList {context} items={$catalogueMainSeries} />
{:else if $catalogueMainType === "books"}
  <CatalogueList {context} items={$catalogueMainBooks} />
{:else if $catalogueMainType === "compilations"}
  <CatalogueList {context} items={$catalogueMainCompilations} />
{/if}