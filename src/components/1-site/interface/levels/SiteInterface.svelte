<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSite } from "../../../../dynamic/interface";

</script>

{#if $currentInterfaceSite === "siteMenu"}
  <p>Site Menu</p>
{:else if $currentInterfaceSite === "search"}
  <p>Search Products</p>
{:else if $currentInterfaceSite === "filter"}
  <p>Filter Products</p>
{:else if $currentInterfaceSite === "sort"}
  <p>Sort Products</p>
{/if}