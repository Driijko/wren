<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { vpwidth } from "../../../../dynamic/viewport";

  // PROPS ------------------------------------------
  export let items;
  
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<ul class="reg-scroll">
  {#if $vpwidth < 500}
    {#each items as item}
      <li>{item.title}, narrow</li>
    {/each}
  {:else if $vpwidth >= 500}
    {#each items as item}
      <li>{item.title}, wide</li>
    {/each}
  {/if}
</ul>