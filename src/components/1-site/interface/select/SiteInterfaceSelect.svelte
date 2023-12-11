<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { quintOut, quintIn, sineOut,  } from "svelte/easing";
  import { flip } from "svelte/animate";
  import shift from "../../../../scripts/transitions/shift";
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
  import FilterInterfaceSelectButton 
  from "../../../5-elements/interface/FilterInterfaceSelectButton.svelte";
  import SortInterfaceSelectButton
  from "../../../5-elements/interface/SortInterfaceSelectButton.svelte";

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
  };
  const filterButton = {
    id: 4,
    component: FilterInterfaceSelectButton,
    interface: "filter"
  };
  const sortButton = {
    id: 5,
    component: SortInterfaceSelectButton,
    interface: "sort"
  };

  // INTERFACE ARRAY CONFIGURATIONS------------------------------
  const config0 = [siteMenuToggleButton];
  const config1 = [siteMenuSelectButton];
  const config2 = [
    searchButton, 
    filterButton, 
    sortButton,
    siteMenuSelectButton
  ];
  const config3 = [
    searchButton, 
    filterButton, 
    sortButton, 
    siteMenuSelectButton, 
    closerButton
  ];
  const config4 = [
    siteMenuSelectButton, 
    searchButton, 
    filterButton,
    sortButton
  ];


  // INTERFACE ARRAY --------------------------------------
  let buttons = [];

  // TRANSITIONS ---------------------------------------
  let transitions;

  // RESPONSIVE ARRAY CONFIGURATION -----------------------------
  $: if ($breakpoint === "mobile") {
    transitions = {
      animate: {
        duration: 250,
        // duration: 700,
        delay: 300,
        easing: sineOut
      },
      in: {
        duration: 1000,
        x: -window.innerWidth,
        easing: quintOut
      },
      out: {
        duration: 500,
        x: -window.innerWidth,
        easing: quintIn
      }
    };

    if ($currentPage === "catalogue") {
      if ($interfaceModal) {
        buttons = config3;
      } else {
        buttons = config2;
      };
    } else {
      buttons = config0;
    };
  } else if ($breakpoint === "desktop") {
    if ($currentPage === "catalogue") {
      buttons = config4;
    } else {
      buttons = config1;
    };
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
      animate:flip="{transitions.animate}" 
      in:shift="{transitions.in}" 
      out:shift="{transitions.out}"
    >
      <svelte:component this={button.component} />
    </li>
  {/each}
</InterfaceSelect>