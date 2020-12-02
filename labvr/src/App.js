import React, { Component } from "react";
import "./Assets/css/main.css";
import PublicRoute from "./Route/Publicroute";
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import Teacherdash from "./Components/Teacherdash/Teacherdash";
import Studentdash from "./Components/Studentdash/studentDash";
// import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// function App() {

// }
class App extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <BrowserRouter>
          <Switch>
            <PublicRoute component={Landing} path="/" exact />
            {/* <PublicRoute component={Dashboard} path="/dashboard" exact /> */}
            <PublicRoute component={Teacherdash} path="/teacherdash" exact />
            <PublicRoute component={Studentdash} path="/studentdash" exact />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
