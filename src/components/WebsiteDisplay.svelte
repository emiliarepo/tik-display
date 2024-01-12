<style>
  iframe {
    width: 100vw;
    height: 100vh;
    border: none;
  }
</style>

<script>
  export let websites = [];
  export let currentWebsiteIndex = 0;
</script>

<div>
  {#if websites.length > 0}
    <iframe src={websites[currentWebsiteIndex]} frameborder="0"></iframe>
  {/if}
</div>
