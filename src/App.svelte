<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import OpeningRouter from "./components/1-site/routers/OpeningRouter.svelte";
  import updateOnResize from "./scripts/viewport/updateOnResize";

  // EVENT HANDLERS ---------------------------------------------
  updateOnResize();

</script>

<!-- MARKUP //////////////////////////////////////////////////// -->
<!-- <OpeningRouter /> -->
<div class="vp">
  <div class="uarr"></div>
</div>

<!-- STYLES ////////////////////////////////////////////////// -->
<style>
div.vp {
  background-color: blue;
}
div.uarr {
  background-color: red;
  width: var(--wpx);
  height: var(--hpx);
}
</style>