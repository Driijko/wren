<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { addTag, removeTag } from "../../../dynamic/catalogueDisplay";
  
  // PROPS --------------------------------------------
  export let theme;
  export let checked;

  // EVENT HANDLERS ----------------------------------
  function handleClick(e) {
    if (e.target.checked) {
      addTag(theme);
    } else {
      removeTag(theme);
    };
  };

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<label for={theme}>
  {theme}
  <input id={theme} type="checkbox" {checked} on:click={handleClick} />
</label>