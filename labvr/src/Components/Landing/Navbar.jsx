import React from "react";
import "./Landing.css";
export default class Landing extends React.Component {
  render() {
    return (
      <div className="sidebar-menu">
        <button
          className={"Radio but-left " + (this.props.history.location.pathname === "/login" ? "but-active" : "but-inactive")}
          onClick={() => this.props.switch("/login")}
        >
          Login
        </button>
        <button
          className={"Radio but-right " + (this.props.history.location.pathname === "/login" ? "but-inactive" : "but-active")}
          onClick={() => this.props.switch("/signup")}
        >
          Signup
        </button>
      </div>
    );
  }
}