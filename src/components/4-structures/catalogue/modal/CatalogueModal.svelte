<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { fade } from "svelte/transition";
  import { catalogueModal, catalogueModalData } 
  from "../../../../dynamic/catalogueDisplay";
  import CatalogueModalHeader from "./CatalogueModalHeader.svelte";
  import CatalogueList from "../CatalogueList.svelte";
  import CatalogueItem from "../item/CatalogueItem.svelte";

  $: ({ scope, items, item } = $catalogueModalData);

  // LOCAL CONSTANT ------------------------------------
  const context = "modal";

</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $catalogueModal}
  <dialog transition:fade class="fill" open >
    <CatalogueModalHeader />
    {#if scope === "list"}
      <CatalogueList {context} {items} />
    {:else if scope === "item"}
      <CatalogueItem {item} {context} />
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