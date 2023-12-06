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
      buttons = config0;
    };
  };
  
</script>

<!-- MARKUP //////////////////////////////////////// -->
{#if ($breakpoint === "mobile")}
  <InterfaceSelectionMobile {buttons} />
{/if}

<!-- STYLES ////////////////////////////////////////// -->
<style>


</style>