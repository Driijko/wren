<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { catalogueModalData } from "../../../dynamic/catalogueDisplay";
  import CatalogueModalButtonCloser 
  from "../../5-elements/catalogue/CatalogueModalButtonCloser.svelte";

  const { scope, type, list } = $catalogueModalData;

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<header>
  <h4>
    {#if scope === "list"}
      {#if type === "book"}
        {#if list.type === "series"}
          All books from the<br/> {list.title} series
        {:else if list.type === "compilation"}
          All books included in the<br/> {list.title} compilation
        {/if}
      {/if}
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
  line-height: 1.5;
}
h4 {
  flex: 1;
  color: white;
}
header :global(button) {
  width: 60px;
  height: 60px;
  /* border-left: 5px solid white; */
  background-color: hsl(0, 0%, 100%);
  padding: 13px;
}
</style>