<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";
  import Toolbar from "./interface/toolbar/Toolbar.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->

<!-- Background ---------------- -->
<div class="vp">
</div>

<!-- MOBILE --------------------- -->
{#if $breakpoint === "mobile"}
  <div class="vp-layer mobile-container">
    <div class="content-container">

    </div>
    <Toolbar />
  </div>

<!-- DESKTOP -------------------- -->
{:else if $breakpoint === "desktop"}
  <div class="vp-layer desktop-container">
    
  </div>
{/if}




<!-- STYLES /////////////////////////////////////////// -->
<style>
.mobile-container {
  display: flex;
  flex-direction: column;
}
.content-container {
  flex: 1;
  border: 4px solid green;
}
</style>