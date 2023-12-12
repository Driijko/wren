<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { onDestroy } from "svelte";
  import { seriesDisplay } from "../../../dynamic/catalogueDisplay";
  import { breakpoint } from "../../../dynamic/breakpoint";

  // REACTIVE TO VIEWPORT WIDTH ----------------------
  let count = 0;
  window.addEventListener("resize", ()=> count++);

  onDestroy(()=> {
    window.removeEventListener("resize", ()=> count++);
  });

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll catalogue-display">
  {#each $seriesDisplay as series}
    {#key count}
      <li>
        {#if window.innerWidth < 600}
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
        {:else if window.innerWidth >= 600}
        <div class="wide">
          <img src={series.pic} alt={series.title} />
          <div>
            <h4>{series.title}</h4>
            <p>
              <a href={series.title}>
                {series.books.length} books
              </a>
            </p>
            <p>{series.description}</p>
          </div>
        </div>
        {/if}
      </li>
    {/key}
  {/each}
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
ul {
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 3dvh;
}
li {
  background-color: hsl(0, 0%, 80%);
  padding: 10px;
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
}
li > div > div > * {
  width: 100%;
}
.narrow {
  margin-bottom: 15px;
}
.narrow > div {
  gap: 10px;
}
.narrow > div > * {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wide {
  gap: 20px;
}
.wide > div > p:nth-child(3) {
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  align-items: center;
}
p {
  line-height: 1.3;
}
</style>