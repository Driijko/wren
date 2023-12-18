<!-- SCRIPTS //////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import { vpwidth } from "../../../dynamic/viewport";

  // PROPS --------------------------------------
  export let item;

</script>

<!-- MARKUP ////////////////////////////////// -->
<div 
  class="flex-1" 
  class:smaller={$vpwidth < 500} 
  class:bigger={$vpwidth >= 500}
>
 {#if item.link !== undefined}
  <a class="smashwords-link" href={item.link} target="_blank" rel="nopener noreferrer">
    Purchase 
    {#if item.type === "series" && item.complete !== undefined}
      {item.complete}<br/>
    {/if}
    on Smashwords
  </a>
 {/if}
 <div class="main flex-1">
  <div class="background" style:background-image={`url(${item.pic})`}></div>
  <div class="reg-scroll fill">
    <div class="property-value-pair">
      <h5>Synopsis</h5>
      <p>{item.description}</p>
    </div>
    <div class="property-value-pair">
      <h5>Price</h5>
      <p class="center">{item.price}</p>
    </div>
    <div class="property-value-pair">
      <h5>Words</h5>
      <p class="center">{item.words}</p>
    </div>
    <div class="property-value-pair">
      <h5>Words</h5>
      <p class="center">{item.words}</p>
    </div>
    <div class="property-value-pair">
      <h5>Words</h5>
      <p class="center">{item.words}</p>
    </div>
    <div class="property-value-pair">
      <h5>Words</h5>
      <p class="center">{item.words}</p>
    </div>
  </div>
 </div>
</div>

<!-- STYLES ////////////////////////////////// -->
<style>
div {
  display: flex;
  flex-direction: column;
}
.smaller {
  height: 80%;
}
.bigger {
  height: 93.2%;
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
  height: 2em;
}
.main {
  height: calc(100% - 2em);
}
.reg-scroll {
  color: white;
  line-height: 1.3;
  gap: 3dvh;
  padding-top: 20px;
  padding-bottom: 50px;
}
.background {
  filter: brightness(40%);
}
.property-value-pair {
  gap: 1dvh;
  background-color: hsla(0, 0%, 0%, 0.8);
  padding: 10px 20px;
}
h5 {
  font-size: 21px;
  text-align: center;
}
</style>