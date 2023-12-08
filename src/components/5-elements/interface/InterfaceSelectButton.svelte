<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { setInterface } from "../../../dynamic/interface";

  // PROPS ------------------------------------------------
  export let interfaceSelect = {
    site: "",
    siteMenu: "",
  };
  export let className = "";

  // EVENT HANDLERS -----------------------------------------
  function handleClick() {
    setInterface(
      interfaceSelect.site, 
      interfaceSelect.siteMenu ? interfaceSelect.siteMenu : null
    );
  }

</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<button class={className} on:click={handleClick}>
  <slot />
</button>