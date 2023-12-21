<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueItemHeader from "./CatalogueItemHeader.svelte";

  $: ({ scope } = $catalogueModalData);

  // PROPS ---------------------------------
  export let item;
  export let context;

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div class="container">
  <img src={item.pic} alt={item.title} />
  <div class="right">
    <CatalogueItemHeader {item} {context} />
    <p>{item.description}</p>
  </div>  
</div>

<!-- STYLES ///////////////////////////////// -->
<style>
.container {
  display: flex;
  gap: 20px;
}
img {
  width: 133px;
  object-fit: contain;
}
.right {
  width: 35rem;
  max-width: 60dvw;
}
p {
  padding: 15px 40px 30px 0px;
  width: 30rem;
  max-width: 60dvw;
  line-height: 1.3;
}
</style>