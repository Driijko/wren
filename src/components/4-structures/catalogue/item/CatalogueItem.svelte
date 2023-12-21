<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { width } from "../../../../dynamic/viewport";
  import { catalogueModalData } from "../../../../dynamic/catalogueDisplay";
  import CatalogueItemNarrow from "./CatalogueItemNarrow.svelte";
  import CatalogueItemWide from "./CatalogueItemWide.svelte";
  import SmashwordsLink from "./SmashwordsLink.svelte";

  $: ({ scope } = $catalogueModalData);

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
      <section class="price-count">
        <div class="center">
          <h5>Price</h5>
          <p>{item.price}</p>
        </div>
        <div class="center">
          <h5>Wordcount</h5>
          <p>{item.words}</p>
        </div>
      </section>
    {/if}

    {#if item.tags !== undefined}
      <section class="tag-section">
        <h5>Themes</h5>
        <ul class="tag-list">
          {#each item.tags as theme}
            <li>{theme.title}</li>
          {/each}
        </ul>
      </section>
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
  background-image: none !important;
  background-color: black;
  color: white;
  /* height: calc(100% - 2em); */
  /* border: 4px solid green; */
}
h5 {
  text-align: center;
  font-size: 19px;
  font-weight: bold;
}
.price-count {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-top: 20px;
}
.price-count > div {
  flex-direction: column;
  gap: 5px;
}
.tag-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
}
.tag-list li {
  background-color: hsl(220, 100%, 30%);
  padding: 10px;
}
</style>