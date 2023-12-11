<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSiteMenu } from "../../../../dynamic/interface";
  import Nav from "../interfaces/Nav.svelte";
  import Email from "../interfaces/Email.svelte";

</script>

{#if $currentInterfaceSiteMenu === "navigation"}
  <Nav />
{:else if $currentInterfaceSiteMenu === "email"}
  <Email />
{:else if $currentInterfaceSiteMenu === "design"}
  <p>Web Design</p>
{/if}

<style>
.site-menu-interface {
  flex: 1;
  background-color: hsl(0, 0%, 20%);
  color: white;
}
</style>