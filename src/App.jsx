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
import React from "react";
import UsersList from "./containers/users/UsersList";
import UserDelete from "./containers/user-delete/UserDelete";
import Menu from "./components/menu/Menu";

library.add(fab, fas);

function App() {
  return (
    <ContextLoginManager>
      <div>
        <Router>
          <Menu />

          <Switch>
            {/* <Route exact path="/">
            
                <Home />
              
            </Route> */}
            <Route exact path="/">
              <UsersList />
            </Route>
            <Route path="/users/delete/:id">
              <UserDelete />
            </Route>
          </Switch>
        </Router>
      </div>
    </ContextLoginManager>
  );
}

export default App;
