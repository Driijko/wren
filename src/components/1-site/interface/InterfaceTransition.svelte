<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { fly } from "svelte/transition";
  import { linear } from "svelte/easing";
  
</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="interface-transition fill"
  in:fly="{{
    y: -window.innerHeight, 
    duration: 500, 
    delay: 500,
    easing: linear,
  }}"
  out:shift="{{
    y: window.innerHeight, 
    duration: 500,
    easing: linear,
  }}"
>
  <slot />
</div>