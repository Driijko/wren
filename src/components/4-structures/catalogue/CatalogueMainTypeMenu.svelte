<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import CatalogueMainTypeButton 
  from "../../5-elements/catalogue/CatalogueMainTypeButton.svelte";

</script>

<!-- MARKUP //////////////////////////////////// -->
<menu>
  <li>
    <CatalogueMainTypeButton type="series">
      Series
    </CatalogueMainTypeButton>
  </li>
  <li>
    <CatalogueMainTypeButton type="books">
      Books
    </CatalogueMainTypeButton>
  </li>
  <li>
    <CatalogueMainTypeButton type="compilations">
      Compilations
    </CatalogueMainTypeButton>
  </li>
  <li>
    <CatalogueMainTypeButton type="subjects">
      Themes
    </CatalogueMainTypeButton>
  </li>
</menu>

<!-- STYLES ///////////////////////////////////// -->
<style>
menu {
  display: flex;
  background-color: black;
}
menu :global(button) {
  color: hsl(0, 0%, 70%);
  border: 1px solid hsl(0, 0%, 70%);
  flex: 1;
  width: 100%;
  height: 100%;
}
menu :global(.current) {
  border: 3px solid white;
  color: white;
  font-size: 21px;
}

/* PORTRAIT ------------------------------------------- */
@media screen and (orientation: portrait) and (max-width: 600px) {
menu {
  flex-wrap: wrap;
  height: 14%;
}
li {
  width: 50%;
  height: 50%;
}
}

@media screen and (orientation: portrait) and (min-width: 600px) {
menu {
  height: 7%;
}
li {
  width: 25%;
  height: 100%;
}
}

/* LANDSCAPE --------------------------------------------- */
@media screen and (orientation: landscape) {
menu {
  background-color: black;
  justify-content: flex-end;
  height: calc(var(--hpx) * 0.05);
  width: 100%;
}
li {
  width: 150px;
}
}
</style>