import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/effects/Users";
import { AppState } from "./redux/store";
import { getAuth } from "./redux/effects/Auth";

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAuth());
  }, [dispatch]);

  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    if (users.users.length) {
      // console.log(users.users);
    }
  }, [users]);

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
