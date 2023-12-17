<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // PROPS -------------------------------------
  export let context;
  export let item;
  export let width;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<header 
  class:narrow={width === "narrow"} 
  class:wide={width === "wide"}
>
  <h4>
    {#if item.titleSplit !== undefined && width === "narrow"}
      {item.titleSplit[0]}<br/>{item.titleSplit[1]}
    {:else}
      {item.title}
    {/if}
  </h4>
  {#if item.type === "compilation" || item.type === "series"}
    <span>&middot</span>
    <p>{item.books.length} books</p>
  {/if}
  {#if item.compilations !== undefined && item.compilations.length > 0}
    <span>&middot</span>
    <p>
      {item.compilations.length} 
      compilation{item.compilations.length > 1 ? "s" : ""}
    </p>
  {/if}
</header>

<!-- STYLES //////////////////////////////////////// -->
<style>
.narrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1;
}
.narrow h4 {
  text-align: center;
  line-height: 1.5;
}
.narrow span {
  display: none;
}
.wide {
  display: flex;
  align-items: center;
  padding-top: 18px;
  gap: 10px;
}
</style>