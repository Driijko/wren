<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { seriesDisplay } from "../../../dynamic/catalogueDisplay";

</script>
<ul class="reg-scroll">
  {#each $seriesDisplay as series}
    <li>
      series.title
    </li>
  {/each}
</ul>