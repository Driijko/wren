<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";
  import SiteMenuInterfaceSelect 
  from "../select/SiteMenuInterfaceSelect.svelte";
  import SiteMenuInterface from "../levels/SiteMenuInterface.svelte";

</script>

<div>
  {#if $breakpoint === "mobile"}
    <SiteHeader />
  {:else if $breakpoint === "desktop"}
    <SiteMenuInterfaceSelect />
  {/if}

  <SiteMenuInterface />

  {#if $breakpoint === "mobile"}
    <SiteMenuInterfaceSelect />
  {/if}
</div>