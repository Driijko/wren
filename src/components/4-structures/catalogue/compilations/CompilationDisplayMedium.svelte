<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // PROPS -------------------------------
  export let comp;

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
    <p>{comp.description}</p>
  </div>
</li>