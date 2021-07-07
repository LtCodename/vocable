import { getUsersAction } from "../actions/UserActions";
import { Dispatch } from "redux";
import { UsersActionTypes } from "../types/UsersTypes";
import fire from "../../Firebase";

export const getUsers = () => {
  return function (dispatch: Dispatch<UsersActionTypes>) {
    fire
      .firestore()
      .collection("users")
      .get()
      .then((snapshot: any) => {
        dispatch(getUsersAction(snapshot));
        return snapshot;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
