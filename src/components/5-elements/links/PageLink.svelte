<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { newPage, currentPage, setCurrentProduct } 
  from "../../../dynamic/currentPage";
  import { interfaceModal, closeInterfaceModal } 
  from "../../../dynamic/interface";

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
        closeInterfaceModal();
      };
    };
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<a href={page} 
  on:click|preventDefault={handleClick} 
  class:current={page === $currentPage}
>
  <slot />
</a>