<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  import { breakpoint } from "../../../../dynamic/breakpoint";
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
    To learn more about how this site was made, check out the 
    <PageLink page="design">web-design page</PageLink>.
  </p>
</div>