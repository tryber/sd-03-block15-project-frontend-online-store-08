let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case action.type === 'addItem':
      lastId += 1;
      return [
        ...state,
        {
          id: lastId,
          product: action.payload,
        },
      ];

    case action.type === 'removeItem':
      return state.filter((e) => e.id !== action.payload.id);

    default:
      return state;
  }
}
