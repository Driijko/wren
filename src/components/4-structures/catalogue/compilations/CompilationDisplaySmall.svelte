<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // PROPS ------------------------------------------
  export let comp;

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<li class="narrow">
  <div>
    <img src={comp.pic} alt={comp.title} />
    <div class="center">
      <h4>{comp.title1}<br/>{comp.title2}</h4>
      <p>
        <a href={comp.title}>
          {comp.books.length} books
        </a>
      </p>
    </div>
  </div>
  <p>{comp.description}</p>
</li>