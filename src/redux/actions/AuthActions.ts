import { GET_AUTH, AuthActionTypes } from "../types/AuthTypes";

export const getAuthAction = (authData: any): AuthActionTypes => {
  return {
    type: GET_AUTH,
    payload: authData,
  };
};
