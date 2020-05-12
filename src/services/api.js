export async function getCategories(url) {
  // implement here
  fetch(url)
  .then((data) => data.json())
  .then((dataJson) => dataJson);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  const urlCategories = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  fetch(urlCategories)
  .then((data) => data.json())
  .then((dataJson) => dataJson.results);
}
