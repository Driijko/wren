<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  import PageLink from "../../../5-elements/links/PageLink.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<nav class="site-menu-interface">
  <ul class="center fill">
    <li>
      <PageLink page="home">Home</PageLink>
    </li>
    <li>
      <PageLink page="catalogue">Catalogue</PageLink>
    </li>
    <li>
      <PageLink page="about">About</PageLink>
    </li>
  </ul>
</nav>

<!-- STYLES ////////////////////////////////////// -->
<style>
ul {
  flex-direction: column;
  color: white;
  gap: calc(var(--hpx) * 0.1);
}
ul :global(a) {
  display: block;
}
ul :global(.current) {
  text-decoration: underline;
  cursor: default;
  transform: scale(1.4);
}
@media (hover:hover) {
  ul :global(a) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  ul :global(a:hover:not(.current)), 
  ul :global(a:focus-visible:not(.current)) {
    transform: scale(1.4);
  }
}
</style>