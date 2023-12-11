<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { currentPage } from "../../../../dynamic/currentPage";

  // PROPS ----------------------------------------
  export let className;

</script>

<!-- MARKUP //////////////////////////////////////// -->
<menu class={className} class:catalogue={$currentPage === "catalogue"}>
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
menu :global(svg) {
  width: 100%;
  height: 100%;
  /* border: 4px solid blue; */
  transform-origin: 50% 50%;
  transition: transform 0.3s ease-out;
}

/* MOBILE ---------------------------------------- */
@media (orientation:portrait) {
menu {
  --b: calc(var(--hpx) * 0.004);
  justify-content: space-around;
  /* gap: 2dvh; */
  height: calc(var(--hpx) * 0.08);
  /* padding-left: 5dvh; */
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
  /* width: 8dvh; */
  /* border: 1px solid hsl(0, 0%, 50%); */
  flex: 1;
  height: 100%;
  color: white;
  /* border: 1px solid red; */
}
menu.catalogue :global(li) {
  flex: 1;
}
menu :global(button) {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  /* padding: 20%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
menu :global(svg) {
  width: calc(var(--hpx) * 0.03);
  height: calc(var(--hpx) * 0.035);
  /* height: 22px; */
  /* border: 1px solid red; */
}
menu.site :global(li.selected) {
  background-color: hsl(0, 0%, 10%);
  border-left: var(--b) solid grey;
  border-right: var(--b) solid grey;
}
menu.site :global(li.selected:nth-child(1)) {
  border-left: none;
}
menu.site :global(li:not(.selected)) {
  border-top: var(--b) solid grey;
}
menu.site-menu :global(li.selected) {
  background-color: hsl(0, 0%, 20%);
  border: var(--b) solid grey;
  border-top: none;
  transform: scaleY(1.03) translateY(1.9%);
}
menu.site-menu :global(li.selected:first-child) {
  border-left: none;
}
menu.site-menu :global(li.selected:last-child) {
  border-right: none;
}
menu.site-menu :global(li:not(.selected)) {
  border-top: var(--b) solid grey;
}
menu :global(li.selected svg) {
  transform: scale(1.4);
}
menu :global(.site-menu-modal-toggle-button.open svg) {
  transform: scale(1.8);
  color: red;
}
menu :global(li:has(.interface-modal-closer-button)) {
  /* margin-left: auto; */
  /* width: 14dvh; */
  /* border: 1px solid blue; */
}
menu :global(.interface-modal-closer-button svg) {
  width: calc(var(--hpx) * 0.05);
  height: calc(var(--hpx) * 0.05);
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
  height: 9dvh;
}
menu :global(li) {
  width: 10dvh;
  height: 100%;
}
menu :global(button) {
  width: 100%;
  padding: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30%;
  border-radius: 50% 50% 0 0;
  background-color: yellow;
}
menu :global(svg) {
  width: 75%;
  height: 75%;
}
menu :global(li.selected svg) {
  transform: scale(1.5);
}
}

/* HOVER/FOCUS TRANSITIONS -------------------------------- */
@media(hover: hover) and (orientation: portrait) {
  menu :global(button:hover svg), menu :global(button:focus-visible svg) {
    transform: scale(1.4);
  }
}
@media(hover: hover) and (orientation: landscape) {
  menu :global(button:hover svg), menu :global(button:focus-visible svg) {
    transform: scale(1.5);
  }
}
</style>