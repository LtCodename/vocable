import { User } from "../interfaces/interfaces";

export const GET_USERS = "GET_USERS";

export interface GetUsersStateType {
  users: User[];
}

interface GetUsersActionType {
  type: typeof GET_USERS;
  payload: User[];
}
export type UsersActionTypes = GetUsersActionType;
