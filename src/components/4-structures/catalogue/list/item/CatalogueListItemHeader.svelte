<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // PROPS -------------------------------------
  export let context;
  export let item;
  export let width;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<header>
  <h4>
    {#if item.titleSplit !== undefined && width === "narrow"}
      {item.titleSplit[0]}<br/>{item.titleSplit[1]}
    {:else}
      {item.title}
    {/if}
  </h4>
  {#if item.type === "compilation" || item.type === "series"}
    <span class:remove={width === "narrow"}>&middot</span>
    <p>{item.books.length} books</p>
  {/if}
  {#if item.compilations !== undefined && item.compilations.length > 0}
    <span class:remove={width === "narrow"}>&middot</span>
    <p>
      {item.compilations.length} 
      compilation{item.compilations.length > 1 ? "s" : ""}
    </p>
  {/if}
</header>

<!-- STYLES //////////////////////////////////////// -->
<style>
.remove {
  display: none;
}
</style>