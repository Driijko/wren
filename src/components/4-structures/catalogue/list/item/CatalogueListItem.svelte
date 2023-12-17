<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // PROPS -----------------------------------
  export let context;
  export let item;
  export let width;

</script>

<!-- MARKUP ///////////////////////////////// -->
<li class:narrow={width === "narrow"} class:wide={width === "wide"}>
  {#if width === "narrow"}
    <div>
      <img src={item.pic} alt={item.title} />
      <header>{item.title}</header>
    </div>
    <p>{item.description}</p>
  {:else if width === "wide"}
    <img src={item.pic} alt={item.title} />
    <div>
      <header>{item.title}</header>
      <p>{item.description}</p>
    </div>
  {/if}
</li>

<!-- STYLES ///////////////////////////////////// -->
<style>
.narrow {
  border: 1px solid red;
}
.wide {
  border: 1px solid blue;
}
</style>