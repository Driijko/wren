<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import InterfaceSelectButton from "./InterfaceSelectButton.svelte";
  import EnvelopeIcon from "../../6-icons/EnvelopeIcon.svelte";

</script>

<!-- MARKUP ///////////////////////////////////// -->
<InterfaceSelectButton 
  interfaceSelect={{
    site: "siteMenu",
    siteMenu: "design",
  }}
>
  <EnvelopeIcon />
</InterfaceSelectButton>