<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  import { breakpoint } from "../../../../dynamic/viewport";
  import PageLink from "../../../5-elements/links/PageLink.svelte";

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div class="site-menu-interface">
  <img src={ 
      $breakpoint === "mobile" ?
      "./logos/dreeko-logo-small.png" :
      "./logos/dreeko-logo-medium.png"
    }
    alt="Dreeko"
  />
  <p>
    Dreeko is a web developer, designer and animator living in Toronto,
    Canada.
  </p>
  <p>
    <span>
      To learn more about how this site was made, check out the 
      <PageLink page="design">web-design page</PageLink>.
    </span>
  </p>
</div>

<!-- STYLES ///////////////////////////////////////// -->
<style>
div {
  display: flex;
  flex-direction: column;
  padding: calc(var(--hpx) * 0.1) 0%;
}
div > * {
  padding: 0% calc(var(--wpx) * 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div :global(a) {
  display: inline;
}
img {
  object-fit: contain;
  width: 100%;
}
p {
  line-height: 1.5;
}
</style>