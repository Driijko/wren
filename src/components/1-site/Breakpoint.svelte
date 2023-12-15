<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { breakpoint } from "../../dynamic/viewport";
  import { interfaceModal } from "../../dynamic/interface";
  import Panel from "./interface/breakpoint/Panel.svelte";
  import FlippableBackground 
  from "../5-elements/FlippableBackground.svelte";
  import ContentRouter from "./routers/ContentRouter.svelte";
  import InterfaceModal from "./interface/breakpoint/InterfaceModal.svelte";
  import SiteInterfaceSelect 
  from "./interface/select/SiteInterfaceSelect.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->

<!-- Background ---------------- -->
<div class="vp background-container">
  <FlippableBackground 
    picNum="2"
    duration={50}
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
    <SiteInterfaceSelect />
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
  /* border: 4px solid red; */
}
.content-container {
  /* flex: 1; */
  /* opacity: 0;
  animation: fade-in 2s 2s ease-out forwards; */
}
.mobile-container > .content-container {
  position: relative;
  height: calc(100dvh - (var(--hpx) * 0.09));
  width: 100%;
}
.desktop-container > .content-container {
  height: 100%;
  width: calc(100vw - 40dvh);
  /* border: 4px solid green; */
}
</style>