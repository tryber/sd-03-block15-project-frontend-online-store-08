export async function getCategories() {
  // implement here
  const urlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(urlCategories);
  const dataJson = await data.json();
  return dataJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  const urlCategories = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(urlCategories);
  const dataJson = await data.json();
  return dataJson.results;
}
