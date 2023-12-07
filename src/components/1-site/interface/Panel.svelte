<!-- SCRIPTS ////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteHeader from "../../4-structures/SiteHeader.svelte";
  import InterfaceSelect from "./interface-selection/InterfaceSelect.svelte";
  import Interface from "./Interface.svelte";

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div>
  <SiteHeader />
  <InterfaceSelect />
  <Interface />
</div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div {
  background-color: cyan;
  border: 4px solid red;
  width: 25%;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
</style>