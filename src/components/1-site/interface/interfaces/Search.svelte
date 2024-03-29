<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { onMount } from "svelte";
  import { catalogueMainType, map } 
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";
  import CatalogueModalButton 
  from "../../../5-elements/catalogue/CatalogueModalButton.svelte";
  import CaretUpIcon from "../../../6-icons/CaretUpIcon.svelte";
  import CaretDownIcon from "../../../6-icons/CaretDownIcon.svelte";

  // LOCAL STATE ----------------------------------------------
  $: searchResults = [];
  let currentType = $catalogueMainType;
  let scrollable = false; // search results box is scrollable?
  let markerTopHighlight = false;
  let markerBottomHighlight = true;

  // ELEMENTS ------------------------------------
  let inputElement;
  let resultsElement;

  // EVENT HANDLERS ------------------------------------------
  function handleChange(e) {
    searchResults = map[$catalogueMainType].data
      .filter(item => item.title.includes(e.target.value));
    inputElement.blur();
  };

  function handleScroll(e) {
    markerTopHighlight = e.target.scrollTop > 0;
    markerBottomHighlight = e.target.scrollTop < (
      e.target.scrollHeight - e.target.clientHeight
    );
  }

  // REACTIVE RESETTING OF INPUT ELEMENT AND RESULTS --------------------
  $: if (currentType !== $catalogueMainType) {
    currentType = $catalogueMainType;
    inputElement.value = "";
    inputElement.focus();
    searchResults = [];
  };

  // CHECK IF SEARCH RESULTS BOX BECOMES SCROLLABLE ----------------
  onMount(()=> {
    function adjustScrollable() {
      scrollable = resultsElement.clientHeight !== resultsElement.scrollHeight;
    };
    const observer = new MutationObserver(adjustScrollable);
    observer.observe(
      resultsElement, 
      {childList: true, attributes: true, subtree: true}
    );
    return ()=> {
      observer.disconnect();
    }
  });

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="catalogue-interface">
  <label for="search" class="center">
    <span>Search {map[$catalogueMainType].string} by Title</span><br/>
    <input bind:this={inputElement} 
      list="items-list" 
      on:change={handleChange} 
    />
  </label>
  <datalist id="items-list">
    {#each map[$catalogueMainType].data as item (item.id)}
      <option value={item.title}></option>
    {/each}
  </datalist>
  <div id="search-results-container">

    <!-- {#if scrollable} -->
      <div class="marker marker-top center" class:scrollable
        class:highlight={markerTopHighlight}
      >
        <CaretUpIcon />
      </div>
    <!-- {/if} -->

    <ul bind:this={resultsElement} class="reg-scroll" on:scroll={handleScroll}>
      {#each searchResults as result}
        <li>
          <CatalogueModalButton data={{scope: "item", item: result}}>
            {result.title}
          </CatalogueModalButton>
        </li>
      {/each}
    </ul>

    <!-- {#if scrollable} -->
      <div class="marker marker-bottom center" class:scrollable
        class:highlight={markerBottomHighlight}
      >
        <CaretDownIcon />
      </div>
    <!-- {/if} -->
  </div>
</div>


<!-- STYLES ///////////////////////////////////////// -->
<style>
.catalogue-interface {
  background-color: hsl(0, 0%, 10%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-bottom: 20px;
  gap: 4dvh;
}
label {
  padding-top: 15px;
  flex-direction: column;
}
input {
  width: 200px;
  height: 2em;
}
#search-results-container {
  height: calc(100% - 6em);
  border: 4px solid hsl(0, 0%, 30%);
  background-color: hsl(0, 0%, 20%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.marker {
  height: 5%;
  background-color: hsl(0, 0%, 25%);
  color: hsl(0, 0%, 30%);
}
.marker.highlight {
  background-color: red;
  color: white;
}
.marker :global(svg) {
  height: 140%;
  pointer-events: none;
}
.marker-top :global(svg) {
  position: relative;
  top: 10%;
}
.marker-bottom :global(svg) {
  position: relative;
  top: -10%;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: min(30em, 80vw);
  flex: 1;
}
/* PORTRAIT ------------------------------------------- */
@media screen and (orientation: portrait) and (min-height: 600px) {
  .catalogue-interface {
    padding-bottom: 40px;
  }
}

@media screen and (orientation: portrait) and (min-height: 900px) {
  ul {
    height: calc(100% - 10em);
  }
}
</style>