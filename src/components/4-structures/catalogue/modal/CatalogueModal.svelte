<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { fade } from "svelte/transition";
  // import books from "../../../../static/books";
  // import series from "../../../../static/series";
  // import compilations from "../../../../static/compilations";
  // import getItemsById from "../../../../static/getItemsById";
  import { catalogueModal, catalogueModalData } 
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueModalHeader from "./CatalogueModalHeader.svelte";
  import CatalogueList from "../list/CatalogueList.svelte";
  import CatalogueItem from "../CatalogueItem.svelte";

  $: ({ scope, list, item } = $catalogueModalData);

  // LOCAL CONSTANT ------------------------------------
  const context = "modal";

  // TYPE TO FUNCTION MAP -----------------------------
  // const map = {
  //   book: ids => getItemsById(ids, books),
  //   series: ids => getItemsById(ids, series),
  //   compilation: ids => getItemsById(ids, compilations),
  // };

</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $catalogueModal}
  <dialog transition:fade class="fill" open >
    <CatalogueModalHeader />
    {#if scope === "list"}
      <CatalogueList {context} items={list.items} />
      <!-- <CatalogueList {context} items={map[type](list.items)} /> -->
    {:else if scope === "item"}
      <CatalogueItem {item} />
    {/if}
  </dialog>
{/if}

<!-- STYLES //////////////////////////////////////// -->
<style>
dialog {
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(0, 0%, 20%);
  display: flex;
  flex-direction: column;
}
</style>