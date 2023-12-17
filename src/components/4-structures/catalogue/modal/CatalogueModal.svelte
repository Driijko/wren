<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { fade } from "svelte/transition";
  import { catalogueModal, catalogueModalData } 
  from "../../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../../dynamic/viewport";
  import CatalogueModalHeader from "./CatalogueModalHeader.svelte";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $catalogueModal}
  <dialog transition:fade class="fill" open >
    <CatalogueModalHeader />
    <ul class="reg-scroll">
      {#if $vpwidth < 500}
        {#each $catalogueModalData.items as item}
          <CatalogueItemNarrow type="book" {item} />
        {/each}
      {:else if $vpwidth >= 500}
        {#each $catalogueModalData.items as item}
          <CatalogueItemWide type="book" {item} />
        {/each}
      {/if}
    </ul>
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
ul {
  flex: 1;
  /* color: white; */
}
/* GENERAL ----------------------------------- */
dialog ul {
  padding: 40px 10px 80px 10px;
  display: flex;
  gap: 3dvh;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
}
dialog :global(li) {
  background-color: hsl(0, 0%, 90%);
  border-style: solid;
  border-color: black;
}
dialog :global(img) {
  width: 133px;
  object-fit: contain;
}
dialog :global(.description) {
  line-height: 1.3;
}

/* NARROW VP ----------------------------------- */
dialog :global(.narrow) {
  border-width: 5px;
  border-radius: 5px;
}
dialog :global(.narrow > div) {
  display: flex;
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
}
dialog :global(.narrow h4) {
  text-align: center;
  line-height: 1.5;
}
dialog :global(.narrow > div > div) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
}
dialog :global(.narrow > p) {
  padding: 20px 15px;
}

/* WIDER VP ------------------------------------ */
dialog :global(.wide) {
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-right-width: 30px;
  border-left-width: 5px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  /* max-height: 200px; */
}
dialog :global(.wide > img) {
  padding: 10px 0px;
  border-right: 5px solid black;
  background-color: black;
}
dialog :global(.wide > div:nth-child(2)) {
  width: 35rem;
  max-width: 60dvw;
}
dialog :global(.wide > div > div) {
  display: flex;
  align-items: center;
  padding-top: 18px;
  gap: 10px;
}
dialog :global(.wide .description) {
  padding: 15px 40px 30px 0px;
  width: 30rem;
  max-width: 60dvw;
}
</style>