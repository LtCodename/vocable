import { AuthData } from "../interfaces/interfaces";
import {
  GET_AUTH,
  GetAuthStateType,
  AuthActionTypes,
} from "../types/AuthTypes";

const initialStateGetAuth: GetAuthStateType = {
  authData: null,
};

export const getAuthReducer = (
  state = initialStateGetAuth,
  action: AuthActionTypes
): GetAuthStateType => {
  const authData: AuthData = { uid: "" };
  switch (action.type) {
    case GET_AUTH:
      if (action.payload) {
        authData.uid = action.payload.uid;
      } else {
        authData.uid = "";
      }
      return {
        authData,
      };
    default:
      return state;
  }
};
