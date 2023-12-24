<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { catalogueMainType, setSort, map } 
  from "../../../../dynamic/catalogueDisplay";
  import { closeInterfaceModal } from "../../../../dynamic/interface";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";

  // EVENT HANDLERS -----------------------------------
  function handleClick(property, order) {
    setSort($catalogueMainType, property, order);
    closeInterfaceModal();
  };

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="catalogue-interface center">
  <h2>Sort {map[$catalogueMainType].string}:</h2>
  <div class="center">
    <h3>Alphabetically</h3>
    <div class="button-container">
      <button on:click={()=> handleClick("title", "start")}>
        A - Z
      </button>
      <button on:click={()=> handleClick("title", "end")}>
        Z - A
      </button>
    </div>
  </div>
  {#if 
    $catalogueMainType === "books" || $catalogueMainType === "compilations"
  }
    <div class="center">
      <h3>by Publication Date</h3>
      <div class="button-container">
        <button on:click={()=> handleClick("date", "end")}>
          newest - oldest
        </button>
        <button on:click={()=> handleClick("date", "start")}>
          oldest - newest
        </button>
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
button {
  border: 2px solid white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>