<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import { getBooksById } from "../../../static/books";
  import CatalogueModalButton 
  from "../../5-elements/catalogue/CatalogueModalButton.svelte";

  // PROPS -------------------------------
  export let item;
  export let type;

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<li class="wide">
  <img src={item.pic} alt={item.title} />
  <div>
    <div>
      <h4>{item.title}</h4>
      {#if type === "compilation" || type === "series"}
        &middot
        <CatalogueModalButton data={{
          scope: "list",
          type: "book",
          list: {type: type, title: item.title},
          items: getBooksById(item.books)
        }}>
          {item.books.length} books
        </CatalogueModalButton>
      {/if}
      {#if type === "series" && item.compilations.length > 0}
        &middot
        <p>
          <a href={`${item.title}:compilations`}>
            {item.compilations.length} 
            compilation{item.compilations.length > 1 ? "s" : ""}
          </a>
        </p>
      {/if}
    </div>
    <p class="description">{item.description}</p>
  </div>
</li>