export default function reducer(state = [], action) {
  switch (action.type) {
    case 'addItem':
      console.log('reducer', action.payload, state)
      return [...state, action.payload];

    case 'removeItem':
      return state.filter((e) => e.product.id !== action.payload.id);

    default:
      return state;
  }
}
