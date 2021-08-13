import Users from "./containers/users/Users";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ContextLoginManager from "./contextos/ContextLoginManager";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Home from "./containers/home/Home";

library.add(fab, fas);

function App() {
  return (
    <ContextLoginManager>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Home />
              </div>
            </Route>
            <Route exact path="/users">
              <div>
                <Users />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </ContextLoginManager>
  );
}

export default App;
