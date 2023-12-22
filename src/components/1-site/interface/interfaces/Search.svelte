<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { catalogueMainType, map } 
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";
  import CatalogueModalButton 
  from "../../../5-elements/catalogue/CatalogueModalButton.svelte";

  // LOCAL STATE ----------------------------------------------
  $: searchResults = [];
  let currentType = $catalogueMainType;

  // INPUT ELEMENT ------------------------------------
  let inputElement;

  // EVENT HANDLERS ------------------------------------------
  function handleChange(e) {
    searchResults = map[$catalogueMainType].static
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
<div class="catalogue-interface">
  <label for="search" class="center">
    <span>Search {map[$catalogueMainType].string} by Title</span><br/>
    <input bind:this={inputElement} list="items-list" on:change={handleChange} />
  </label>
  <datalist id="items-list">
    {#each map[$catalogueMainType].static as item (item.id)}
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
ul {
  height: calc(100% - 6em);
  border: 4px solid hsl(0, 0%, 30%);
  background-color: hsl(0, 0%, 20%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  width: min(30em, 80vw);
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