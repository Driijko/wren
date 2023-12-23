<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import InterfaceSelectButton from "./InterfaceSelectButton.svelte";
  import FilterIcon from "../../6-icons/FilterIcon.svelte";
  import { catalogueMainType, map } from "../../../dynamic/catalogueDisplay";

  $: ({tags} = map[$catalogueMainType]);

</script>

<!-- MARKUP ///////////////////////////////////// -->
<InterfaceSelectButton 
  interfaceSelect={{
    site: "filter",
  }}
>
  <FilterIcon />
  {#if $tags.length > 0}
    <p>*</p>
  {/if}
</InterfaceSelectButton>

<!-- STYLES //////////////////////////////////// -->
<style>
p {
  margin-left: 8px;
  padding-top: 6px;
}
</style>