<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { catalogueMainType, setSort } 
  from "../../../../dynamic/catalogueDisplay";
  import { closeInterfaceModal } from "../../../../dynamic/interface";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";

  // MAP TYPE TO STRING ----------------------------------
  const map = { 
    books: "Books", series: "Series", compilations: "Compilations"
  };

  // EVENT HANDLERS -----------------------------------
  function handleClick(property, order) {
    setSort($catalogueMainType, property, order);
    closeInterfaceModal();
  };

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div>
  <h2>Sort {map[$catalogueMainType]}:</h2>
  <div>
    <h3>Alphabetically</h3>
    <button on:click={()=> handleClick("title", "start")}>
      A - Z
    </button>
    <button on:click={()=> handleClick("title", "end")}>
      Z - A
    </button>
  </div>
  {#if 
    $catalogueMainType === "books" || $catalogueMainType === "compilations"
  }
  <div>
    <h3>by Publication Date</h3>
    <button on:click={()=> handleClick("date", "start")}>
      newest - oldest
    </button>
    <button on:click={()=> handleClick("date", "end")}>
      oldest - newest
    </button>
  </div>
  {/if}
</div>
