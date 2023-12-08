<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";

</script>

<div>
  {#if $breakpoint === "mobile"}
    <SiteHeader />
  {/if}
</div>