<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";
  import SiteMenuInterfaceSelect 
  from "../select/SiteMenuInterfaceSelect.svelte";

</script>

<div>
  {#if $breakpoint === "mobile"}
    <SiteHeader />
  {:else if $breakpoint === "desktop"}
    <SiteMenuInterfaceSelect />
  {/if}
</div>