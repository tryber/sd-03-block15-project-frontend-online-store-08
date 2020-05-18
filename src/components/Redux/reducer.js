let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case 'addItem':
      lastId += 1;
      return [
        ...state,
        {
          id: lastId,
          product: action.payload,
        },
      ];

    case 'removeItem':
      return state.filter((e) => e.product.id !== action.payload.id);

    default:
      return state;
  }
}
