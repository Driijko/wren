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
<div>
  <img src={item.pic} alt={item.title} />
  <CatalogueItemHeader {item} {context} />
</div>
<p>{item.description}</p>

<!-- STYLES ////////////////////////////////////// -->
<style>
div {
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