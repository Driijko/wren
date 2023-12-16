<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { getBooksById } from "../../../static/books";
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
      {#if type === "compilation" || type === "book"}
        <h4>{item.title1}<br/>{item.title2}</h4>
      {:else}
        <h4>{item.title}</h4>
      {/if}
      {#if type === "compilation" || type === "series"}
      <p>
        <!-- <a href={item.title}>
          {item.books.length} books
        </a> -->
        <CatalogueModalButton data={{
          type: "books",
          specifier: [item.title, "Series"],
          items: getBooksById(item.books)
        }}>
          {item.books.length} books
        </CatalogueModalButton>
      </p>
      {/if}
      {#if type === "series" && item.compilations.length > 0}
        <p>
          <a href={`${item.title}:compilation`}>
            {item.compilations.length} 
            compilation{item.compilations.length > 1 ? "s" : ""}
          </a>
        </p>
      {/if}
    </div>
  </div>
  <p class="description">{item.description}</p>
</li>