
import "./App.css";
import { Route, Switch, BrowserRouter as Router, } from "react-router-dom";
import BaseLayout from "./pages/Client/BaseLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Login";

import { PrivateRoute } from "./components/Routes/PrivateRoute";

function App() {
 

console.log("bcd")
  return (
    <div className="App">
    
    <Router>
      <Switch>
          <Route exact path="/login" component={Login} />

          {/* inside customer */}
          <PrivateRoute path="/dashboard" component={Dashboard} />

          {/* inside admin */}
          <PrivateRoute path="/" component={BaseLayout} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;