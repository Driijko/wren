<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { setPageExit } from "../../../dynamic/currentPage";

  let fadeOut = false;

  setPageExit(()=> fadeOut = true, 1000);

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div class="fill" class:fadeOut>
  <slot />
</div>

<!-- STYLES ////////////////////////////////////// -->
<style>
div {
  animation: fade-in 1s ease-out forwards;
}
.fadeOut {
  animation: fade-out 1s ease-out forwards;
}
</style>