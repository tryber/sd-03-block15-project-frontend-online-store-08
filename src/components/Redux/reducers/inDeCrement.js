let counter = 0;

export default function inDeCrement(state = { products: [], quantity: 0 }, action) {
  const newProducts = state.products;
  const newProduct = action.payload;
  switch (action.type) {
    case 'incrementItem':
      if (newProduct.quantity < newProduct.available_quantity) {
        counter += 1;
        newProduct.quantity += 1;
        return {
          ...state,
          products: newProducts,
          quantity: counter,
        };
      }
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
