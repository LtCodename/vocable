import { combineReducers } from "redux";
import { getUsersReducer } from "./UsersReducer";
import { getAuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
  users: getUsersReducer,
  authData: getAuthReducer,
});

export default rootReducer;
