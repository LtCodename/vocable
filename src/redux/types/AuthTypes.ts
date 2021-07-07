export const GET_AUTH = "GET_AUTH";

export interface GetAuthStateType {
  authData: any;
}

interface GetAuthActionType {
  type: typeof GET_AUTH;
  payload: any;
}
export type AuthActionTypes = GetAuthActionType;
