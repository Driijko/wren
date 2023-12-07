<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";
  import { interfaceModal } from "../../dynamic/interface";
  import InterfaceSelect 
  from "./interface/interface-select/InterfaceSelect.svelte";
  import Panel from "./interface/Panel.svelte";
  import FlippableBackground from "../5-elements/FlippableBackground.svelte";
  import ContentRouter from "./routers/ContentRouter.svelte";
  import InterfaceModal from "./interface/InterfaceModal.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->

<!-- Background ---------------- -->
<div class="vp background-container">
  <FlippableBackground 
    picNum="1"
    duration={30}
  ></FlippableBackground>
</div>

<!-- MOBILE --------------------- -->
{#if $breakpoint === "mobile"}
  <div class="vp-layer mobile-container">
    <div class="content-container">
      <ContentRouter />
      {#if $interfaceModal}
        <InterfaceModal />
      {/if}
    </div>
    <InterfaceSelect />
  </div>

<!-- DESKTOP -------------------- -->
{:else if $breakpoint === "desktop"}
  <div class="vp-layer desktop-container">
    <Panel />
    <div class="content-container">
      <ContentRouter />
    </div>
  </div>
{/if}




<!-- STYLES /////////////////////////////////////////// -->
<style>
.background-container {
  background-color: black;
  /* opacity: 0;
  animation: fade-in 2s ease-out forwards; */
}
.mobile-container {
  display: flex;
  flex-direction: column;
}
.desktop-container {
  display: flex;
}
.content-container {
  position: relative;
  flex: 1;
  /* opacity: 0;
  animation: fade-in 2s 2s ease-out forwards; */
}
</style>