<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import TwitterIcon from "../../../6-icons/TwitterIcon.svelte";

</script>

<!-- MARKUP ///////////////////////////////////// -->
<menu class="site-menu-interface">
  <li>
    Contact me at:<br/>
    <address>
      <a href="mailto:nelsymlit@tutanota.com">
        nelsymlit@tutanota.com
      </a>
    </address>
  </li>
  <li>
    Subscribe to my newsletter:<br/>
    <form>
      <input type="email" placeholder="enter your email" /><br/>
      <button type="submit">Submit</button>
    </form>
  </li>
  <li>
    <TwitterIcon />
    Follow me at:<br/>
    <a href="twitter.com/nelsymington">
      twitter.com/nelsymington
    </a>
  </li>
</menu>

<!-- STYLES ///////////////////////////////////// -->
<style>
menu {
  display: flex;
  flex-direction: column;
  padding: calc(var(--hpx) * 0.04) 0%;
}
li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: calc(var(--hpx) * 0.02);
}
form {
  display: flex;
  flex-direction: column;
}
input {
  border: 4px solid black;
  width: calc(var(--wpx) * 0.4);
  height: calc(var(--hpx) * 0.05);
}
menu :global(svg) {
  /* border: 4px solid white; */
  width: calc(var(--wpx) * 0.07);
  height: calc(var(--wpx) * 0.07);
}
</style>