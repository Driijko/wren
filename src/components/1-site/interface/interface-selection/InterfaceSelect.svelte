<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import { currentPage } from "../../../../dynamic/currentPage";
  import SiteMenuModalToggleButton 
  from "../../../5-elements/interface/SiteMenuModalToggleButton.svelte";
  import InterfaceSelectionMobile from "./InterfaceSelectionMobile.svelte";

  // INTERFACE ELEMENTS -----------------------------------------
  const siteMenuToggleButton = {id: 0, component: SiteMenuModalToggleButton};

  // INTERFACE ARRAY CONFIGURATIONS------------------------------
  const config0 = [];
  const config1 = [siteMenuToggleButton];

  // INTERFACE ARRAY --------------------------------------
  let buttons = [];

  // RESPONSIVE ARRAY CONFIGURATION -----------------------------
  $: if ($breakpoint === "mobile") {
    if ($currentPage === "catalogue") {
      buttons = config0;
    } else {
      buttons = config1;
    };
  } else {
    if ($currentPage === "catalogue") {
      buttons = config0;
    } else {
      buttons = config1;
    };
  };
  
</script>

<!-- MARKUP //////////////////////////////////////// -->
<menu class:open={buttons.length > 0}>
  {#each buttons as button (button.id)}
    <li class="center">
      <svelte:component this={button.component} />
    </li>
  {/each}
</menu>

<!-- STYLES ////////////////////////////////////////// -->
<style>
/* GENERAL -------------------------------------- */
menu {
  display: flex;
  width: 100%;
  /* border: 4px solid blue; */
}
li {
  height: 100%;
  /* border: 1px solid green; */
}

/* MOBILE ---------------------------------------- */
@media (orientation:portrait) {
menu {
  justify-content: center;
  background-color: black;
  height: 8%;
  border-top-color: white;
  border-top-style: solid;
  border-top-width: 0.3dvh;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
li {
  width: 8dvh;
}
li :global(button) {
  height: 100%;
  color: white;
  padding: 20%;
}
}

/* DESKTOP ------------------------------------- */
@media (orientation: landscape) {
menu {
  height: 0%;
  transition-property: height;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  overflow: hidden;
}
menu.open {
  height: 10%;
}
li {
  padding-top: 3%;
  width: 25%;
}
li :global(button) {
  padding: 30%;
  border-radius: 50% 50% 0 0;
  background-color: yellow;
}
}

/* TRANSITIONS -------------------------------- */
@media(hover: hover) {
  li :global(button svg) {
    transition: transform 0.3s ease-out;
  }
  li :global(button:hover svg), li :global(button:focus-visible svg) {
    transform: scale(1.4);
  }
}
</style>