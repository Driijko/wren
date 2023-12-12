<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { onDestroy } from "svelte";
  import { seriesDisplay } from "../../../dynamic/catalogueDisplay";
  import { breakpoint } from "../../../dynamic/viewport";

  // REACTIVE TO VIEWPORT WIDTH ----------------------
  let count = 0;
  window.addEventListener("resize", ()=> count++);

  onDestroy(()=> {
    window.removeEventListener("resize", ()=> count++);
  });

</script>

<!-- MARKUP /////////////////////////////////////// -->
<!-- <ul class="reg-scroll catalogue-display">
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
</ul> -->
<ul class="reg-scroll catalogue-display">
  {#each $seriesDisplay as series}
      <li 
        class:narrow={window.innerWidth < 600} 
        class:wide={window.innerWidth >= 600}
      >
        {#if window.innerWidth < 600}
          <p>narrow</p>
        {:else if window.innerWidth >= 600}
          <p>wide</p>
        {/if}
      </li>
  {/each}
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
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
  border-top: 6px solid black;
  border-bottom: 6px solid black;
  /* padding: 10px; */
}
img {
  padding: 10px 0px;
  object-fit: contain;
  border-right: 3px solid black;
  background-color: black;
  /* object-position: 0% 0%; */
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
  gap: 10px;
}
.wide > div > p:nth-child(3) {
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  align-items: center;
  padding: 15px 0px;
}
p {
  line-height: 1.3;
  max-width: 30rem;
  /* border: 1px solid blue; */
}
</style>