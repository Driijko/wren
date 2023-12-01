<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";
  import Toolbar from "./interface/toolbar/Toolbar.svelte";
  import Panel from "./interface/Panel.svelte";
  import FlippableBackground from "../5-elements/FlippableBackground.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->

<!-- Background ---------------- -->
<div class="vp">
  <FlippableBackground src={{
      portrait: "./backgrounds/back1-v.webp",
      landscape: "./backgrounds/back1-h.webp"
    }}
    duration={20}
  ></FlippableBackground>
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
    <Panel />
    <div class="content-container">

    </div>
  </div>
{/if}




<!-- STYLES /////////////////////////////////////////// -->
<style>
.mobile-container {
  display: flex;
  flex-direction: column;
}
.desktop-container {
  display: flex;
}
.content-container {
  flex: 1;
  border: 4px solid green;
}
</style>