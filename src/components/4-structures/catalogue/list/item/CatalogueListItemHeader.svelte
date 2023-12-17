<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // PROPS -------------------------------------
  export let context;
  export let item;
  export let width;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<header>
  {#if item.titleSplit !== undefined && width === "narrow"}
    <h4>{item.titleSplit[0]}<br/>{item.titleSplit[1]}</h4>
  {:else}
    <h4>{item.title}</h4>
  {/if}
</header>