<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../../../dynamic/viewport";
  import { currentInterfaceSiteMenu } from "../../../../dynamic/interface";
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";
  import SiteMenuInterfaceSelect 
  from "../select/SiteMenuInterfaceSelect.svelte";
  import SiteMenuInterface from "../levels/SiteMenuInterface.svelte";

  // MAP: currentInterfaceSiteMenu -----------------------
  const map = {
    navigation: "navigation",
    email: "contact, newsletter & social media",
    design: "web-design",
  };

</script>

<div class="fill">
  {#if $breakpoint === "mobile"}
    <SiteHeader />
  {:else if $breakpoint === "desktop"}
    <SiteMenuInterfaceSelect />
  {/if}

  <h3>
    {map[$currentInterfaceSiteMenu]}
  </h3>
  <SiteMenuInterface />

  {#if $breakpoint === "mobile"}
    <SiteMenuInterfaceSelect />
  {/if}
</div>

<!-- STYLES ///////////////////////////////////////// -->
<style>
div {
  display: flex;
  flex-direction: column;
}
div :global(.site-header) {
  background-color: white;
}
h3 {
  background-color: black;
  color: white;
}
div :global(.site-menu-interface) {
  flex: 1;
  background-color: hsl(0, 0%, 20%);
}
</style>