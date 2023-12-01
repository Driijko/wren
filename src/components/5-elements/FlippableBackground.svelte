<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";

  // PROPS -------------------------------------------------
  // export let src = {
  //   portrait: "",
  //   landscape: "",
  // };
  export let picNum = "0";
  export let duration = 30;

  // RESPONSIVE ----------------------------------------
  let src;
  $: if ($breakpoint === "mobile") {
    if (window.innerWidth <= 600) {
      src = `./backgrounds/back${picNum}-v-small.webp`;
    } else {
      src = `./backgrounds/back${picNum}-v.webp`;
    }
  } else {
    src = `./backgrounds/back${picNum}-h.webp`;
  };

// `url(${ $breakpoint === "mobile" ? src.portrait : src.landscape})`

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="fill" style:background-image={`url(${src})`}
  style:animation-duration={`${duration}s`}
></div>



<!-- STYLES //////////////////////////////////////////// -->
<style>
@keyframes background-shift {
  0% {background-position: 0% 0%; opacity: 0;}
  5% {background-position: 5% 5%; opacity: 1;}
  95% {background-position: 95% 95%; opacity: 1;}
  100% {background-position: 100% 100%; opacity: 0;}
}

div {
  background-size: 150%;
  background-position: 0% 0%;
  animation-name: background-shift;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>