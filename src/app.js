import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
const App = () => {
  return (
    <section>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </section>
  );
};

export default App;
