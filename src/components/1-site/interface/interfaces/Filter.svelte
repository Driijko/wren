<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { catalogueMainType, catalogueMainBooksTags, catalogueMainSeriesTags, catalogueMainCompilationsTags} 
  from "../../../../dynamic/catalogueDisplay";
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
<div>
  <h2>Filter {map[$catalogueMainType].string}</h2>
</div>