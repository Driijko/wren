<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { catalogueMainType, map, removeAllTags } 
  from "../../../../dynamic/catalogueDisplay";
  import themes from "../../../../static/themes";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";
  import FilterThemeCheckbox 
  from "../../../5-elements/catalogue/FilterThemeCheckbox.svelte";

  // $: REACTIVE TAG VARIABLE --------------------------
  $: tags = map[$catalogueMainType].tags;

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="catalogue-interface">
  <h2>Filter {map[$catalogueMainType].string} by Themes</h2>
  {#if $tags.length > 0}
    <button on:click={removeAllTags}>Remove all filters</button>
  {/if}
  <ul class="reg-scroll center">
    {#each themes as theme}
      <li>
        <FilterThemeCheckbox 
          checked={$tags.includes(theme.title)} 
          theme={theme.title} 
        />
      </li>
    {/each}
  </ul>
</div>

<!-- STYLES /////////////////////////////////////////// -->
<style>
ul {
  flex-direction: column;
  gap: 2dvh;
}
</style>