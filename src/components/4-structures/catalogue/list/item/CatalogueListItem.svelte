<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../../dynamic/viewport";
  import CatalogueListItemHeader from "./CatalogueListItemHeader.svelte";

  // PROPS -----------------------------------
  export let context;
  export let item;
  // export let width;

</script>

<!-- MARKUP ///////////////////////////////// -->
<li class:narrow={$width === "narrow"} class:wide={$width === "wide"}>
  {#if $width === "narrow"}
    <div>
      <img src={item.pic} alt={item.title} />
      <CatalogueListItemHeader {context} {item} {width} />
    </div>
    <p>{item.description}</p>
  {:else if $width === "wide"}
    <img src={item.pic} alt={item.title} />
    <div>
      <CatalogueListItemHeader {context} {item} {width} />
      <p>{item.description}</p>
    </div>
  {/if}
</li>

<!-- STYLES ///////////////////////////////////// -->
<style>
  /* GENERAL -------------------------------- */
li {
  background-color: hsl(0, 0%, 90%);
  border-style: solid;
  border-color: black;
}
img {
  width: 133px;
  object-fit: contain;
}
p {
  line-height: 1.3;
}

/* NARROW ----------------------------------- */
.narrow {
  border-width: 5px;
  border-radius: 5px;
}
.narrow > div {
  display: flex;
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
}
.narrow > p {
  padding: 20px 15px;
}

/* WIDE ------------------------------------ */
.wide {
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-right-width: 30px;
  border-left-width: 5px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
}
.wide > img {
  padding: 10px 0px;
  border-right: 5px solid black;
  background-color: black;
}
.wide > div {
  width: 35rem;
  max-width: 60dvw;
}
.wide p {
  padding: 15px 40px 30px 0px;
  width: 30rem;
  max-width: 60dvw;
}
</style>