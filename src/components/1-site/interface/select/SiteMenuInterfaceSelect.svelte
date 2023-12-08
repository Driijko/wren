<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import { interfaceModal, currentInterfaceSiteMenu } 
  from "../../../../dynamic/interface";

  // INTERFACE ELEMENTS -----------------------------------------
  const siteMenuToggleButton = {
    id: 0, 
    component: SiteMenuModalToggleButton,
    interface: "siteMenu"
  };

  // INTERFACE ARRAY --------------------------------------
  const buttons = [];

</script>

<!-- MARKUP ////////////////////////////////////// -->
{#each buttons as button (button.id)}
  <li 
    class="center" 
    class:selected={
      $currentInterfaceSiteMenu === button.interface
      && $breakpoint === "mobile" ? $interfaceModal : true
    }
  >
    <svelte:component this={button.component} />
  </li>
{/each}
