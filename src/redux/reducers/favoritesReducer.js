import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../actions/types";

const initialState = {
  favorites: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const { id } = action.payload;
      const index = state.favorites.findIndex((item) => item.id === id);

      if (index >= 0) {
        const newFavorites = structuredClone(state.favorites);
        newFavorites[index].quantity += 1;

        return { ...state, favorites: newFavorites };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_TO_FAVORITES:
      return { ...state, favorites: action.payload };

    default:
      return state;
  }
};

export default cartReducer;
