import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/effects/Users";
import { getAuth } from "./redux/effects/Auth";

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
