<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import { interfaceModal, currentInterfaceSiteMenu } 
  from "../../../../dynamic/interface";
  import InterfaceSelect from "./InterfaceSelect.svelte";
  import NavInterfaceSelectButton 
  from "../../../5-elements/interface/NavInterfaceSelectButton.svelte";

  // INTERFACE ELEMENTS -----------------------------------------
  const navButton = {
    id: 0, 
    component: NavInterfaceSelectButton,
    interface: "navigation"
  };

  // INTERFACE ARRAY --------------------------------------
  const buttons = [
    navButton,
  ];

</script>

<!-- MARKUP ////////////////////////////////////// -->
<InterfaceSelect>
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
</InterfaceSelect>