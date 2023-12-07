<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import { currentPage } from "../../../../dynamic/currentPage";
  import { currentInterfaceSite } from "../../../../dynamic/interface";
  import SiteMenuModalToggleButton 
  from "../../../5-elements/interface/SiteMenuModalToggleButton.svelte";

  // INTERFACE ELEMENTS -----------------------------------------
  const siteMenuToggleButton = {
    id: 0, 
    component: SiteMenuModalToggleButton,
    interface: "siteMenu"
  };

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

<!-- MARKUP ////////////////////////////////////// -->
{#each buttons as button (button.id)}
  <li 
    class="center" 
    class:selected={$currentInterfaceSite === button.interface}
  >
    <svelte:component this={button.component} />
  </li>
{/each}
