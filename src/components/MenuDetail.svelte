<!-- RestaurantDetail.svelte -->
<script>
  export let restaurant;

  function getCurrentDayOpeningHours(openingHours) {
    const currentDay = (new Date().getDay() + 6) % 7;
    return openingHours[currentDay];
  }
</script>

<div class="restaurant-detail">
  <h2>{restaurant.name}</h2>
  <p>{restaurant.address}</p>
  <p>Opening Hours: {getCurrentDayOpeningHours(restaurant.openingHours)}</p>
  <p>Price Category: {restaurant.priceCategory}</p>
  <ul>
    {#each restaurant.menu as item (item.title)}
      <li>{item.title}</li>
    {/each}
  </ul>
  <p>
    <a href={restaurant.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
  </p>
</div>

<style>
  .restaurant-detail {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  h2 {
    color: #333;
  }

  p {
    margin: 0 0 10px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }
</style>
