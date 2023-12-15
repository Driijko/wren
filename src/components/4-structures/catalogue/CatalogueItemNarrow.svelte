<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // PROPS ------------------------------------------
  export let item;
  export let type;

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<li class="narrow">
  <div>
    <img src={item.pic} alt={item.title} />
    <div class="center">
      {#if type === "compilation"}
        <h4>{item.title1}<br/>{item.title2}</h4>
      {:else}
        <h4>{item.title}</h4>
      {/if}
      <p>
        <a href={item.title}>
          {item.books.length} books
        </a>
      </p>
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