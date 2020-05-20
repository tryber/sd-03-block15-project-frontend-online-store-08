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

export function incrementItem(payload) {
  return {
    type: 'incrementItem',
    payload,
  };
}

export function decrementItem(payload) {
  return {
    type: 'decrementItem',
    payload,
  };
}
