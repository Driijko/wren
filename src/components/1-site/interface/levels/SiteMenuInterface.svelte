<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSiteMenu } from "../../../../dynamic/interface";

</script>

{#if $currentInterfaceSiteMenu === "navigation"}
  <p>Navigation</p>
{:else if $currentInterfaceSiteMenu === "email"}
  <p>Email</p>
{:else if $currentInterfaceSiteMenu === "design"}
  <p>Web Design</p>
{/if}

<!-- STYLES ////////////////////////////////////// -->
<style>
p {
  flex: 1;
}
</style>