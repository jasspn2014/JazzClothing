import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);

const ErrorPage = () => (
  <div>
    <h1> Something went Wrong </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
