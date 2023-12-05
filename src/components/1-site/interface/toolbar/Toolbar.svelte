<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import PageLink from "../../../5-elements/links/PageLink.svelte";
  
</script>

<!-- MARKUP //////////////////////////////////////// -->
<div>
  <PageLink page="home">Home Page</PageLink>
  <PageLink page="catalogue">Catalogue Page</PageLink>
  <PageLink page="about">About Page</PageLink>
  <PageLink page="design">Design Page</PageLink>
  <PageLink page="product">Product Page</PageLink>
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
div {
  background-color: black;
  border: 4px solid red;
  height: 8%;
  opacity: 0;
  animation: fade-in 2s 1s ease-out forwards;
}
div :global(a) {
  color: white;
}
</style>