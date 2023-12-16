<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import { catalogueType } from "../../../dynamic/catalogueDisplay";
  import SeriesDisplay from "./SeriesDisplay.svelte";
  import BooksDisplay from "./BooksDisplay.svelte";
  import CompilationsDisplay from "./CompilationsDisplay.svelte";

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
  padding: 40px 10px 80px 10px;
  display: flex;
  gap: 3dvh;
  flex-wrap: wrap;
  justify-content: center;
}
div :global(li) {
  background-color: hsl(0, 0%, 90%);
  border-style: solid;
  border-color: black;
}
div :global(img) {
  width: 133px;
  object-fit: contain;
}
div :global(.description) {
  line-height: 1.3;
}

/* NARROW VP ----------------------------------- */
div :global(.narrow) {
  border-width: 5px;
  border-radius: 5px;
}
div :global(.narrow > div) {
  display: flex;
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
}
div :global(.narrow h4) {
  text-align: center;
  line-height: 1.5;
}
div :global(.narrow > div > div) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
}
div :global(.narrow > p) {
  padding: 20px 15px;
}

/* WIDER VP ------------------------------------ */
div :global(.wide) {
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-right-width: 30px;
  border-left-width: 5px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
}
div :global(.wide > img) {
  padding: 10px 0px;
  border-right: 5px solid black;
  background-color: black;
}
div :global(.wide > div:nth-child(2)) {
  width: 35rem;
  max-width: 60dvw;
}
div :global(.wide > div > div) {
  display: flex;
  align-items: center;
  padding-top: 18px;
  gap: 10px;
}
div :global(.wide .description) {
  padding: 15px 40px 30px 0px;
  width: 30rem;
  max-width: 60dvw;
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
  }
}
</style>