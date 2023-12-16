<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { catalogueMainType } from "../../../dynamic/catalogueDisplay";

  // PROPS ------------------------------------------
  export let type;

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<button 
  on:click={()=> catalogueMainType.set(type)}
  class:current={$catalogueMainType === type}
>
  <slot />
</button>