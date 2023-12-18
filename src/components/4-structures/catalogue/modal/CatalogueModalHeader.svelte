<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { vpwidth } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueModalButtonCloser 
  from "../../../5-elements/catalogue/CatalogueModalButtonCloser.svelte";
    import { interfaceModal } from "../../../../dynamic/interface";

  $: ({ scope, type, list } = $catalogueModalData);

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<header class:bigger={$vpwidth >= 500}>
  <h4>
    {#if scope === "list"}
      {#if type === "book"}
        {#if list.from === "series"}
          All books from the<br/> {list.title} series
        {:else if list.from === "compilation"}
          All books included in<br/> {list.title}
        {/if}
      {:else if type === "compilation"}
        {#if list.from === "series"}
          All compilations which include<br/>
          books from the {list.title} series
        {:else if list.from === "book"}
          All compilations which include<br/>
          the book {list.title}
        {/if}
      {/if}
    {:else if scope === "item"}
      <p>item</p>
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
.bigger {
  font-size: 21px;
}
.bigger br {
  display: none;
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