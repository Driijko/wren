<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import { catalogueType } from "../../../dynamic/catalogueDisplay";
  import SeriesDisplay from "./SeriesDisplay.svelte";
  import BooksDisplay from "./BooksDisplay.svelte";
  import CompilationsDisplay from "./compilations/CompilationsDisplay.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="reg-scroll">
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
</style>