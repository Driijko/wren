<!-- MARKUP //////////////////////////////////////// -->
<menu>
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
  transition: transform 0.3s ease-out;
}
menu :global(li.selected svg) {
  transform: scale(1.4);
}

/* MOBILE ---------------------------------------- */
@media (orientation:portrait) {
menu {
  justify-content: center;
  background-color: black;
  height: 8%;
  border-top-color: white;
  border-top-style: solid;
  border-top-width: 0.3dvh;
  /* opacity: 0;
  animation: fade-in 2s 1s ease-out forwards; */
}
menu :global(li) {
  width: 8dvh;
  height: 8dvh;
  color: white;
  /* border: 1px solid red; */
}
menu :global(button) {
  height: 100%;
  padding: 20%;
}
menu :global(li.selected) {
  background-color: white;
  color: black;
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
  padding-top: 3%;
  width: 25%;
}
menu :global(button) {
  width: 100%;
  padding: 30%;
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