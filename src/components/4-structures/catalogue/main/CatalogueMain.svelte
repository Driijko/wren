<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { catalogueMainType, catalogueMainSeries, catalgoueMainBooks, catalogueMainCompilations, catalogueMainThemes }
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueList from "../list/CatalogueList.svelte";

  // LOCAL CONSTANT -----------------------------
  const context = "main";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if $catalogueMainType === "series"}
  <CatalogueList {context} items={$catalogueMainSeries} />
{/if}