<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSite } from "../../../../dynamic/interface";
  import SiteMenu from "../interfaces/SiteMenu.svelte";

</script>

{#if $currentInterfaceSite === "siteMenu"}
  <SiteMenu />
{:else if $currentInterfaceSite === "search"}
  <p>Search Products</p>
{:else if $currentInterfaceSite === "filter"}
  <p>Filter Products</p>
{:else if $currentInterfaceSite === "sort"}
  <p>Sort Products</p>
{/if}