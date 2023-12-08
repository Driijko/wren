<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import shift from "../../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import Interface from "../levels/SiteInterface.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div class="fill"
  transition:shift="{{
    y: -window.innerHeight,
    duration: 350,
    easing: linear,
  }}"
>
  <Interface />
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
div {
  position: absolute;
  left: 0;
  top: 0;
}
</style>