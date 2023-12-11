<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  import { closeInterfaceModal } from "../../../dynamic/interface";
  import XIcon from "../../6-icons/XIcon.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
<button class="interface-modal-closer-button" on:click={closeInterfaceModal}>
  <XIcon />
</button>

<!-- STYLES //////////////////////////////////////// -->
<style>
button {
  color: red;
}
</style>