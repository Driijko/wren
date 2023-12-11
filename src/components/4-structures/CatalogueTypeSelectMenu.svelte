<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import { catalogueType } from "../../dynamic/catalogueDisplay";
  import CatalogueTypeSelectButton 
  from "../5-elements/catalogue/CatalogueTypeSelectButton.svelte";

</script>

<menu>
  <li>
    <CatalogueTypeSelectButton type="series">
      Series
    </CatalogueTypeSelectButton>
  </li>
  <li>
    <CatalogueTypeSelectButton type="books">
      Books
    </CatalogueTypeSelectButton>
  </li>
  <li>
    <CatalogueTypeSelectButton type="compilations">
      Compilations
    </CatalogueTypeSelectButton>
  </li>
  <li>
    <CatalogueTypeSelectButton type="subjects">
      Subjects
    </CatalogueTypeSelectButton>
  </li>
</menu>