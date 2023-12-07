<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSite } from "../../../dynamic/interface";
  import InterfaceTransition from "./InterfaceTransition.svelte";

</script>

{#if $currentInterfaceSite === "siteMenu"}
  <InterfaceTransition>
    <p>Site Menu</p>
  </InterfaceTransition>
{:else if $currentInterfaceSite === "search"}
  <InterfaceTransition>
    <p>Search Products</p>
  </InterfaceTransition>
{:else if $currentInterfaceSite === "filter"}
  <InterfaceTransition>
    <p>Filter Products</p>
  </InterfaceTransition>
{:else if $currentInterfaceSite === "sort"}
  <InterfaceTransition>
    <p>Sort Products</p>
  </InterfaceTransition>
{/if}