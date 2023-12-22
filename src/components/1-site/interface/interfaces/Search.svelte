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

  // EVENT HANDLERS ------------------------------------------
  function handleChange(e) {
    // searchResults = map[$catalogueMainType].array.map(item => item.title)
    //   .filter(title => title.includes(e.target.value));
    searchResults = map[$catalogueMainType].array.filter(item => item.title.includes(e.target.value));
    console.log(searchResults);
  };

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<div class="fill">
  <div>
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
  <div class="results">
    <ul>
      {#each searchResults as result}
        <li>
          <CatalogueModalButton data={{scope: "item", item: result}}>
            {result.title}
          </CatalogueModalButton>
        </li>
      {/each}
    </ul>
  </div>
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
.results {
  border: 4px solid green;
  /* height: 400px; */
}
</style>