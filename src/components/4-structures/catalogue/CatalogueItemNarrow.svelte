<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { getBooksById } from "../../../static/books";
  import { getCompilationsById } from "../../../static/compilations";
  import CatalogueModalButton 
  from "../../5-elements/catalogue/CatalogueModalButton.svelte";

  // PROPS ------------------------------------------
  export let item;
  export let type;

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<li class="narrow">
  <div>
    <img src={item.pic} alt={item.title} />
    <div class="center">
      {#if item.titleSplit !== undefined}
        <h4>{item.titleSplit[0]}<br/>{item.titleSplit[1]}</h4>
      {:else}
        <h4>{item.title}</h4>
      {/if}
      {#if type === "compilation" || type === "series"}
        <CatalogueModalButton data={{
          scope: "list",
          type: "book",
          list: { type: type, title: item.title},
          items: getBooksById(item.books)
        }}>
          {item.books.length} books
        </CatalogueModalButton>
      {/if}
      {#if item.compilations !== undefined && item.compilations.length > 0}
        <CatalogueModalButton data={{
          scope: "list",
          type: "compilation",
          list: { type: type, title: item.title },
          items: getCompilationsById(item.compilations)
        }}>
          {item.compilations.length} 
          compilation{item.compilations.length > 1 ? "s" : ""}
        </CatalogueModalButton>
      {/if}
    </div>
  </div>
  <p class="description">{item.description}</p>
</li>