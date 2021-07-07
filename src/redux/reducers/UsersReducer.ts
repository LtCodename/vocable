import { User } from "../interfaces/interfaces";
import {
  GET_USERS,
  GetUsersStateType,
  UsersActionTypes,
} from "../types/UsersTypes";

const initialStateGetUsers: GetUsersStateType = {
  users: [],
};

export const getUsersReducer = (
  state = initialStateGetUsers,
  action: UsersActionTypes
): GetUsersStateType => {
  const copy: User[] = [];
  switch (action.type) {
    case GET_USERS:
      action.payload.forEach((doc) => {
        let data = doc.data();
        copy.push({
          id: doc.id,
          ...data,
        });
      });
      return {
        ...state,
        users: copy,
      };
    default:
      return state;
  }
};
