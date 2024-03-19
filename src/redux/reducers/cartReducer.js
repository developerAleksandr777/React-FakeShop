import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
} from "../actions/types";
import { findIndexOfItem } from "../../utils/helper";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const index = findIndexOfItem(state.cart, payload.id);
      if (index >= 0) {
        const cartCopy = structuredClone(state.cart);
        cartCopy[index].quantity += 1;
        return { ...state, cart: cartCopy };
      } else {
        return { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] };
      }
    case DECREASE_QUANTITY:
      const indexD = findIndexOfItem(state.cart, payload.id);
      if (state.cart[indexD].quantity > 1) {
        const cartCopy = structuredClone(state.cart);
        cartCopy[indexD].quantity -= 1;
        return { ...state, cart: cartCopy };
      } else {
        const filteredData = state.cart.filter((el) => el.id !== payload.id);
        return { ...state, cart: filteredData };
      }

    case DELETE_FROM_CART:
      const filteredData = state.cart.filter((el) => el.id !== payload);
      return { ...state, cart: filteredData };

    default:
      return state;
  }
};
export default cartReducer;
