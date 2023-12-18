<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import books from "../../../static/books";
  import series from "../../../static/series";
  import compilations from "../../../static/compilations";
  import getItemsById from "../../../static/getItemsById";
  import { catalogueModal, openCatalogueModal, setCatalogueModalData } 
  from "../../../dynamic/catalogueDisplay";

  // PROPS ------------------------------------
  export let data;

  // IDS TO ITEMS MAP --------------------------------
  const map = {
    book: ids => getItemsById(ids, books),
    series: ids => getItemsById(ids, series),
    compilation: ids => getItemsById(ids, compilations),
  };
  
  // EVENT HANDLERS -------------------------------
  function handleClick() {
    if ($catalogueModal === false) {
      openCatalogueModal();
    };
    if (data.list !== undefined) {
      data.list.items = map[data.type](data.list.items);
    }
    setCatalogueModalData(data);
  };

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<button on:click={handleClick}>
  <slot />
</button>

<!-- STYLES ///////////////////////////////////// -->
<style>
button {
  text-decoration: underline;
}
</style>