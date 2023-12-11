<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import Page from "./Page.svelte";
  import HomePage from "../../2-pages/HomePage.svelte";
  import CataloguePage from "../../2-pages/CataloguePage.svelte";
  import AboutPage from "../../2-pages/AboutPage.svelte";
  import DesignPage from "../../2-pages/DesignPage.svelte";
  import ProductPage from "../../2-pages/ProductPage.svelte";


</script>

<!-- MARKUP ///////////////////////////////////////////// -->
{#if $currentPage === "home"}
  <Page>
    <HomePage />
  </Page>
{:else if $currentPage === "catalogue"}
  <Page>
    <CataloguePage />
  </Page>
{:else if $currentPage === "about"}
  <Page>
    <AboutPage />
  </Page>
{:else if $currentPage === "design"}
  <Page>
    <DesignPage />
  </Page>
{:else if $currentPage === "product"}
  <Page>
    <ProductPage />
  </Page>
{/if}

<!-- STYLES //////////////////////////////////////// -->
<style>

</style>