<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import { currentPage } from "../../../../dynamic/currentPage";
  import SiteMenuModalToggleButton 
  from "../../../5-elements/interface/SiteMenuModalToggleButton.svelte";

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
      buttons = config0;
    };
  };
  
</script>

<!-- MARKUP //////////////////////////////////////// -->
<div>
  <SiteMenuModalToggleButton />
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
div {
  display: flex;
  justify-content: center;
  background-color: black;
  border: 4px solid red;
  height: 8%;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
div :global(button) {
  height: 100%;
  color: white;
  padding: 1.5%;
  border-color: transparent;
  border-style: solid;
  border-width: 0.15vw;
}
/* TRANSITIONS -------------------------------- */
@media(hover: hover) {
  div :global(button svg) {
    transition: transform 0.3s ease-out;
  }
  div :global(button:hover svg), div :global(button:focus-visible svg) {
    transform: scale(1.3);
  }
}
</style>