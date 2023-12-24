<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { catalogueMainType, map } 
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";
  import SortButton from "../../../5-elements/catalogue/SortButton.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="catalogue-interface center">
  <h2>Sort {map[$catalogueMainType].string}:</h2>
  <div class="center">
    <h3>Alphabetically</h3>
    <div class="button-container">
      <SortButton property="title" order="start" >
        A - Z
      </SortButton>
      <SortButton property="title" order="end" >
        Z - A
      </SortButton>
    </div>
  </div>
  {#if 
    $catalogueMainType === "books" || $catalogueMainType === "compilations"
  }
    <div class="center">
      <h3>by Publication Date</h3>
      <div class="button-container">
        <SortButton property="date" order="start" >
          newest - oldest
        </SortButton>
        <SortButton property="date" order="end" >
          oldest - newest
        </SortButton>
      </div>
    </div>
  {/if}
</div>

<!-- STYLES /////////////////////////////////////// -->
<style>
.catalogue-interface {
  flex-direction: column;
  gap: min(8dvh, 40px);
  padding-bottom: 6dvh;
}
h2 {
  font-size: 28px;
  font-weight: bold;
}
.catalogue-interface > div {
  /* border: 1px solid red; */
  flex-direction: column;
  gap: min(3dvh, 20px);
}
h3 {
  font-size: 20px;
  font-weight: bold;
}
.button-container {
  display: flex;
  gap: min(8vw, 30px);
}
</style>