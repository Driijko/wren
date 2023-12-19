<!-- SCRIPTS //////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import CatalogueModalButton 
  from "../../5-elements/catalogue/CatalogueModalButton.svelte";

  // PROPS --------------------------------------
  export let item;

</script>

<!-- MARKUP ////////////////////////////////// -->
<div class="flex-1 item-profile">

  <!-- SMASHWORDS LINK ---------------------------- -->


  <div class="main flex-1">

    <div class="background" style:background-image={`url(${item.pic})`}></div>

    <div class="reg-scroll fill">

      <header>
        <img src={item.pic} alt={item.title} />
        <div class="center">
          <h4>{item.title}</h4>
          {#if item.books !== undefined}
            <CatalogueModalButton data={{
              scope: "list",
              type: "book",
              list: {from: item.type, title: item.title, items: item.books}
            }}>
              {item.books.length} books
            </CatalogueModalButton>
          {/if}
          {#if item.compilations !== undefined}
            <CatalogueModalButton data={{
              scope: "list",
              type: "compilation",
              list: {from: item.type, title: item.title, items: item.compilations}
            }}>
              {item.compilations.length}
              compilation{item.compilations.length > 1 ? "s" : ""}
            </CatalogueModalButton>
          {/if}
        </div>
      </header>

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
header {
  display: flex;
  align-items: center;
}
header > div {
  flex: 1;
}
img { 
  width: 133px;
  object-fit: contain;
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
/* NARROW ---------------------------------------- */
@media screen and (max-width: 500px) {
.item-profile {
  height: 80%;
}
header {

}
}


/* WIDE ------------------------------------ */
@media screen and (min-width: 500px) {
.item-profile {
  height: 93.2%;
}
}
</style>