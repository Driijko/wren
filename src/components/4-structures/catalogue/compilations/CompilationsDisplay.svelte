<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { compilationsDisplay } from "../../../../dynamic/catalogueDisplay";
  import { vpwidth } from "../../../../dynamic/viewport";
  import CompilationDisplaySmall from "./CompilationDisplaySmall.svelte";
  import CompilationDisplayMedium from "./CompilationDisplayMedium.svelte";
  import CompilationDisplayLarge from "./CompilationDisplayLarge.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<ul class="reg-scroll catalogue-display">
  {#if $vpwidth < 600}
    {#each $compilationsDisplay as comp}
      <CompilationDisplaySmall {comp} />
    {/each}
  {:else if $vpwidth >= 600 && $vpwidth <= 900}
    {#each $compilationsDisplay as comp}
      <CompilationDisplayMedium {comp} />
    {/each}
  {:else}
    {#each $compilationsDisplay as comp}
      <CompilationDisplayLarge {comp} extra={$vpwidth - 900} />
    {/each}
  {/if}
</ul>

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
  padding: 15px 0px;
}

/* WITH SUB-LIST */
ul :global(.sub-list) {
  /* border: 4px solid red; */
  overflow-x: hidden;
  flex: 1;
  height: 100%;
}
ul :global(.sub-list li) {
  width: 200px;
  /* border: 4px solid green; */
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  height: 100%;
}
ul :global(.sub-list img) {
  padding: 5px;
  background-color: transparent;
  border: none;
  width: 100px;
}
</style>