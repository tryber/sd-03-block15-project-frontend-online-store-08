let counter = 0;

export default function reducer(state = { products: [], quantity: 0 }, action) {
  switch (action.type) {
    case 'addItem':
      counter += 1;
      return { ...state, products: [...state.products, action.payload], quantity: counter };

    case 'removeItem':
      counter -= 1;
      return state.products.filter((e) => e.product.id !== action.payload.id);

    default:
      return state;
  }
}
