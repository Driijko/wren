<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { newPage, currentPage, setCurrentProduct } 
  from "../../../dynamic/currentPage";
  import { modals, interfaceModal } from "../../../dynamic/modals";

  // PROPS -------------------------------------------
  export let page = "";
  export let product = "";

  // EVENT HANDLER ------------------------------------
  function handleClick() {
    if (product) {
        setCurrentProduct(product);
    };
    if (!($currentPage === page)) {
      newPage(page);
      if ($interfaceModal) {
        modals.close("interfaceModal");
      };
    };
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<a href={page} on:click|preventDefault={handleClick}>
  <slot />
</a>