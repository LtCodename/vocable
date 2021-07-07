import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import fire from "./Firebase";

const App: React.FC<any> = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (): void => {
    fire
      .firestore()
      .collection("users")
      .get()
      .then((snapshot) => {
        // snapshot.forEach((doc) => {
        //   let data = doc.data();
        //   console.log(data);
        // });
      })
      .catch((error) => {
        console.log(error.message);
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
