export default function reducer(state = { products: [], quantity: 0 }, action) {
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        products: [...state.products, action.payload],
        quantity: state.products.length,
      };

    case 'removeItem':
      return state.products.filter((e) => e.product.id !== action.payload.id);

    default:
      return state;
  }
}
