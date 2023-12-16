<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { catalogueModalData } from "../../../dynamic/catalogueDisplay";
  import CatalogueModalButtonCloser 
  from "../../5-elements/catalogue/CatalogueModalButtonCloser.svelte";

  const { type, specifier } = $catalogueModalData;

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<header>
  <h4>
    {#if type === "books"}
      All Books from the {specifier[0]} {specifier[1]}
    {/if}
  </h4>
  <CatalogueModalButtonCloser />
</header>

<!-- STYLES ////////////////////////////////////////// -->
<style>
header {
  border-bottom: 4px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  background-color: black;
}
h4 {
  flex: 1;
  color: white;
}
header :global(button) {
  width: 40px;
  height: 40px;
  /* border-left: 5px solid white; */
  background-color: hsl(0, 0%, 100%);
  padding: 3px;
}
</style>