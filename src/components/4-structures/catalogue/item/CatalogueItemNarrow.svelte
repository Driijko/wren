<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import CatalogueItemHeader from "./CatalogueItemHeader.svelte";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";

  $: ({ scope } = $catalogueModalData);
  
  // PROPS ---------------------------------------
  export let item;
  export let context;

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div class="top">
  <img src={item.pic} alt={item.title} />
  <CatalogueItemHeader {item} {context} />
</div>
{#if scope === "item"}
  <div>
    <h5>Synopsis</h5>
    <p>{item.description}</p>
  </div>
{:else}
  <p>{item.description}</p>
{/if}

<!-- STYLES ////////////////////////////////////// -->
<style>
.top {
  display: flex;
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
}
img {
  width: 133px;
  object-fit: contain;
}
p {
  padding: 20px 15px;
  background-color: white;
  color: black;
  line-height: 1.3;
}
</style>