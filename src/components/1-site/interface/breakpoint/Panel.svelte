<!-- SCRIPTS ////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteHeader from "../../../4-structures/SiteHeader.svelte";
  import SiteInterfaceSelect 
  from "../select/SiteInterfaceSelect.svelte";
  import SiteInterface from "../levels/SiteInterface.svelte";

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div>
  <SiteHeader />
  <SiteInterfaceSelect />
  <SiteInterface />
</div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div {
  background-color: cyan;
  /* border: 4px solid red; */
  width: 40dvh;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
</style>