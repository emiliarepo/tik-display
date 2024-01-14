<script>
  import MenuDetail from './MenuDetail.svelte';

  export let restaurants;
</script>

<style>
  .restaurant-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

<main>
  <div class="restaurant-list">
    {#each restaurants as restaurant (restaurant.id)}
      <MenuDetail {restaurant} />
    {/each}
  </div>
</main>

