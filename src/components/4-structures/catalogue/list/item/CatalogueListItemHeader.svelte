<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import CatalogueModalButton 
  from "../../../../5-elements/catalogue/CatalogueModalButton.svelte";
  import { catalogueModalData } 
  from "../../../../../dynamic/catalogueDisplay";

  $: ({ list } = $catalogueModalData);

  // PROPS -------------------------------------
  export let context;
  export let item;
  export let width;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<header 
  class:narrow={width === "narrow"} 
  class:wide={width === "wide"}
>
  <h4>
    <CatalogueModalButton data={{
      scope: "item",
      item: item
    }}>
    {#if item.titleSplit !== undefined && width === "narrow"}
      {item.titleSplit[0]}<br/>{item.titleSplit[1]}
    {:else}
      {item.title}
    {/if}
    </CatalogueModalButton>
  </h4>
  {#if item.type === "compilation" || item.type === "series"}
    <span>&middot</span>
    <CatalogueModalButton data={{
      scope: "list",
      type: "book",
      list: {from: item.type, title: item.title, items: item.books},
    }}>
      {item.books.length} books
    </CatalogueModalButton>
  {/if}
  {#if 
    item.compilations !== undefined 
    && item.compilations.length > 0
    && ((context === "modal" && list.from === "compilation") === false)
  }
    <span>&middot</span>
    <CatalogueModalButton data={{
      scope: "list",
      type: "compilation",
      list: {from: item.type, title: item.title, items: item.compilations},
    }}>
      {item.compilations.length} 
      compilation{item.compilations.length > 1 ? "s" : ""}
    </CatalogueModalButton>
  {/if}
</header>

<!-- STYLES //////////////////////////////////////// -->
<style>
.narrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1;
}
.narrow h4 {
  text-align: center;
  line-height: 1.5;
}
.narrow span {
  display: none;
}
.wide {
  display: flex;
  align-items: center;
  padding-top: 18px;
  gap: 10px;
}
p {
  text-align: center;
}
</style>