const addItem = (state, action) => {
  const newProducts = state.products;
  const newProduct = action.payload;
  const hasItem = state.products.findIndex((a) => a.id === action.payload.id);

  newProduct.quantity = 1;
  if (hasItem === -1) {
    return {
      ...state,
      products: [...state.products, newProduct],
      quantity: state.products.reduce((acc, index) => acc + index.quantity, 1),
    };
  }

  newProducts[hasItem].quantity += 1;
  return {
    ...state,
    products: newProducts,
    quantity: state.products.reduce((acc, index) => acc + index.quantity, 0),
  };
};

const increment = (state, action) => {
  const newProducts = state.products;
  const newProduct = action.payload;
  newProduct.quantity += 1;
  if (newProduct.quantity < newProduct.available_quantity) {
    newProduct.quantity += 1;
    return {
      ...state,
      products: newProducts,
      quantity: state.products.reduce((acc, index) => acc + index.quantity, 0),
    };
  }

  return {
    ...state,
    products: newProducts,
    quantity: state.products.reduce((acc, index) => acc + index.quantity, 0),
  };
};

const decrement = (state, action) => {
  const newProducts = state.products;
  const newProduct = action.payload;
  newProduct.quantity -= 1;

  return {
    ...state,
    products: newProducts,
    quantity: state.products.reduce((acc, index) => acc + index.quantity, 0),
  };
};

export default function reducer(state = { products: [], quantity: 0 }, action) {
  switch (action.type) {
    case 'addItem':
      return addItem(state, action);

    case 'incrementItem':
      return increment(state, action);

    case 'decrementItem':
      return decrement(state, action);

    default:
      return state;
  }
}
