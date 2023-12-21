<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import { width } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueModalButton 
  from "../../../5-elements/catalogue/CatalogueModalButton.svelte";

  $: ({ scope, from, type } = $catalogueModalData);

  // PROPS -------------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<header 
  class:narrow={$width === "narrow"} 
  class:wide={$width === "wide"}
>

  <!-- MAIN HEADER ------------------------------------- -->
  <h4>
    {#if scope === "item"}
      {#if item.titleSplit !== undefined && $width === "narrow"}
        {item.titleSplit[0]}<br/>{item.titleSplit[1]}
      {:else}
        {item.title}
      {/if}
    {:else}
      <CatalogueModalButton data={{
        scope: "item",
        item: item, 
      }}>
      {#if item.titleSplit !== undefined && $width === "narrow"}
        {item.titleSplit[0]}<br/>{item.titleSplit[1]}
      {:else}
        {item.title}
      {/if}
      </CatalogueModalButton>
    {/if}
  </h4>

  <!-- SERIES ----------------------------------------- -->
  {#if 
    scope === "item" 
    && (item.type === "book" || item.type === "compilation")
    && item.series !== undefined
  }
    <span>&middot</span>
    <CatalogueModalButton data={{
      scope: "list",
      type: "series",
      from: item.type,
      title: item.title,
      items: item.series,
    }}></CatalogueModalButton>
  {/if}

  <!-- BOOKS ----------------------------------- -->
  {#if item.type === "compilation" || item.type === "series"}
    <span>&middot</span>
    <CatalogueModalButton data={{
      scope: "list",
      type: "book",
      from: item.type,
      title: item.title,
      items: item.books,
    }}>
      {item.books.length} books
    </CatalogueModalButton>
  {/if}

  <!-- COMPILATIONS -------------------------- -->
  {#if 
    item.compilations !== undefined 
    && item.compilations.length > 0
    && ((
        context === "modal" 
        && scope === "list"
        && from === "compilation"
      ) === false)
  }
    <span>&middot</span>
    <CatalogueModalButton data={{
      scope: "list",
      type: "compilation",
      from: item.type,
      title: item.title,
      items: item.compilations,
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