
export async function getMenuData() {
  console.log("H");
  const response = await fetch('/api/menus'); // Assumes you have a serverless function for fetching menus
  return response.json();
}
