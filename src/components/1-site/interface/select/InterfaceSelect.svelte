<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // PROPS ----------------------------------------
  export let className;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<menu class={className}>
  <slot />
</menu>

<!-- STYLES ////////////////////////////////////////// -->
<style>
/* GENERAL -------------------------------------- */
menu {
  display: flex;
  width: 100%;
  /* border: 4px solid blue; */
}
menu :global(li) {
  /* height: 100%; */
  /* border: 1px solid green; */
}
menu :global(button) {
  width: 100%;
  height: 100%;
}
menu :global(button svg) {
  width: 100%;
  height: 100%;
  /* border: 4px solid blue; */
  transition: transform 0.3s ease-out;
}
menu :global(li.selected svg) {
  transform-origin: 50% 50%;
  /* transform: scale(1.4); */
}

/* MOBILE ---------------------------------------- */
@media (orientation:portrait) {
menu {
  justify-content: center;
  gap: 4dvh;
  height: 8dvh;
  /* border-top-color: hsl(0, 0%, 15%);
  border-top-style: solid;
  border-top-width: 0.3dvh; */
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
menu.site {
  background-color: black;
}
menu.site-menu {
  background-color: hsl(0, 0%, 10%);
}
menu :global(li) {
  width: 8dvh;
  height: 8dvh;
  color: white;
  /* border: 1px solid red; */
}
menu :global(button) {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  /* padding: 20%; */
}
menu :global(.site-menu-modal-toggle-button) {
  padding: 25%;
}
menu :global(.nav-select-button) {
  
}
menu :global(svg) {
  max-width: 100%;
  max-height: 100%;
  /* border: 1px solid red; */
}
menu.site :global(li.selected) {
  background-color: hsl(0, 0%, 10%);
  /* color: black; */
}
menu.site-menu :global(li.selected) {
  background-color: hsl(0, 0%, 20%);
}
}

/* DESKTOP ------------------------------------- */
@media (orientation: landscape) {
menu {
  height: 0%;
  transition-property: height;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  overflow: hidden;
  margin-top: 1dvh;
}
menu {
  height: 10dvh;
}
menu :global(li) {
  width: 25%;
}
menu :global(button) {
  width: 100%;
  padding: 30%;
  padding-bottom: 40%;
  border-radius: 50% 50% 0 0;
  background-color: yellow;
}
}

/* HOVER/FOCUS TRANSITIONS -------------------------------- */
@media(hover: hover) {
  menu :global(button:hover svg), menu :global(button:focus-visible svg) {
    transform: scale(1.4);
  }
}
</style>