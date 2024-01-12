<script>
  import { onMount } from 'svelte';
  import WebsiteDisplay from './WebsiteDisplay.svelte'

  export let websites = [];
  let currentWebsiteIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentWebsiteIndex = (currentWebsiteIndex + 1) % websites.length;
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  });
</script>

<WebsiteDisplay {websites} {currentWebsiteIndex} />

