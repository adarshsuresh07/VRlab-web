import React, { Component } from "react";
import PublicRoute from "./Route/Publicroute.jsx";
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import Teacherdash from "./Components/Teacherdash/Teacherdash.jsx";
import Studentdash from "./Components/Studentdash/studentDash.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
