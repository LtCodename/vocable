import { getAuthAction } from "../actions/AuthActions";
import { Dispatch } from "redux";
import { AuthActionTypes } from "../types/AuthTypes";
import fire from "../../Firebase";

export const getAuth = () => {
  return function (dispatch: Dispatch<AuthActionTypes>) {
    fire.auth().onAuthStateChanged((user) => {
      console.log("onAuthStateChanged");
      dispatch(getAuthAction(user));
    });
  };
};
