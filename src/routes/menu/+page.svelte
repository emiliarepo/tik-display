<script context="module">
  import { getMenuData } from '../../lib/api'; // Import a function to fetch menu data
</script>

<script>
  import { onMount } from 'svelte';
  import MenuDisplay from '../../components/MenuDisplay.svelte';

  let restaurants = [];

  onMount(async () => {
    restaurants = await getMenuData();
  });
</script>

<h1>Today's Menus</h1>
<MenuDisplay {restaurants} />
