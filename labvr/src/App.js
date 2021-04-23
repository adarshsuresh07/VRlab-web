import React, { Component } from "react";
import PublicRoute from "./Route/Publicroute";
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Teacherdash from "./Components/Teacherdash/Teacherdash";
import Studentdash from "./Components/Studentdash/studentDash";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <PublicRoute component={Landing} path="/" exact />
            <PublicRoute component={Landing} path="/login" exact />
            <PublicRoute component={Landing} path="/signup" exact />
            <PublicRoute component={Landing} path="/send-email" exact />
            <PublicRoute component={Landing} path="/forgot-password" exact />
            <PublicRoute component={Teacherdash} path="/teacherdash" exact />
            <PublicRoute component={Studentdash} path="/studentdash" exact />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
