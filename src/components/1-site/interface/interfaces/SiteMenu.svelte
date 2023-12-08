<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";
  import SiteMenuInterfaceSelect 
  from "../select/SiteMenuInterfaceSelect.svelte";
  import SiteMenuInterface from "../levels/SiteMenuInterface.svelte";

</script>

<div class="fill">
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

<!-- STYLES ///////////////////////////////////////// -->
<style>
div {
  display: flex;
  flex-direction: column;
}
</style>