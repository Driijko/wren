<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import CatalogueItemHeader from "./CatalogueItemHeader.svelte";
  
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
p {
  padding: 20px 15px;
}
</style>