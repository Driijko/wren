<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import CatalogueTypeSelectButton 
  from "../../5-elements/catalogue/CatalogueTypeSelectButton.svelte";

</script>

<!-- MARKUP //////////////////////////////////// -->
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

<!-- STYLES ///////////////////////////////////// -->
<style>
menu {
  display: flex;
  height: 14%;
}
menu :global(button) {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: hsl(0, 0%, 70%);
  border: 1px solid hsl(0, 0%, 70%);
  width: 100%;
  height: 100%;
}
menu :global(.current) {
  /* background-color: hsl(0, 0%, 25%); */
  border: 3px solid white;
  color: white;
  font-size: 21px;
  /* color: black; */
}

/* PORTRAIT ------------------------------------------- */
@media screen and (orientation: portrait) {
menu {
  flex-wrap: wrap;
  height: 14%;
}
li {
  width: 50%;
  height: 50%;
  /* height: calc(var(--hpx) * 0.06); */
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