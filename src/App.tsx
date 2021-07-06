import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";

const App: React.FC<any> = () => {
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
