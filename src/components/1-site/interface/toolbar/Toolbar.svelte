<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import SiteMenuModalToggleButton 
  from "../../../5-elements/interface/SiteMenuModalToggleButton.svelte";
  
</script>

<!-- MARKUP //////////////////////////////////////// -->
<div>
  <SiteMenuModalToggleButton />
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
div {
  display: flex;
  justify-content: center;
  background-color: black;
  border: 4px solid red;
  height: 8%;
  padding: 0.5%;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
div :global(button) {
  height: 100%;
  color: white;
  padding: 1.2%;
  border-color: transparent;
  border-style: solid;
  border-width: 0.15vw;
}
/* TRANSITIONS -------------------------------- */
@media(hover: hover) {
  div :global(button) {
    transition: border-color 0.3s ease-out;
  }
  div :global(button svg) {
    transition: transform 0.3s ease-out;
  }
  div :global(button:hover), div :global(button:focus-visible) {
    border-color: hsl(0, 0%, 100%);
  }
  div :global(button:hover svg), div :global(button:focus-visible svg) {
    transform: scale(1.25);
  }
}
</style>