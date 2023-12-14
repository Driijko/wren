<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { compilationsDisplay } from "../../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../../dynamic/viewport";
  import CompilationDisplaySmall from "./CompilationDisplaySmall.svelte";
  import CompilationDisplayMedium from "./CompilationDisplayMedium.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll catalogue-display">
  {#if $vpwidth < 600}
    {#each $compilationsDisplay as comp}
      <CompilationDisplaySmall {comp} />
    {/each}
  {:else if $vpwidth >= 600}
    {#each $compilationsDisplay as comp}
      <CompilationDisplayMedium {comp} />
    {/each}
  {/if}
</ul>
        <!-- Narrow Viewport ------------------- -->
        <!-- {#if $vpwidth < 600}
          <div class="narrow">
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
          <p>{comp.description}</p> -->

        <!-- Wider Viewport --------------------- -->
        <!-- {:else if $vpwidth >= 600}
        <div class="wide">
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
        </div> -->

        <!-- {/if}
      </li>
  {/each} -->
<!-- </ul> -->

<!-- STYLES //////////////////////////////////////// -->
<style>
/* GENERAL ----------------------------------------- */
ul {
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 3dvh;
}
ul :global(li) {
  background-color: hsl(0, 0%, 80%);
  border-style: solid;
  border-color: black;
}
ul :global(h4) {
  text-align: center;
  line-height: 1.5;
}
ul :global(img) {
  width: 133px;
  object-fit: contain;
}
ul :global(.narrow > div) {
  display: flex;
  border: 4px solid green;
}
ul :global(p) {
  line-height: 1.3;
  max-width: 30rem;
}

/* NARROW VP ----------------------------------- */
ul :global(.narrow) {
  border-width: 5px;
  border-radius: 5px;
}
ul :global(.narrow > div) {
  border-bottom: 5px solid black;
  background-color: black;
  color: white;
  gap: 20px;
}
ul :global(.narrow > div > div) {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid blue;
  gap: 20px;
  flex: 1;
}
ul :global(.narrow > p) {
  border-top: none;
  padding: 20px 15px;
}

/* WIDER VP ------------------------------------ */
ul :global(.wide) {
  border-top-width: 6px;
  border-bottom-width: 6px;
  border-right-width: 30px;
  border-left-width: 5px;
  border-radius: 10px;
  display: flex;
}
ul :global(.wide) {
  gap: 10px;
}
ul :global(.wide img) {
  padding: 10px 0px;
  object-fit: contain;
  border-right: 5px solid black;
  background-color: black;
}
ul :global(.wide > div > div) {
  display: flex;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
}
ul :global(.wide > div > p:nth-child(2)) {
  flex: 1;
  padding: 15px 0px;
}
</style>