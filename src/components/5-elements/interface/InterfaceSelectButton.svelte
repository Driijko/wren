<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { setInterface } from "../../../dynamic/interface";

  // PROPS ------------------------------------------------
  export let interfaceSelect;

  // EVENT HANDLERS -----------------------------------------
  function handleClick() {
    setInterface(
      interfaceSelect.site, 
      interfaceSelect.siteMenu ? interfaceSelect.siteMenu : null
    );
  }

</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<button on:click={handleClick}>
  <slot />
</button>