<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import { width } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueModalButton 
  from "../../../5-elements/catalogue/CatalogueModalButton.svelte";

  $: ({ scope, type, list } = $catalogueModalData);

  // PROPS -------------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<header 
  class:narrow={$width === "narrow"} 
  class:wide={$width === "wide"}
>
  <h4>
    <CatalogueModalButton data={{
      scope: "item",
      item: item, 
      themes: item.themes
    }}>
    {#if item.titleSplit !== undefined && $width === "narrow"}
      {item.titleSplit[0]}<br/>{item.titleSplit[1]}
    {:else}
      {item.title}
    {/if}
    </CatalogueModalButton>
  </h4>
  {#if 
    scope === "item" 
    && (type === "book" || type === "compilation")
    && item.series !== undefined
  }
    <span>&middot</span>
    <CatalogueModalButton data={{
      scope: list,
      type: "series",
      list: {from: item.type, title: item.title, items: item.series},
    }}></CatalogueModalButton>
  {/if}
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
    && ((
        context === "modal" 
        && list !== undefined 
        && list.from === "compilation"
      ) === false)
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
header {
  display: flex;
  align-items: center;
}
.narrow {
  flex-direction: column;
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
  padding-top: 18px;
  gap: 10px;
}
</style>