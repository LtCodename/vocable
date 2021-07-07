import { combineReducers } from "redux";
import { getUsersReducer } from "./UsersReducer";

const rootReducer = combineReducers({
  users: getUsersReducer,
});

export default rootReducer;
