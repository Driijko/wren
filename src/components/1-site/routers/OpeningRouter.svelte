<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  import Breakpoint from "../Breakpoint.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{#if $currentPage === "loading"}
  <LoadingPage />
{:else}
  <Breakpoint />
{/if}