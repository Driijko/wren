<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { flip } from "svelte/animate";
  import {quintOut, quintIn, sineOut } from "svelte/easing";
  import shift from "../../../../scripts/transitions/shift";
  import { interfaceModal } from "../../../../dynamic/interface";
  import { currentInterface } from "../../../../dynamic/interface";

  // PROPS ---------------------------------------
  export let buttons = [];

  // TRANSITIONS -------------------------------
  const inTrans = {
    easing: quintOut, 
    duration: 1000, 
    x: -window.innerWidth
  };
  const outTrans = {
    easing: quintIn,
    duration: 500,
    x: -window.innerWidth
  }

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<menu class="center">
  {#each buttons as button (button.id)}
    <li class="toolbar-button-container"
      class:interface-closer-container={button.closer}
      class:highlight={button.highlight === $currentInterface && $interfaceModal}
      animate:flip="{{duration: 700, delay: 300, easing: sineOut}}"
      in:shift="{inTrans}" out:shift="{outTrans}"
      
    >
      <svelte:component this={button.component} />
    </li>
  {/each}
</menu>

<!-- style:width={`${toolbarHeightMO}dvh`} -->

<!-- STYLES ///////////////////////////////////////// -->
<style>
menu {
  display: flex;
  justify-content: center;
  background-color: black;
  height: 8%;
  border-top-color: white;
  border-top-style: solid;
  border-top-width: 0.3dvh;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
li {
  height: 100%;
  width: 8dvh;
}
li :global(button) {
  height: 100%;
  color: white;
  padding: 20%;
}
/* TRANSITIONS -------------------------------- */
@media(hover: hover) {
  li :global(button svg) {
    transition: transform 0.3s ease-out;
  }
  li :global(button:hover svg), li :global(button:focus-visible svg) {
    transform: scale(1.4);
  }
}
</style>