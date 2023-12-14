<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import books from "../../../../static/books";

  // PROPS -------------------------------
  export let comp;
  export let extra;

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<li class="wide">
  <img src={comp.pic} alt={comp.title} />
  <div>
    <div>
      <h4>{comp.title1} {comp.title2}</h4>
      &middot
      <p>
        <a href={comp.title}>
          {comp.books.length} books
        </a>
      </p>
    </div>
    <p class="description">{comp.description}</p>
  </div>
  <div class="sub-list-container">
    <ul class="sub-list">
      {#each comp.books as book}
        <li class="center">
          <img src={book.pic} alt={book.title} />
          <h4>{book.title}</h4>
        </li>
      {/each}
    </ul>
    <div class="foreground"></div>
  </div>
</li>