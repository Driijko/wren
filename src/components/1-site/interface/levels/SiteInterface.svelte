<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentInterfaceSite } from "../../../../dynamic/interface";
  import SiteMenu from "../interfaces/SiteMenu.svelte";
  import Search from "../interfaces/Search.svelte";
  import Sort from "../interfaces/Sort.svelte";

</script>

{#if $currentInterfaceSite === "siteMenu"}
  <SiteMenu />
{:else if $currentInterfaceSite === "search"}
  <Search />
{:else if $currentInterfaceSite === "filter"}
  <p>Filter Products</p>
{:else if $currentInterfaceSite === "sort"}
  <Sort />
{/if}