
// src/routes/api/menus.js
import fetch from 'node-fetch';

const RESTAURANT_API_URL = 'https://kitchen.kanttiinit.fi/restaurants?lang=fi&ids=1,2,3,5,7,8,41,45,50,51,52,59,64&priceCategories=student,studentPremium';
const MENU_API_URL = 'https://kitchen.kanttiinit.fi/menus?lang=fi';

export async function GET({ url }) {
  try {
    const response1 = await fetch(RESTAURANT_API_URL);
    const restaurantData = await response1.json();

    const date = new Date().toISOString().split('T')[0];
    const response2 = await fetch(`${MENU_API_URL}&days=${date}`);
    const menuData = await response2.json();
    const combinedData = restaurantData.map((restaurant) => {
      const restaurantId = restaurant.id.toString();
      const menuForId = menuData[restaurantId];

      if (menuForId && menuForId[date]) {
        return {
          ...restaurant,
          menu: menuForId[date],
        };
      }

      return null;
    }).filter(Boolean);

    const responseBody = JSON.stringify(combinedData);
    const headers = { 'Content-Type': 'application/json' };
    const status = 200; // Optional, defaults to 200

    return new Response(responseBody, { headers, status });
  } catch (error) {
    console.error(error);

    const errorBody = JSON.stringify({ error: 'Internal Server Error' });
    const errorHeaders = { 'Content-Type': 'application/json' };
    const errorStatus = 500;

    return new Response(errorBody, { headers: errorHeaders, status: errorStatus });
  }
}
