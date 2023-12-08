<!-- SCRIPTS ////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";
  import InterfaceSelect from "../select/InterfaceSelect.svelte";
  import InterfaceSelectSite 
  from "../select/SiteInterfaceSelect.svelte";
  import Interface from "../levels/SiteInterface.svelte";

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div>
  <SiteHeader />
  <InterfaceSelect>
    <InterfaceSelectSite />
  </InterfaceSelect>
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