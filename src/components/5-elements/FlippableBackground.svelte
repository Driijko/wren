<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";

  // PROPS -------------------------------------------------
  export let src = {
    portrait: "",
    landscape: "",
  };
  export let duration = 30;

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="fill" style:background-image={
    `url(${ $breakpoint === "mobile" ? src.portrait : src.landscape})`
  }
  style:animation-duration={`${duration}s`}
></div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div {
  background-size: 150%;
  background-position: 0% 0%;
  animation-name: backgroundShift;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>