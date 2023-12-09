<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import { currentPage } from "../../../../dynamic/currentPage";
  import { interfaceModal, currentInterfaceSite } 
  from "../../../../dynamic/interface";
  import InterfaceSelect from "./InterfaceSelect.svelte";
  import SiteMenuSelectButton 
  from "../../../5-elements/interface/SiteMenuSelectButton.svelte";
  import SiteMenuModalToggleButton 
  from "../../../5-elements/interface/SiteMenuModalToggleButton.svelte";
  import InterfaceModalCloserButton 
  from "../../../5-elements/interface/InterfaceModalCloserButton.svelte";
  import SearchInterfaceSelectButton 
  from "../../../5-elements/interface/SearchInterfaceSelectButton.svelte";

  // INTERFACE ELEMENTS -----------------------------------------
  const siteMenuToggleButton = {
    id: 0, 
    component: SiteMenuModalToggleButton,
    interface: "siteMenu"
  };
  const siteMenuSelectButton = {
    id: 1,
    component: SiteMenuSelectButton,
    interface: "siteMenu",
  };
  const closerButton = {
    id: 2,
    component: InterfaceModalCloserButton,
  };
  const searchButton = {
    id: 3,
    component: SearchInterfaceSelectButton,
    interface: "search",
  }

  // INTERFACE ARRAY CONFIGURATIONS------------------------------
  const config0 = [siteMenuToggleButton];
  const config1 = [siteMenuSelectButton];
  const config2 = [searchButton, siteMenuSelectButton];
  const config3 = [searchButton, siteMenuSelectButton, closerButton];


  // INTERFACE ARRAY --------------------------------------
  let buttons = [];

  // RESPONSIVE ARRAY CONFIGURATION -----------------------------
  $: if ($breakpoint === "mobile") {
    if ($currentPage === "catalogue") {
      if ($interfaceModal) {
        buttons = config3;
      } else {
        buttons = config2;
      }
    } else {
      buttons = config0;
    }
  } else {
    buttons = config1;
  };

</script>

<!-- MARKUP ////////////////////////////////////// -->
<InterfaceSelect className="site">
  {#each buttons as button (button.id)}
    <li 
      class="center" 
      class:selected={
        $currentInterfaceSite === button.interface
        && ($breakpoint === "mobile" ? $interfaceModal : true)
      }
    >
      <svelte:component this={button.component} />
    </li>
  {/each}
</InterfaceSelect>