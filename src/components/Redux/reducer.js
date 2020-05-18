export default function reducer(state = { products: [] }, action) {
  switch (action.type) {
    case 'addItem':
      console.log(state, action);
      return { ...state, products: [...state.products, action.payload] };

    case 'removeItem':
      return state.products.filter((e) => e.product.id !== action.payload.id);

    default:
      return state;
  }
}
