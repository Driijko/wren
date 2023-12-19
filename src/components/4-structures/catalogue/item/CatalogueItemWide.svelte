<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import CatalogueItemHeader from "./CatalogueItemHeader.svelte";

  // PROPS ---------------------------------
  export let item;
  export let context;

</script>

<!-- MARKUP /////////////////////////////////////// -->
<img src={item.pic} alt={item.title} />
<div>
  <CatalogueItemHeader {item} {context} />
  <p>{item.description}</p>
</div>

<!-- STYLES ///////////////////////////////// -->
<style>
img {
  padding: 10px 0px;
  border-right: 5px solid black;
  background-color: black;
}
div {
  width: 35rem;
  max-width: 60dvw;
}
p {
  padding: 15px 40px 30px 0px;
  width: 30rem;
  max-width: 60dvw;
}
</style>