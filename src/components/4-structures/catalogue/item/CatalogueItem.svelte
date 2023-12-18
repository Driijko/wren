<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../dynamic/viewport";
  // import CatalogueListItemHeader from "./CatalogueListItemHeader.svelte";

  // PROPS -----------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP ///////////////////////////////// -->
{#if $width === "narrow"}
  <div class="narrow">
    <img src={item.pic} alt={item.title} />
    <!-- <CatalogueListItemHeader {context} {item} {width} /> -->
  </div>
  <p>{item.description}</p>
{:else if $width === "wide"}
  <img class="wide" src={item.pic} alt={item.title} />
  <div class="wide">
    <!-- <CatalogueListItemHeader {context} {item} {width} /> -->
    <p>{item.description}</p>
  </div>
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>
/* GENERAL -------------------------------- */
img {
  width: 133px;
  object-fit: contain;
}
p {
  line-height: 1.3;
}

/* NARROW ----------------------------------- */
.narrow {
  display: flex;
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
}
.narrow + p {
  padding: 20px 15px;
}

/* WIDE ------------------------------------ */
img.wide {
  padding: 10px 0px;
  border-right: 5px solid black;
  background-color: black;
}
div.wide {
  width: 35rem;
  max-width: 60dvw;
}
.wide p {
  padding: 15px 40px 30px 0px;
  width: 30rem;
  max-width: 60dvw;
}
</style>