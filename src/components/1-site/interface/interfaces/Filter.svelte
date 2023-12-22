<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { catalogueMainType, catalogueMainBooksTags, catalogueMainSeriesTags, catalogueMainCompilationsTags} 
  from "../../../../dynamic/catalogueDisplay";
  import themes from "../../../../static/themes";
  import CatalogueMainTypeMenu 
  from "../../../4-structures/catalogue/main/CatalogueMainTypeMenu.svelte";

  const map = {
    books: { string: "Books", tags: catalogueMainBooksTags },
    series: { string: "Series", tags: catalogueMainSeriesTags },
    compilations: { 
      string: "Compilations", tags: catalogueMainCompilationsTags
    },
  };

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<CatalogueMainTypeMenu />
<div class="catalogue-interface">
  <h2>Filter {map[$catalogueMainType].string} by Themes</h2>
  <ul class="reg-scroll">
    {#each themes as theme}
      <li>
        {theme.title}
      </li>
    {/each}
  </ul>
</div>