import * as type from "../types";

export const initialState = {
  name: "Ramesh",
  age: 20,
  loading: false,
  error: null,
};
export default function userNameReducer(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_NAME:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case type.UPDATE_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.payload,
      };
    case type.UPDATE_NAME_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
