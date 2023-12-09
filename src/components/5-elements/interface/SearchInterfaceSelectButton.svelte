<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import InterfaceSelectButton from "./InterfaceSelectButton.svelte";
  import MagnifyingGlassIcon from "../../6-icons/MagnifyingGlassIcon.svelte";

</script>

<!-- MARKUP ///////////////////////////////////// -->
<InterfaceSelectButton 
  interfaceSelect={{
    site: "siteMenu",
    siteMenu: "navigation",
  }}
>
  <MagnifyingGlassIcon />
</InterfaceSelectButton>