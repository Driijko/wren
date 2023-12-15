<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // PROPS -------------------------------
  export let item;
  export let type;

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<li class="wide">
  <img src={item.pic} alt={item.title} />
  <div>
    <div>
      {#if type === "compilation"}
        <h4>{item.title1} {item.title2}</h4>
      {:else}
        <h4>{item.title}</h4>
      {/if}
      &middot
      <p>
        <a href={item.title}>
          {item.books.length} books
        </a>
      </p>
      {#if type === "series" && item.compilations.length > 0}
        &middot
        <p>
          <a href={`${item.title}:compilations`}>
            {item.compilations.length} compilations
          </a>
        </p>
      {/if}
    </div>
    <p class="description">{item.description}</p>
  </div>
</li>