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
    newPage("opening-prompt");
  };
  
  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", handleLoad);

    // Timeout just in case...
    const timeoutId = setTimeout(()=> {
      handleLoad();
      clearTimeout(timeoutId);
    },3000);
    
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

.loading-page div:nth-of-type(1) {
  animation: rotateClockwise 4s ease-in-out infinite;
}
.loading-page div:nth-of-type(2) {
  animation: rotateCounterClockwise 4s ease-in-out infinite;
}

/* PORTRAIT -------------------------------- */
@media screen and (orientation: portrait) {
  p {
    font-size: calc(var(--cw)/15);
  }
  .loading-page div {
    width: 40%;
    height: 60%;
    border-width: calc(var(--cw)/50);
  }
}
/* LANDSCAPE -------------------------------- */
@media screen and (orientation: landscape) {
  p {
    font-size: calc(var(--cw)/30);
  }
  .loading-page div {
    width: 50%;
    height: 40%;
    border-width: calc(var(--cw)/200);
  }
}
</style>