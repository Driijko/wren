<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { catalogueModal, openCatalogueModal, setCatalogueModalData } 
  from "../../../dynamic/catalogueDisplay";

  // PROPS ------------------------------------
  export let data;
  
  // EVENT HANDLERS -------------------------------
  function handleClick() {
    if ($catalogueModal === false) {
      openCatalogueModal();
    };
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