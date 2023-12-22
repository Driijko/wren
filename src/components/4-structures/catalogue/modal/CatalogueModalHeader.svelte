<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { width } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueModalButtonCloser 
  from "../../../5-elements/catalogue/CatalogueModalButtonCloser.svelte";

  $: ({ scope, type, from, title, item } = $catalogueModalData);

  // TYPE TO HEADER MAP -------------------------------
  const map = {
    series: "SERIES", book: "BOOK", compilation: "COMPILATION"
  }

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<header class:wide={$width === "wide"}>
  <h4>
    {#if scope === "list"}
      {#if type === "book"}
        {#if from === "series"}
          All books from the<br/> {title} series
        {:else if from === "compilation"}
          All books included in<br/> {title}
        {/if}
      {:else if type === "compilation"}
        {#if from === "series"}
          All compilations featuring<br/>
          the {title} series
        {:else if from === "book"}
          All compilations which include<br/>
          the book {title}
        {/if}
      {/if}
    {:else if scope === "item"}
      {map[item.type]}<br/> {item.title}
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
  height: 64px;
}
.wide {
  font-size: 21px;
}
.wide br {
  display: none;
}
h4 {
  flex: 1;
  color: white;
}
header :global(button) {
  width: 60px;
  height: 60px;
  background-color: hsl(0, 0%, 100%);
  padding: 13px;
}
</style>