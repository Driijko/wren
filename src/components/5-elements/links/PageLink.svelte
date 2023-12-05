<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { newPage, currentPage, setCurrentProduct } 
  from "../../../dynamic/currentPage";
  import { modals, interfaceModal } from "../../../dynamic/modals";

  // PROPS -------------------------------------------
  export let pageName = "";
  export let product = "";

  // EVENT HANDLER ------------------------------------
  function handleClick() {
    if (product) {
        setCurrentProduct(product);
    };
    if (!($currentPage === pageName)) {
      newPage(pageName);
      if ($interfaceModal) {
        modals.close("interfaceModal");
      };
    };
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<a href={pageName} on:click|preventDefault={handleClick}>
  <slot />
</a>