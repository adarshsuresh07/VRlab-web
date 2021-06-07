import React, { Component } from "react";
import PublicRoute from "./Route/Publicroute.jsx";
import StudentRoute from "./Route/Userroute"
import TeacherRoute from "./Route/Adminroute"
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import Teacherdash from "./Components/Teacherdash/Teacherdash.jsx";
import Studentdash from "./Components/Studentdash/studentDash.jsx";
import StudResetpassword from "./Components/Studentdash/Resetpassword"
import TResetpassword from "./Components/Studentdash/Resetpassword"
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
            <TeacherRoute component={Teacherdash} path="/teacherdash" exact />
            <StudentRoute component={Studentdash} path="/studentdash" exact />
            <TeacherRoute component={TResetpassword} path="/teacher-reset-password" exact />
            <StudentRoute component={StudResetpassword} path="/student-reset-password" exact />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
