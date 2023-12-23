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
  <span>{theme}</span>
  <input id={theme} type="checkbox" {checked} on:click={handleClick} />
</label>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid green;
  gap: 10px;
  width: 130px;
}
input {
  width: 40px;
  height: 40px;
  background-color: white;
}
input:checked {
  background-color: blue;
}
</style>