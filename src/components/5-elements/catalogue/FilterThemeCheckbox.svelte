<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  
  // PROPS --------------------------------------------
  export let tag;
  export let checked;

  // EVENT HANDLERS ----------------------------------
  // function handleClick(e) {
  //   if (e.target.checked) {
  //     addProductFilterTag(tag);
  //   } else {
  //     removeProductFilterTag(tag)
  //   };
  // };

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<label for={tag}>
  {tag}
  <input id={tag} type="checkbox" {checked} on:click={handleClick} />
</label>