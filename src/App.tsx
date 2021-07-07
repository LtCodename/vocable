import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/effects/Users";
import { AppState } from "./redux/store";
import fire from "./Firebase";

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    if (users.users.length) {
      console.log(users.users);
    }
  }, [users]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = (): void => {
    console.log("fetchUser");
    fire.auth().onAuthStateChanged((user) => {
      console.log("onAuthStateChanged");
      console.log(user);
      if (user !== null) {
        user.getIdTokenResult().then((idTokenResult) => {
          console.log("User data:");
          console.log(user);
        });
      } else {
      }
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        {/* <Route path="/lists/:listId" component={} /> */}
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
