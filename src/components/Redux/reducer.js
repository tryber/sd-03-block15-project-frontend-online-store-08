let counter = 0;

export default function reducer(state = { products: [], quantity: 0 }, action) {
  const hasItem = state.products.findIndex((a) => a.id === action.payload.id);
  const newProducts = state.products;
  const newProduct = action.payload;

  switch (action.type) {
    case 'addItem':
      counter += 1;
      newProduct.quantity = 1;
      if (hasItem === -1) {
        return {
          ...state,
          products: [...state.products, action.payload],
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
      newProducts[hasItem].quantity += 1;
      return {
        ...state,
        products: newProducts,
      };

    case 'decrementItem':
      newProducts[hasItem].quantity -= 1;
      return {
        ...state,
        products: newProducts,
      };

    default:
      return state;
  }
}
