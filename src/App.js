import "./App.css";
import Navigation from "./components/Navigation";
import PageRender from "./PageRender";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = {
    firstName: "Dhanush",
    lastName: "R",
  };
  return (
    <Router>
      <div>
        <Navigation firstName={user.firstName} lastName={user.lastName} />
        <Switch>
          <Route path="/:page" component={PageRender} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
