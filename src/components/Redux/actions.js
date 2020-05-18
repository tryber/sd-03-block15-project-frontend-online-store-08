export function addItem(payload) {
  return {
    type: 'addItem',
    payload: {
      ...payload,
      quantity: 1,
    },
  };
}

export function removeItem(payload) {
  return {
    type: 'addItem',
    payload,
  };
}
