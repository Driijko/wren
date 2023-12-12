<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { breakpoint } from "../../../../dynamic/viewport";
  import { interfaceModal, currentInterfaceSiteMenu } 
  from "../../../../dynamic/interface";
  import InterfaceSelect from "./InterfaceSelect.svelte";
  import NavInterfaceSelectButton 
  from "../../../5-elements/interface/NavInterfaceSelectButton.svelte";
  import EmailInterfaceSelectButton 
  from "../../../5-elements/interface/EmailInterfaceSelectButton.svelte";
  import DesignInterfaceSelectButton 
  from "../../../5-elements/interface/DesignInterfaceSelectButton.svelte";

  // INTERFACE ELEMENTS -----------------------------------------
  const navButton = {
    id: 0, 
    component: NavInterfaceSelectButton,
    interface: "navigation"
  };
  const emailButton = {
    id: 1,
    component: EmailInterfaceSelectButton,
    interface: "email"
  };
  const designButton = {
    id: 2,
    component: DesignInterfaceSelectButton,
    interface: "design"
  };

  // INTERFACE ARRAY --------------------------------------
  const buttons = [navButton, emailButton, designButton];

</script>

<!-- MARKUP ////////////////////////////////////// -->
<InterfaceSelect className="site-menu">
  {#each buttons as button (button.id)}
    <li 
      class="center" 
      class:selected={
        $currentInterfaceSiteMenu === button.interface
        && ($breakpoint === "mobile" ? $interfaceModal : true)
      }
    >
      <svelte:component this={button.component} />
    </li>
  {/each}
</InterfaceSelect>