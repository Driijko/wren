<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import InterfaceSelectButton from "./InterfaceSelectButton.svelte";
  import CompassIcon from "../../6-icons/CompassIcon.svelte";

</script>

<!-- MARKUP ///////////////////////////////////// -->
<InterfaceSelectButton 
  interfaceSelect={{
    site: "siteMenu",
    siteMenu: "navigation",
  }}
  className="nav-select-button"
>
  <CompassIcon />
</InterfaceSelectButton>