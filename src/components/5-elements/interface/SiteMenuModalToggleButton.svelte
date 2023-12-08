<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { interfaceModal, setInterface, closeInterfaceModal } 
  from "../../../dynamic/interface";

  // ANIMATION --------------------------------------------
  let animation;

  onMount(()=> {

    const animDur = 0.5;

    function menuIcon() {
      gsap.to(".site-menu-modal-toggle-button .line1", {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "10", x2: "90", y2: "10" }
      });
      gsap.to([".site-menu-modal-toggle-button .line2", ".site-menu-modal-toggle-button .line3"], {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "50", x2: "90", y2: "50"}
      });
      gsap.to(".site-menu-modal-toggle-button .line4", {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "90", x2: "90", y2: "90"}
      });
    };

    function closeIcon() {
      gsap.to([".site-menu-modal-toggle-button .line1",".site-menu-modal-toggle-button .line2"], {
        duration: animDur,
        strokeWidth: "15",
        attr: { x1: "20", y1: "20", x2: "80", y2: "80"}
      });
      gsap.to([".site-menu-modal-toggle-button .line3",".site-menu-modal-toggle-button .line4"], {
        duration: animDur,
        strokeWidth: "15",
        attr: { x1: "20", y1: "80", x2: "80", y2: "20"}
      });
    };

    animation = {
      open: menuIcon,
      close: closeIcon,
    };

    animation.open();
  });

  // EVENT HANDLERS ------------------------------------
  function handleClick() {
    if ($interfaceModal) {
      closeInterfaceModal();
      animation.open();
    } else { 
      setInterface("siteMenu");
      animation.close();
    };
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-toggle-button center" 
  on:click={handleClick}
  class:open={$interfaceModal}
  class:closed={!($interfaceModal)}
  title={$interfaceModal ? "close menu" : "open menu"}
>
  <svg class="fill" viewBox="0 0 100 100">
    <line class="line1" />
    <line class="line2" />
    <line class="line3" />
    <line class="line4" />
  </svg>
</button>

<!-- STYLES //////////////////////////////////////////// -->
<style>
line {
  stroke-linecap: round;
}
</style>