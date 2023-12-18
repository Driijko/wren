<!-- SCRIPTS //////////////////////////////// -->
<script>
  // PROPS --------------------------------------
  export let item;

</script>

<!-- MARKUP ////////////////////////////////// -->
<div>
 {#if item.link !== undefined}
  <a class="smashwords-link" href={item.link} target="_blank" rel="nopener noreferrer">
    Purchase 
    {#if item.type === "series" && item.complete !== undefined}
      {item.complete}<br/>
    {/if}
    on Smashwords
  </a>
 {/if}
 <div class="reg-scroll main">
 </div>
</div>

<!-- STYLES ////////////////////////////////// -->
<style>
div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.smashwords-link {
  text-align: center;
  width: 100%;
  display: block;
  padding: 5px;
  background-color: black;
  color: white;
  border: 4px solid white;
  border-top: none;
}
.main {
  border: 4px solid red;
}
</style>