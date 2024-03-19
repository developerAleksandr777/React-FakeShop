import { data } from "../../utils/constants";
import { CHANGE_STATUS } from "../actions/types";

const initialState = {
  mainData: data,
};

console.log(initialState.mainData)

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_STATUS: {
      console.log(payload);
      return {
        ...state,
        mainData: state.mainData.map((el) => {
          if (el.id === payload) {
            return { ...el, select: !el.select };
          }
          return el;
        }),
      };
    }
    default:
      return state;
  }
};
export default mainReducer;
