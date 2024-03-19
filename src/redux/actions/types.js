export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_ACTION = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_FROM_CART_ACTION = (id) => ({
  type: DELETE_FROM_CART,
  payload: id,
});

export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DECREASE_QUANTITY_ACTION = (item) => ({
  type: DECREASE_QUANTITY,
  payload: item,
});

export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGE_STATUS_ACTION = (id) => ({
  type: CHANGE_STATUS,
  payload: id,
});
