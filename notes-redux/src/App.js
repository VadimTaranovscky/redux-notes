import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";


function App() {
  return (
        <React.Fragment>
          <Header />
          <div className="container pt-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </React.Fragment>
  );
}

export default App;
