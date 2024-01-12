<script>
  import WebsiteCycler from '../components/WebsiteCycler.svelte';
</script>

<script context="module" lang="ts">
  import '../global.css';
</script>

<WebsiteCycler
  websites={[
    'https://kanttiinit.fi',
    'https://tietokilta.fi',
    'https://omatnaytot.hsl.fi/view?cont=9Hzugxxi3lCQ+a2Ay15Z6g=='
    // Add more websites as needed
  ]}
/>
