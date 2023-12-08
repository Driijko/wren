<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import InterfaceSelectButton from "./InterfaceSelectButton.svelte";
  import PenToSquareIcon from "../../6-icons/PenToSquareIcon.svelte";

</script>

<!-- MARKUP ///////////////////////////////////// -->
<InterfaceSelectButton 
  interfaceSelect={{
    site: "siteMenu",
    siteMenu: "design",
  }}
>
  <PenToSquareIcon />
</InterfaceSelectButton>