<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { setSort, map, catalogueMainType } from "../../../dynamic/catalogueDisplay";
  import { closeInterfaceModal } from "../../../dynamic/interface";

  $: ({sort} = map[$catalogueMainType]);

  // PROPS --------------------------------------------
  export let property;
  export let order;

  // EVENT HANDLERS -----------------------------------
  function handleClick() {
    setSort(property, order);
    closeInterfaceModal();
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button 
  class:current={sort.property === property && sort.order === order} 
  on:click={handleClick}
>
  <slot />
</button>

<!-- STYLES ////////////////////////////////////////// -->
<style>
button {
  border: 2px solid white;
  padding: 5px 10px;
  border-radius: 5px;
}
button.current {
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>