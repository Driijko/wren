<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { setInterface } from "../../../dynamic/interface";

  // PROPS ------------------------------------------------
  export let interfaceSelect = {
    site: "",
    siteMenu: "",
  };

  // EVENT HANDLERS -----------------------------------------
  function handleClick() {
    setInterface({...interfaceSelect});
  }

</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<button on:click={()=> setInterface({...interfaceSelect})}>
  <slot />
</button>