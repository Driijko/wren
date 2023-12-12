<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { seriesDisplay } from "../../../dynamic/catalogueDisplay";
  import { breakpoint } from "../../../dynamic/breakpoint";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll catalogue-display">
  {#each $seriesDisplay as series}
    <li>
      {#if $breakpoint === "mobile"}
        <div class="mobile-top">
          <img src={series.pic} alt={series.title} />
          <div class="mobile-top-text">
            <h4>{series.title}</h4>
            <p>{series.books.length} books</p>
          </div>
        </div>
        <p>{series.description}</p>
        <button>See books in this series</button>
      {/if}
    </li>
  {/each}
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
ul {
  background-color: white;
  padding: 10px;
  padding-bottom: 0;
  border: 4px solid red;
}
.mobile-top {
  display: flex;
}
.mobile-top-text {
  display: flex;
  flex-direction: column;
  /* border: 4px solid green; */
  flex: 1;
}
.mobile-top-text > * {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>