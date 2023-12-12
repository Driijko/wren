<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import { onMount } from "svelte";
  import { setPageExit, newPage } from "../../dynamic/currentPage";

  // PAGE EXIT ----------------------------------
  let fade = false;

  function pageExit() {
    fade = true;
  };

  setPageExit(pageExit, 2000);

  // EVENT HANDLERS --------------------------
  function handleLoad() {
    newPage("home");
  };
  
  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", handleLoad);
    
    return ()=> {
      window.removeEventListener("load", handleLoad);
    };
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div class="loading-page vp center" class:fade>
  <div></div>
  <div></div>
  <p>Loading...</p>
</div>

<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
.loading-page {
  transition: opacity 2s ease-out;
}

.fade {
  opacity: 0;
}

p {
  z-index: 1;
  font-family: "Arial", sans-serif;
}

.loading-page div {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
}

@keyframes rotate-clockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-page div:nth-of-type(1) {
  animation: rotate-clockwise 4s ease-in-out infinite;
}

@keyframes rotate-counter-clockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.loading-page div:nth-of-type(2) {
  animation: rotate-counter-clockwise 4s ease-in-out infinite;
}

/* PORTRAIT -------------------------------- */
@media screen and (orientation: portrait) {
  p {
    font-size: 5vw;
  }
  .loading-page div {
    width: 40%;
    height: 60%;
    border-width: 1vw;
  }
}
/* LANDSCAPE -------------------------------- */
@media screen and (orientation: landscape) {
  p {
    font-size: 3vw;
  }
  .loading-page div {
    width: 50%;
    height: 40%;
    border-width: 0.5vw;
  }
}
</style>