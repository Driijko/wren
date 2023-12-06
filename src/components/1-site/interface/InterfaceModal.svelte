<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import { interfaceModal } from "../../../dynamic/interface";

</script>

{#if $interfaceModal}
  <div class="fill">
    <slot />
  </div>
{/if}

<!-- STYLES //////////////////////////////////// -->
<style>
div {
  position: absolute;
  left: 0;
  top: 0;
  background-color: hsla(0, 100%, 50%, 0.5);
  border: 4px solid blue;
}
</style>