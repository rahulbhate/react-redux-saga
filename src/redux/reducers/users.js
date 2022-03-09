import * as type from "../types";

export const initialState = {
  users: [],
  loading: false,
  error: null,
};
export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
