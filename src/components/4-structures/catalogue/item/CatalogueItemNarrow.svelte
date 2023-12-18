<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  export let item;

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div>
  <img src={item.pic} alt={item.title} />
  <!-- <CatalogueListItemHeader {context} {item} {width} /> -->
</div>
<p>{item.description}</p>

<!-- STYLES ////////////////////////////////////// -->
<style>
div {
  display: flex;
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
}
p {
  padding: 20px 15px;
}
</style>