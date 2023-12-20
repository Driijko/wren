<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  import SmashwordsLink from "./SmashwordsLink.svelte";

  $: ({ scope, themes } = $catalogueModalData);

  // PROPS -----------------------------------
  export let context;
  export let item;

</script>

<!-- MARKUP ///////////////////////////////// -->
<!-- List Item -------------------- -->
{#if context === "main" || (context === "modal" && scope === "list")}

{#if $width === "narrow"}
  <CatalogueItemNarrow {item} {context} />
{:else if $width === "wide"}
  <CatalogueItemWide {item} {context} />
{/if}

<!-- Item Profile ---------------- -->
{:else}
<div class="fill item-profile">

  <!-- Fixed Link --------------------- -->
  {#if item.link !== undefined}
    <SmashwordsLink {item} />
  {/if}

  <!-- Scrolling Div --------------------- -->
  <div class="reg-scroll"
    style:height={item.link !== undefined ? "calc(100% - 2em)" : "100%"}
    style:background-image={`url(${item.pic})`}
  >
    {#if $width === "narrow"}
      <CatalogueItemNarrow {item} {context} />
    {:else if $width === "wide"}
      <CatalogueItemWide {item} {context} />
    {/if}

    {#if item.type === "book" || item.type === "compilation"}
      <div class="price-count">
        <div class="center">
          <h5>Price</h5>
          <p>{item.price}</p>
        </div>
        <div class="center">
          <h5>Wordcount</h5>
          <p>{item.words}</p>
        </div>
      </div>
    {/if}

    {#if item.themes !== undefined}
      <div>
        <h5>Themes</h5>
        <ul>
          {#each themes as theme}
            <li>{theme.title}</li>
          {/each}
        </ul>
      </div>
    {/if}

  </div>
</div>
{/if}


<!-- STYLES ///////////////////////////////////// -->
<style>
.item-profile {
  height: calc(100% - 64px);
  /* border: 4px solid green; */
}
.reg-scroll {
  background-size: cover;
  background-attachment: fixed;
  /* height: calc(100% - 2em); */
  /* border: 4px solid green; */
}
.price-count {
  display: flex;
  justify-content: space-around;
}
.price-count > div {
  flex-direction: column;
}
</style>