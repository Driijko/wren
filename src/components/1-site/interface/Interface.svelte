<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterface } from "../../../dynamic/interface";
  import InterfaceTransition from "./InterfaceTransition.svelte";

</script>

{#if $currentInterface === "siteMenu"}
  <InterfaceTransition>
    <p>Site Menu</p>
  </InterfaceTransition>
{:else if $currentInterface === "search"}
  <InterfaceTransition>
    <p>Search Products</p>
  </InterfaceTransition>
{:else if $currentInterface === "filter"}
  <InterfaceTransition>
    <p>Filter Products</p>
  </InterfaceTransition>
{:else if $currentInterface === "sort"}
  <InterfaceTransition>
    <p>Sort Products</p>
  </InterfaceTransition>
{/if}