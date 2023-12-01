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
  let alignment;
  let size;
  // src = `./backgrounds/back${picNum}/v-small.webp`;


  $: if ($breakpoint === "mobile") {
    alignment = "v";
    if (window.innerWidth <= 600) { size = "small"; }
    else if (window.innerWidth <= 1024) { size = "medium"}
    else { size = "large"}
  } else if ($breakpoint === "desktop") {
    alignment = "h";
    if (window.innerWidth <= 1920) { size = "small" }
    else if (window.innerWidth <= 2560) { size = "medium" }
    else { size = "large" }
  };

  $: src = `./backgrounds/back${picNum}/${alignment}-${size}.webp`;

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
  background-size: 200%;
  background-position: 0% 0%;
  animation-name: background-shift;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>