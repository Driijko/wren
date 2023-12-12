<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { seriesDisplay } from "../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../dynamic/viewport";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll catalogue-display">
  {#each $seriesDisplay as series}
      <li>

        <!-- Narrow Viewport ------------------- -->
        {#if $vpwidth < 600}
          <div class="narrow">
            <img src={series.pic} alt={series.title} />
            <div class="center">
              <h4>{series.title}</h4>
              <p>
                <a href={series.title}>
                  {series.books.length} books
                </a>
              </p>
            </div>
          </div>
          <p>{series.description}</p>

        <!-- Wider Viewport --------------------- -->
        {:else if $vpwidth >= 600}
        <div class="wide">
          <img src={series.pic} alt={series.title} />
          <div>
            <div>
              <h4>{series.title}</h4>
              &middot
              <p>
                <a href={series.title}>
                  {series.books.length} books
                </a>
              </p>
            </div>
            <p>{series.description}</p>
          </div>
        </div>

        {/if}
      </li>
  {/each}
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
/* GENERAL ----------------------------------------- */
ul {
  background-color: white;
  /* background-color: hsla(0, 0%, 100%, 0.5); */
  padding: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 3dvh;
}
li {
  background-color: hsl(0, 0%, 80%);
  border-style: solid;
  border-color: black;
  /* border: 5px solid black; */
  /* padding: 10px; */
}
img {
  object-fit: contain;
}
li > div {
  display: flex;
}
li > div > div {
  display: flex;
  flex-direction: column;
  /* border: 4px solid green; */
  flex: 1;
  padding: 10px;
}
p {
  line-height: 1.3;
  max-width: 30rem;
  /* border: 1px solid blue; */
}

/* NARROW VP ----------------------------------- */
li:has(.narrow) {
  border-width: 5px;
  border-radius: 5px;
}
.narrow {
  border-bottom: 5px solid black;
}
.narrow > div {
  background-color: black;
  color: white;
  gap: 20px;
}
.narrow + p {
  border-top: none;
  padding: 20px 15px;
}

/* WIDER VP ------------------------------------ */
li:has(.wide) {
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-right-width: 30px;
  border-left-width: 5px;
  border-radius: 10px;
}
.wide {
  gap: 10px;
}
.wide img {
  padding: 10px 0px;
  object-fit: contain;
  border-right: 5px solid black;
  background-color: black;
}
.wide > div > div {
  display: flex;
  align-items: center;
  gap: 10px;
}
.wide > div > p:nth-child(2) {
  flex: 1;
  /* display: flex;
  align-items: center; */
  padding: 15px 0px;
}
</style>