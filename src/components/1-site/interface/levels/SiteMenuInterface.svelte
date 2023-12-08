<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSiteMenu } from "../../../../dynamic/interface";

</script>

{#if $currentInterfaceSiteMenu === "navigation"}
  <p>Navigation</p>
{:else if $currentInterfaceSite === "email"}
  <p>Email</p>
{:else if $currentInterfaceSite === "design"}
  <p>Web Design</p>
{/if}