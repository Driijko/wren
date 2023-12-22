<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import books from "../../../../static/books";
  import series from "../../../../static/series";
  import compilations from "../../../../static/compilations";
  import { catalogueMainType } from "../../../../dynamic/catalogueDisplay";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";
  import CatalogueModalButton 
  from "../../../5-elements/catalogue/CatalogueModalButton.svelte";

  // TYPE TO STRING AND DATA ARRAY MAP ----------------------------------
  const map = {
    books: { string: "Books", array: books},
    series: { string: "Series", array: series },
    compilations: { string: "Compilations", array: compilations}
  };

  // LOCAL STATE ----------------------------------------------
  $: searchResults = [];
  let currentType = $catalogueMainType;

  // INPUT ELEMENT ------------------------------------
  let inputElement;

  // EVENT HANDLERS ------------------------------------------
  function handleChange(e) {
    searchResults = map[$catalogueMainType].array
      .filter(item => item.title.includes(e.target.value));
    inputElement.blur();
  };

  // REACTIVE RESETTING OF INPUT ELEMENT AND RESULTS --------------------
  $: if (currentType !== $catalogueMainType) {
    currentType = $catalogueMainType;
    inputElement.value = "";
    // inputElement.focus();
    searchResults = [];
  };

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="main-container">
  <label for="search" class="center">
    <span>Search {map[$catalogueMainType].string} by Title</span><br/>
    <input bind:this={inputElement} list="items-list" on:change={handleChange} />
  </label>
  <datalist id="items-list">
    {#each map[$catalogueMainType].array as item (item.id)}
      <option value={item.title}></option>
    {/each}
  </datalist>
  <ul class="reg-scroll">
    {#each searchResults as result}
      <li>
        <CatalogueModalButton data={{scope: "item", item: result}}>
          {result.title}
        </CatalogueModalButton>
      </li>
    {/each}
  </ul>
</div>


<!-- STYLES ///////////////////////////////////////// -->
<style>
.main-container {
  background-color: hsl(0, 0%, 10%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
}
label {
  padding-top: 15px;
  flex-direction: column;
}
input {
  width: 200px;
  height: 2em;
}
ul {
  height: calc(100% - 6em);
  border: 4px solid hsl(0, 0%, 30%);
  background-color: hsl(0, 0%, 20%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
}
/* PORTRAIT ------------------------------------------- */
@media screen and (orientation: portrait) and (max-width: 600px) {
.main-container {
  height: 86%;
}
}

@media screen and (orientation: portrait) and (min-width: 600px) {
.main-container {
  height: 93%;
}
}

/* LANDSCAPE --------------------------------------------- */
@media screen and (orientation: landscape) {
.main-container {
  height: calc(100% - (var(--hpx) * 0.05));
}
}
</style>