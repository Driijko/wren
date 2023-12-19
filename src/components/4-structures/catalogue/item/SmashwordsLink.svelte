<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // PROPS ----------------------------------------------
  export let item;

</script>

<!-- MARKUP ////////////////////////////////////// -->
<a class="smashwords-link" 
  href={item.link} 
  target="_blank" 
  rel="nopener noreferrer"
>
  Purchase 
  {#if item.type === "series" && item.complete !== undefined}
    {item.complete}<br/>
  {:else}
    on Smashwords
  {/if}
</a>

<!-- STYLES ///////////////////////////////// -->
<style>
a {
  text-align: center;
  width: 100%;
  display: block;
  padding: 5px;
  background-color: black;
  color: white;
  border: 4px solid white;
  border-top: none;
  height: 2em;
}
</style>