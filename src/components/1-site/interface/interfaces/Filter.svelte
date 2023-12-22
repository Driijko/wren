<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { catalogueMainType, map } 
  from "../../../../dynamic/catalogueDisplay";
  import themes from "../../../../static/themes";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";
  import FilterThemeCheckbox 
  from "../../../5-elements/catalogue/FilterThemeCheckbox.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="catalogue-interface">
  <h2>Filter {map[$catalogueMainType].string} by Themes</h2>
  <ul class="reg-scroll">
    {#each themes as theme}
      <li>
        <FilterThemeCheckbox theme={theme.title} />
      </li>
    {/each}
  </ul>
</div>