export function addItem(payload) {
  return {
    type: 'addItem',
    payload,
  };
}

export function removeItem(payload) {
  return {
    type: 'removeItem',
    payload,
  };
}
