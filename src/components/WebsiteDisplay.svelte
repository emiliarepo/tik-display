
<script>
  export let websites = [];
  export let currentWebsiteIndex = 0;
</script>

<style>
  .iframe-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .iframe.visible {
    opacity: 1;
  }
</style>

<div class="iframe-container">
  {#each websites as website, index (website)}
    <iframe
      src={website}
      frameborder="0"
      class={`iframe ${index === currentWebsiteIndex ? 'visible' : ''}`}
    ></iframe>
  {/each}
</div>

