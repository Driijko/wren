<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSiteMenu } from "../../../../dynamic/interface";
  import Nav from "../interfaces/Nav.svelte";

</script>

{#if $currentInterfaceSiteMenu === "navigation"}
  <Nav />
{:else if $currentInterfaceSiteMenu === "email"}
  <p>Email</p>
{:else if $currentInterfaceSiteMenu === "design"}
  <p>Web Design</p>
{/if}

<style>
p {
  flex: 1;
  background-color: hsl(0, 0%, 20%);
  color: white;
}
</style>