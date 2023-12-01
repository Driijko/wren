<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import Page from "./Page.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
{#if $currentPage === "home"}
  <Page>
    <div class="fill"></div>
  </Page>
{:else if $currentPage === "catalogue"}
  <Page>
    <div class="fill"></div>
  </Page>
{:else if $currentPage === "about"}
  <Page>
    <div class="fill"></div>
  </Page>
{:else if $currentPage === "design"}
  <Page>
    <div class="fill"></div>
  </Page>
{:else if $currentPage === "product"}
  <Page>
    <div class="fill"></div>
  </Page>
{/if}

<!-- STYLES //////////////////////////////////////// -->
<style>
div {
  background-color: hsla(30, 100%, 50%, 0.5);
}
</style>