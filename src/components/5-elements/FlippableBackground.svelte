<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { onDestroy } from "svelte";
    import { src_url_equal } from "svelte/internal";

  // PROPS -------------------------------------------------
  export let picNum = "0";
  export let duration = 30;

  // PIC SRC ----------------------------------------
  $: src = "";
  $: bkgSize = 0;

  function getSrcAndSize() {
    let alignment;
    let size;

    if (window.innerWidth <= window.innerHeight) {
      bkgSize = 200;
      alignment = "v";
      if (window.innerWidth <= 600) { size = "small"; }
      else if (window.innerWidth <= 1024) { size = "medium"}
      else { size = "large"}
    } else {
      bkgSize = 130;
      alignment = "h";
      if (window.innerWidth <= 1366) { size = "small" }
      else if (window.innerWidth <= 1920) { size = "medium" }
      else { size = "large" }
    };

    src = `./backgrounds/back${picNum}/${alignment}-${size}.webp`;
  };

  $: getSrcAndSize();

  window.addEventListener("resize", getSrcAndSize);

  onDestroy(()=> {
    window.removeEventListener("resize", getSrcAndSize);
  });

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="fill" style:background-image={`url(${src})`}
  style:animation-duration={`${duration}s`}
  style:background-size={`${bkgSize}%`}
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
  /* background-size: 200%; */
  background-position: 0% 0%;
  animation-name: background-shift;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>