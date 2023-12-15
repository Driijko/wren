<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import { catalogueType } from "../../../dynamic/catalogueDisplay";
  import SeriesDisplay from "./SeriesDisplay.svelte";
  import BooksDisplay from "./BooksDisplay.svelte";
  import CompilationsDisplay from "./compilations/CompilationsDisplay.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div>
  {#if $catalogueType === "series"}
    <SeriesDisplay />
  {:else if $catalogueType === "books"}
    <BooksDisplay />
  {:else if $catalogueType === "compilations"}
    <CompilationsDisplay />
  {/if}
</div>

<!-- STYLES /////////////////////////////////////////// -->
<style>
/* GENERAL ----------------------------------- */
div :global(ul) {
  /* border: 4px solid red; */
  /* background-color: white; */
  padding: 40px 10px 80px 10px;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  gap: 3dvh;
  flex-wrap: wrap;
  width: fit-content;
  justify-content: center;
}
/* PORTRAIT ------------------------------------- */
@media screen and (orientation: portrait) {
  div {
    height: 86%;
  }
}
@media screen and (orientation: portrait) and (min-width: 600px) {
  div {
    height: 93%;
  }
}

/* LANDSCAPE ---------------------------------------- */
@media screen and (orientation: landscape) {
  div {
    height: calc(100dvh - (var(--hpx) * 0.05));
    border: 4px solid red;
  }
}
</style>