let counter = 0;

export default function reducer(state = { products: [], quantity: 0 }, action) {
  const newProducts = state.products;
  const newProduct = action.payload;
  const hasItem = state.products.findIndex((a) => a.id === action.payload.id);
  switch (action.type) {
    case 'addItem':
      counter += 1;
      newProduct.quantity = 1;
      if (hasItem === -1) {
        return {
          ...state,
          products: [...state.products, newProduct],
          quantity: counter,
        };
      }
      newProducts[hasItem].quantity += 1;
      return {
        ...state,
        products: newProducts,
        quantity: counter,
      };
    case 'incrementItem':
      counter += 1;
      newProduct.quantity += 1;
      return {
        ...state,
        products: newProducts,
        quantity: counter,
      };

    case 'decrementItem':
      counter -= 1;
      newProduct.quantity -= 1;
      return {
        ...state,
        products: newProducts,
        quantity: counter,
      };
    default:
      return state;
  }
}
