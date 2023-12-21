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
  let searchResults = [];

  // EVENT HANDLERS ------------------------------------------
  function handleChange(string) {
    searchResults = map[$catalogueMainType].array.map(item => item.title)
      .filter(title => title.includes(string))
  };

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<div class="fill">
  <CatalogueMainTypeMenu />
  <label for="search">
    Search {map[$catalogueMainType].string} by Title
    <input autofocus list="items-list" on:change={handleChange} />
  </label>
  <datalist id="items-list">
    {#each map[$catalogueMainType].array as item (item.id)}
      <option value={item.title}></option>
    {/each}
  </datalist>
</div>

<!-- STYLES ///////////////////////////////////////// -->
<style>
div {
  background-color: hsl(0, 0%, 10%);
  color: white;
}
h2 {
  text-align: center;
  padding: 5px;
}
input {
  width: 300px;
  height: 100px;
}
</style>