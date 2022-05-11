import { combineReducers } from "redux";
import users from "./users";
import posts from "./posts";
import userNameReducer from "./userNameReducer";
const rootReducer = combineReducers({
  users: users,
  posts: posts,
  userNameReducer: userNameReducer,
});
export default rootReducer;
