<script>
  import { onMount } from "svelte";
  
  let urls = ["https://kanttiinit.fi", "https://omatnaytot.hsl.fi/view?cont=9Hzugxxi3lCQ+a2Ay15Z6g=="];
  let currentIndex = 0;
  let currentUrl = urls[currentIndex];

  onMount(() => {
    rotateContent();
    setInterval(rotateContent, 10000);
  });

  function rotateContent() {
    currentIndex = (currentIndex + 1) % urls.length;
    currentUrl = urls[currentIndex];
  }
</script>

<script context="module" lang="ts">
  import '../global.css';
</script>

<style>
  iframe {
    width: 100vw;
    height: 100vh;
    border: none;
  }
</style>

<main>
  <iframe src={currentUrl} frameborder="0" title="Information"></iframe>
</main>
