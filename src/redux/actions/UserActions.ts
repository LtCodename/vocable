import { GET_USERS, UsersActionTypes } from "../types/UsersTypes";
import { User } from "../interfaces/interfaces";

export const getUsersAction = (users: User[]): UsersActionTypes => {
  return {
    type: GET_USERS,
    payload: users,
  };
};
