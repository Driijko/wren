<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSiteMenu } from "../../../../dynamic/interface";
  import Nav from "../interfaces/Nav.svelte";
  import Email from "../interfaces/Email.svelte";
  import Design from "../interfaces/Design.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $currentInterfaceSiteMenu === "navigation"}
  <Nav />
{:else if $currentInterfaceSiteMenu === "email"}
  <Email />
{:else if $currentInterfaceSiteMenu === "design"}
  <Design />
{/if}