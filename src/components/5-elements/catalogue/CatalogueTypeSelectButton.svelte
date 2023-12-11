<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { catalogueType } from "../../../dynamic/catalogueDisplay";

  // PROPS ------------------------------------------
  export let type;

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<button on:click={()=> catalogueType.set(type)}>
  <slot />
</button>